'use strict';

export default function ChapterBlockchainPhoneController($scope, $timeout, Steps, WizardHandler, $rootScope) {
  $scope.GoToSuccess = function() {
    Steps.clear();
    $rootScope.showMobilePopout = false;
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
