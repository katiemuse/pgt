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
      title: 'From setup, search for ‘External data sources’ and click on it.'
    });

    Steps.pop({
      number: 'two',
      title: 'Click &lsquo;New External Data Source&rsquo;'
    });

    Steps.pop({
      number: 'three',
      title: 'Name your data source SAP and choose OData as the connection type. \n' +
      '\n' +
      'Click ‘Save.’'
    });

    Steps.pop({
      number: 'four',
      title: 'Click &lsquo;Validate and Sync&rsquo; to bring data in'
    });

    Steps.pop({
      number: 'five',
      title: 'Out of 5 SAP tables integrated, select the one we need: &lsquo;Sales Orders&rsquo; and click &lsquo;Sync&rsquo;'
    });

    Hotspots.clear();
    // Hotspots.pop({
    //   number: 1,
    //   position: {
    //     left: '117px',
    //     top: '223px'
    //   }
    // });
    //
    // Hotspots.pop({
    //   number: 2,
    //   position: {
    //     left: '117px',
    //     top: '273px'
    //   }
    // });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
