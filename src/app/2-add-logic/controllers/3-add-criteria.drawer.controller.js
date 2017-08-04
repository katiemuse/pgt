'use strict';

export default function AddCriteriaDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click &lsquo;Next&rsquo; to start setting up your form.'
    });

    Steps.pop({
      number: 'two',
      title: 'Click and drag the form fields into the order that you prefer.'
    });

    Steps.pop({
      number: 'three',
      title: 'Click &lsquo;Next&rsquo; to learn how to add completion actions to your form.'
    });

    Steps.pop({
      number: 'four',
      title: 'Use the blank dropdown menu to view all the possible completion actions that can be triggered after a form submission.'
    });

    Steps.pop({
      number: 'five',
      title: 'Click &lsquo;Next&rsquo; to advance to the Landing Page Builder.'
    });

    Hotspots.clear();
    Hotspots.pop({
      number: 1,
      position: {
        left: '381px',
        top: '277px'
      }
    });

    $timeout(() => {
      Steps.activate('four');
    }, 1000);
  };
}
