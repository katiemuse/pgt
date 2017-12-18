'use strict';

export default function AddCriteriaController(
  $scope,
  $timeout,
  Steps,
  Hotspots,
  WizardHandler
) {
  $scope.editor = {
    open: false
  };

  $scope.ToggleEditor = function() {
    $scope.editor.open = !$scope.editor.open;
  };

  $scope.criteriaOptions = [
    {label: 'Find Field', value: 0},
    {label: 'Account Number', value: 1},
    {label: 'Created By ID', value: 2},
    {label: 'Customer Idea', value: 3},
    {label: 'Order Details', value: 4},
    {label: 'Owner ID (Queue)', value: 5},
    {label: 'Owner ID (User)', value: 6}
  ];

  $scope.criteria = {
    name: '',
    radio: 0,
    starts: $scope.criteriaOptions[0]
  };

  $scope.step1complete = false;

  const delayInMs = 1000;

  let timeoutCriteriaName;
  $scope.$watch('criteria.name', (newValue, oldValue) => {
    if (oldValue !== newValue) {
      $timeout.cancel(timeoutCriteriaName);
      timeoutCriteriaName = $timeout(() => {
        if (
          newValue.length > 3
        ) {
          $scope.step1complete = true;
        }
      }, delayInMs);
    }
  });

  $scope.$watch('criteria.radio', newValue => {
    if (Number(newValue) === 1) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('three');
    }
  });

  $scope.$watch('criteria.starts', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.value === 3) {
        Steps.activate('four');
        if (WizardHandler.wizard('monitor').currentStepNumber() === 4) {
          WizardHandler.wizard('monitor').next();
        }
      }
    }
  });

  $scope.Next = function() {
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
    } else {
      Hotspots.clear();
      WizardHandler.wizard('monitor').next();
    }
  };
}
