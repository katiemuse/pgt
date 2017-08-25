'use strict';

export default function CreateANewLightningPageDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click &lsquo;New&rsquo;'
    });

    Steps.pop({
      number: 'two',
      title: 'Click &lsquo;Next&rsquo; to create and App Page'
    });

    Steps.pop({
      number: 'three',
      title: 'Name your page <br/>&lsquo;Customer 360&rsquo;. Click &lsquo;Next&rsquo;'
    });

    Steps.pop({
      number: 'four',
      title: 'We will use the &lsquo;Header and Right Sidebar&rsquo; layout. Click &lsquo;Finish.&rsquo; '
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
