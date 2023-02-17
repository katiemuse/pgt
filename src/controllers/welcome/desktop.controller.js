'use strict';

export default function WelcomeController($scope, WizardHandler, Steps) {
  $scope.intro = {
    started: false
  };

  $scope.beginIntro = () => {
    WizardHandler.wizard('monitor').next();
    Steps.pop({
      number: 'one',
      title: ''
    });

    Steps.pop({
      number: 'two',
      title: ''
    });

    Steps.pop({
      number: 'three',
      title: ''
    });

    Steps.pop({
      number: 'four',
      title: ''
    });

    Steps.pop({
      number: 'five',
      title: ''
    });
    $scope.intro.started = false;
  };

  $scope.beginTour = () => {
    WizardHandler.wizard('monitor').next();
    Steps.clear();
    $scope.intro.started = true;
  };
}
