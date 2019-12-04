'use strict';
export default function ChapterVoiceMobileController($scope, TopNavbar, Steps, $document, $log, $timeout) {
  $scope.scrollToTop = function() {
    $log.info("in stt chapter voice");
    const mobileContainer = $document[0].querySelector('.container-fluid.main.mobile');
    if (!mobileContainer.classList.contains("scrolled")) {
      $document[0].querySelector('.container-fluid.main.mobile .navbar-header').scrollIntoView();
    }
  };
  $scope.startVideo = function() {
    const mobileContainer = $document[0].querySelector('.container-fluid.main.mobile');
    mobileContainer.classList.add('scrolled');
    const phonePlaceholder = $document[0].querySelector('.phone-placeholder');
    phonePlaceholder.classList.add('hide');
    const playButton = $document[0].querySelector('.play-button');
    playButton.classList.add('hide');
    const gifHolder = $document[0].querySelector('.gif-holder');
    gifHolder.classList.remove('hide');
    $timeout(() => {
      const transitionElem = $document[0].querySelector('.slide-1 .transition-copy');
      transitionElem.scrollIntoView({behavior: "smooth"});
    }, 9000);
  };
  $scope.$on("$destroy", () => {
    const mobileContainer = $document[0].querySelector('.container-fluid.main.mobile');
    mobileContainer.classList.remove("scrolled");
  });
}
