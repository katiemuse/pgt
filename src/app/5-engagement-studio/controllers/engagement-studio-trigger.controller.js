'use strict';

export default function EngagementStudioTriggerController($scope, Steps, Hotspots, WizardHandler, Drawer, $timeout) {
  $scope.list = {
    sendEmail: null
  };

  $scope.triggerDays = {
    value: '',
    done: false
  };

  let timeoutTriggerDays;
  $scope.$watch('triggerDays.value', (newValue, oldValue) => {
    if (oldValue !== newValue) {
      $timeout.cancel(timeoutTriggerDays);
      timeoutTriggerDays = $timeout(() => {
        if (newValue.length > 0) {
          $scope.triggerDays.done = true;
        }
      }, 1000);
    }
  });

  $scope.sendEmailOptions = [
    {label: 'Introduction Email', value: 1}
  ];

  $scope.nextStep = function () {
    const steps = ['one', 'two', 'three', 'four', 'five', 'six'];
    // console.log(WizardHandler.wizard("monitor").currentStepNumber());
    // console.log(steps[WizardHandler.wizard("monitor").currentStepNumber()]);
    Steps.activate(steps[WizardHandler.wizard('monitor').currentStepNumber() - 2]);
  };

  $scope.successScreen = function () {
    Steps.clear();
    Hotspots.clear();
    // console.log("Success");
  };
}
