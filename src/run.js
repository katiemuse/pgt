import _ from 'lodash';

export default function run(
  $rootScope,
  $state,
  Steps,
  TopNavbar,
  $log,
  Drawer
) {
  $rootScope.$state = $state;
  $rootScope.allowJumpingStories = false;
  $rootScope.wizard = {
    stateIndex: -1
  };

  const x = $rootScope.$on('$stateChangeSuccess', () => {
    Drawer.close();
  });

  $rootScope.$on('$destroy', x);

  const y = $rootScope.$on('wizard:stepChanged', (event, args) => {
    $rootScope.wizard.stateIndex = args.index;
  });

  $rootScope.$on('$destroy', y);

  $rootScope.progressStates = {
    0: ['intro'],
    1: ['create-a-campaign'],
    2: [
      'build-a-form-and-landing-page',
      'form-builder',
      'landing-page',
      'form-completion-actions',
      'landing-page-builder'
    ],
    3: ['build-an-email', 'a-b-testing', 'email-preview', 'send-email'],
    4: ['view-a-prospect-profile'],
    5: [
      'engagement-studio',
      'engagement-studio-trigger',
      'engagement-studio-rule',
      'engagement-studio-test',
      'engagement-studio-report'
    ],
    6: ['assign-your-leads-to-sales', 'complete-action'],
    7: ['sales-view-in-salesforce'],
    8: [
      'salesforce-engage',
      'engage-campaigns',
      'engage-reports',
      'select-template'
    ],
    9: [
      'pardot-reporting',
      'click-through-rate-report',
      'advanced-email-report',
      'interaction-report',
      'email-client-report'
    ],
    10: ['the-end']
  };

  $rootScope.progressIndex = 0;

  $rootScope.getProgressIndex = function (stateName) {
    const existingState = _.find(_.values($rootScope.progressStates),
      stateArray => {
        return _.indexOf(stateArray, stateName) !== -1;
      });

    if (existingState) {
      return _.indexOf(_.values($rootScope.progressStates), existingState);
    }
    return -1;
  };

  const z = $rootScope.$on('$stateChangeStart', (
    event,
    toState
  ) => {
    $rootScope.progressIndex = $rootScope.getProgressIndex(toState.name);
    $rootScope.canSkip =
      $rootScope.progressIndex + 1 < _.values($rootScope.progressStates).length;
  });

  $rootScope.$on('$destroy', z);
}
