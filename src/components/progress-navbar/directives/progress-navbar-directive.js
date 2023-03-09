'use strict';

import angular from 'angular';
import * as _ from 'lodash';
import '../styles/_progress-navbar.scss';

export default function progressNavbar($rootScope, $window, $state, $document) {
  const isInit = false;
  let bgEl;
  const bodyEl = angular.element($document.body);

  function init() {
    bgEl = bodyEl.append('<div class="progress-bg"></div>');

    onResize();
    angular.element($window).bind('resize', onResize);
  }

  function openProgressNavigation() {
    bodyEl.addClass('progress-no-scroll');
  }

  function closeProgressNavigation() {
    bodyEl.removeClass('progress-no-scroll');
  }

  function onResize() {
    const height = angular.element(window)[0].innerHeight + 'px';
    bgEl.css('height', height);
  }

  return {
    restrict: 'AE',
    template: require('../partials/progress-navbar.html'),
    scope: {},
    link: scope => {
      if (!isInit) {
        init();
      }

      angular.element($document[0].getElementsByClassName('progress-bg')[0]).on('click', e => {
        scope.$apply(() => {
          scope.progress.open = false;
        });
        e.preventDefault();
        return false;
      });

      scope.progress = {
        open: false,
        toggleOpen: () => {
          scope.progress.open = !scope.progress.open;
        },
        canSkip: true,
        canSkipPrevious: false
      };

      scope.$watch('progress.open', (newValue, oldValue) => {
        if (newValue !== oldValue) {
          if (newValue) {
            openProgressNavigation();
          } else {
            closeProgressNavigation();
          }
        }
      });

      const unregisterCanSkip = scope.$watch('canSkip', (newValue, oldValue) => {
        if (newValue !== oldValue) {
          scope.progress.canSkip = newValue;
        }
      });

      const unregisterCanSkipPrevious = scope.$watch('canSkipPrevious', (newValue, oldValue) => {
        if (newValue !== oldValue) {
          scope.progress.canSkipPrevious = newValue;
        }
      });

      scope.progress.skipToNextTask = $event => {
        const progressStates = _.values($rootScope.progressStates);
        if ($rootScope.taskIndex + 1 < progressStates[$rootScope.progressIndex].length) {
          $state.go(progressStates[$rootScope.progressIndex][$rootScope.taskIndex + 1]);
          $event.preventDefault();
        }
      };

      scope.progress.skipToPreviousTask = $event => {
        const progressStates = _.values($rootScope.progressStates);
        if ($rootScope.taskIndex - 1 >= 0) {
          $state.go(progressStates[$rootScope.progressIndex][$rootScope.taskIndex - 1]);
          $event.preventDefault();
        }
      };

      scope.progress.startOver = $event => {
        const progressStates = _.values($rootScope.progressStates);
        $state.go(progressStates[0][0]);
        $event.preventDefault();
      };

      scope.resetStep = route => {
        $state.go(route, $state.params, { reload: true });
      };

      scope.gtmTrack = label => {
        window.dataLayer.push({
          event: 'eventTracker',
          eventCat: 'navigation',
          eventAct: window.location.href,
          eventLbl: label,
          nonInteraction: false
        });
      };

      // when navigating, close the drawer
      const unregisterStateChangeStart = $rootScope.$on('$stateChangeStart', () => {
        scope.progress.open = false;
      });

      $rootScope.$on('$destroy', () => {
        unregisterStateChangeStart();
        unregisterCanSkip();
        unregisterCanSkipPrevious();
      });
    }
  };
}
