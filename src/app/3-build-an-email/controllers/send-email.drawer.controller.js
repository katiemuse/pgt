'use strict';

export default function SendEmailDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;

  $scope.beginStory = function () {
    Drawer.close();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Choose a list of email recipients using the dropdown. You may also choose a different sender for each version of your email.'
    });

    Steps.pop({
      number: 'two',
      title: 'When you are finished, click &ldquo;Save&rdquo; (note: no email inboxes will be harmed in the sending of this email).'
    });

    $timeout(() => {
      Steps.activate('one');
      Hotspots.clear();

      Hotspots.pop({
        number: 1,
        position: {
          left: '24px',
          top: '120px'
        }
      });
    }, 1000);
  };

  $scope.beginStory();
}
