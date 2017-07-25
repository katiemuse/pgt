'use strict';

export default function PardotReportingController($scope, WizardHandler, Hotspots, Steps) {
  $scope.report = {
    showOne: false,
    showTwo: false,
    showThree: false,
    showFour: false,
    showFive: false,
    highlightDone: false
  };

  $scope.Next = function () {
    if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      Steps.clear();
      Hotspots.clear();
      WizardHandler.wizard('monitor').next();
    }
  };

  $scope.$watch('report.showFive || report.showFour || report.showThree || report.showTwo || report.showOne'
    , (newValue, oldValue) => {
      if (newValue !== oldValue) {
        $scope.report.highlightDone = true;
      }
    });
}
