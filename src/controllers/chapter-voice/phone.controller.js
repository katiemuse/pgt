'use strict';

export default function ChapterVoicePhoneController($scope, $timeout, Steps, WizardHandler, $rootScope, $document, $log) {
  $scope.Next = function () {
    $log.log('Current wizard step: ' + WizardHandler.wizard('phone').currentStepNumber());
    WizardHandler.wizard('phone').next();
    Steps.activate('one');
  };

  $scope.AstroClicked = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("");
  };

  $scope.GoToStep4 = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("");
  };

  $scope.GoToSuccess = function() {
    Steps.clear();
    $rootScope.showMobilePopout = false;
    WizardHandler.wizard("monitor").next();
  };
}
