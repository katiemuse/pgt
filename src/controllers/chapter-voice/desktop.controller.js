'use strict';

export default function NewLightningPageController($scope, WizardHandler, Steps, Hotspots, TopNavbar, $timeout) {
  $scope.lightning = {
    input: ''
  };

  $scope.input = {
    active: true
  };

  const delayInMs = 1000;
  let timeoutFieldName;
  $scope.$watch('lightning.input', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      $timeout.cancel(timeoutFieldName);
      timeoutFieldName = $timeout(() => {
        if (newValue.length > 3) {
          $scope.input.active = false;
        }
      }, delayInMs);
    }
  });

  $scope.Next = function () {
    // $log.log('Current step: ' + WizardHandler.wizard('monitor').currentStepNumber());
    if (WizardHandler.wizard('monitor').currentStepNumber() === 1) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('one');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      WizardHandler.wizard('monitor').next();

      TopNavbar.HotspotsEnable = true;
      TopNavbar.HotspotsCount = 3;

      Hotspots.clear();
      Hotspots.pop({
        number: 1,
        position: {
          left: '130px',
          top: '144px'
        }
      });

      Hotspots.pop({
        number: 2,
        position: {
          left: '133px',
          top: '170px'
        }
      });

      Hotspots.pop({
        number: 3,
        position: {
          left: '136px',
          top: '196px'
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
    }
  };
}
