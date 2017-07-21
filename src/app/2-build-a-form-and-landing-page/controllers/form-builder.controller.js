'use strict';

export default function FormBuilderController($scope, $timeout, Steps, WizardHandler, Drawer, $state) {
  $scope.formBuilder = {
  };

  $scope.formBuilder.sortableOptions = {
    update() {
      if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
        WizardHandler.wizard('monitor').next();
        Steps.activate('three');
      }
    },
    axis: 'y'
  };

  $scope.formBuilder.fields = [
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
    $state.go('form-completion-actions');
  };
}
