'use strict';

export default function CustomizeNavigationController($scope, WizardHandler, Steps) {
  $scope.active = {
    step2: false,
    step3a: false,
    step3b: false,
    step4: false
  };

  $scope.activatestep2 = () => {
    $scope.active.step2 = !$scope.active.step2;
  };

  $scope.activatestep3a = () => {
    $scope.active.step3a = !$scope.active.step3a;
  };

  $scope.activatestep3b = () => {
    $scope.active.step3a = false;
    $scope.active.step3b = !$scope.active.step3b;
  };

  $scope.activatestep4 = () => {
    $scope.active.step4 = !$scope.active.step4;
  };

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
