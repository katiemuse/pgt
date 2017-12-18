'use strict';

export default function OutroController($scope, Steps, WizardHandler) {
  $scope.Next = function () {
    WizardHandler.wizard('monitor').next();
  };
}

