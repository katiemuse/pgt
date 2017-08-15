'use strict';

export default function CreateANewLightningPageController($scope, WizardHandler, Steps) {
  $scope.lightning = {
    input: ''
  };

  $scope.input = {
    active: true
  };

  $scope.$watch('lightning.input', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.toLowerCase() === 'customer feedback loop for pms') {
        $scope.input.active = false;
      }
    }
  });

  $scope.Next = function () {
    // $log.log('Current step: ' + WizardHandler.wizard('monitor').currentStepNumber());
    if (WizardHandler.wizard('monitor').currentStepNumber() === 1) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('one');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('two');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('three');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 4) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('four');
    }
  };
}
