'use strict';

export default function AddCriteriaController($scope, $timeout, Steps, WizardHandler, Hotspots) {
  $scope.response = {
    action: null,
    actionsViewed: false
  };

  $scope.responseOptions = [
    {label: 'Add tags', value: 0},
    {label: 'Add to list', value: 1},
    {label: 'Add to salesforce.com campaign', value: 2},
    {label: 'Adjust score', value: 3},
    {label: 'Assign prospect via salesforce.com active assignment rule', value: 4},
    {label: 'Assign to group', value: 5},
    {label: 'Assign to queue', value: 6},
    {label: 'Assign to user', value: 7},
    {label: 'Change prospect custom field value', value: 8},
    {label: 'Change prospect default field value', value: 9},
    {label: 'Create salesforce.com task', value: 10},
    {label: 'Increment prospect field value', value: 11},
    {label: 'Notify assigned user', value: 12},
    {label: 'Notify user', value: 13},
    {label: 'Notify user via Twillio (phone)', value: 14},
    {label: 'Register for webinar', value: 15},
    {label: 'Remove from list', value: 16},
    {label: 'Remove tags', value: 17},
    {label: 'Send autoresponder email', value: 18},
    {label: 'Set profile', value: 19},
    {label: 'Set profile\'s source campaign', value: 20}
  ];

  $scope.$watch('response.action', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
        $scope.response.actionsViewed = true;
        Steps.activate('five');
      }
    }
  });

  $scope.Confirm = function () {
    WizardHandler.wizard('monitor').next();
    Steps.clear();
    Hotspots.clear();
  };
}
