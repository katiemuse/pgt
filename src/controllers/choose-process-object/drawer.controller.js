'use strict';

export default function ChooseProcessObjectDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.DidYouKnowEnabled = true;
    TopNavbar.DidYouKnowCount = 1;
    TopNavbar.HotspotsEnabled = false;
    TopNavbar.HotspotsCount = 0;

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
      title: 'Our process starts when a new idea record is created. Click &lsquo;Save&rsquo;.'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
