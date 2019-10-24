'use strict';

export default function ChapterMobileDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout, $rootScope) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $timeout(() => {
    // show the phone overlay after a slight delay
    $rootScope.showMobilePopout = true;
  }, 1000);

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard("phone").goTo(1);

    Steps.clear();
    Steps.pop({
      number: "one",
      title: "Click &rdquo;100 kWh&ldquo; to upgrade the battery."
    });
  };
}
