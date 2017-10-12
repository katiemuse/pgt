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
      title: 'Drag the &lsquo;Report Chart&rsquo; standard component and drop it into the top box.'
    });

    Steps.pop({
      number: 'two',
      title: 'Name your component &lsquo;Customer Service Cases&rsquo;'
    });

    Steps.pop({
      number: 'three',
      title: 'Choose the &lsquo;Case&rsquo; option from the &lsquo;Report&rsquo; dropdown.'
    });

    Steps.pop({
      number: 'four',
      title: 'Drag and drop the Chatter Feed Component into the middle section on the canvas'
    });

    Steps.pop({
      number: 'five',
      title: 'Drag and drop the Customer Ideas component from the AppExchange into the third section.'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
