'use strict';

export default function InstallAPreBuiltComponentFromAppexchangeDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').goTo(1);
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click &lsquo;Get more on the App Exchange&rsquo; '
    });

    Steps.pop({
      number: 'two',
      title: 'In the search bar, type &lsquo;ideas&rsquo; and hit enter'
    });

    Steps.pop({
      number: 'three',
      title: 'Select &lsquo;Community Ideas&rsquo; from the search results'
    });

    Steps.pop({
      number: 'four',
      title: 'Click &lsquo;Get It Now&rsquo;'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
