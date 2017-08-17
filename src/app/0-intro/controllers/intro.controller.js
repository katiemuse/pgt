'use strict';

export default function IntroController($scope) {
  $scope.intro = {
    started: false
  };

  $scope.beginTour = () => {
    $scope.intro.started = true;
  };
}
