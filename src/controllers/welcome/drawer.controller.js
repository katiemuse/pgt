'use strict';

export default function WelcomeDrawerController($scope, WizardHandler, TopNavbar, Steps) {
  Steps.clear();

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
