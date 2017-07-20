'use strict';
/**
 * @ngdoc directive
 * @name pardotInteractiveGuidedTour.directive:hotSpotPanel
 * @description
 * # hotSpotPanel
 */

angular.module('pardotInteractiveGuidedTour')
  .directive('drawerPanel', function(drawerPanelConfig, Drawer) {
    return {
      restrict: 'EA',
      transclude: true,
      replace: true,
      scope: {
        type: '@',
        selected: '='
      },
      controller: 'DrawerPanelCtrl',
      templateUrl: 'components/drawer-panel/partials/drawer-panel.html',
      link: function(scope, element, attrs) {

        var frame = $(element);
        var wrap = frame.parent();

        var defaultControls = {
          scrollBar: wrap.find('.scrollbar') || null,
          pagesBar: wrap.find('.pages') || null,
          forward: wrap.find('.forward') || null,
          backward: wrap.find('.backward') || null,
          prev: wrap.find('.prev') || null,
          next: wrap.find('.next') || null,
          prevPage: wrap.find('.prevPage') || null,
          nextPage: wrap.find('.nextPage') || null
        };

        // Merge parts into options for sly argument
        var options = $.extend({}, drawerPanelConfig, defaultControls);
        var callback = scope.$eval(attrs.panelCallback) || function(cb){};


        scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
        scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;

        // Call Sly on frame
        frame.sly(options);
      }
    };
  });
