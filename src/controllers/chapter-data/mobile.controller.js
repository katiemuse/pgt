'use strict';

export default function ChapterDataMobileController($scope, Steps, Hotspots, WizardHandler, successConfetti, $log) {
  $scope.Next = function() {
    $log.info('next mobile clicked');
  };
  $scope.renderConfetti = function() {
    $log.info('in renderConfetti', successConfetti);
    // successConfetti.renderConfettiMobile();
  };
}
