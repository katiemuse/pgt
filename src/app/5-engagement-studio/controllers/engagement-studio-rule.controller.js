'use strict';

import $ from 'jquery';

export default function EngagementStudioRuleController($scope, Steps, Hotspots, WizardHandler, Drawer, $timeout, $document) {
  $scope.list = {
    prospectField: null
  };

  $scope.prospectFieldOptions = [
    {label: 'Address One', value: 1},
    {label: 'Address Two', value: 1},
    {label: 'Annual Revenue', value: 1},
    {label: 'City', value: 1},
    {label: 'Comments', value: 1},
    {label: 'Company', value: 1},
    {label: 'Country', value: 1},
    {label: 'Department', value: 1},
    {label: 'Do Not Call', value: 1},
    {label: 'Do Not Email', value: 1},
    {label: 'Email', value: 1},
    {label: 'Employees', value: 1},
    {label: 'Fax', value: 1},
    {label: 'First Name', value: 1},
    {label: 'Industry', value: 1},
    {label: 'Job Title', value: 2},
    {label: 'Last Name', value: 1},
    {label: 'Opted Out', value: 1},
    {label: 'Phone', value: 1},
    {label: 'Salutation', value: 1},
    {label: 'Source', value: 1},
    {label: 'State', value: 1},
    {label: 'Territory', value: 1},
    {label: 'Website', value: 1},
    {label: 'Years In Business', value: 1},
    {label: 'Zip', value: 1}
  ];

  $scope.ruleInput = {
    value: '',
    done: false
  };

  let timeoutRuleInput;
  $scope.$watch('ruleInput.value', (newValue, oldValue) => {
    if (oldValue !== newValue) {
      $timeout.cancel(timeoutRuleInput);
      timeoutRuleInput = $timeout(() => {
        if (newValue.toString().toLowerCase() === 'sales') {
          $scope.ruleInput.done = true;
        }
      }, 1000);
    }
  });

  $scope.$watch('wizard.stateIndex', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (oldValue === 2 && newValue === 3) {
        $timeout(() => {
          /* eslint-disable */
          $('.list-group').stop().animate({
            scrollTop: $('.list-group')[0].scrollHeight
            /* eslint-enable */
          }, 800);
        }, 1000);
      }
    }
  });

  $scope.nextStep = function () {
    const steps = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
    // console.log(WizardHandler.wizard("monitor").currentStepNumber());
    // console.log(steps[WizardHandler.wizard("monitor").currentStepNumber()]);
    Steps.activate(steps[WizardHandler.wizard('monitor').currentStepNumber() - 2]);
    if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      Hotspots.clear();
    }
    if (WizardHandler.wizard('monitor').currentStepNumber() === 5) {
      Hotspots.clear();
    }
    if (WizardHandler.wizard('monitor').currentStepNumber() === 6) {
      $timeout(() => {
        $document.getElementsByClassName('step-5')[0].className += ' active';
      }, 500);

      $timeout(() => {
        $scope.successScreen();
        WizardHandler.wizard('monitor').next();
      }, 3000);
    }
  };

  $scope.successScreen = function () {
    Steps.clear();
    Hotspots.clear();
    // console.log("Success");
  };
}
