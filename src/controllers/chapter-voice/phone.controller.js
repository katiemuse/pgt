'use strict';

export default function ChapterVoicePhoneController($scope, $timeout, Steps, WizardHandler, $rootScope, $document) {
  $scope.Next = function () {
    WizardHandler.wizard('phone').next();
    Steps.activate('one');
  };

  $scope.GoToStep2 = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("two");
  };

  $scope.GoToStep2a = function() {
    // hide astro * 2020 UPDATE astro removed *
    // const astro = angular.element('#astroPeeking');
    // astro.removeClass('astro-peeking-visible');
    // astro.addClass('astro-peeking-hidden');

    WizardHandler.wizard("phone").next();
    Steps.activate("");
    const animatedGifURL = "../../assets/images/chapters/chapter-voice/ch6-img2-animated2.gif";
    const step2ImageDiv = $document[0].querySelector('.phone-step-2a img');
    const randomCacheNumber = Math.round(Math.random() * 1000);
    const newAnimategGifUrl = animatedGifURL + "?x=" + randomCacheNumber;
    step2ImageDiv.src = newAnimategGifUrl;
  };

  $scope.GoToStep3 = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("three");
  };
  $scope.GoToStep4 = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("four");
  };
  $scope.GoToStep4a = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("");
  };
  $scope.GoToStep5 = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("");
  };

  $scope.GoToSuccess = function() {
    Steps.clear();
    $rootScope.showMobilePopout = false;
    WizardHandler.wizard("monitor").next();
  };
}
