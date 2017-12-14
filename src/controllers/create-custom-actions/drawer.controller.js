'use strict';

export default function CreateCustomActionsDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;

  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;
    TopNavbar.DidYouKnowCount = 1;
    TopNavbar.DidYouKnowEnabled = true;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click &lsquo;New Action&rsquo;'
    });

    Steps.pop({
      number: 'two',
      title: ' Choose &lsquo;Customer Insights&rsquo; from the &lsquo;Target Object&rsquo; dropdown, then click &lsquo;Save&rsquo;'
    });

    Steps.pop({
      number: 'three',
      title: 'We want to move data from the &lsquo;Customer Idea&rsquo; field into our backlog, drag and drop it into the active area'
    });

    Steps.pop({
      number: 'four',
      title: 'Click &lsquo;Save&rsquo;'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
