'use strict';

export default function ChapterVoicePhoneController($scope, $timeout, Steps, WizardHandler, $rootScope, $document) {
  $scope.Next = function () {
    WizardHandler.wizard('phone').next();
    Steps.activate('one');
  };

  $scope.GoToStep2 = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("two");
    const astro = angular.element('#astroPeeking');
    astro.removeClass('astro-peeking-hidden');
    astro.addClass('astro-peeking-visible');
  };

  $scope.GoToStep2a = function() {
    // hide astro * 2020 UPDATE astro removed *
    const astro = angular.element('#astroPeeking');
    astro.removeClass('astro-peeking-visible');
    astro.addClass('astro-peeking-hidden');

    WizardHandler.wizard("phone").next();
    Steps.activate("");
    const video = $document[0].querySelector('.video-container');
    const afterVideoImage = $document[0].querySelector('.after-video-image');
    video.play();
    video.onended = event => {
      event.preventDefault();
      video.classList.add('hide');
      afterVideoImage.classList.remove('hide');
    };
    // const animatedGifURL = "../../assets/images/chapters/chapter-einstein-assistant/ch6-img2-animated2.gif";
    // const step2ImageDiv = $document[0].querySelector('.phone-step-2a img');
    // const randomCacheNumber = Math.round(Math.random() * 1000);
    // const newAnimategGifUrl = animatedGifURL + "?x=" + randomCacheNumber;
    // step2ImageDiv.src = newAnimategGifUrl;
  };

  $scope.GoToStep2b = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("");
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
    Steps.activate("five");
  };

  $scope.GoToSuccess = function() {
    Steps.clear();
    $rootScope.showMobilePopout = false;
    WizardHandler.wizard("monitor").next();
  };
}
