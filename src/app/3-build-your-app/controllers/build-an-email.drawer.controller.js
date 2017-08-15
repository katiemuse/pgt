'use strict';

export default function BuildAnEmailDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').goTo(1);
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Select the highlighted template, then click &lsquo;Apply&rsquo;.',
      clickHandler() {
        // console.log('clicked step', step);
        return false;
      }
    });

    Steps.pop({
      number: 'two',
      title: 'Pardot\'s WYSIWYG email builder works similarly to the landing page builder you used in step two.<br/><br/>' +
      'Click on the text to view the content editor where you can edit the autoresponder email in real time.',
      clickHandler() {
        // console.log('clicked step', step);
        return false;
      }
    });

    Steps.pop({
      number: 'three',
      title: 'When you are done, Click &lsquo;Save&rsquo;.',
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
