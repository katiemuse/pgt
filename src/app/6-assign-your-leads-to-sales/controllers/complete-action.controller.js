'use strict';

export default function CompleteActionController($scope, Steps, WizardHandler) {
  $scope.completeAction = {
    rep: null
  };

  $scope.repOptions = [
    {label: 'Sales Manager', value: 13},
    {label: 'John Smith', value: 14},
    {label: 'Mary McDonald', value: 15}
  ];

  $scope.$watch('completeAction.rep', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
        Steps.activate('two');
        WizardHandler.wizard('monitor').next();
      }
    }
  });

  $scope.CreateAutomationRules = function () {
    if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      Steps.clear();
      WizardHandler.wizard('monitor').next();
    }
  };
}
