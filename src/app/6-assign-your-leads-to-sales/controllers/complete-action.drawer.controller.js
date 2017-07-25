'use strict';

export default function CompleteActionDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;

  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Using the dropdown, select which sales rep you would like to assign the lead to.'
    });

    Steps.pop({
      number: 'two',
      title: 'Click &ldquo;Create automation rule&rdquo; to start assigning leads.'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
