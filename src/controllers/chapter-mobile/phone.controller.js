'use strict';

export default function ChapterMobilePhoneController($scope, $timeout, Steps, WizardHandler, $log) {
  $scope.Next = function () {
    $log.log('Current wizard step: ' + WizardHandler.wizard('phone').currentStepNumber());

    if (WizardHandler.wizard('phone').currentStepNumber() === 0) {
      $log.log('A');
      WizardHandler.wizard('phone').next();
      Steps.activate('');
    } else if (WizardHandler.wizard('phone').currentStepNumber() === 1) {
      $log.log('B');
      WizardHandler.wizard('phone').next();
      Steps.activate('one');
    } else if (WizardHandler.wizard('phone').currentStepNumber() === 2) {
      $log.log('C');
      WizardHandler.wizard('phone').next();
      Steps.activate('one');
    }
  };
}
