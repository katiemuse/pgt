'use strict';

export default function CustomizeActionBarController($scope, Steps, WizardHandler, Hotspots, $rootScope) {
  $scope.active = {
    step2: false
  };

  $scope.activatestep2 = () => {
    $scope.active.step2 = !$scope.active.step2;
  };

  $scope.next = function () {
    if (WizardHandler.wizard('monitor').currentStepNumber() === 1) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('one');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      WizardHandler.wizard('monitor').next();
      Hotspots.clear();
      Steps.activate('two');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('three');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 4) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('four');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 5) {
      $rootScope.$emit('mobile-popout:toggle');
    }
  };
}

