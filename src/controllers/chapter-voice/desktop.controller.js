'use strict';

export default function ChapterVoiceController($scope, WizardHandler, Steps) {
  $scope.goToSuccess = function() {
    Steps.clear();
    WizardHandler.wizard("monitor").next();
  };
}
