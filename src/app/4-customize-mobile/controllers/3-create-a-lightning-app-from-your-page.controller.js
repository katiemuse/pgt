'use strict';

export default function CreateALightningAppFromYourPageController($scope, Steps, WizardHandler, $timeout, $log) {
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
    $log.log('activate step 4b ', $scope.active.step4b);
    $log.log('activate step 4a ', $scope.active.step4a);
  };

  $scope.activatestep4b = () => {
    $scope.active.step4b = !$scope.active.step4b;
    $log.log('activate step 4a ', $scope.active.step4a);
    $log.log('activate step 4b ', $scope.active.step4b);
  };

  $scope.activatestep4c = () => {
    $scope.active.step4c = !$scope.active.step4c;
    $log.log('activate step 4a ', $scope.active.step4a);
    $log.log('activate step 4b ', $scope.active.step4b);
    $log.log('activate step 4c ', $scope.active.step4c);
  };

  const delayInMs = 1500;

  let timeoutLightningName;
  $scope.$watch('lightning.name', (newValue, oldValue) => {
    if (oldValue !== newValue) {
      $timeout.cancel(timeoutLightningName);
      timeoutLightningName = $timeout(() => {
        if (newValue === 'PM: 20/20') {
          // WizardHandler.wizard('monitor').next();
          // Steps.activate('four');
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
    } else {
      WizardHandler.wizard('monitor').next();
    }
  };
}

