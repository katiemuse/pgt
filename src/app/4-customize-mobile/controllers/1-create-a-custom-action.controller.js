'use strict';

export default function CreateACustomActionController($scope, Steps, WizardHandler) {
  $scope.targetObjects = [
    {label: '-- None --', value: 1},
    {label: 'Customer Feedback', value: 2}
  ];

  $scope.action = {
    target: $scope.targetObjects[0]
  };

  $scope.$watch('action.target', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.value === 2) {
        $scope.next();
      }
    }
  });

  $scope.next = function () {
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
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 5) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('five');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 6) {
      WizardHandler.wizard('monitor').next();
    }
  };
}

