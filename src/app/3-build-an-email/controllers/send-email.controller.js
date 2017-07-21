'use strict';

export default function SendEmailController($scope, WizardHandler, Steps, Hotspots) {
  $scope.list = {
    sendTo: null,
    senderA: null,
    senderB: null
  };

  $scope.sendToOptions = [
    {label: 'Marketing - Local', value: 13},
    {label: 'Marketing - Atlanta', value: 12},
    {label: 'Sales Marketing - NYC', value: 11},
    {label: 'Business - National', value: 10}
  ];

  $scope.senderAOptions = [
    {label: 'General User', value: 0, email: 'general_user@lenoxsoft.com'},
    {label: 'Marketing', value: 1, email: 'Marketing@lenoxsoft.com'}
  ];

  // $scope.list.senderA = $scope.senderAOptions[0];

  $scope.senderBOptions = [
    {label: 'General User', value: 1, email: 'general_user@lenoxsoft.com'},
    {label: 'John Smith', value: 1, email: 'john.smith@lenoxsoft.com'}
  ];

  $scope.$watch('list.sendTo', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (WizardHandler.wizard('monitor').currentStepNumber() === 1) {
        Steps.activate('two');
      }
    }
  });

  $scope.SendNow = function () {
    if ($scope.list.sendTo !== null) {
      if (WizardHandler.wizard('monitor').currentStepNumber() === 1) {
        Steps.clear();
        Hotspots.clear();
        WizardHandler.wizard('monitor').next();
      }
    }
  };

  $scope.ToggleEditor = function () {
    $scope.editor.open = !$scope.editor.open;
    $scope.showSave = true;
  };

  $scope.SelectTemplate = function () {
    $scope.editor.templateSelected = true;
  };
}
