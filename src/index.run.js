import _ from 'lodash';

export default function run(
  $rootScope,
  $state,
  Steps,
  TopNavbar,
  $log,
  Drawer,
  $transitions
) {
  $rootScope.$state = $state;
  $rootScope.allowJumpingStories = true;
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
    1: [
      'add-an-object',
      'add-an-external-object',
      'heroku-connect',
      'build-a-schema'
    ],
    2: [
      'setup-a-workflow',
      'choose-an-object-for-the-process',
      'add-criteria',
      'add-actions'
    ],
    3: [
      'create-a-new-lightning-page',
      'install-a-pre-built-component-from-appexchange'
    ],
    4: ['view-a-prospect-profile'],
    5: [
      'engagement-studio',
      'engagement-studio-trigger',
      'engagement-studio-rule',
      'engagement-studio-test',
      'engagement-studio-report',
      'set-up-a-lead-nurturing-campaign'
    ]
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

  const z = $transitions.onSuccess({ }, trans => {
    $rootScope.progressIndex = $rootScope.getProgressIndex(trans.to().name);
    $rootScope.canSkip =
      $rootScope.progressIndex + 1 < _.values($rootScope.progressStates).length;
  });

  $rootScope.$on('$destroy', z);
}
