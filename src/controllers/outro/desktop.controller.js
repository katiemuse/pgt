'use strict';

export default function OutroController($scope, WizardHandler, Steps, Drawer) {
  angular.element(document).ready(() => {
    Steps.clear();
    Drawer.close();
  });

  $scope.NextStep = function() {
    WizardHandler.wizard("monitor").next();
  };
}
