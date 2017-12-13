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
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.HotspotsEnabled = true;
    TopNavbar.DidYouKnowCount = 1;
    TopNavbar.DidYouKnowEnabled = true;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click on \'New Prediction\''
    });

    Steps.pop({
      number: 'two',
      title: 'Name Your Prediction \'Impact of Cases on NPS\' and click on \'Get Started\''
    });

    Steps.pop({
      number: 'three',
      title:
        'Select \'Case\' and click  \'Next\''
    });

    Steps.pop({
      number: 'four',
      title:
        'Select \'Impact on NPS\' and click  \'Next\''
    });

    Steps.pop({
      number: 'five',
      title:
        'Select what fields should impact your prediction. Click  \'Next\'.'
    });

    Steps.pop({
      number: 'six',
      title:
        'Select \'NPS Score\' as a field into which the Einstein models will push your prediction and will update it every hour. Click  \'Next\'.'
    });

    Hotspots.clear();
    // Hotspots.pop({
    //   number: 1,
    //   position: {
    //     left: '117px',
    //     top: '223px'
    //   }
    // });
    //
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
