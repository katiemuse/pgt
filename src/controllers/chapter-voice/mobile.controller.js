'use strict';
export default function ChapterVoiceMobileController($scope, TopNavbar, Steps, $document, $log) {
  $scope.startVideo = function() {
    const phonePlaceholder = $document[0].querySelector('.phone-placeholder');
    phonePlaceholder.classList.add('hide');
    const playButton = $document[0].querySelector('.play-button');
    playButton.classList.add('hide');
    const gifHolder = $document[0].querySelector('.gif-holder');
    gifHolder.classList.remove('hide');
    const vidSource = $document[0].querySelector('source');
    const videoElem = $document[0].querySelector('#step-1-video');
    videoElem.play();
    vidSource.setAttribute("src", "../../assets/images/chapters/chapter-mobile/ch4-mobile-cut@60fps.mp4");
    $log.info("vid source", vidSource);
  };
}
