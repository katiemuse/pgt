'use strict';

export default function ABTestingController($scope, WizardHandler, Steps) {
  $scope.editor = {
    selectedTab: 'A',
    hasToggled: false
  };

  $scope.Save = function () {
    if (!$scope.editor.hasToggled) {
      return;
    }

    if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      WizardHandler.wizard('monitor').next();
      Steps.clear();
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      WizardHandler.wizard('monitor').next();
      WizardHandler.wizard('monitor').next();
      Steps.clear();
    }
  };

  $scope.SelectTab = function (tab) {
    $scope.editor.selectedTab = tab;
    $scope.editor.hasToggled = true;

    if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('two');
      return;
    }

    if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      WizardHandler.wizard('monitor').previous();
      Steps.activate('two');
      return;
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
