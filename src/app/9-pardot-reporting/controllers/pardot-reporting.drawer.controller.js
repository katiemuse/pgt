'use strict';

export default function PardotReportingDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;

  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Hover over the highlighted bubble on the report to see how the campaign you created in the first section of this tour did.<br/><br/>When you&rsquo;re finished, click &ldquo;Done&rdquo;.'
    });

    Hotspots.clear();

    Hotspots.pop({
      number: 1,
      position: {
        left: '158px',
        top: '296px'
      }
    });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
