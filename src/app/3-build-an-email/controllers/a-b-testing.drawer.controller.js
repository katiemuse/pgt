'use strict';

export default function ABTestingDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Toggle between two different versions of your email by clicking on the &ldquo;A&rdquo; or &ldquo;B&rdquo; at the top of the email screen to the left. Notice that the header image is different in each email.'
    });

    Steps.pop({
      number: 'two',
      title: 'Click &lsquo;Save&rsquo; to conduct a rendering test of your emails &mdash; and don\'t forget to check out the on-screen tips before moving on!'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
