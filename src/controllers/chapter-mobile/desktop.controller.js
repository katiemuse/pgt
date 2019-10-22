'use strict';

export default function IotExplorerController(
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
