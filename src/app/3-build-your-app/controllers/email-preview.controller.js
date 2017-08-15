'use strict';

export default function EmailPreviewController($scope, WizardHandler, Steps, $timeout) {
  $scope.preview = {
    iPhoneSelected: false
  };

  $scope.SelectDevice = function () {
    $scope.preview.iPhoneSelected = true;

    Steps.activate('two');

    $timeout(() => {
      if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
        WizardHandler.wizard('monitor').next();
      }
    }, 1000);
  };

  $scope.EmailPreviewSuccess = function () {
    $timeout(() => {
      Steps.clear();
    }, 0);
  };
}

