'use strict';

export default function ChapterMobileController($scope, $timeout, Steps, WizardHandler, Hotspots, successConfetti) {
  $scope.Next = function() {
    WizardHandler.wizard('monitor').next();
    Hotspots.clear();
  };
  $scope.renderConfetti = function() {
    successConfetti.renderConfetti();
  };
}
