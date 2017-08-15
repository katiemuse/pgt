'use strict';

export default function BuildASchemaController($scope, Steps, Hotspots, WizardHandler) {
  $scope.check = {
    cf: false,
    account: false,
    order: false,
    product: false
  };

  $scope.input = {
    active: true
  };

  $scope.select = {
    active: true
  };

  $scope.orderOptions = [
    {label: '--None--', value: 1},
    {label: 'Customer Feedback', value: 2}
  ];

  $scope.order = {
    input: '',
    select: $scope.orderOptions[0]
  };

  $scope.$watchGroup(['check.cf', 'check.account', 'check.order', 'check.product'], newValues => {
    const isTrue = newValues.every(val => {
      return val === true;
    });
    if (isTrue) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('two');
    }
  });

  $scope.$watch('order.input', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.toLowerCase() === 'order details') {
        $scope.input.active = false;
      }
    }
  });

  $scope.$watch('order.select', newValue => {
    if (Number(newValue.value) === 2) {
      $scope.select.active = false;
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
      Steps.activate('five');
    }
  };
}
