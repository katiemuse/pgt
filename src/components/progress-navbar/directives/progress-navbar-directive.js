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
    templateUrl: 'components/progress-navbar/partials/progress-navbar.html',
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
        canSkip: true
      };

      scope.$watch('progress.open', (newValue, oldValue) => {
        if (newValue !== oldValue) {
          if (newValue) {
            openProgressNavigation();
          } else {
            closeProgressNavigation();
          }

          // console.log('watch progress.open', newValue, oldValue);
        }
      });

      scope.progress.skipToNextSection = $event => {
        const progressStates = _.values($rootScope.progressStates);
        if ($rootScope.progressIndex + 1 < progressStates.length) {
          $state.go(progressStates[$rootScope.progressIndex + 1][0]);
          $event.preventDefault();
        }
      };

      scope.progress.startOver = $event => {
        const progressStates = _.values($rootScope.progressStates);
        $state.go(progressStates[0][0]);
        $event.preventDefault();
      };

      // when navigating, close the drawer
      const x = $rootScope.$on('$stateChangeStart', () => {
        scope.progress.open = false;
      });

      $rootScope.$on('$destroy', x);
    }
  };
}
