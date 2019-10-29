"use strict";

export default function ChapterFlowController($scope, Steps, Hotspots, WizardHandler, $timeout, successConfetti) {
  $scope.label = {
    active: true
  };

  const delayInMs = 1000;
  let timeoutExtdsName;
  $scope.$watch("label.input", newValue => {
    $timeout.cancel(timeoutExtdsName);
    timeoutExtdsName = $timeout(() => {
      if (newValue.length > 2) {
        $scope.goToStep4();
      }
    }, delayInMs);
  });

  $scope.goToStep1A = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.goToStep2 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("two");
  };

  $scope.goToStep3 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("three");
  };

  $scope.goToStep4 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("four");
  };

  $scope.goToSuccess = function() {
    Steps.clear();
    WizardHandler.wizard("monitor").next();
  };
  $scope.renderConfetti = function() {
    successConfetti.renderConfetti();
  };
}
