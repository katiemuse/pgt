'use strict';

export default function ChapterBuilderDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer) {
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

  TopNavbar.DidYouKnowEnabled = false;

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.DidYouKnowEnabled = false;
    TopNavbar.MobileEnabled = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Drag and drop &ldquo;Flow - Price Quote&rdquo; right below the &ldquo;Car Configurator&rdquo; component.'
    });

    Steps.pop({
      number: 'two',
      title: 'Click &ldquo;Activation&rdquo; to see your app live.'
    });

    Hotspots.clear();
  };
}
