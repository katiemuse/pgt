'use strict';

export default function BuildASchemaDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Check the boxes next to the Customer Feedback Object we just created and the Account, Product, and Order Standard Objects.'
    });

    Steps.pop({
      number: 'two',
      title: 'Click on the ‘Customer Feedback’ object on the canvas'
    });

    Steps.pop({
      number: 'three',
      title: 'Click to open the "Elements\' tab on the left side of the screen.'
    });

    Steps.pop({
      number: 'four',
      title: 'Click on the \'Lookup\' element and drop it over the ‘Customer Feedback’ object.'
    });

    Steps.pop({
      number: 'five',
      title: 'Label the field ‘Order Details’ and select \'Customer Feedback\' from the \'Related to\' Dropdown.  Click ‘Save.’'
    });

    Hotspots.clear();
    Hotspots.pop({
      number: 1,
      position: {
        left: '117px',
        top: '223px'
      }
    });

    Hotspots.pop({
      number: 2,
      position: {
        left: '117px',
        top: '273px'
      }
    });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
