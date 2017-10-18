"use strict";

export default function InstallAPreBuiltComponentFromAppexchangeController(
  $scope,
  WizardHandler,
  Steps,
  Hotspots,
  $rootScope,
  $timeout
) {
  $scope.search = {
    input: ""
  };

  $scope.input = {
    active: true
  };

  $scope.customerIdeas = {
    dropped: false
  };

  $scope.$watch("search.input", (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.toLowerCase() === "ideas") {
        WizardHandler.wizard("monitor").next();
        Steps.activate("three");
      }
    }
  });

  $scope.dropCustomerIdeas = function() {
    $scope.customerIdeas.dropped = true;
    $timeout(() => {
      $rootScope.$emit('mobile-popout:toggle');
    }, 1000);
  };

  $scope.Next = function() {
    // $log.log('Current step: ' + WizardHandler.wizard('monitor').currentStepNumber());
    if (WizardHandler.wizard("monitor").currentStepNumber() === 1) {
      WizardHandler.wizard("monitor").next();
      Steps.activate("one");
    } else if (WizardHandler.wizard("monitor").currentStepNumber() === 2) {
      Hotspots.clear();
      WizardHandler.wizard("monitor").next();
      Steps.activate("two");
    } else if (WizardHandler.wizard("monitor").currentStepNumber() === 3) {
      WizardHandler.wizard("monitor").next();
      Steps.activate("three");
    } else if (WizardHandler.wizard("monitor").currentStepNumber() === 4) {
      WizardHandler.wizard("monitor").next();
      Steps.activate("four");
    } else {
      WizardHandler.wizard("monitor").next();
      Steps.activate("five");
    }
  };
}
