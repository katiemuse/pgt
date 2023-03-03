'use strict';
export default function ChapterBlockchainMobileController($scope, TopNavbar, Steps, $document) {
  $scope.scrollToTop = function() {
    $document[0].querySelector('.container-fluid.main.mobile .navbar-header').scrollIntoView();
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
