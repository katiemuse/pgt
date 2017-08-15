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
      title: 'TBD: Drag Report chart in to first square'
    });

    Steps.pop({
      number: 'two',
      title: 'TBD: Type "customer service cases" in the textbox'
    });

    Steps.pop({
      number: 'three',
      title: 'TBD: Select "case" from drop down'
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
