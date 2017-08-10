'use strict';

export default function AddAnExternalObjectController($scope, Steps, Hotspots, WizardHandler, $timeout) {
  $scope.customobj = {
    name: ''
  };

  $scope.extds = {
    name: ''
  };

  $scope.input = {
    active: true
  };

  $scope.bkg = {
    active: false
  };

  $scope.toggleScroll = () => {
    $scope.input.active = !$scope.input.active;
  };

  $scope.toggleBkg = () => {
    $scope.bkg.active = !$scope.bkg.active;
  };

  $scope.$watch('customobj.name', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.toLowerCase().substring(0, 2) === 'ex') {
        $scope.toggleBkg();
      }
    }
  });

  const delayInMs = 1000;

  let timeoutExtdsName;
  $scope.$watch('extds.name', newValue => {
    $timeout.cancel(timeoutExtdsName);
    timeoutExtdsName = $timeout(() => {
      if (newValue.length > 2) {
        $scope.toggleScroll();
      }
    }, delayInMs);
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
    }
  };
}
