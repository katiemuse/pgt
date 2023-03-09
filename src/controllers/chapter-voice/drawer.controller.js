'use strict';

export default function ChapterVoiceDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $rootScope) {
  TopNavbar.InfoActive = false;
  TopNavbar.DidYouKnowEnabled = false;

  $scope.gtmTrack = (cat, label, act = "") => {
    window.dataLayer.push({
      event: 'eventTracker',
      eventCat: cat,
      eventAct: act === "" ? window.location.href : act,
      eventLbl: label,
      nonInteraction: false
    });
  };

  Steps.clear();
  Steps.pop({
    number: 'one',
    title: 'Click on Astro to start the voice command.'
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

    // show astro (re-hiding, and click handling is done by transparent flyout in phone.html and phone.controller.js)
    const astro = angular.element('#astroPeeking');
    astro.removeClass('astro-peeking-hidden');
    astro.addClass('astro-peeking-visible');
  };
}
