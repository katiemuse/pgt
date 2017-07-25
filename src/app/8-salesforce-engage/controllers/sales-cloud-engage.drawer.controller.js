'use strict';

export default function SalesCloudEngageDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;

  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;
    TopNavbar.DidYouKnowCount = 3;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'View the activity cards displayed within the Engage Alerts interface. Note that Jeremy Jones’s activities are already highlighted. <br/><br/>Click on Jeremy Jones’ card for more information.'
    });

    Steps.pop({
      number: 'two',
      title: 'Looks like Jeremy Jones just filled out a form to download one of your white papers! Since he’s been showing a lot of interest in one specific topic, let’s invite him to an industry event that’s in his area. <br/><br/>Click over to the highlighted Leads tab to shoot Jeremy a quick event invite.'
    });

    Hotspots.clear();

    Hotspots.pop({
      number: 1,
      position: {
        left: '678px',
        top: '113px'
      }
    });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
