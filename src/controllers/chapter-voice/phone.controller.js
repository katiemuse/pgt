'use strict';

export default function ChapterVoicePhoneController($scope, $timeout, Steps, WizardHandler, $rootScope, $document, $log) {
  $scope.Next = function () {
    $log.log('Current wizard step: ' + WizardHandler.wizard('phone').currentStepNumber());
    WizardHandler.wizard('phone').next();
    Steps.activate('one');
  };

  $scope.GoToSlide2 = function() {
    // hide astro
    const astro = angular.element('#astroPeeking');
    astro.removeClass('astro-peeking-visible');
    astro.addClass('astro-peeking-hidden');

    WizardHandler.wizard("phone").next();
    Steps.activate("");
  };

  $scope.GoToSlide3 = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("");
  };

  $scope.GoToSuccess = function() {
    Steps.clear();
    $rootScope.showMobilePopout = false;
    WizardHandler.wizard("monitor").next();
  };
}
