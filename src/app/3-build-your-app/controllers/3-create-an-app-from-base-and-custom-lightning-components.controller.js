'use strict';

export default function CreateAnAppFromBaseAndCustomLightningComponentsController($scope, WizardHandler, Steps, $log) {

  $scope.label = {
    input: ''
  };

  $scope.search = {
    input: ''
  };

  $scope.reportchart = {
    active: false
  };

  $scope.chatterfeed = {
    active: false
  };

  $scope.customerideas = {
    active: false
  };

  $scope.reportOptions = [
    {label: 'Choose a Report', value: 1},
    {label: 'Case', value: 2}
  ];

  $scope.report = {
    active: false,
    select: $scope.reportOptions[0]
  };

  $scope.$watch('label.input', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      $log.log('value changed', newValue);
      if (newValue.toLowerCase() === 'customer service cases') {
        if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
          WizardHandler.wizard('monitor').next();
        }
      }
    }
  });

  $scope.$watch('report.select', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.value === 2) {
        Steps.activate('three');
        if (WizardHandler.wizard('monitor').currentStepNumber() === 4) {
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
      Steps.activate('four');
    }
  };
}

