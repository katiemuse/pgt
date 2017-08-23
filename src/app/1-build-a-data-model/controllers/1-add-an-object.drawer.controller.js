'use strict';

export default function AddAnObjectDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click on the &lsquo;Object Manager&rsquo; tab'
    });

    Steps.pop({
      number: 'two',
      title: 'Click &lsquo;Create&rsquo; and select &lsquo;Custom Object&rsquo;'
    });

    Steps.pop({
      number: 'three',
      title: 'Name your object &lsquo;Customer Insights&rsquo;'
    });

    Steps.pop({
      number: 'four',
      title: 'Click &lsquo;Save&rsquo;'
    });

    Hotspots.clear();
    // Hotspots.pop({
    //   number: 1,
    //   position: {
    //     left: '117px',
    //     top: '223px'
    //   }
    // });
    //
    // Hotspots.pop({
    //   number: 2,
    //   position: {
    //     left: '117px',
    //     top: '273px'
    //   }
    // });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
