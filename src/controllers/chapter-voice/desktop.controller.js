'use strict';

export default function ChapterVoiceController($scope, WizardHandler, Steps, successConfetti) {
  $scope.goToSuccess = function() {
    Steps.clear();
    WizardHandler.wizard("monitor").next();
  };

  $scope.renderConfetti = function() {
    successConfetti.renderConfetti();
  };
}
