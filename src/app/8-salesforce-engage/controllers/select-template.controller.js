'use strict';

export default function SelectTemplateController($scope, WizardHandler, Steps) {
  $scope.template = {
    mode: 'edit',
    showSend: false
  };

  $scope.template.togglePreview = function () {
    if ($scope.template.mode === 'preview') {
      return;
    }

    $scope.template.mode = 'preview';

    if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      Steps.activate('two');
      $scope.template.showSend = true;
    }
  };

  $scope.template.toggleEdit = function () {
    if ($scope.template.mode === 'edit') {
      return;
    }

    $scope.template.mode = 'edit';
  };
}
