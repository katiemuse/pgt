'use strict';

export default function ChapterMobileController($scope, $timeout, Steps, WizardHandler, Hotspots) {
  $scope.Next = function() {
    WizardHandler.wizard('monitor').next();
    Hotspots.clear();
  };
}
