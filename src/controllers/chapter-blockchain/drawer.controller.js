'use strict';

export default function ChapterBlockchainDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
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
      title: 'Click &lsquo;New&rsquo; to create a process.'
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
      Steps.activate('one');
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
