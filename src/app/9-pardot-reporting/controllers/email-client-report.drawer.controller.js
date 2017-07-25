'use strict';

export default function EmailClientReportDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout, $document) {
  Steps.clear();
  Steps.pop({
    number: 'one',
    title: 'View a breakdown of the email clients and devices used to open your emails. When you\'re done looking at the reports, click &ldquo;Done&rdquo;.'
  });

  $timeout(() => {
    $document[0].getElementById('report-link').className += ' active';
    $document[0].getElementById('interaction-link').className += ' active';
    $document[0].getElementById('click-through-link').className += ' active';
    $document[0].getElementById('done-button').className += ' active';
  }, 0);

  $timeout(() => {
    Steps.activate('one');
  }, 1000);
}
