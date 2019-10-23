'use strict';

export default function ChapterDataController($scope, Steps, Hotspots, WizardHandler, $timeout) {
  let _timeout;
  let _timeout2;

  $scope.customobj = {
    name: ''
  };

  $scope.button = {
    show: false
  };

  $scope.label = {
    active: true
  };

  $scope.ToggleButton = () => {
    $scope.button.show = !$scope.button.show;
  };

  $scope.toggleLabel = () => {
    $scope.label.active = !$scope.label.active;
  };

  $scope.$watch('customobj.name', (newValue, oldValue) => {
    if (_timeout) { // if there is already a timeout in process cancel it
      $timeout.cancel(_timeout);
    }

    if (_timeout2) {
      $timeout.cancel(_timeout2);
    }
    if (newValue !== oldValue) {
      _timeout = $timeout(() => {
        if (newValue.length > 3) {
          $scope.toggleLabel();

          _timeout2 = $timeout(() => {
            WizardHandler.wizard('monitor').next();
            Steps.activate('three');
          }, 2000);
        }
      }, 1000);
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
    }
  };

  $scope.GoToStep2A = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.GoToStep3 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("three");
  };

  $scope.GoToStep3A = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.GoToStep4 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("four");
  };

  $scope.GoToStep4A = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.GoToStep4B = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.GoToStep5 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("five");
  };

  $scope.GoToStep5A = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.GoToSuccess = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("six");
  };
}

/*
    else if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('three');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 4) {
      $scope.toggleLabel();
      $timeout(() => {
        WizardHandler.wizard('monitor').next();
        Steps.activate('four');
      }, 2600);
    }
*/
