'use strict';

export default function PersonalizedEmailController($scope, WizardHandler, Steps) {
  $scope.view = {
    selectedList: null
  };

  $scope.view.listOptions = [
    {label: 'Active - 30 day nurture', value: 13},
    {label: 'Monthly Newsletter', value: 12},
    {label: 'Partners', value: 11},
    {label: 'Prospects for Nurturing', value: 10}
  ];

  $scope.$watch('view.selectedList', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      Steps.activate('three');
    }
  });
}
