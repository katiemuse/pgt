'use strict';

export default function ChapterBuilderController($scope, Steps, Hotspots, WizardHandler, successConfetti) {
  $scope.Next = function () {
    // $log.log('Current step: ' + WizardHandler.wizard('monitor').currentStepNumber());
    if (WizardHandler.wizard('monitor').currentStepNumber() === 1) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('');
    }
  };

  $scope.goToStep1 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("one");
  };

  $scope.goToStep2 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("two");
    window.dataLayer.push({
      event: 'eventTracker',
      eventCat: 'progress',
      eventAct: window.location.href,
      eventLbl: 'low code builder: complete step 3',
      nonInteraction: false
    });
  };

  $scope.goToSuccess = function() {
    Steps.clear();
    WizardHandler.wizard("monitor").next();
  };
  $scope.renderConfetti = function() {
    successConfetti.renderConfetti();
  };

  $scope.gtmTrack = (cat, label, act = "") => {
    window.dataLayer.push({
      event: 'eventTracker',
      eventCat: cat,
      eventAct: act === "" ? window.location.href : act,
      eventLbl: label,
      nonInteraction: false
    });
  };
}
