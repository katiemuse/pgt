'use strict';

export default function OutroMobileController($scope, WizardHandler) {
  $scope.NextStep = function() {
    WizardHandler.wizard("monitor").next();
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
