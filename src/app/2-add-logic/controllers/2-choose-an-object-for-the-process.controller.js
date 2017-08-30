'use strict';

export default function ChooseAnObjectForTheProcessController($scope, $timeout, Steps, WizardHandler) {
  $scope.processOptions = [
    {label: 'Find an object...', value: 1},
    {label: 'Asset', value: 2},
    {label: 'Customer Insights', value: 3},
    {label: 'Assistant Progress', value: 4},
    {label: 'Campaign', value: 5},
    {label: 'Campaign Member', value: 6}
  ];

  $scope.process = {
    name: '',
    starts: $scope.processOptions[0]
  };

  $scope.editor = {
    open: false
  };

  $scope.ToggleEditor = function () {
    $scope.editor.open = !$scope.editor.open;
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
    // $log.log('Current step: ' + WizardHandler.wizard('monitor').currentStepNumber());
    if (WizardHandler.wizard('monitor').currentStepNumber() === 1) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('one');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      $scope.editor.open = !$scope.editor.open;
      $timeout(() => {
        WizardHandler.wizard('monitor').next();
        Steps.activate('two');
      }, 300);
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('three');
    }
  };
}
