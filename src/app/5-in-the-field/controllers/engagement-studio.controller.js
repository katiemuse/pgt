'use strict';

import $ from 'jquery';

export default function EngagementStudioController($scope, Steps, Hotspots, WizardHandler, Drawer, $timeout) {
  $scope.list = {
    sendEmail: null
  };

  $scope.sendEmailOptions = [
    {label: 'Introduction Email', value: 1}
  ];

  $scope.$watch('wizard.stateIndex', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (oldValue === 2 && newValue === 3) {
        $timeout(() => {
          /* eslint-disable */
          $('.list-group').stop().animate({
            scrollTop: $('.list-group')[0].scrollHeight
          }, 800);
        }, 1000);
        /* eslint-enable */
      }
    }
  });

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
