'use strict';

export default function ChapterBuilderController($scope, Steps, Hotspots, WizardHandler) {
  $scope.customobj = {
    name: ''
  };

  $scope.button = {
    show: false,
    save: false
  };

  $scope.label = {
    active: true
  };

  $scope.Next = function () {
    // $log.log('Current step: ' + WizardHandler.wizard('monitor').currentStepNumber());
    if (WizardHandler.wizard('monitor').currentStepNumber() === 1) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('');
    }
  };

  $scope.goToStep1 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("one");
  };

  $scope.goToStep2 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("two");
  };

  $scope.goToSuccess = function() {
    Steps.clear();
    WizardHandler.wizard("monitor").next();
  };
}
