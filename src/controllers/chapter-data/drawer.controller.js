'use strict';

export default function CustomObjectsDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    TopNavbar.HotspotsCount = 1;
    TopNavbar.HotspotsEnabled = true;

    TopNavbar.DidYouKnowCount = 4;
    TopNavbar.DidYouKnowEnabled = true;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click on the &lsquo;Create&rsquo; drop down'
    });

    Steps.pop({
      number: 'two',
      title: 'Name your object &lsquo;Customer Insights&rsquo;'
    });

    Steps.pop({
      number: 'three',
      title: 'Click &lsquo;Save&rsquo;'
    });

    Hotspots.clear();
    Hotspots.pop({
      number: 1,
      position: {
        left: '705px',
        top: '33px'
      }
    });

    // Hotspots.pop({
    //   number: 2,
    //   position: {
    //     left: '117px',
    //     top: '273px'
    //   }
    // });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
