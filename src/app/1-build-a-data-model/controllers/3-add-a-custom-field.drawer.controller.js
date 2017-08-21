'use strict';

export default function AddACustomFieldDrawerController(
  $scope,
  WizardHandler,
  TopNavbar,
  Steps,
  Hotspots,
  Drawer,
  $timeout
) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click \'New\' button'
    });

    Steps.pop({
      number: 'two',
      title: 'Select the \'Prediction by Einstein\' data type and click \'Next\''
    });

    Steps.pop({
      number: 'three',
      title:
        'Choose the field we\'d like to predict. We want to see how customer satisfaction might look in the future, so we\'ll choose \'NPS Score\' and Click  \'Next\''
    });

    Steps.pop({
      number: 'four',
      title:
        'To inform our prediction, we\'ll choose the fields that will supply Einstein the best background data. For \'NPS Score,\' check the box next to \'Case Comments\', \'NPS Score (current),\' \'Order Date,\' and \'Device Crash Date,\' as well as some other standard fields. Click \'next\''
    });

    Steps.pop({
      number: 'five',
      title:
        'Name our predictive field \'Future NPS Score\' and review the details, then click \'Start\''
    });

    Hotspots.clear();
    // Hotspots.pop({
    //   number: 1,
    //   position: {
    //     left: '117px',
    //     top: '223px'
    //   }
    // });
    //
    // Hotspots.pop({
    //   number: 2,
    //   position: {
    //     left: '117px',
    //     top: '273px'
    //   }
    // });

    $timeout(() => {
      Steps.activate('one');
    }, 1000);
  };
}
