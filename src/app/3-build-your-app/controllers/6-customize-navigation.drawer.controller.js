'use strict';

export default function CustomizeNavigationDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: ' Click on the \'Activation\' button'
    });

    Steps.pop({
      number: 'two',
      title: 'Next to the icon, click \'Change\' and select an icon to represent your app.'
    });

    Steps.pop({
      number: 'three',
      title: 'Click on the \'Lightning Experience\' tab, then click \'Add page to Lightning Apps\'. This will allow your desktop users to access the app.'
    });

    Steps.pop({
      number: 'four',
      title: 'Click on the \'Salesforce1\' tab, then click \'Add page to App\'. This will allow your mobile users to access the app.'
    });

    Steps.pop({
      number: 'five',
      title: 'Drag-and-Drop your app to reorder how its displayed in the Salesforce1 dashboard, then click \'Save\''
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
