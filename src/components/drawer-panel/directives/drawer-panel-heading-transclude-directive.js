'use strict';
/**
 * @ngdoc directive
 * @name pardotInteractiveGuidedTour.directive:hotSpotPanel
 * @description
 * # hotSpotPanel
 */

angular.module('pardotInteractiveGuidedTour')
  .directive('drawerPanelTabHeadingTransclude', function() {
    return {
      restrict: 'A',
      require: '^drawerPanelTab',
      link: function(scope, elm, attrs, tabCtrl) {
        scope.$watch('headingElement', function updateHeadingElement(heading) {
          if (heading) {
            elm.html('');
            elm.append(heading);

            // console.log('heading', heading);

          }
        });
      }
    };
  });
