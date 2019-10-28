'use strict';

export default function ChapterVoiceDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $rootScope, $log) {
  TopNavbar.InfoActive = false;
  TopNavbar.DidYouKnowEnabled = false;

  Steps.clear();
  Steps.pop({
    number: 'one',
    title: 'Click on Astro to start the voice command.'
  });

  Steps.pop({
    number: 'two',
    title: 'Dummy step'
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

    const astro = angular.element('#astroPeeking');
    astro.removeClass('astro-peeking-hidden');
    astro.addClass('astro-peeking-visible');

    astro.on('click', e => {
      $log.log('click fired!!!!!!!!!!!!!!!!!!!');

      // hide astro
      astro.removeClass('astro-peeking-visible');
      astro.addClass('astro-peeking-hidden');

      // go to next slide and close the step
      WizardHandler.wizard('phone').next();
      Steps.activate('ontwoe');

      $log.log('click fired - reached end!!!!!!!!!!!!!!!!!!!');

      e.preventDefault();
      return false;
    });
  };
}
