'use strict';

export default function AddCriteriaDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click &lsquo;Add Criteria&rsquo;'
    });

    Steps.pop({
      number: 'two',
      title: 'Name criteria &lsquo;New Customer Idea&rsquo; and select &lsquo;Conditions are met&rsquo;.'
    });

    Steps.pop({
      number: 'three',
      title: 'Choose &lsquo;Customer Idea&rsquo; from the &lsquo;Field&rsquo; dropdown'
    });

    Steps.pop({
      number: 'four',
      title: 'Click &lsquo;Save&rsquo;'
    });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);

    Hotspots.clear();
  };
}
