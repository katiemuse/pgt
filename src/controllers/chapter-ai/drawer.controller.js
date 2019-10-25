'use strict';

export default function AddACustomFieldDrawerController(
  $scope,
  WizardHandler,
  TopNavbar,
  Steps,
  Hotspots,
  Drawer,
  $timeout
) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    TopNavbar.HotspotsEnabled = false;
    TopNavbar.DidYouKnowEnabled = false;

    Drawer.close();
    WizardHandler.wizard('monitor').next();

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Drag and drop the &ldquo;Einstein Prediction&rdquo; component right above the Car Configurator component.'
    });

    Steps.pop({
      number: 'two',
      title: 'Click &ldquo;Activation&rdquo; to update your mobile app.'
    });

    Steps.pop({
      number: 'three',
      title:
        'Click the &ldquo;75 kWh&rdquo; battery option.'
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
    }, 1000);
  };
}
