'use strict';

export default function IotDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.HotspotsEnabled = true;
    TopNavbar.HotspotsCount = 1;
    TopNavbar.DidYouKnowEnabled = true;
    TopNavbar.DidYouKnowCount = 2;

    Steps.clear();

    Hotspots.clear();
    Hotspots.pop({
      number: 1,
      position: {
        left: '500px',
        top: '248px'
      }
    });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
