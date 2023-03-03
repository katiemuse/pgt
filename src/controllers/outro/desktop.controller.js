'use strict';

export default function OutroController($scope, WizardHandler, Steps, Drawer) {
  angular.element(document).ready(() => {
    Steps.clear();
    Drawer.close();
  });

  $scope.gtmTrack = (cat, label, act = "") => {
    window.dataLayer.push({
      event: 'eventTracker',
      eventCat: cat,
      eventAct: act === "" ? window.location.href : act,
      eventLbl: label,
      nonInteraction: false
    });
  };

  $scope.NextStep = function() {
    WizardHandler.wizard("monitor").next();
  };
}
