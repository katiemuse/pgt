'use strict';

export default function AddCriteriaDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click \'Add Criteria\''
    });

    Steps.pop({
      number: 'two',
      title: 'Name your first criteria ’New Customer Idea’ and choose ‘conditions are met’ as the Criteria for Executing Action.'
    });

    Steps.pop({
      number: 'three',
      title: 'Choose ‘Customer Idea’ from the ‘Field’ dropdown'
    });

    Steps.pop({
      number: 'four',
      title: 'Click ‘Save’'
    });

    Hotspots.clear();
  };
}
