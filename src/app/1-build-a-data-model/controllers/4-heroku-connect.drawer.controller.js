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
      title: 'Click on the \'Customer Feedback\' object from the list'
    });

    Steps.pop({
      number: 'two',
      title: 'Click the check box next to the ‘Customer Idea’ field'
    });

    Steps.pop({
      number: 'three',
      title: 'Click \'Save\' to see the data in action'
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
