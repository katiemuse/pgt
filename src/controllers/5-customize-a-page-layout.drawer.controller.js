'use strict';

export default function CustomizeAPageLayoutDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    TopNavbar.HotspotsCount = 2;
    TopNavbar.HotspotsEnabled = true;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Try looking at the desktop layout from the device type drop-down.'
    });

    Steps.pop({
      number: 'two',
      title: 'Click &lsquo;Save&rsquo;'
    });

    Hotspots.clear();
    Hotspots.pop({
      number: 1,
      position: {
        left: '135px',
        top: '48px'
      }
    });

    Hotspots.pop({
      number: 2,
      position: {
        left: '357px',
        top: '33px'
      }
    });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
