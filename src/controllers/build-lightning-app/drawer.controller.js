'use strict';

export default function BuildLightningAppDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;

  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;
    TopNavbar.DidYouKnowCount = 1;
    TopNavbar.DidYouKnowEnabled = true;
    TopNavbar.HotspotsEnabled = true;
    TopNavbar.HotspotsCount = 1;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click on "New Lightning App"'
    });

    Steps.pop({
      number: 'two',
      title: 'Name your app. Let\'s call it "PM: 20/20". \n' +
      '\n' +
      '\'Click Next\''
    });

    Steps.pop({
      number: 'three',
      title: 'Now we add pages to our app. Click to add the Customer 360 page.'
    });

    Steps.pop({
      number: 'four',
      title: 'Help users plan against performance and timelines. Click to add \'Calendar\' and \'Dashboards.\''
    });

    Steps.pop({
      number: 'five',
      title: 'Click \'Save and Finish\''
    });

    Hotspots.clear();
    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
