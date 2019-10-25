'use strict';

export default function AddACustomFieldController(
  $scope,
  $timeout,
  Steps,
  Hotspots,
  TopNavbar,
  WizardHandler,
  $rootScope,
  $log
) {
  $scope.Next = function() {
    $log.log('Current step: ' + WizardHandler.wizard('monitor').currentStepNumber());
    if (WizardHandler.wizard('monitor').currentStepNumber() === 1) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('one');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('two');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      /* this is where the phone is shown */
      WizardHandler.wizard('monitor').next();
      $rootScope.showMobilePopout = true; // show the phone view
      Steps.activate('');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 4) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('four');
    } else {
      WizardHandler.wizard('monitor').next();
    }
  };

  $scope.goToSuccess = function() {
    Steps.clear();
    WizardHandler.wizard("monitor").next();
  };
}
