'use strict';

export default function CustomizeAPageLayoutDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Open the screen display dropdown and choose \'Desktop\' view. Then, try the other screen sizes to see how your app comes to life across devices.'
    });

    Steps.pop({
      number: 'two',
      title: 'Once you\'ve made sure it looks great across multiple layouts click \'Save\''
    });

    Steps.pop({
      number: 'three',
      title: 'We\'re not ready to activate our app just yet, click "Not Yet"'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
