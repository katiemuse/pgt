'use strict';

export default function SetupAWorkflowDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click \'new\' to start building your first process'
    });

    Steps.pop({
      number: 'two',
      title: 'Start by giving your process a name and a trigger action. We suggest something like \'Add idea to backlog\'.'
    });

    Steps.pop({
      number: 'three',
      title: 'Choose \'A Record Changes\' from the dropdown to tell the process when to begin.'
    });

    Steps.pop({
      number: 'four',
      title: 'Click \'Save\''
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };

  $scope.beginForBuilderStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;
    TopNavbar.DidYouKnowCount = 6;

    $timeout(() => {
      Steps.activate('two');
    }, 1000);
  };
}
