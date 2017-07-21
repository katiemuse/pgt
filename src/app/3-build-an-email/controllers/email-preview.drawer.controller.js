'use strict';

export default function EmailPreviewDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Here you\'ll see a preview of your email in a number of email clients and devices. Select the highlighted iPhone 6 email rendering preview for a closer look at how your email will appear on mobile.'
    });

    Steps.pop({
      number: 'two',
      title: 'This is how your email will appear to recipients using an iPhone 6. Click "Next" when you\'re ready to move on.'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
