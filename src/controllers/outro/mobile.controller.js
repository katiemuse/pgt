'use strict';

export default function OutroMobileController($scope, WizardHandler) {
  $scope.NextStep = function() {
    WizardHandler.wizard("monitor").next();
  };
}
