'use strict';

export default function ChooseAnObjectForTheProcessDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click on \'Add Object\''
    });

    Steps.pop({
      number: 'two',
      title: 'Choose \'Customer Feedback\' from the dropdown choices.'
    });

    Steps.pop({
      number: 'three',
      title: 'We want our process to be activated when we create a new piece of Customer Feedback object so we\'ll leave the settings as they are. <br/> Click \'Save.\''
    });

    Hotspots.clear();
    // Hotspots.pop({
    //   number: 2,
    //   position: {
    //     left: '389px',
    //     top: '363px'
    //   }
    // });
    //
    // Hotspots.pop({
    //   number: 1,
    //   position: {
    //     left: '694px',
    //     top: '168px'
    //   }
    // });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
