'use strict';

export default function ChooseAnObjectForTheProcessController($scope, $timeout, Steps, WizardHandler, Drawer, $state) {
  $scope.ChooseAnObjectForTheProcess = {
  };

  $scope.ChooseAnObjectForTheProcess.sortableOptions = {
    update() {
      if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
        WizardHandler.wizard('monitor').next();
        Steps.activate('three');
      }
    },
    axis: 'y'
  };

  $scope.ChooseAnObjectForTheProcess.fields = [
    {
      name: 'First Name',
      required: true
    },
    {
      name: 'Last Name',
      required: true
    },
    {
      name: 'Company',
      required: false
    },
    {
      name: 'Email (a)',
      required: true
    }
  ];

  $scope.Next = function () {
    Steps.clear();
    $state.go('add-criteria');
  };
}
