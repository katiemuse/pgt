"use strict";

export default function AddBaseLightningComponentsController(
  $scope,
  WizardHandler,
  Steps,
  $timeout,
  $rootScope,
  Hotspots
) {
  $scope.label = {
    input: ""
  };

  $scope.search = {
    input: ""
  };

  $scope.reportOptions = [
    { label: "Choose a Report", value: 1 },
    { label: "Sales Orders", value: 2 },
    { label: "Customer Support Cases", value: 3 }
  ];

  $scope.report = {
    active: false,
    annualSalesDropped: false,
    select: $scope.reportOptions[0],
    dropped: false
  };

  const delayInMs = 1000;
  let timeoutExtdsName;
  $scope.$watch("label.input", newValue => {
    $timeout.cancel(timeoutExtdsName);
    timeoutExtdsName = $timeout(() => {
      if (newValue.length > 2) {
        $scope.next();
      }
    }, delayInMs);
  });

  $scope.$watch("report.select", (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.value === 2) {
        $scope.report.annualSalesDropped = true;
        $timeout(() => {
          $scope.next();
        }, 1500);
      }
    }
  });

  $scope.next = function() {
    // $log.log('Current step: ' + WizardHandler.wizard('monitor').currentStepNumber());
    if (WizardHandler.wizard("monitor").currentStepNumber() === 1) {
      WizardHandler.wizard("monitor").next();
      Steps.activate("one");
    } else if (WizardHandler.wizard("monitor").currentStepNumber() === 2) {
      WizardHandler.wizard("monitor").next();
      Steps.activate("two");
    } else if (WizardHandler.wizard("monitor").currentStepNumber() === 3) {
      WizardHandler.wizard("monitor").next();
      Steps.activate("three");
    } else if (WizardHandler.wizard("monitor").currentStepNumber() === 4) {
      WizardHandler.wizard("monitor").next();
      Steps.activate("four");
    } else if (WizardHandler.wizard("monitor").currentStepNumber() === 5) {
      WizardHandler.wizard("monitor").next();
      Steps.activate("five");
      Hotspots.clear();
    } else if (WizardHandler.wizard("monitor").currentStepNumber() === 6) {
      Steps.clear();
      WizardHandler.wizard("monitor").next();
    }
  };

  $scope.dropCustomerSupportCases = function() {
    $scope.report.dropped = true;
    Steps.clear();
    $timeout(() => {
      $rootScope.$emit('mobile-popout:toggle');
    }, 500);
  };
}
