'use strict';

export default function wzStep() {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    scope: {
      wzTitle: '@',
      title: '@',
      success: '=',
      canenter: '=',
      canexit: '='
    },
    require: '^wizard',
    templateUrl(attributes) {
      return attributes.template || 'components/wizard/partials/step.html';
    },
    link($scope, $element, $attrs, wizard) {
      $scope.title = $scope.title || $scope.wzTitle;
      wizard.addStep($scope);
    }
  };
}
