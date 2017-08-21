'use strict';

export default function CreateAnAppFromBaseAndCustomLightningComponentsController($scope, WizardHandler, Steps, $timeout) {
  $scope.label = {
    input: ''
  };

  $scope.search = {
    input: ''
  };

  $scope.reportOptions = [
    {label: 'Choose a Report', value: 1},
    {label: 'Case', value: 2}
  ];

  $scope.report = {
    active: false,
    select: $scope.reportOptions[0],
    dropped: false
  };

  $scope.$watch('label.input', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.toLowerCase() === 'customer service cases') {
        $scope.next();
      }
    }
  });

  $scope.$watch('report.select', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.value === 2) {
        $scope.next();
      }
    }
  });

  $scope.next = function () {
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
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 5) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('five');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 6) {
      Steps.clear();
      WizardHandler.wizard('monitor').next();
    }
  };

  $scope.dropCustomerIdeas = function() {
    $scope.report.dropped = true;
    Steps.clear();
    $timeout(() => {
      $scope.next();
    }, 1500);
  };
}

