'use strict';

export default function SalesViewInSalesforceController($scope, WizardHandler, Steps, Hotspots, $timeout, $state) {
  $scope.view = {
    selectedList: null,
    showArrow: true
  };

  $scope.view.listOptions = [
    {label: 'Active - 30 day nurture', value: 13}
  ];

  $scope.ScrollDownToStep = function () {
    switch (WizardHandler.wizard('monitor').currentStepNumber()) {
      case 1: {
        WizardHandler.wizard('monitor').next();

        $timeout(() => {
          Hotspots.pop({
            number: 1,
            position: {
              left: '88px',
              top: '9px'
            }
          });

          Hotspots.pop({
            number: 2,
            position: {
              left: '159px',
              top: '200px'
            }
          });
        }, 1000);
        break;
      }
      case 2: {
        Hotspots.clear();

        $scope.view.showArrow = false;

        $timeout(() => {
          $state.go('personalized-email');
        }, 600);

        break;
      }
      default: {
        break;
      }
    }
  };
}
