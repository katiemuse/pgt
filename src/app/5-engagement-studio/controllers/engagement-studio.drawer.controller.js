'use strict';

export default function EngagementStudioDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'First let’s add a new email to the engagement campaign. Just click the (+).'
    });

    Steps.pop({
      number: 'two',
      title: 'Next select ‘Action’.'
    });

    Steps.pop({
      number: 'three',
      title: 'Now select ‘Send Email’.'
    });

    Steps.pop({
      number: 'four',
      title: 'Choose your template then you\'re all set! Click \'Save\'.'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 100);
  };
}

