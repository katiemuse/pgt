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
  $rootScope.showMobilePopout = false;
  $rootScope.wizard = {
    stateIndex: -1
  };

  // const x = $transitions.onSuccess({ }, () => {
  //   Drawer.close();
  // });

  // $rootScope.$on('$destroy', x);

  const deregisterMobilePopoutToggle = $rootScope.$on('mobile-popout:toggle', () => {
    $rootScope.showMobilePopout = !$rootScope.showMobilePopout;
  });

  const deregisterStepChanged = $rootScope.$on('wizard:stepChanged', (event, args) => {
    $rootScope.wizard.stateIndex = args.index;
  });

  $rootScope.closeMobilePopout = function() {
    $rootScope.showMobilePopout = false;
  };

  $rootScope.progressStates = {
    0: ['intro'],
    1: [
      'add-an-object',
      'heroku-connect',
      'einstein-builder'
      // ,'build-a-schema'
    ],
    2: [
      'setup-a-workflow',
      'choose-an-object-for-the-process',
      'add-criteria',
      'add-actions',
      'iot'
    ],
    3: [
      'create-a-new-lightning-page',
      'install-a-pre-built-component-from-appexchange',
      'create-an-app-from-base-and-custom-lightning-components',
      'add-custom-components',
      'customize-a-page-layout',
      'customize-navigation'
    ],
    4: ['create-a-custom-action', 'customize-the-action-bar', 'create-a-lightning-app-from-your-page']
  };

  $rootScope.progressIndex = 0;
  $rootScope.taskIndex = 0;

  $rootScope.getProgressIndex = function(stateName) {
    const existingState = _.find(
      _.values($rootScope.progressStates),
      stateArray => {
        return _.indexOf(stateArray, stateName) !== -1;
      }
    );

    if (existingState) {
      return _.indexOf(_.values($rootScope.progressStates), existingState);
    }
    return -1;
  };

  $rootScope.getTaskIndex = function(stateName) {
    const existingStateIndex = _.findIndex(
      _.values($rootScope.progressStates),
      stateArray => {
        return _.indexOf(stateArray, stateName) !== -1;
      }
    );

    if (existingStateIndex > -1) {
      return _.indexOf(
        _.values($rootScope.progressStates[existingStateIndex]),
        stateName
      );
    }
    return -1;
  };

  const deregisterOnSuccess = $transitions.onSuccess({}, trans => {
    // if (s && s.t && trans.to().name !== '') {
    //   s.pageName = `platformtour:` + trans.to().name;
    //   s.t();
    // }

    $rootScope.progressIndex = $rootScope.getProgressIndex(trans.to().name);
    $rootScope.taskIndex = $rootScope.getTaskIndex(trans.to().name);
    $rootScope.canSkip =
      $rootScope.taskIndex + 1 <
      _.values($rootScope.progressStates[$rootScope.progressIndex]).length;
    $rootScope.canSkipPrevious = $rootScope.taskIndex - 1 >= 0;
  });

  $rootScope.$on('$destroy', () => {
    deregisterOnSuccess();
    deregisterMobilePopoutToggle();
    deregisterStepChanged();
  });
}
