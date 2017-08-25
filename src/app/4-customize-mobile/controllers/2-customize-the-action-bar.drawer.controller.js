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
      title: 'Click on &lsquo;Select&rsquo; and we\'ll add some actions to our app'
    });

    Steps.pop({
      number: 'two',
      title: 'Add the action we just created. Drag &lsquo;New Customer Feedback&rsquo; from the left column to the right.'
    });

    Steps.pop({
      number: 'three',
      title: 'So user\'s can keep their thoughts organized, pull over &lsquo;New Note&rsquo; as well.'
    });

    Steps.pop({
      number: 'four',
      title: 'Click &lsquo;Ok&rsquo;'
    });

    Hotspots.clear();
    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
