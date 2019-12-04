'use strict';
export default function ChapterVoiceMobileController($scope, TopNavbar, Steps, $document, $log, $timeout) {
  const mobileContainer = $document[0].querySelector('.container-fluid.main.mobile');
  const phonePlaceholder = $document[0].querySelector('.phone-placeholder');
  const playButton = $document[0].querySelector('.play-button');
  const gifHolder = $document[0].querySelector('.gif-holder');
  $scope.scrollToTop = function() {
    if (!mobileContainer.classList.contains("scrolled")) {
      $document[0].querySelector('.container-fluid.main.mobile .navbar-header').scrollIntoView();
    }
  };
  $scope.startVideo = function() {
    mobileContainer.classList.add('scrolled');
    phonePlaceholder.classList.add('hide');
    playButton.classList.add('hide');
    gifHolder.classList.remove('hide');
    $timeout(() => {
      const transitionElem = $document[0].querySelector('.slide-1 .transition-copy');
      transitionElem.scrollIntoView({behavior: "smooth"});
    }, 9000);
  };
  $scope.$on("$destroy", () => {
    mobileContainer.classList.remove("scrolled");
  });
}
