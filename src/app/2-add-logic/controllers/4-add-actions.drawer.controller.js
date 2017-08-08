'use strict';

export default function AddActionsDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click ‘Add Action’',
      clickHandler() {
        // console.log('clicked step', step);
        return false;
      }
    });

    Steps.pop({
      number: 'two',
      title: 'From the Action Type dropdown select \'Send push notification\' ',
      clickHandler() {
        // console.log('clicked step', step);
        return false;
      }
    });

    Steps.pop({
      number: 'three',
      title: 'Name your action ‘Notify Product Team’',
      clickHandler() {
        // console.log('clicked step', step);
        return false;
      }
    });

    Steps.pop({
      number: 'four',
      title: 'Click ‘Save’',
      clickHandler() {
        // console.log('clicked step', step);
        return false;
      }
    });

    Steps.pop({
      number: 'five',
      title: 'Click \'Activate\' to set your process in motion.',
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
