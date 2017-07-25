'use strict';

export default function MicroCampaignReportingDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;

  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'View the Engage report to see how your emails are performing. Click &lsquo;Next&rsquo; when you are done.'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);

    $timeout(() => {
      Hotspots.pop({
        number: 1,
        position: {
          left: '71px',
          top: '171px'
        }
      });
    }, 0);
  };
}
