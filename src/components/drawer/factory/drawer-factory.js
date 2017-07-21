'use strict';

export default function drawerRegisterEvents() {
  const drawerFactory = {
    _DrawerOpenedToDidYouKnowEvent: false,
    _DrawerOpenedToIntroEvent: false,
    _DrawerOpenedToHotspotEvent: false,
    _DrawerClosedEvent: false,

    registerDrawerOpenedToDidYouKnowEvent() {
      this._DrawerOpenedToDidYouKnowEvent = true;
    },
    registerDrawerOpenedToIntroEvent() {
      this._DrawerOpenedToIntroEvent = true;
    },
    registerDrawerOpenedToHotspotEvent() {
      this._DrawerOpenedToHotspotEvent = true;
    },
    registerDrawerClosedEvent() {
      this._DrawerClosedEvent = true;
    },

    isRegisteredDrawerOpenedToDidYouKnowEvent() {
      return this._DrawerOpenedToDidYouKnowEvent;
    },
    isRegisteredDrawerOpenedToIntroEvent() {
      return this._DrawerOpenedToIntroEvent;
    },
    isRegisterDrawerOpenedToHotspotEvent() {
      return this._DrawerOpenedToHotspotEvent;
    },
    isRegisterDrawerClosedEvent() {
      return this._DrawerClosedEvent;
    }
  };
  return {
    registerDrawerOpenedToDidYouKnowEvent: drawerFactory.registerDrawerOpenedToDidYouKnowEvent,
    registerDrawerOpenedToIntroEvent: drawerFactory.registerDrawerOpenedToIntroEvent,
    registerDrawerOpenedToHotspotEvent: drawerFactory.registerDrawerOpenedToHotspotEvent,
    registerDrawerClosedEvent: drawerFactory.registerDrawerClosedEvent,
    isRegisteredDrawerOpenedToDidYouKnowEvent: drawerFactory.isRegisteredDrawerOpenedToDidYouKnowEvent,
    isRegisteredDrawerOpenedToIntroEvent: drawerFactory.isRegisteredDrawerOpenedToIntroEvent,
    isRegisterDrawerOpenedToHotspotEvent: drawerFactory.isRegisterDrawerOpenedToHotspotEvent,
    isRegisterDrawerClosedEvent: drawerFactory.isRegisterDrawerClosedEvent
  };
}
