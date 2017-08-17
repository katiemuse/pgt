'use strict';

export default function AddAnObjectController($scope, Steps, Hotspots, WizardHandler, $timeout) {
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
    if (newValue !== oldValue) {
      if (newValue.toLowerCase() === 'customer insights') {
        $scope.toggleLabel();
        $timeout(() => {
          WizardHandler.wizard('monitor').next();
          Steps.activate('four');
        }, 2000);
      }
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
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('three');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 4) {
      $scope.toggleLabel();
      $timeout(() => {
        WizardHandler.wizard('monitor').next();
        Steps.activate('four');
      }, 2600);
    }
  };
}
