'use strict';

export default function CreateAnAppFromBaseAndCustomLightningComponentsDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: ''
    });

    Steps.pop({
      number: 'two',
      title: ''
    });

    Steps.pop({
      number: 'three',
      title: ''
    });

    Steps.pop({
      number: 'four',
      title: ''
    });

    Steps.pop({
      number: 'five',
      title: ''
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
