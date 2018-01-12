'use strict';

export default function CustomizePageLayoutDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
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
      title: 'Try looking at the tablet-portrait layout from the device type drop-down.'
    });

    Steps.pop({
      number: 'two',
      title: 'Now lets go back to the phone layout from the device type drop-down.'
    });

    Steps.pop({
      number: 'three',
      title: 'Click &lsquo;Save&rsquo; to see the phone preview.'
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
