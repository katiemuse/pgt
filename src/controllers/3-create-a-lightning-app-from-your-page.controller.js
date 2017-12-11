'use strict';

export default function CreateALightningAppFromYourPageController($scope, Steps, WizardHandler, Hotspots, $timeout, $rootScope) {
  $scope.active = {
    step2: false,
    step3: false,
    step4a: true,
    step4b: false,
    step4c: false,
    flyout: false
  };

  $scope.lightning = {
    name: ''
  };

  $scope.activatestep2 = () => {
    $scope.active.step2 = !$scope.active.step2;
  };

  $scope.activateflyout = () => {
    $scope.active.flyout = !$scope.active.flyout;
  };

  $scope.activatestep3 = () => {
    $scope.active.step3 = !$scope.active.step3;
  };

  $scope.activatestep4a = () => {
    $scope.active.step4a = !$scope.active.step4a;
    $scope.active.step4b = !$scope.active.step4b;
  };

  $scope.activatestep4b = () => {
    $scope.active.step4b = !$scope.active.step4b;
  };

  $scope.activatestep4c = () => {
    $scope.active.step4c = !$scope.active.step4c;
  };

  const delayInMs = 1500;

  let timeoutLightningName;
  $scope.$watch('lightning.name', (newValue, oldValue) => {
    if (oldValue !== newValue) {
      $timeout.cancel(timeoutLightningName);
      timeoutLightningName = $timeout(() => {
        if (newValue.length > 3) {
          $scope.activatestep2();
        }
      }, delayInMs);
    }
  });

  $scope.next = function () {
    // $log.log('Current step: ' + WizardHandler.wizard('monitor').currentStepNumber());
    if (WizardHandler.wizard('monitor').currentStepNumber() === 1) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('one');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      WizardHandler.wizard('monitor').next();
      Hotspots.pop({
        number: 1,
        position: {
          left: '465px',
          top: '228px'
        }
      });
      Steps.activate('two');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      Hotspots.clear();
      WizardHandler.wizard('monitor').next();
      Steps.activate('three');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 4) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('four');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 5) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('five');
    } else {
      $rootScope.$emit('mobile-popout:toggle');
      WizardHandler.wizard('monitor').next();
    }
  };
}

