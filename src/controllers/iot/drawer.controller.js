'use strict';

export default function IotDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();

    Steps.clear();

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
