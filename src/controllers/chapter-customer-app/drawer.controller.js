'use strict';

export default function ChapterCustomerAppDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
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
      title: 'Click &quot;Save&quot; to deploy.'
    });

    Steps.pop({
      number: 'two',
      title: 'Click &quot;Customize&quot; to get started.'
    });

    Steps.pop({
      number: 'three',
      title: 'Select the option for &quot;Self Driving Capability.&quot;'
    });

    Steps.pop({
      number: 'four',
      title: 'Click  &quot;Purchase.&quot;'
    });

    Hotspots.clear();
    TopNavbar.DidYouKnowCount = 0;
    TopNavbar.HotSpotCount = 1;
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
