'use strict';

export default function AddACustomFieldController(
  $scope,
  $timeout,
  Steps,
  Hotspots,
  TopNavbar,
  WizardHandler
) {
  $scope.selected = {
    dataType: false,
    field: false,
    predictionFields: false,
    object: false,
    fieldName: '',
    fieldNameActive: true,
    labelValue: '',
    prediction: false,
    predictionOptions: [
      {label: 'Choose a field', value: 0},
      {label: 'NPS Score', value: 1}
    ]
  };

  $scope.selected.predictionValue = $scope.selected.predictionOptions[0];

  $scope.selectDataType = () => {
    $scope.selected.dataType = true;
  };

  $scope.selectObject = () => {
    $scope.selected.object = true;
  };

  $scope.selectField = () => {
    $scope.selected.field = true;
  };

  $scope.selectPredictionFields = () => {
    $scope.selected.predictionFields = true;
  };

  $scope.selectPrediction = () => {
    $scope.selected.prediction = true;
  };

  const delayInMs = 1000;
  let timeoutFieldName;
  $scope.$watch('selected.fieldName', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      $timeout.cancel(timeoutFieldName);
      $scope.selected.labelValue = newValue.toLowerCase().replace(/ /g, '_');
      timeoutFieldName = $timeout(() => {
        if (newValue.length > 3) {
          $scope.selected.fieldNameActive = false;
        }
      }, delayInMs);
    }
  });

  $scope.Next = function() {
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
      Hotspots.pop({
        number: 1,
        position: {
          left: '79px',
          top: '173px'
        }
      });
      TopNavbar.HotspotsActive = true;
      TopNavbar.HotspotsCount = 1;
      Steps.activate('five');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 6) {
      WizardHandler.wizard('monitor').next();
      Hotspots.clear();
      TopNavbar.HotspotsActive = false;
      TopNavbar.HotspotsCount = 0;
      Steps.activate('six');
    } else {
      WizardHandler.wizard('monitor').next();
    }
  };
}
