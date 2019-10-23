'use strict';

export default function ChapterCustomerAppDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;
    TopNavbar.HotspotsEnabled = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click &quot;Save&quot; to deploy.'
    });

    Steps.pop({
      number: 'two',
      title: 'Name your process &lsquo;Add idea to backlog&rsquo;.'
    });

    Steps.pop({
      number: 'three',
      title: 'From the dropdown below, choose &lsquo;A record changes&rsquo; to tell the process when to begin'
    });

    Steps.pop({
      number: 'four',
      title: 'Click &lsquo;Save&rsquo;'
    });

    Hotspots.clear();
    TopNavbar.DidYouKnowCount = 0;
    TopNavbar.HotSpotCount = 1;
    $timeout(() => {
      Steps.activate('');
    }, 100);
  };

  $scope.beginForBuilderStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;
    TopNavbar.DidYouKnowCount = 6;

    $timeout(() => {
      Steps.activate('two');
    }, 1000);
  };
}
