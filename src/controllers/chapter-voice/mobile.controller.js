'use strict';
export default function ChapterVoiceMobileController($scope, TopNavbar, Steps, $document) {
  $scope.startVideo = function() {
    const phonePlaceholder = $document[0].querySelector('.phone-placeholder');
    phonePlaceholder.classList.add('hide');
    const playButton = $document[0].querySelector('.play-button');
    playButton.classList.add('hide');
    const gifHolder = $document[0].querySelector('.gif-holder');
    gifHolder.classList.remove('hide');
  };
}
