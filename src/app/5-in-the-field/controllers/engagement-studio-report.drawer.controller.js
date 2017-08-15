'use strict';

export default function EngagementStudioReportDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'At a glance, understand the health of your campaign and see where you might need to adjust your tactics. Ready to dive deeper? Click the email icon.'
    });

    Steps.pop({
      number: 'two',
      title: 'Key data like open rates and clickthroughs are available right on the canvas. Now hover over the email preview icon.'
    });

    Steps.pop({
      number: 'three',
      title: 'When you are ready to continue, press done.'
    });

    Hotspots.clear();

    // Hotspots.pop({
    //   number: 1,
    //   position: {
    //     left: '303px',
    //     top: '148px'
    //   }
    // });

    $timeout(() => {
      Steps.activate('one');
    }, 100);
  };
}
