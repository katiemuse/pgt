'use strict';

export default function ClickThroughRateReportDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout, $document) {
  Steps.clear();
  Steps.pop({
    number: 'one',
    title: 'Get a visual look at your click-through rates with this report.'
  });

  $timeout(() => {
    Hotspots.clear();
    Hotspots.pop({
      number: 1,
      position: {
        left: '229px',
        top: '281px'
      }
    });

    $document[0].getElementById('report-link').className += ' active';
    $document[0].getElementById('interaction-link').className += ' active';
    $document[0].getElementById('email-client-link').className += ' active';
    $document[0].getElementById('done-button').className += ' active';
  }, 0);

  $timeout(() => {
    Steps.activate('one');
  }, 1000);
}
