'use strict';

export default function CustomizeTheActionBarDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;

  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;
    TopNavbar.DidYouKnowCount = 1;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: ' Click \'New Action\''
    });

    Steps.pop({
      number: 'two',
      title: ' Choose \'Customer Feedback\' from the Target Object Dropdown, then click \'Save"'
    });

    Steps.pop({
      number: 'three',
      title: 'Since we want to move the Customer Idea field into our backlog, drag-and-drop it to the active area.'
    });

    Hotspots.clear();
    // Hotspots.pop({
    //   number: 1,
    //   position: {
    //     left: '54px',
    //     top: '391px'
    //   }
    // });
    //
    // Hotspots.pop({
    //   number: 2,
    //   position: {
    //     left: '140px',
    //     top: '421px'
    //   }
    // });
    //
    // Hotspots.pop({
    //   number: 3,
    //   position: {
    //     left: '365px',
    //     top: '115px'
    //   }
    // });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
