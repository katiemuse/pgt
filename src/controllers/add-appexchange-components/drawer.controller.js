"use strict";

export default function AddAppexchangeComponentsDrawerController(
  $scope,
  WizardHandler,
  TopNavbar,
  Steps,
  Hotspots,
  Drawer,
  $timeout
) {
  Drawer.openToIntro();

  $scope.beginStory = function() {
    Drawer.close();
    WizardHandler.wizard("monitor").goTo(1);
    TopNavbar.DidYouKnowEnabled = false;
    TopNavbar.DidYouKnowCount = 0;
    TopNavbar.HotspotsEnabled = true;
    TopNavbar.HotspotsCount = 1;

    Steps.clear();
    Steps.pop({
      number: "one",
      title: "Click &lsquo;Get more on the App Exchange&rsquo; "
    });

    Steps.pop({
      number: "two",
      title: "In the search bar, type &lsquo;ideas&rsquo; and hit enter"
    });

    Steps.pop({
      number: "three",
      title: "Select &lsquo;Community Ideas&rsquo; from the search results"
    });

    Steps.pop({
      number: "four",
      title: "Click &lsquo;Get It Now&rsquo;"
    });

    Steps.pop({
      number: "five",
      title: "Drag and drop the Customer Ideas component from the AppExchange below the Sales Order Chart"
    });

    Hotspots.clear();
    Hotspots.pop({
      number: 1,
      position: {
        left: "187px",
        top: "443px"
      }
    });

    $timeout(() => {
      Steps.activate("one");
    }, 1000);
  };
}
