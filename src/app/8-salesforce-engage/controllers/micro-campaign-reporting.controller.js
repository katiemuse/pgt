'use strict';

export default function MicroCampaignReportingController($scope, WizardHandler, Steps, Hotspots, $timeout) {
  $scope.Next = function () {
    if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      $timeout(() => {
        Steps.clear();
        Hotspots.clear();
      }, 0);
      WizardHandler.wizard('monitor').next();
    }
  };
}
