'use strict';

export default function SalesCloudEngageController($scope, WizardHandler, Steps) {
  $scope.SelectCard = function () {
    if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('two');
    }
  };
}
