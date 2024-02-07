'use strict';

export default function AddACustomFieldController($scope, $timeout, Steps, Hotspots, TopNavbar, WizardHandler, $rootScope, successConfetti, $log) {
  $log.log("WizardHandler", WizardHandler);
  $scope.Next = function() {
    if (WizardHandler.wizard('monitor').currentStepNumber() === 1) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('one');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('two');
      window.dataLayer.push({
        event: 'eventTracker',
        eventCat: 'progress',
        eventAct: window.location.href,
        eventLbl: 'flow: complete step 2',
        nonInteraction: false
      });
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      /* this is where the phone is shown */
      WizardHandler.wizard('monitor').next();
      $rootScope.showMobilePopout = true; // show the phone view
      Steps.activate('');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 4) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('five');
    } else {
      WizardHandler.wizard('monitor').next();
      Steps.activate('');
    }
  };

  $scope.GoToStep5 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("five");
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
