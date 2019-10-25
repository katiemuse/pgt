'use strict';

export default function ChapterFlowDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    TopNavbar.DidYouKnowEnabled = false;
    TopNavbar.HotspotsEnabled = false;

    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click “Select Payment Type” to update the payment flow.'
    });

    Steps.pop({
      number: 'two',
      title: 'Drag and drop the “Currency” component from the Input menu to above the “Payment Type” component.'
    });

    Steps.pop({
      number: 'three',
      title: 'Name the label “Price Quotes.”'
    });

    Steps.pop({
      number: 'four',
      title: 'Click “Done” to complete your flow.'
    });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
