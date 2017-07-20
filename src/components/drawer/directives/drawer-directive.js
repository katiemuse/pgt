'use strict';

import '../styles/_drawer.scss';

angular.module('pardotInteractiveGuidedTour')
  .directive('drawer', function ($window, $rootScope, drawerRegisterEvents, $timeout, Hotspots) {
    var isInit = false;

    var bgEl, drawerEl;
    var bodyEl = angular.element(document.body);
    var DRAWER_MODE = {
      INTRO: 0,
      DID_YOU_KNOW: 1,
      HOTSPOTS: 2
    };

    function onResize() {
      var height = angular.element($window)[0].innerHeight + 'px';
      bgEl.css('height', height);
      if(drawerEl) {
        drawerEl.css('height', height);
      }
    }

    function init() {
      bgEl = angular.element(document.createElement('div'));
      bgEl.addClass('drawer-bg');


      /*bgEl.bind('click', function() {
        $rootScope.$emit('drawer-close');
      });
      */

      angular.element(document.body).append(bgEl);

      onResize();
      angular.element($window).bind('resize', onResize);
    }

    function openDrawer(mode) {

      if(mode == DRAWER_MODE.INTRO) {
        bgEl.addClass('active');
      }

      bodyEl.addClass('drawer-no-scroll');

      if(drawerEl &&
        (mode == DRAWER_MODE.INTRO || mode == DRAWER_MODE.DID_YOU_KNOW || mode == DRAWER_MODE.HOTSPOTS)) {
        drawerEl.addClass('active');
      }
    }

    function closeDrawer() {
      bgEl.removeClass('active');
      bodyEl.removeClass('drawer-no-scroll');

      if(drawerEl)
        drawerEl.removeClass('active');
    }

    return {
      restrict: 'AE',
      link: function (scope, element, attrs, TopNavbar) {
        if(!isInit) {
          init();
        }

        scope.drawer = {
          state: null,
          currentHotspot: null
        };

        scope.drawer.close = function() {
          $rootScope.$emit('drawer-close');
        };

        scope.deregDrawerOpenedToDidYouKnowEvent = null;
        scope.deregDrawerOpenedToIntroEvent = null;
        scope.deregDrawerOpenedToHotspotEvent = null;
        scope.deregDrawerClosedEvent = null;

        scope.$on("$destroy",function () {
          if (scope.deregDrawerOpenedToDidYouKnowEvent) scope.deregDrawerOpenedToDidYouKnowEvent();
          if (scope.deregDrawerOpenedToIntroEvent) scope.deregDrawerOpenedToIntroEvent();
          if (scope.deregDrawerOpenedToHotspotEvent) scope.deregDrawerOpenedToHotspotEvent();
          if (scope.deregDrawerClosedEvent) scope.deregDrawerClosedEvent();
          scope.deregDrawerOpenedToDidYouKnowEvent=null;
          scope.deregDrawerOpenedToIntroEvent=null;
          scope.deregDrawerOpenedToHotspotEvent=null;
          scope.deregDrawerClosedEvent=null;
        });

        if(!drawerRegisterEvents.isRegisteredDrawerOpenedToDidYouKnowEvent()){
          drawerRegisterEvents.registerDrawerOpenedToDidYouKnowEvent();
          scope.deregDrawerOpenedToDidYouKnowEvent = $rootScope.$on('drawer-open-to-did-you-know', function () {
            scope.drawer.mode = "did-you-know";
            openDrawer(DRAWER_MODE.DID_YOU_KNOW);
            $timeout(function(){
              $(".frame", drawerEl).sly("reload");
            }, 0)
          });
        }

        if(!drawerRegisterEvents.isRegisteredDrawerOpenedToIntroEvent()){
          drawerRegisterEvents.registerDrawerOpenedToIntroEvent();
          scope.deregDrawerOpenedToIntroEvent = $rootScope.$on('drawer-open-to-intro', function () {
            scope.drawer.mode = "intro";
            openDrawer(DRAWER_MODE.INTRO);
          });
        }

        if(!drawerRegisterEvents.isRegisterDrawerOpenedToHotspotEvent()){
          drawerRegisterEvents.registerDrawerOpenedToHotspotEvent();
          scope.deregDrawerOpenedToHotspotEvent = $rootScope.$on('drawer-open-to-hotspot', function (event, hotspot) {
            scope.drawer.mode = "hotspots";
            scope.drawer.currentHotspot = hotspot;
            openDrawer(DRAWER_MODE.HOTSPOTS);
            $timeout(function(){
              $(".frame", drawerEl).sly("reload");
            }, 0);
          });
        }

        if(!drawerRegisterEvents.isRegisterDrawerClosedEvent()){
          drawerRegisterEvents.registerDrawerClosedEvent();
          scope.deregDrawerClosedEvent = $rootScope.$on('drawer-close', function () {
            closeDrawer();
            Hotspots.activate(null);
            scope.drawer.currentHotspot = null;
            scope.drawer.mode = null;
          });
        }

        element.addClass('drawer');
        element.css('height', angular.element($window)[0].innerHeight + 'px');
        element.addClass('drawer-right');
        drawerEl = element;
      }
    }
  });