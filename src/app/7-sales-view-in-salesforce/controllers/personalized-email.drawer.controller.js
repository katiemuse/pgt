'use strict';

export default function PersonalizedEmailDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
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
      title: 'See how Pardot data integrates with Salesforce by exploring the hot spots on this page.'
    });
    Steps.pop({
      number: 'two',
      title: 'Place your lead on a targeted nurturing list using the dropdown menu.'
    });
    Steps.pop({
      number: 'three',
      title: 'Click &lsquo;Next&rsquo; to learn more about Pardot\'s sales tool, Salesforce® Engage.'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('two');
    }, 1000);
  };
}
