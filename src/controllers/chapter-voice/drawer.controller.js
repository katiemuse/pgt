'use strict';

export default function ChapterVoiceDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $rootScope) {
  TopNavbar.InfoActive = false;
  TopNavbar.DidYouKnowEnabled = false;

  Steps.clear();
  Steps.pop({
    number: 'one',
    title: 'Click “Update Opportunity” to start your intelligent update.'
  });
  Steps.pop({
    number: 'two',
    title: 'Click the microphone button to start a voice command.'
  });
  Steps.pop({
    number: 'three',
    title: 'Click &ldquo;Haven Enterprises&rdquo; to select the correct record.'
  });
  Steps.pop({
    number: 'four',
    title: 'Select “Haven Enterprises - Services - 115K” to select the correct opportunity.'
  });
  Steps.pop({
    number: 'five',
    title: 'Click “Done” to complete this task.'
  });

  Hotspots.clear();
  Drawer.openToIntro();

  angular.element(document).ready(() => {
    // show the phone overlay after the page finishes loading
    $rootScope.showMobilePopout = true;
  });

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('phone').next();
    Steps.activate('one');

    // *** 2020 update ASTRO REMOVED ***
    // show astro (re-hiding, and click handling is done by transparent flyout in phone.html and phone.controller.js)
    // const astro = angular.element('#astroPeeking');
    // astro.removeClass('astro-peeking-hidden');
    // astro.addClass('astro-peeking-visible');
  };
}
