'use strict';

export default function ChapterDataMobileController($scope, Steps, Hotspots, WizardHandler, successConfetti, $log) {
  $log.info('in mobile congroller');
  $log.info('successConfetti?', successConfetti);
  $scope.Next = function() {
    $log.info('next mobile clicked');
  };
  $scope.renderConfetti = function() {
    $log.info('in renderConfetti', successConfetti);
    // successConfetti.renderConfettiMobile();
  };
}
