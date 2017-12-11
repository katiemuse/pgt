'use strict';

export default function IotController(
  $scope,
  $timeout,
  Steps,
  WizardHandler,
  Hotspots
) {
  $scope.Next = function() {
    WizardHandler.wizard('monitor').next();
    Hotspots.clear();
  };
}
