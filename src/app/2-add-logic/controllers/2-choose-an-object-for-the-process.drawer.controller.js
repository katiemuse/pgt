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
      title: 'Click on &lsquo;Add Object&rsquo;'
    });

    Steps.pop({
      number: 'two',
      title: 'Choose &lsquo;Customer Insights&rsquo; from the dropdown choices'
    });

    Steps.pop({
      number: 'three',
      title: 'Our process starts when a new idea record is created. Click &lsquo;save&rsquo;.'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
