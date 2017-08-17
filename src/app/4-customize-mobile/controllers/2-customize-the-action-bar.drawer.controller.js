'use strict';

export default function CustomizeTheActionBarDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;

  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;
    TopNavbar.DidYouKnowCount = 1;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click on \'Select\' and we\'ll add some actions to our app'
    });

    Steps.pop({
      number: 'two',
      title: 'Let\'s add the action we just created right into our app. Select "New Customer Feedback" in the column on the left, and drag it into the column on the right'
    });

    Steps.pop({
      number: 'three',
      title: 'We also want our users to be able to quickly alert customers that their feedback has been heard, so lets drag the "New Customer Response" action over to the right. And so users can keep their thoughts organized, let\'s pull over \'New Note\' as well.'
    });

    Steps.pop({
      number: 'four',
      title: 'Click \'ok\''
    });

    Hotspots.clear();
    // Hotspots.pop({
    //   number: 1,
    //   position: {
    //     left: '54px',
    //     top: '391px'
    //   }
    // });
    //
    // Hotspots.pop({
    //   number: 2,
    //   position: {
    //     left: '140px',
    //     top: '421px'
    //   }
    // });
    //
    // Hotspots.pop({
    //   number: 3,
    //   position: {
    //     left: '365px',
    //     top: '115px'
    //   }
    // });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
