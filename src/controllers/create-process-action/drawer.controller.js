'use strict';

export default function CreateProcessActionDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.HotspotsEnabled = true;
    TopNavbar.HotspotsCount = 2;
    TopNavbar.DidYouKnowEnabled = true;
    TopNavbar.DidYouKnowCount = 2;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click &lsquo;Add Action&rsquo;',
      clickHandler() {
        // console.log('clicked step', step);
        return false;
      }
    });

    Steps.pop({
      number: 'two',
      title: 'From the &lsquo;Action Type&rsquo; dropdown select &lsquo;Send Push Notification&rsquo; ',
      clickHandler() {
        // console.log('clicked step', step);
        return false;
      }
    });

    Steps.pop({
      number: 'three',
      title: 'Name your action &lsquo;Notify Product Team&rsquo;',
      clickHandler() {
        // console.log('clicked step', step);
        return false;
      }
    });

    Steps.pop({
      number: 'four',
      title: 'Click &lsquo;Save&rsquo;',
      clickHandler() {
        // console.log('clicked step', step);
        return false;
      }
    });

    Steps.pop({
      number: 'five',
      title: 'Click &lsquo;Activate&rsquo; to set your process in motion',
      clickHandler() {
        // console.log('clicked step', step);
        return false;
      }
    });

    Hotspots.clear();
    Hotspots.pop({
      number: 1,
      position: {
        left: '500px',
        top: '248px'
      }
    });

    Hotspots.pop({
      number: 2,
      position: {
        left: '568px',
        top: '29px'
      }
    });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
