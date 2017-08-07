'use strict';

export default function ChooseAnObjectForTheProcessController($scope, $timeout, Steps, WizardHandler) {
  $scope.processOptions = [
    {label: 'Find an object...', value: 1},
    {label: 'Asset', value: 2},
    {label: 'Customer Feedback', value: 3},
    {label: 'Assistant Progress', value: 4},
    {label: 'Campaign', value: 5},
    {label: 'Campaign Member', value: 6}
  ];

  $scope.process = {
    name: '',
    starts: $scope.processOptions[0]
  };

  $scope.$watch('process.starts', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.value === 3) {
        Steps.activate('three');
        if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
          WizardHandler.wizard('monitor').next();
        }
      }
    }
  });

  $scope.Next = function () {
    if (WizardHandler.wizard('monitor').currentStepNumber() === 1) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('one');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('two');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('three');
    }
  };
}
