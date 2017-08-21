'use strict';

export default function CreateACustomActionDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
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
      title: 'We want our users to be able to add customer ideas directly to their team\'s backlog, so we\'ll create an action for it. First, click \'New Action\''
    });

    Steps.pop({
      number: 'two',
      title: ' Choose \'Customer Feedback\' from the Target Object Dropdown, then click \'New"'
    });

    Steps.pop({
      number: 'three',
      title: 'Since we want to move the Customer Idea field into our backlog, drag-and-drop it to the active area.'
    });

    Steps.pop({
      number: 'four',
      title: 'Click \'Save\' then we\'ll jump back into the Lightning App Builder to put our new action into play.'
    });

    Steps.pop({
      number: 'five',
      title: 'Click \'Continue\'.'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
