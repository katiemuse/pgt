'use strict';
/**
 * @ngdoc directive
 * @name pardotInteractiveGuidedTour.directive:wizard
 * @description
 * # wizard
 */
angular.module('pardotInteractiveGuidedTour')
  .directive('wzStep', function() {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      scope: {
        wzTitle: '@',
        title: '@',
        success: '=',
        canenter : '=',
        canexit : '='
      },
      require: '^wizard',
      templateUrl: function(element, attributes) {
        return attributes.template || "components/wizard/partials/step.html";
      },
      link: function($scope, $element, $attrs, wizard) {
        $scope.title = $scope.title || $scope.wzTitle;
        wizard.addStep($scope);
      }
    };
  });
