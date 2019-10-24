'use strict';

export default function ChapterMobileDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout, $rootScope) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  angular.element(document).ready(() => {
    // show the phone overlay after the page finishes loading
    $rootScope.showMobilePopout = true;
  });

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
