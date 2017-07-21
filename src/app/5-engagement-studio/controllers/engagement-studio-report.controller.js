'use strict';

export default function EngagementStudioReportController($scope, Steps, Hotspots, WizardHandler) {
  $scope.nextStep = function () {
    const steps = ['one', 'two', 'three', 'four', 'five', 'six'];
    // console.log(WizardHandler.wizard("monitor").currentStepNumber());
    // console.log(steps[WizardHandler.wizard("monitor").currentStepNumber()]);
    Steps.activate(steps[WizardHandler.wizard('monitor').currentStepNumber() - 2]);
    if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      Hotspots.clear();
    }
  };

  $scope.nextWizardStep = function () {
    const steps = ['one', 'two', 'three', 'four', 'five', 'six'];
    WizardHandler.wizard('monitor').next();
    Steps.activate(steps[WizardHandler.wizard('monitor').currentStepNumber() - 2]);
  };

  $scope.successScreen = function () {
    Steps.clear();
    Hotspots.clear();
    // console.log("Success");
  };
}
