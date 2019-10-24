'use strict';

export default function ChapterMobilePhoneController($scope, $timeout, Steps, WizardHandler, $rootScope, $log) {
  $scope.Next = function () {
    $log.log('Current wizard step: ' + WizardHandler.wizard('phone').currentStepNumber());

    if (WizardHandler.wizard('phone').currentStepNumber() === 0) {
      WizardHandler.wizard('phone').next();
      Steps.activate('');
    } else if (WizardHandler.wizard('phone').currentStepNumber() === 1) {
      WizardHandler.wizard('phone').next();
      Steps.activate('one');
    } else if (WizardHandler.wizard('phone').currentStepNumber() === 2) {
      WizardHandler.wizard('phone').next();
      Steps.activate('one');
    }
  };

  $scope.GoToStep3 = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("");
  };

  $scope.GoToSuccess = function() {
    Steps.clear();
    $rootScope.showMobilePopout = false;
    WizardHandler.wizard("monitor").next();
  };
}
