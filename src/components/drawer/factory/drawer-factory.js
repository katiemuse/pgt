'use strict';
/**
 * @ngdoc factory
 * @name pardotInteractiveGuidedTour.drawer
 * @description
 * # drawer
 * Factory in the pardotInteractiveGuidedTour.
 */
angular.module('pardotInteractiveGuidedTour')
  .factory('drawerRegisterEvents', function() {

  var drawerFactory = {
    _DrawerOpenedToDidYouKnowEvent: false,
    _DrawerOpenedToIntroEvent: false,
    _DrawerOpenedToHotspotEvent: false,
    _DrawerClosedEvent: false,

    registerDrawerOpenedToDidYouKnowEvent: function(){
      this._DrawerOpenedToDidYouKnowEvent = true;
    },
    registerDrawerOpenedToIntroEvent: function(){
      this._DrawerOpenedToIntroEvent = true;
    },
    registerDrawerOpenedToHotspotEvent: function(){
      this._DrawerOpenedToHotspotEvent = true;
    },
    registerDrawerClosedEvent: function(){
      this._DrawerClosedEvent = true;
    },

    isRegisteredDrawerOpenedToDidYouKnowEvent: function(){
      return this._DrawerOpenedToDidYouKnowEvent;
    },
    isRegisteredDrawerOpenedToIntroEvent: function(){
      return this._DrawerOpenedToIntroEvent;
    },
    isRegisterDrawerOpenedToHotspotEvent: function(){
      return this._DrawerOpenedToHotspotEvent;
    },
    isRegisterDrawerClosedEvent: function(){
      return this._DrawerClosedEvent;
    }
  }
  return {
    registerDrawerOpenedToDidYouKnowEvent: drawerFactory.registerDrawerOpenedToDidYouKnowEvent,
    registerDrawerOpenedToIntroEvent: drawerFactory.registerDrawerOpenedToIntroEvent,
    registerDrawerOpenedToHotspotEvent: drawerFactory.registerDrawerOpenedToHotspotEvent,
    registerDrawerClosedEvent: drawerFactory.registerDrawerClosedEvent,
    isRegisteredDrawerOpenedToDidYouKnowEvent: drawerFactory.isRegisteredDrawerOpenedToDidYouKnowEvent,
    isRegisteredDrawerOpenedToIntroEvent: drawerFactory.isRegisteredDrawerOpenedToIntroEvent,
    isRegisterDrawerOpenedToHotspotEvent: drawerFactory.isRegisterDrawerOpenedToHotspotEvent,
    isRegisterDrawerClosedEvent: drawerFactory.isRegisterDrawerClosedEvent
  }
});