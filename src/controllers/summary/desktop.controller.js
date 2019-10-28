'use strict';

export default function SummaryController($scope, WizardHandler, Steps) {
  angular.element(document).ready(() => {
    Steps.clear();
  });

  $scope.NextStep = function() {
    WizardHandler.wizard("monitor").next();
  };
}
