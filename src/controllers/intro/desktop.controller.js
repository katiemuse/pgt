'use strict';

export default function IntroController($scope, WizardHandler, Steps) {
  $scope.intro = {
    started: false
  };

  $scope.beginTour = () => {
    WizardHandler.wizard('monitor').next();
    Steps.clear();
    $scope.intro.started = true;
  };
}
