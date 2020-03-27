'use strict';

export default function ChapterVoicePhoneController($scope, $timeout, Steps, WizardHandler, $rootScope, $document) {
  $scope.Next = function () {
    WizardHandler.wizard('phone').next();
    Steps.activate('one');
  };

  $scope.GoToSlide2 = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("two");
  };

  $scope.GoToSlide2a = function() {
    // hide astro
    const astro = angular.element('#astroPeeking');
    astro.removeClass('astro-peeking-visible');
    astro.addClass('astro-peeking-hidden');

    WizardHandler.wizard("phone").next();
    Steps.activate("");
    const animatedGifURL = "../../assets/images/chapters/chapter-voice/ch6-img2-animated2.gif";
    const step2ImageDiv = $document[0].querySelector('.phone-step-2a img');
    const randomCacheNumber = Math.round(Math.random() * 1000);
    const newAnimategGifUrl = animatedGifURL + "?x=" + randomCacheNumber;
    step2ImageDiv.src = newAnimategGifUrl;
  };

  $scope.GoToSlide3 = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("three");
  };
  $scope.GoToSlide4 = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("four");
  };
  $scope.GoToSlide4a = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("");
  };
  $scope.GoToSlide5 = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("");
  };

  $scope.GoToSuccess = function() {
    Steps.clear();
    $rootScope.showMobilePopout = false;
    WizardHandler.wizard("monitor").next();
  };
}
