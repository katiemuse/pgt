'use strict';
/**
 * @ngdoc directive
 * @name pardotInteractiveGuidedTour.directive:hotspotPanelTab
 * @description
 * # hotspotPanelTab
 */
angular.module('pardotInteractiveGuidedTour')
  .directive('drawerPanelTab', function($parse) {
    return {
      require: '^drawerPanel',
      restrict: 'EA',
      replace: true,
      templateUrl: 'components/drawer-panel/partials/drawer-panel-tab.html',
      transclude: true,
      scope: {
        active: '=?',
        heading: '@',
        select: '=?',
        onSelect: '&select', //This callback is called in contentHeadingTransclude
        //once it inserts the tab's content into the dom
        onDeselect: '&deselect'
      },
      controller: function() {
        //Empty controller so other directives can require being 'under' a tab
      },
      compile: function(elm, attrs, transclude) {
        return function postLink(scope, elm, attrs, drawerPanelCtrl) {

          scope.$watch('active', function(active) {
            if (active) {
              drawerPanelCtrl.select(scope);
            }
          });

          scope.$watch('select', function(index) {
            if (index > 0) {
              drawerPanelCtrl.selectByIndex(index);
            }
          });

          scope.disabled = false;
          if ( attrs.disabled ) {
            scope.$parent.$watch($parse(attrs.disabled), function(value) {
              scope.disabled = !! value;
            });
          }

          scope.select = function() {
            if ( !scope.disabled ) {
              scope.active = true;
              drawerPanelCtrl.notifySelected(scope);
            }
          };

          drawerPanelCtrl.addTab(scope);
          scope.$on('$destroy', function() {
            drawerPanelCtrl.removeTab(scope);
          });

          //We need to transclude later, once the content container is ready.
          //when this link happens, we're inside a tab heading.
          scope.$transcludeFn = transclude;
        };
      }
    };
  });
