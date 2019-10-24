'use strict';

export default function ChapterMobileDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout, $rootScope) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    // WizardHandler.wizard('monitor').next();
    WizardHandler.wizard("phone").goTo(1);

    Steps.clear();
    Steps.pop({
      number: "one",
      title: "Click &rdquo;100 kWh&ldquo; to upgrade the battery."
    });

    // Hotspots.clear();

    $rootScope.showMobilePopout = true;
  };
}
