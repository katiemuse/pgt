import _ from 'lodash';

export default function run(
  $rootScope,
  $state,
  Steps,
  TopNavbar,
  $log,
  Drawer,
  $transitions,
  WizardHandler,
  $window,
  $location
) {
  $rootScope.$state = $state;
  $rootScope.allowJumpingStories = true;
  $rootScope.showMobilePopout = false;
  $rootScope.wizard = {
    stateIndex: -1
  };

  const deregisterMobilePopoutToggle = $rootScope.$on('mobile-popout:toggle', () => {
    $rootScope.showMobilePopout = !$rootScope.showMobilePopout;
  });

  const deregisterStepChanged = $rootScope.$on('wizard:stepChanged', (event, args) => {
    $rootScope.wizard.stateIndex = args.index;
  });

  $rootScope.closeMobilePopout = function(event) {
    $rootScope.showMobilePopout = false;
    WizardHandler.wizard('monitor').next();
    event.stopPropagation();
    return false;
  };

  $rootScope.progressStates = {
    0: ['welcome'],
    1: ['chapter-data'],
    2: ['chapter-flow'],
    3: ['chapter-builder'],
    4: ['chapter-mobile'],
    5: ['chapter-ai'],
    6: ['chapter-voice'],
    7: ['chapter-customer-app'],
    8: ['chapter-blockchain']
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
    $rootScope.progressIndex = $rootScope.getProgressIndex(trans.to().name);
    $rootScope.taskIndex = $rootScope.getTaskIndex(trans.to().name);
    $rootScope.canSkip =
      $rootScope.taskIndex + 1 <
      _.values($rootScope.progressStates[$rootScope.progressIndex]).length;
    $rootScope.canSkipPrevious = $rootScope.taskIndex - 1 >= 0;
    $rootScope.showMobilePopout = false;
    $window.gtag('config', 'UA-142664671-2', { page_path: $location.url() });
  });

  $rootScope.$on('$destroy', () => {
    deregisterOnSuccess();
    deregisterMobilePopoutToggle();
    deregisterStepChanged();
  });
}
