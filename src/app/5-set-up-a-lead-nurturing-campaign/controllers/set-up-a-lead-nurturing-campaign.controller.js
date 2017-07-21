'use strict';

export default function SetUpALeadNurturingCampaignController($scope, Steps, Hotspots, WizardHandler, Drawer, $timeout) {
  $scope.drip = {
    complete: false,
    droppedStepThree: false,
    droppedStepFour: false,
    salesManagerSelected: false,
    salesManager: null,
    salesManagerLabel: '[Nothing Selected]',
    emailTemplateSelected: false,
    emailTemplate: null,
    emailTemplateLabel: '[Nothing Selected]'
  };

  $scope.AssignUserDropped = function () {
    // running within jquery ui, must $apply
    $scope.$apply(() => {
      $scope.drip.droppedStepThree = true;
      Steps.activate('two');
    });
  };

  $scope.SendEmailDropped = function () {
    // running within jquery ui, must $apply
    $scope.$apply(() => {
      $scope.drip.droppedStepFour = true;
      Steps.activate('three');
      $timeout(() => {
        Hotspots.clear();
      }, 0);
    });
  };

  $scope.salesManagerOptions = [
    {label: 'John Smith', value: 1},
    {label: 'Mary Williams', value: 2},
    {label: 'Sales Manager', value: 3},
    {label: 'Evan Miller', value: 4}
  ];

  $scope.emailTemplateOptions = [
    {label: 'Drip Email: Solaris Video Case Study', value: 1},
    {label: 'Drip Email: Power Panels Case Study', value: 2}
  ];

  $scope.$watch('drip.salesManager', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.value === 3) {
        $scope.drip.salesManagerSelected = true;
        $scope.drip.salesManagerLabel = newValue.label;
        Steps.activate('three');

        Hotspots.pop({
          number: 3,
          position: {
            left: '250px',
            top: '348px'
          }
        });
      }
    }
  });

  $scope.$watch('drip.emailTemplate', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      $scope.drip.emailTemplateLabel = newValue.label;
      if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
        $scope.drip.emailTemplateSelected = true;
        Steps.activate('four');
        $scope.drip.complete = true;

        $timeout(() => {
          Hotspots.pop({
            number: 4,
            position: {
              left: '212px',
              top: '102px'
            }
          });
        }, 1000);
      }
    }
  });

  $scope.RunDripProgram = function () {
    if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      Steps.clear();
      Hotspots.clear();
      WizardHandler.wizard('monitor').next();
    }
  };
}
