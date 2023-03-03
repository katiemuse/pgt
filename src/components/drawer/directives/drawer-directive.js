'use strict';

import angular from 'angular';
import '../styles/_drawer.scss';
import $ from 'jquery';
import '../../../assets/js/sly.min';

export default function drawer($window, $rootScope, drawerRegisterEvents, $timeout, Hotspots, $document) {
  const isInit = false;

  let bgEl;
  let drawerEl;
  const bodyEl = angular.element($document.body);
  const DRAWER_MODE = {
    INTRO: 0,
    DID_YOU_KNOW: 1,
    HOTSPOTS: 2
  };

  function onResize() {
    const height = angular.element($window)[0].innerHeight - 99 + 'px';
    bgEl.css('height', height);
    if (drawerEl) {
      drawerEl.css('height', height);
    }
  }

  function init() {
    bgEl = bodyEl.append('<div class="drawer-bg"></div>');

    onResize();
    angular.element($window).bind('resize', onResize);
  }

  function openDrawer(mode) {
    if (mode === DRAWER_MODE.INTRO) {
      bgEl.addClass('active');
    }

    bodyEl.addClass('drawer-no-scroll');

    if (drawerEl &&
      (mode === DRAWER_MODE.INTRO || mode === DRAWER_MODE.DID_YOU_KNOW || mode === DRAWER_MODE.HOTSPOTS)) {
      drawerEl.addClass('active');
    }
  }

  function closeDrawer() {
    bgEl.removeClass('active');
    bodyEl.removeClass('drawer-no-scroll');

    if (drawerEl) {
      drawerEl.removeClass('active');
    }
  }

  return {
    restrict: 'AE',
    link(scope, element) {
      if (!isInit) {
        init();
      }

      scope.drawer = {
        state: null,
        currentHotspot: null
      };

      scope.drawer.close = function () {
        $rootScope.$emit('drawer-close');
      };

      scope.deregDrawerOpenedToDidYouKnowEvent = null;
      scope.deregDrawerOpenedToIntroEvent = null;
      scope.deregDrawerOpenedToHotspotEvent = null;
      scope.deregDrawerClosedEvent = null;

      scope.$on('$destroy', () => {
        if (scope.deregDrawerOpenedToDidYouKnowEvent) {
          scope.deregDrawerOpenedToDidYouKnowEvent();
        }
        if (scope.deregDrawerOpenedToIntroEvent) {
          scope.deregDrawerOpenedToIntroEvent();
        }
        if (scope.deregDrawerOpenedToHotspotEvent) {
          scope.deregDrawerOpenedToHotspotEvent();
        }
        if (scope.deregDrawerClosedEvent) {
          scope.deregDrawerClosedEvent();
        }
        scope.deregDrawerOpenedToDidYouKnowEvent = null;
        scope.deregDrawerOpenedToIntroEvent = null;
        scope.deregDrawerOpenedToHotspotEvent = null;
        scope.deregDrawerClosedEvent = null;
      });

      if (!drawerRegisterEvents.isRegisteredDrawerOpenedToDidYouKnowEvent()) {
        drawerRegisterEvents.registerDrawerOpenedToDidYouKnowEvent();
        scope.deregDrawerOpenedToDidYouKnowEvent = $rootScope.$on('drawer-open-to-did-you-know', () => {
          scope.drawer.mode = 'did-you-know';
          openDrawer(DRAWER_MODE.DID_YOU_KNOW);
          $timeout(() => {
            /* eslint-disable */
            $('.frame', drawerEl).sly('reload');
            /* eslint-enable */
          }, 0);
        });
      }

      if (!drawerRegisterEvents.isRegisteredDrawerOpenedToIntroEvent()) {
        drawerRegisterEvents.registerDrawerOpenedToIntroEvent();
        scope.deregDrawerOpenedToIntroEvent = $rootScope.$on('drawer-open-to-intro', () => {
          scope.drawer.mode = 'intro';
          openDrawer(DRAWER_MODE.INTRO);
        });
      }

      if (!drawerRegisterEvents.isRegisterDrawerOpenedToHotspotEvent()) {
        drawerRegisterEvents.registerDrawerOpenedToHotspotEvent();
        scope.deregDrawerOpenedToHotspotEvent = $rootScope.$on('drawer-open-to-hotspot', (event, hotspot) => {
          scope.drawer.mode = 'hotspots';
          scope.drawer.currentHotspot = hotspot;
          openDrawer(DRAWER_MODE.HOTSPOTS);
          $timeout(() => {
            /* eslint-disable */
            $('.frame', drawerEl).sly('reload');
            /* eslint-enable */
          }, 0);
        });
      }

      if (!drawerRegisterEvents.isRegisterDrawerClosedEvent()) {
        drawerRegisterEvents.registerDrawerClosedEvent();
        scope.deregDrawerClosedEvent = $rootScope.$on('drawer-close', () => {
          closeDrawer();
          Hotspots.activate(null);
          scope.drawer.currentHotspot = null;
          scope.drawer.mode = null;
        });
      }

      element.addClass('drawer');
      element.css('height', angular.element($window)[0].innerHeight - 100 + 'px');
      element.addClass('drawer-right');
      drawerEl = element;
    }
  };
}
