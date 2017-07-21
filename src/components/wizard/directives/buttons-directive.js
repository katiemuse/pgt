'use strict';
/**
 * @ngdoc directive
 * @name pardotInteractiveGuidedTour.directive:buttons
 * @description
 * # buttons
 */
export default function wizardButtonDirective(action) {
  return {
    restrict: 'A',
    replace: false,
    require: '^wizard',
    link($scope, $element, $attrs, wizard) {
      $element.on('click', e => {
        e.preventDefault();
        $scope.$apply(() => {
          $scope.$eval($attrs[action]);
          wizard[action.replace('wz', '').toLowerCase()]();
        });
      });
    }
  };
}

wizardButtonDirective('wzNext');
wizardButtonDirective('wzPrevious');
wizardButtonDirective('wzFinish');
wizardButtonDirective('wzCancel');
