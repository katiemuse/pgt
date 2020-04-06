'use strict';

export default function ChapterVoiceDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $rootScope) {
  TopNavbar.InfoActive = false;
  TopNavbar.DidYouKnowEnabled = false;

  Steps.clear();
  Steps.pop({
    number: 'one',
    title: 'Click "Create a Reminder" to start your intelligent update.'
  });
  Steps.pop({
    number: 'two',
    title: 'Click the microphone button to start a voice command.'
  });
  Steps.pop({
    number: 'three',
    title: 'Click "Electron Motors" to select the correct record.'
  });
  Steps.pop({
    number: 'four',
    title: 'Click "Mike West" to select the correct opportunity.'
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
  };
}
