'use strict';

export default function AddACustomFieldController(
  $scope,
  Steps,
  Hotspots,
  WizardHandler
) {
  $scope.selected = {
    dataType: false,
    field: false,
    predictionFields: false,
    fieldName: '',
    fieldNameActive: true
  };

  $scope.selectDataType = () => {
    $scope.selected.dataType = true;
  };

  $scope.selectField = () => {
    $scope.selected.field = true;
  };

  $scope.selectPredictionFields = () => {
    $scope.selected.predictionFields = true;
  };

  $scope.$watch('selected.fieldName', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.toLowerCase() === 'future nps score') {
        $scope.selected.fieldNameActive = false;
      }
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
      Steps.activate('five');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 6) {
      WizardHandler.wizard('monitor').next();
      Steps.clear();
      // Steps.activate('five');
    }
  };
}
