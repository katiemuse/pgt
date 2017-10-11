'use strict';

export default function HerokuConnectController($scope, Steps, Hotspots, WizardHandler, $timeout) {
  $scope.customobj = {
    name: ''
  };

  $scope.button = {
    show: false,
    save: false
  };

  $scope.label = {
    active: true
  };

  $scope.ToggleButton = () => {
    $scope.button.show = !$scope.button.show;
  };

  $scope.ToggleClicked = () => {
    $scope.button.clicked = !$scope.button.clicked;
    Steps.activate('four');
  };

  $scope.toggleLabel = () => {
    $scope.label.active = !$scope.label.active;
  };

  $scope.$watch('customobj.name', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.toLowerCase() === 'customer feedback') {
        $scope.toggleLabel();
        $timeout(() => {
          WizardHandler.wizard('monitor').next();
          Steps.activate('four');
        }, 600);
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
      WizardHandler.wizard('monitor').next();
      Steps.activate('six');
      // $scope.toggleLabel();
      // $timeout(() => {
      //   WizardHandler.wizard('monitor').next();
      // }, 600);
    } else {
      debugger;
      WizardHandler.wizard('monitor').next();
    }
  };
}
