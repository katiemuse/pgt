'use strict';
/**
 * @ngdoc directive
 * @name pardotInteractiveGuidedTour.directive:buttons
 * @description
 * # buttons
 */
function wizardButtonDirective(action) {
  angular.module('pardotInteractiveGuidedTour')
    .directive(action, function() {
      return {
        restrict: 'A',
        replace: false,
        require: '^wizard',
        link: function($scope, $element, $attrs, wizard, TopNavbar) {

          $element.on("click", function(e) {
            e.preventDefault();
            $scope.$apply(function() {
              $scope.$eval($attrs[action]);
              wizard[action.replace("wz", "").toLowerCase()]();
            });
          });
        }
      };
    });
}

wizardButtonDirective('wzNext');
wizardButtonDirective('wzPrevious');
wizardButtonDirective('wzFinish');
wizardButtonDirective('wzCancel');