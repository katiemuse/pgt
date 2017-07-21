'use strict';

export default function SetUpALeadNurturingCampaignDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Let\'s say you want to assign your prospect to a sales rep if he opens one of your drip emails. Drag the &ldquo;Assign to User&rdquo; action from the left sidebar so that it\'s below the green arrow.'
    });

    Steps.pop({
      number: 'two',
      title: 'Assign your prospect to a Sales Manager by selecting "Sales Manager" from the drop down menu.'
    });

    Steps.pop({
      number: 'three',
      title: 'If your prospect doesn\'t open your email, on the other hand, you\'ll want to try sending another email. Drag the highlighted \'Send Email\' action from the left sidebar and place it below the red arrow. Then, select an email template to send from the dropdown menu.'
    });

    Steps.pop({
      number: 'four',
      title: 'As you can see, we\'ve gone ahead and filled in the rest of your nurturing program for you.<br/><br/>When you\'re ready, click &ldquo;Confirm &amp; Save&rdquo; to put it into action!'
    });

    Hotspots.clear();
    Hotspots.pop({
      number: 1,
      position: {
        left: '212px',
        top: '174px'
      }
    });

    Hotspots.pop({
      number: 2,
      position: {
        left: '212px',
        top: '224px'
      }
    });

    $timeout(() => {
      Steps.activate('one');
    }, 100);
  };
}
