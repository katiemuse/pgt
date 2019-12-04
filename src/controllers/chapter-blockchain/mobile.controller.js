'use strict';
export default function ChapterBlockchainMobileController($scope, TopNavbar, Steps, $document) {
  $scope.scrollToTop = function() {
    $document[0].querySelector('.container-fluid.main.mobile .navbar-header').scrollIntoView();
  };
}
