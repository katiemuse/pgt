'use strict';

export default function HerokuConnectDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click \'Object Manager\' tab'
    });

    Steps.pop({
      number: 'two',
      title: 'Click \'Create\' and select \'Custom object\''
    });

    Steps.pop({
      number: 'three',
      title: 'Label your object, let\'s call it \'Customer Feedback\''
    });

    Steps.pop({
      number: 'four',
      title: 'Click \'Save\''
    });

    Hotspots.clear();
    Hotspots.pop({
      number: 1,
      position: {
        left: '117px',
        top: '223px'
      }
    });

    Hotspots.pop({
      number: 2,
      position: {
        left: '117px',
        top: '273px'
      }
    });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
