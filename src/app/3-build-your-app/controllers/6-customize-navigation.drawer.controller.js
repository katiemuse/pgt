'use strict';

export default function CustomizeNavigationDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;
    TopNavbar.DidYouKnowCount = 2;
    TopNavbar.DidYouKnowEnabled = true;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: ' Click on the \'Activation\' button'
    });

    Steps.pop({
      number: 'two',
      title: 'Select an icon for your app.'
    });

    Steps.pop({
      number: 'three',
      title: 'Click on the &lsquo;Lightning Experience&rsquo; tab, then click &lsquo;Add page to app.&rsquo; This will allow your desktop users to access the app.'
    });

    Steps.pop({
      number: 'four',
      title: 'Click on the &lsquo;Salesforce1&rsquo; tab, then click &lsquo;Add page to app&rsquo;. This will allow your mobile users to access the app.'
    });

    Steps.pop({
      number: 'five',
      title: 'Move the icon up so that your users can quickly see it on the Salesforce1 menu.'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
