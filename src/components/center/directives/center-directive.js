'use strict';
/**
 * @ngdoc directive
 * @name pardotInteractiveGuidedTour.directive:center
 * @description An angular directive for rendering and vertically and horizontally positioning an overlay
 * # center
 */
angular.module('pardotInteractiveGuidedTour')
  .directive('liCenter', function () {
    return {
      restrict: 'ECA',
      transclude: true,
      template:
        "<div class=\"center-container\">\
          <div class=\"centered\" ng-transclude>\
          </div>\
        </div>"
    }
  });
