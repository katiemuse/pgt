'use strict';

export default function WelcomeDrawerController($scope, WizardHandler, TopNavbar, Steps) {
  Steps.clear();
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
}
