'use strict';
export default function ChapterVoiceMobileController($scope, TopNavbar, Steps, $document, $log) {
  const mobileContainer = $document[0].querySelector('.container-fluid.main.mobile');
  const phonePlaceholder = $document[0].querySelector('.phone-placeholder');
  const playButton = $document[0].querySelector('.play-button');
  const gifHolder = $document[0].querySelector('.gif-holder');
  const video = $document[0].querySelector('.video-container-mobile');
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
    $log.info("video", video);
    video.play();
    $log.info("video playing");
    video.onended = () => {
      // const animatedGifURL = "../../assets/images/chapters/chapter-einstein-assistant/ch6-img2-apng.png";
      // const gilfHolderImage = $document[0].querySelector('.container-fluid.mobile .gif-holder img');
      // const randomCacheNumber = Math.round(Math.random() * 1000);
      // const newAnimategGifUrl = animatedGifURL + "?x=" + randomCacheNumber;
      // gilfHolderImage.src = newAnimategGifUrl;
      $log.info("video ended");
      phonePlaceholder.classList.remove('hide');
      playButton.classList.remove('hide');
      gifHolder.classList.add('hide');
    };
  };
  $scope.$on("$destroy", () => {
    mobileContainer.classList.remove("scrolled");
  });
}
