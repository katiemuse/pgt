'use strict';

export default function AddActionsController($scope, $timeout, Steps, WizardHandler, Hotspots) {
  $scope.editor = {
    open: false
  };

  $scope.ToggleEditor = function () {
    $scope.editor.open = !$scope.editor.open;
  };

  $scope.actionOptions = [
    {label: 'Select One', value: 0},
    {label: 'Apex', value: 1},
    {label: 'Created a Record', value: 2},
    {label: 'Email Alerts', value: 3},
    {label: 'Flows', value: 4},
    {label: 'Post to Chatter', value: 5},
    {label: 'Processes', value: 6},
    {label: 'Quick Actions', value: 7},
    {label: 'Send Push Notification', value: 8},
    {label: 'Submit for Approval', value: 9},
    {label: 'Update Records', value: 10}
  ];

  $scope.action = {
    name: '',
    radio: 0,
    starts: $scope.actionOptions[0]
  };

  $scope.step1complete = false;

  const delayInMs = 1000;

  let timeoutCriteriaName;
  $scope.$watch('action.name', (newValue, oldValue) => {
    if (oldValue !== newValue) {
      $timeout.cancel(timeoutCriteriaName);
      timeoutCriteriaName = $timeout(() => {
        if (newValue.length > 3) {
          WizardHandler.wizard('monitor').next();
          Steps.activate('four');
        }
      }, delayInMs);
    }
  });

  $scope.$watch('action.radio', newValue => {
    if (Number(newValue) === 1) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('three');
    }
  });

  $scope.$watch('action.starts', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (Number(newValue.value) === 8) {
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
      $scope.editor.open = !$scope.editor.open;
      Hotspots.clear();
      $timeout(() => {
        WizardHandler.wizard('monitor').next();
        Steps.activate('two');
      }, 300);
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('three');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 5) {
      $scope.editor.open = !$scope.editor.open;
      Hotspots.clear();
      Hotspots.pop({
        number: 1,
        position: {
          left: '500px',
          top: '248px'
        }
      });
      $timeout(() => {
        WizardHandler.wizard('monitor').next();
        Steps.activate('five');
      }, 300);
    } else {
      WizardHandler.wizard('monitor').next();
      Hotspots.clear();
    }
  };
}
