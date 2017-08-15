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
      title: 'Click ‘Get more on the AppExchange’ '
    });

    Steps.pop({
      number: 'two',
      title: 'In the search bar, type ‘Ideas’ and hit enter'
    });

    Steps.pop({
      number: 'three',
      title: 'Select ‘Community Idea’ from search results'
    });

    Steps.pop({
      number: 'four',
      title: 'Click ‘Get It Now’'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
