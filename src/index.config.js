export default function ($stateProvider, $urlRouterProvider, $provide) {
  $provide.decorator('$uiViewScroll', ($delegate, $window) => {
    return () => {
      $window.scrollTo(0, 0);
    };
  });

  const resetState = (TopNavbar, Hotspots) => {
    TopNavbar.DidYouKnowCount = 0;
    TopNavbar.DidYouKnowEnabled = false;
    TopNavbar.HotspotsCount = 0;
    TopNavbar.HotspotsEnabled = false;
    Hotspots.clear();
  };

  $stateProvider
    .state('intro', {
      url: '/',
      views: {
        monitor: {
          template: require('./partials/intro.html'),
          controller: 'IntroController'
        },
        drawer: {
          controller: 'IntroDrawerController',
          template: '<div></div>'
        },
        mobile: {
          template: require('./partials/intro.mobile.html')
        },
        'getting-started': {
          template: require('./partials/getting-started.html'),
          controller: 'IntroController'
        }
      },
      onEnter(TopNavbar, Drawer, Hotspots) {
        Drawer.close();
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('add-an-object', {
      url: '/add-an-object',
      views: {
        monitor: {
          template: require('./partials/1-add-an-object.html'),
          controller: 'AddAnObjectController'
        },
        drawer: {
          template: require('./partials/1-add-an-object.drawer.html'),
          controller: 'AddAnObjectDrawerController'
        },
        mobile: {
          template: require('./partials/build-a-data-model.mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('add-an-external-object', {
      url: '/add-an-external-object',
      views: {
        monitor: {
          template: require('./partials/4-add-an-external-object.html'),
          controller: 'AddAnExternalObjectController'
        },
        drawer: {
          template: require('./partials/4-add-an-external-object.drawer.html'),
          controller: 'AddAnExternalObjectDrawerController'
        },
        mobile: {
          template: require('./partials/build-a-data-model.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('einstein-builder', {
      url: '/einstein-builder',
      views: {
        monitor: {
          template: require('./partials/3-einstein-builder.html'),
          controller: 'EinsteinBuilderController'
        },
        drawer: {
          template: require('./partials/3-einstein-builder.drawer.html'),
          controller: 'EinsteinBuilderDrawerController'
        },
        mobile: {
          template: require('./partials/build-a-data-model.mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('heroku-connect', {
      url: '/heroku-connect',
      views: {
        monitor: {
          template: require('./partials/2-heroku-connect.html'),
          controller: 'HerokuConnectController'
        },
        drawer: {
          template: require('./partials/2-heroku-connect.drawer.html'),
          controller: 'HerokuConnectDrawerController'
        },
        mobile: {
          template: require('./partials/build-a-data-model.mobile.html')
        },
        phone: {
          template: require('./partials/2-heroku-connect.phone.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    // .state('build-a-schema', {
    //   url: '/build-a-schema',
    //   views: {
    //     monitor: {
    //       template: require('./app/1-build-a-data-model/partials/5-build-a-schema.html'),
    //       controller: 'BuildASchemaController'
    //     },
    //     drawer: {
    //       template: require('./app/1-build-a-data-model/partials/5-build-a-schema.drawer.html'),
    //       controller: 'BuildASchemaDrawerController'
    //     },
    //     mobile: {
    //       template: require('./mobile.html')
    //     }
    //   },
    //   onEnter(TopNavbar) {
    //     TopNavbar.DidYouKnowCount = 0;
    //     TopNavbar.DidYouKnowEnabled = false;
    //     TopNavbar.HotspotsCount = 0;
    //     TopNavbar.HotspotsEnabled = false;
    //   }
    // })
    .state('setup-a-workflow', {
      url: '/setup-a-workflow',
      views: {
        monitor: {
          template: require('./partials/1-setup-a-workflow.html'),
          controller: 'SetupAWorkflowController'
        },
        drawer: {
          template: require('./partials/1-setup-a-workflow.drawer.html'),
          controller: 'SetupAWorkflowDrawerController'
        },
        mobile: {
          template: require('./partials/add-logic.mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('choose-an-object-for-the-process', {
      url: '/choose-an-object-for-the-process',
      views: {
        monitor: {
          template: require('./partials/2-choose-an-object-for-the-process.html'),
          controller: 'ChooseAnObjectForTheProcessController'
        },
        drawer: {
          template: require('./partials/2-choose-an-object-for-the-process.drawer.html'),
          controller: 'ChooseAnObjectForTheProcessDrawerController'
        },
        mobile: {
          template: require('./partials/add-logic.mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('add-criteria', {
      url: '/add-criteria',
      views: {
        monitor: {
          template: require('./partials/3-add-criteria.html'),
          controller: 'AddCriteriaController'
        },
        drawer: {
          template: require('./partials/3-add-criteria.drawer.html'),
          controller: 'AddCriteriaDrawerController'
        },
        mobile: {
          template: require('./partials/add-logic.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('add-actions', {
      url: '/add-actions',
      views: {
        monitor: {
          template: require('./partials/4-add-actions.html'),
          controller: 'AddActionsController'
        },
        drawer: {
          template: require('./partials/4-add-actions.drawer.html'),
          controller: 'AddActionsDrawerController'
        },
        mobile: {
          template: require('./partials/add-logic.mobile.html')
        },
        phone: {
          template: require('./partials/4-add-actions.phone.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('iot', {
      url: '/iot',
      views: {
        monitor: {
          template: require('./partials/5-iot.html'),
          controller: 'IotController'
        },
        drawer: {
          template: require('./partials/5-iot.drawer.html'),
          controller: 'IotDrawerController'
        },
        mobile: {
          template: require('./partials/add-logic.mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('create-a-new-lightning-page', {
      url: '/create-a-new-lightning-page',
      views: {
        monitor: {
          template: require('./partials/1-create-a-new-lightning-page.html'),
          controller: 'CreateANewLightningPageController'
        },
        drawer: {
          template: require('./partials/1-create-a-new-lightning-page.drawer.html'),
          controller: 'CreateANewLightningPageDrawerController'
        },
        mobile: {
          template: require('./partials/build-your-app.mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('install-a-pre-built-component-from-appexchange', {
      url: '/install-a-pre-built-component-from-appexchange',
      views: {
        monitor: {
          template: require('./partials/3-install-a-pre-built-component-from-appexchange.html'),
          controller: 'InstallAPreBuiltComponentFromAppexchangeController'
        },
        drawer: {
          template: require('./partials/3-install-a-pre-built-component-from-appexchange.drawer.html'),
          controller: 'InstallAPreBuiltComponentFromAppexchangeDrawerController'
        },
        mobile: {
          template: require('./partials/build-your-app.mobile.html')
        },
        phone: {
          template: require('./partials/3-install-a-pre-built-component-from-appexchange.phone.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('create-an-app-from-base-and-custom-lightning-components', {
      url: '/create-an-app-from-base-and-custom-lightning-components',
      views: {
        monitor: {
          template: require('./partials/2-create-an-app-from-base-and-custom-lightning-components.html'),
          controller: 'CreateAnAppFromBaseAndCustomLightningComponentsController'
        },
        drawer: {
          template: require('./partials/2-create-an-app-from-base-and-custom-lightning-components.drawer.html'),
          controller: 'CreateAnAppFromBaseAndCustomLightningComponentsDrawerController'
        },
        mobile: {
          template: require('./partials/build-your-app.mobile.html')
        },
        phone: {
          template: require('./partials/2-create-an-app-from-base-and-custom-lightning-components.phone.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('add-custom-components', {
      url: '/add-custom-components',
      views: {
        monitor: {
          template: require('./partials/4-add-custom-components.html'),
          controller: 'AddCustomComponentsController'
        },
        drawer: {
          template: require('./partials/4-add-custom-components.drawer.html'),
          controller: 'AddCustomComponentsDrawerController'
        },
        phone: {
          template: require('./partials/4-add-custom-components.phone.html')
        },
        mobile: {
          template: require('./partials/build-your-app.mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('customize-a-page-layout', {
      url: '/customize-a-page-layout',
      views: {
        monitor: {
          template: require('./partials/5-customize-a-page-layout.html'),
          controller: 'CustomizeAPageLayoutController'
        },
        drawer: {
          template: require('./partials/5-customize-a-page-layout.drawer.html'),
          controller: 'CustomizeAPageLayoutDrawerController'
        },
        phone: {
          template: require('./partials/5-customize-a-page-layout.phone.html')
        },
        mobile: {
          template: require('./partials/build-your-app.mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('customize-navigation', {
      url: '/customize-navigation',
      views: {
        monitor: {
          template: require('./partials/6-customize-navigation.html'),
          controller: 'CustomizeNavigationController'
        },
        drawer: {
          template: require('./partials/6-customize-navigation.drawer.html'),
          controller: 'CustomizeNavigationDrawerController'
        },
        phone: {
          template: require('./partials/6-customize-navigation.phone.html')
        },
        mobile: {
          template: require('./partials/build-your-app.mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('create-a-custom-action', {
      url: '/create-a-custom-action',
      views: {
        monitor: {
          template: require('./partials/1-create-a-custom-action.html'),
          controller: 'CreateACustomActionController'
        },
        drawer: {
          template: require('./partials/1-create-a-custom-action.drawer.html'),
          controller: 'CreateACustomActionDrawerController'
        },
        mobile: {
          template: require('./partials/customize-mobile.mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('customize-the-action-bar', {
      url: '/customize-the-action-bar',
      views: {
        monitor: {
          template: require('./partials/2-customize-the-action-bar.html'),
          controller: 'CustomizeTheActionBarController'
        },
        drawer: {
          template: require('./partials/2-customize-the-action-bar.drawer.html'),
          controller: 'CustomizeTheActionBarDrawerController'
        },
        mobile: {
          template: require('./partials/customize-mobile.mobile.html')
        },
        phone: {
          template: require('./partials/2-customize-the-action-bar.phone.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('create-a-lightning-app-from-your-page', {
      url: '/create-a-lightning-app-from-your-page',
      views: {
        monitor: {
          template: require('./partials/3-create-a-lightning-app-from-your-page.html'),
          controller: 'CreateALightningAppFromYourPageController'
        },
        drawer: {
          template: require('./partials/3-create-a-lightning-app-from-your-page.drawer.html'),
          controller: 'CreateALightningAppFromYourPageDrawerController'
        },
        phone: {
          template: require('./partials/3-create-a-lightning-app-from-your-page.phone.html')
        },
        mobile: {
          template: require('./partials/customize-mobile.mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('outro', {
      url: '/outro',
      views: {
        monitor: {
          template: require('./partials/1-outro.html'),
          controller: 'OutroController'
        },
        drawer: {
          template: require('./partials/1-outro.drawer.html'),
          controller: 'OutroDrawerController'
        },
        mobile: {
          template: require('./partials/outro.mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    });

  $urlRouterProvider.otherwise('/');
}
