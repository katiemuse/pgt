'use strict';

export default function ChapterBlockchainController($scope, $timeout, Steps, WizardHandler, $state, UserProfile) {
  $scope.processOptions = [
    { label: "Select one", value: 1 },
    { label: "A record changes", value: 2 },
    { label: "Its invoked by another process", value: 3 }
  ];

  $scope.process = {
    name: "",
    api: "",
    starts: $scope.processOptions[0]
  };

  const delayInMs = 1500;

  let timeoutProcessName;
  $scope.$watch("process.name", (newValue, oldValue) => {
    if (oldValue !== newValue) {
      $scope.process.api = $scope.process.name.toLowerCase().replace(/ /g, "_");
      $timeout.cancel(timeoutProcessName);
      timeoutProcessName = $timeout(() => {
        if (newValue.length > 3) {
          Steps.activate("three");
          if (WizardHandler.wizard("monitor").currentStepNumber() === 3) {
            WizardHandler.wizard("monitor").next();
          }
        }
      }, delayInMs);
    }
  });

  $scope.$watch("process.starts", (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.value === 2) {
        Steps.activate("four");
        if (WizardHandler.wizard("monitor").currentStepNumber() === 4) {
          WizardHandler.wizard("monitor").next();
        }
      }
    }
  });

  $scope.Next = function() {
    if (WizardHandler.wizard("monitor").currentStepNumber() === 1) {
      WizardHandler.wizard("monitor").next();
      Steps.activate("one");
    } else if (WizardHandler.wizard("monitor").currentStepNumber() === 2) {
      WizardHandler.wizard("monitor").next();
      Steps.activate("two");
    }
  };

  $scope.NextHalfSlide = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };
  $scope.GoToSlide3 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("three");
  };
  $scope.GoToSlide4 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("four");
  };
  $scope.GoToSlide5 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("five");
  };
  $scope.NextHalfSlide5 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };
  $scope.NextHalfSlide5b = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };
  $scope.NextStep = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.CreateForm = function() {
    if (WizardHandler.wizard("monitor").currentStepNumber() === 2) {
      UserProfile.FormName = $scope.form.name;
      $state.go("choose-process-object");
    }
  };
}
