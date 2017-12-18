'use strict';

export default function OutroDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer) {
  TopNavbar.InfoActive = true;

//  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();

    Steps.clear();

    Hotspots.clear();
  };
}
