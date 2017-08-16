'use strict';

export default function CreateAnAppFromBaseAndCustomLightningComponentsDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Choose \'Report Chart\' from the left hand side of the screen and, drag-and-drop it into the top section of the canvas'
    });

    Steps.pop({
      number: 'two',
      title: 'Label your component "Customer Service Cases"'
    });

    Steps.pop({
      number: 'three',
      title: 'Choose the "Case" option from the \'Report\' dropdown. This lets us pull in our \'Case\' standard object from Salesforce to show the number of Customer Service Cases that are created over time.  '
    });

    Steps.pop({
      number: 'four',
      title: 'Drag-and-drop the Chatter Feed Component into the middle section on the canvas. We want our users to see the posts that are most important to them, so we\'ll keep "Bookmarked" default field setting.'
    });

    Steps.pop({
      number: 'five',
      title: 'Now let\'s add the Customer Ideas AppExchange component to our page. Drag-and-drop it into the third section on the canvas'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
