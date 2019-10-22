'use strict';

export default function SalesforceConnectController($scope, Steps, Hotspots, WizardHandler, $timeout) {
  $scope.customobj = {
    name: ''
  };

  $scope.extds = {
    name: ''
  };

  $scope.input = {
    active: true
  };

  $scope.select = {
    active: false
  };

  $scope.scrollstep = {
    active: false
  };

  $scope.bkg = {
    active: false
  };

  $scope.step4 = {
    box1: true,
    box2: false,
    box3: false
  };

  $scope.processOptions = [
    {label: '--None--', value: 1},
    {label: 'Platform Connect: OData 2.0', value: 2}
  ];

  $scope.process = {
    name: '',
    starts: $scope.processOptions[0]
  };

  $scope.toggleScroll = () => {
    $scope.scrollstep.active = !$scope.scrollstep.active;
  };

  $scope.toggleInput = () => {
    $scope.input.active = !$scope.input.active;
  };

  $scope.toggleSelect = () => {
    $scope.select.active = !$scope.select.active;
  };

  $scope.toggleBkg = () => {
    $scope.bkg.active = !$scope.bkg.active;
  };

  $scope.toggleBox2 = () => {
    $scope.step4.box1 = false;
    $scope.step4.box2 = true;
    $scope.step4.box3 = false;
    Steps.activate('five');
    Hotspots.clear();
  };

  $scope.toggleBox3 = () => {
    $scope.step4.box1 = false;
    $scope.step4.box2 = false;
    $scope.step4.box3 = true;
  };

  $scope.$watch('customobj.name', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.toLowerCase().substring(0, 2) === 'ex') {
        $scope.toggleBkg();
      }
    }
  });

  const delayInMs = 1000;

  let timeoutExtdsName;
  $scope.$watch('extds.name', newValue => {
    $timeout.cancel(timeoutExtdsName);
    timeoutExtdsName = $timeout(() => {
      if (newValue.length > 2) {
        $scope.toggleInput();
        $scope.toggleSelect();
      }
    }, delayInMs);
  });

  $scope.$watch('process.starts', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.value === 2) {
        $scope.toggleSelect();
        $scope.toggleScroll();
      }
    }
  });

  $scope.Next = function () {
    // $log.log('Current step: ' + WizardHandler.wizard('monitor').currentStepNumber());
    if (WizardHandler.wizard('monitor').currentStepNumber() === 1) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('one');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('two');
      Hotspots.clear();
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('three');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 4) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('four');
      Hotspots.pop({
        number: 2,
        position: {
          left: '256px',
          top: '59px'
        }
      });
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 5) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('');
    } else {
      WizardHandler.wizard('monitor').next();
    }
  };
}
