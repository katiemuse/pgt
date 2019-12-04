'use strict';
export default function ChapterMobileMobileController($scope, TopNavbar, Steps, $document, $timeout) {
  $scope.startVideo = async function() {
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
}
