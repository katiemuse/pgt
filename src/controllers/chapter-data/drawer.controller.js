'use strict';

export default function ChapterDataDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;
    TopNavbar.HotspotsEnabled = false;
    TopNavbar.DidYouKnowEnabled = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click &ldquo;Upload&rdquo; to bring your vehicle order data to the app.'
    });

    Steps.pop({
      number: 'two',
      title: 'Select the &ldquo;Vehicles.xlsx&rdquo; file.'
    });

    Steps.pop({
      number: 'three',
      title: 'Click &ldquo;Next&rdquo; to finish uploading.'
    });

    Steps.pop({
      number: 'four',
      title: 'Click row 1 to select the first vehicle and view the order details.'
    });

    Steps.pop({
      number: 'five',
      title: 'Click &ldquo;Add Sources&rdquo; to easily add data from another system.'
    });

    Hotspots.clear();
    Hotspots.pop({
      number: 1,
      position: {
        left: '705px',
        top: '33px'
      }
    });

    $timeout(() => {
      Steps.activate('one');
    }, 250);
  };
}
