'use strict';

export default function ChapterMobileController($scope, $timeout, Steps, WizardHandler, Hotspots, successConfetti) {
  $scope.Next = function() {
    WizardHandler.wizard('monitor').next();
    Hotspots.clear();
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
