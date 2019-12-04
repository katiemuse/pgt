'use strict';
export default function ChapterMobileMobileController($scope, TopNavbar, Steps, $document, $timeout) {
  const mobileContainer = $document[0].querySelector('.container-fluid.main.mobile');
  const phonePlaceholder = $document[0].querySelector('.phone-placeholder');
  const playButton = $document[0].querySelector('.play-button');
  const videoElem = $document[0].querySelector('#step-1-video-mobile');
  const transitionElem = $document[0].querySelector('.slide-0 .transition-copy');
  $scope.scrollToTop = function() {
    if (!mobileContainer.classList.contains("scrolled")) {
      $document[0].querySelector('.container-fluid.main.mobile .navbar-header').scrollIntoView();
    }
  };
  $scope.startVideo = function() {
    mobileContainer.classList.add('scrolled');
    playButton.classList.add('hide');
    phonePlaceholder.classList.add('hide');
    videoElem.play();
    videoElem.onended = function() {
      $timeout(() => {
        transitionElem.scrollIntoView({behavior: "smooth"});
        playButton.classList.remove('hide');
        phonePlaceholder.classList.remove('hide');
      }, 2000);
    };
  };
  $scope.$on("$destroy", () => {
    const mobileContainer = $document[0].querySelector('.container-fluid.main.mobile');
    mobileContainer.classList.remove("scrolled");
  });
}
