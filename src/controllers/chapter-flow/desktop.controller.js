"use strict";

export default function ChapterFlowController($scope, Steps, Hotspots, WizardHandler, $timeout, successConfetti) {
  $scope.label = {
    active: true
  };

  const delayInMs = 1000;
  let timeoutExtdsName;
  $scope.$watch("label.input", newValue => {
    $timeout.cancel(timeoutExtdsName);
    timeoutExtdsName = $timeout(() => {
      if (angular.isDefined(newValue) && newValue.length > 10) {
        $scope.goToStep4();
        window.dataLayer.push({
          event: 'eventTracker',
          eventCat: 'progress',
          eventAct: window.location.href,
          eventLbl: 'flow: complete step 5',
          nonInteraction: false
        });
      }
    }, delayInMs);
  });

  $scope.goToStep1A = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.goToStep2 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("two");
  };

  $scope.goToStep3 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("three");
    window.dataLayer.push({
      event: 'eventTracker',
      eventCat: 'progress',
      eventAct: window.location.href,
      eventLbl: 'flow: complete step 4',
      nonInteraction: false
    });
  };

  $scope.goToStep4 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("four");
  };

  $scope.goToStep5 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.goToStep6 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.goToStep7 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
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
