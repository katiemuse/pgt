'use strict';

export default function AddCustomComponentsController($scope, WizardHandler, Steps, $timeout) {
  $scope.customComponent = {
    dropped: false
  };

  $scope.next = () => {
    if (WizardHandler.wizard('monitor').currentStepNumber() === 1) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('one');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      $scope.customComponent.dropped = true;
      $timeout(() => {
        WizardHandler.wizard('monitor').next();
      }, 1000);
    }
  };
}
