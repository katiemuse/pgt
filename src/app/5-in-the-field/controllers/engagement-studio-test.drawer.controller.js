'use strict';

export default function EngagementStudioTestDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout, steplog) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Time to take a walk in your customer’s shoes! Select ‘Yes’ to see the path your campaign will take.'
    });

    Steps.pop({
      number: 'two',
      title: 'Your customer is super engaged! Click ‘Yes’ again.'
    });

    Steps.pop({
      number: 'three',
      title: 'Your test log gives you a quick summary of the engagement path your customer will follow. Click ‘End Test’ and you’re ready to launch!'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 100);

    $timeout(() => {
      steplog.setEmailSent(true);
      // console.log("Email Sent", step1log.getEmailSent());
    }, 3000);
    $timeout(() => {
      // console.log("Was Email Opened");
      steplog.setWasEmailOpened(true);
    }, 4700);
  };
}
