'use strict';

export default function CreateAnAppFromBaseAndCustomLightningComponentsDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.DidYouKnowEnabled = true;
    TopNavbar.DidYouKnowCount = 1;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Drag the &lsquo;Report Chart&rsquo; standard component and drop it into the top box.'
    });

    Steps.pop({
      number: 'two',
      title: 'Name your component &lsquo;Annual Sales Orders&rsquo;'
    });

    Steps.pop({
      number: 'three',
      title: 'Choose the &lsquo;Sales Orders&rsquo; object we pulled in from SAP in the &lsquo;Report&rsquo; dropdown.'
    });

    Steps.pop({
      number: 'four',
      title: 'Drag and drop the &lsquo;Filter List&rsquo; Component into the middle section on the canvas'
    });

    Steps.pop({
      number: 'five',
      title: 'Drag another &lsquo;Report Chart&rsquo; into the canvas to integrate Customer Support Cases from Service Cloud'
    });

    Hotspots.clear();

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
