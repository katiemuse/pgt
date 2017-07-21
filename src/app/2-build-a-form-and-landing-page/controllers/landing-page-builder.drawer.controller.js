'use strict';

export default function LandingPageBuilderDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Try clicking on the Header text to change the title of your landing page.<br/><br/>Click &ldquo;Save&rdquo; when you are finished.',
      clickHandler() {
        // console.log('clicked step', step);
        return false;
      }
    });

    Steps.pop({
      number: 'two',
      title: 'You can also click on the image to select a new image.<br/><br/>Click &ldquo;OK&rdquo; when you are finished.',
      clickHandler() {
        // console.log('clicked step', step);
        return false;
      }
    });

    Steps.pop({
      number: 'three',
      title: 'When you are finished editing your landing page, click &ldquo;Confirm &amp; Save&rdquo;.',
      clickHandler() {
        // console.log('clicked step', step);
        return false;
      }
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
