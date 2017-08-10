'use strict';

export default function AddAnExternalObjectDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'From setup, search for \'external data sources\' and open it up'
    });

    Steps.pop({
      number: 'two',
      title: 'Click \'New External Data Source\''
    });

    Steps.pop({
      number: 'three',
      title: 'Here we are going to identify the name of the external data source, select the type of connection we want, and establish the endpoint. Click \'Save\'.'
    });

    Steps.pop({
      number: 'four',
      title: 'Now let\'s see all the data that is available to us from SAP by\n' +
      'clicking \'validate & sync\'.'
    });

    Steps.pop({
      number: 'five',
      title: 'Here we see five different tables that are available for us to sync with Salesforce, one of which is Sales Orders. Check "Sales Order" and click \'Sync\''
    });

    Hotspots.clear();
    Hotspots.pop({
      number: 1,
      position: {
        left: '117px',
        top: '223px'
      }
    });

    Hotspots.pop({
      number: 2,
      position: {
        left: '117px',
        top: '273px'
      }
    });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
