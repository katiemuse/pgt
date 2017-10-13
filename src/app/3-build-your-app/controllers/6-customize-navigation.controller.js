'use strict';

export default function CustomizeNavigationController($scope, WizardHandler, Steps, $rootScope) {
  $scope.active = {
    step2: false,
    step3: false,
    step4: false,
    step5: false
  };

  $scope.draglist = [
    {classname: 'chatter', drag: true},
    {classname: 'today', drag: true},
    {classname: 'dashboards', drag: true},
    {classname: 'tasks', drag: true},
    {classname: 'smart-search-items', drag: true},
    {classname: 'customer-360', drag: true},
    {classname: 'people', drag: true}
  ];

  $scope.activatestep2 = () => {
    $scope.active.step2 = !$scope.active.step2;
  };

  $scope.activatestep3 = () => {
    $scope.active.step3 = !$scope.active.step3;
  };

  // $scope.activatestep3b = () => {
  //   $scope.active.step3a = false;
  //   $scope.active.step3b = !$scope.active.step3b;
  // };

  $scope.activatestep4 = () => {
    $scope.active.step4 = !$scope.active.step4;
  };

  $scope.activatestep5 = () => {
    $scope.active.step5 = !$scope.active.step5;
  };

  $scope.mobileview = () => {
    $rootScope.$emit('mobile-popout:toggle');
  };

  $scope.Next = function () {
    // $log.log('Current step: ' + WizardHandler.wizard('monitor').currentStepNumber());
    if (WizardHandler.wizard('monitor').currentStepNumber() === 1) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('one');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('two');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('three');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 4) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('four');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 5) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('five');
    }
  };
}
