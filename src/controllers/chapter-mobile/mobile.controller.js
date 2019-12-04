'use strict';
export default function ChapterMobileMobileController($scope, TopNavbar, Steps, $document, $timeout, $log, $window) {
  $scope.scrollToTop = function() {
    $log.info("in sTT");
    $log.info("screen position before scroll", $window.screenY);
    const mobileContainer = $document[0].querySelector('.container-fluid.main.mobile');
    if (!mobileContainer.classList.contains("scrolled")) {
      $document[0].querySelector('.container-fluid.main.mobile .navbar-header').scrollIntoView();
    }
  };
  $scope.startVideo = function() {
    const mobileContainer = $document[0].querySelector('.container-fluid.main.mobile');
    mobileContainer.classList.add('scrolled');
    const phonePlaceholder = $document[0].querySelector('.phone-placeholder');
    const playButton = $document[0].querySelector('.play-button');
    playButton.classList.add('hide');
    const videoElem = $document[0].querySelector('#step-1-video-mobile');
    phonePlaceholder.classList.add('hide');
    videoElem.play();
    videoElem.onended = function() {
      $timeout(() => {
        const transitionElem = $document[0].querySelector('.slide-0 .transition-copy');
        transitionElem.scrollIntoView({behavior: "smooth"});
      }, 2000);
    };
  };
  $scope.$on("$destroy", () => {
    const mobileContainer = $document[0].querySelector('.container-fluid.main.mobile');
    mobileContainer.classList.remove("scrolled");
  });
}
