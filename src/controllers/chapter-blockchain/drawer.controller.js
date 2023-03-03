'use strict';

export default function ChapterBlockchainDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.gtmTrack = (cat, label, act = "") => {
    window.dataLayer.push({
      event: 'eventTracker',
      eventCat: cat,
      eventAct: act === "" ? window.location.href : act,
      eventLbl: label,
      nonInteraction: false
    });
  };

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;
    TopNavbar.HotspotsEnabled = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click &quot;Partners&quot; to open your list of current partners.'
    });

    Steps.pop({
      number: 'two',
      title: 'Click &quot;New&quot; to add a partner.'
    });

    Steps.pop({
      number: 'three',
      title: 'Click &quot;Save.&quot;'
    });

    Steps.pop({
      number: 'four',
      title: 'Click &quot;Details&quot; to start deploying your network.'
    });

    Steps.pop({
      number: 'five',
      title: 'Click &quot;Deploy.&quot;'
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
