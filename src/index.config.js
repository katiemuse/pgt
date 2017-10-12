export default function ($stateProvider, $urlRouterProvider, $provide) {
  $provide.decorator('$uiViewScroll', ($delegate, $window) => {
    return () => {
      $window.scrollTo(0, 0);
    };
  });

  $stateProvider
    .state('intro', {
      url: '/',
      views: {
        monitor: {
          template: require('./app/0-intro/partials/intro.html'),
          controller: 'IntroController'
        },
        drawer: {
          controller: 'IntroDrawerController',
          template: '<div></div>'
        },
        mobile: {
          template: require('./mobile.html')
        },
        'getting-started': {
          template: require('./app/0-intro/partials/getting-started.html'),
          controller: 'IntroController'
        }
      },
      onEnter(TopNavbar, Drawer) {
        Drawer.close();
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('add-an-object', {
      url: '/add-an-object',
      views: {
        monitor: {
          template: require('./app/1-build-a-data-model/partials/1-add-an-object.html'),
          controller: 'AddAnObjectController'
        },
        drawer: {
          template: require('./app/1-build-a-data-model/partials/1-add-an-object.drawer.html'),
          controller: 'AddAnObjectDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('add-an-external-object', {
      url: '/add-an-external-object',
      views: {
        monitor: {
          template: require('./app/1-build-a-data-model/partials/4-add-an-external-object.html'),
          controller: 'AddAnExternalObjectController'
        },
        drawer: {
          template: require('./app/1-build-a-data-model/partials/4-add-an-external-object.drawer.html'),
          controller: 'AddAnExternalObjectDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
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
          template: require('./app/1-build-a-data-model/partials/3-einstein-builder.html'),
          controller: 'EinsteinBuilderController'
        },
        drawer: {
          template: require('./app/1-build-a-data-model/partials/3-einstein-builder.drawer.html'),
          controller: 'EinsteinBuilderDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('heroku-connect', {
      url: '/heroku-connect',
      views: {
        monitor: {
          template: require('./app/1-build-a-data-model/partials/2-heroku-connect.html'),
          controller: 'HerokuConnectController'
        },
        drawer: {
          template: require('./app/1-build-a-data-model/partials/2-heroku-connect.drawer.html'),
          controller: 'HerokuConnectDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        },
        phone: {
          template: require('./app/1-build-a-data-model/partials/2-heroku-connect.phone.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.DidYouKnowActive = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
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
          template: require('./app/2-add-logic/partials/1-setup-a-workflow.html'),
          controller: 'SetupAWorkflowController'
        },
        drawer: {
          template: require('./app/2-add-logic/partials/1-setup-a-workflow.drawer.html'),
          controller: 'SetupAWorkflowDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('choose-an-object-for-the-process', {
      url: '/choose-an-object-for-the-process',
      views: {
        monitor: {
          template: require('./app/2-add-logic/partials/2-choose-an-object-for-the-process.html'),
          controller: 'ChooseAnObjectForTheProcessController'
        },
        drawer: {
          template: require('./app/2-add-logic/partials/2-choose-an-object-for-the-process.drawer.html'),
          controller: 'ChooseAnObjectForTheProcessDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('add-criteria', {
      url: '/add-criteria',
      views: {
        monitor: {
          template: require('./app/2-add-logic/partials/3-add-criteria.html'),
          controller: 'AddCriteriaController'
        },
        drawer: {
          template: require('./app/2-add-logic/partials/3-add-criteria.drawer.html'),
          controller: 'AddCriteriaDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
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
          template: require('./app/2-add-logic/partials/4-add-actions.html'),
          controller: 'AddActionsController'
        },
        drawer: {
          template: require('./app/2-add-logic/partials/4-add-actions.drawer.html'),
          controller: 'AddActionsDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('iot', {
      url: '/iot',
      views: {
        monitor: {
          template: require('./app/2-add-logic/partials/5-iot.html'),
          controller: 'IotController'
        },
        drawer: {
          template: require('./app/2-add-logic/partials/5-iot.drawer.html'),
          controller: 'IotDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('create-a-new-lightning-page', {
      url: '/create-a-new-lightning-page',
      views: {
        monitor: {
          template: require('./app/3-build-your-app/partials/1-create-a-new-lightning-page.html'),
          controller: 'CreateANewLightningPageController'
        },
        drawer: {
          template: require('./app/3-build-your-app/partials/1-create-a-new-lightning-page.drawer.html'),
          controller: 'CreateANewLightningPageDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('install-a-pre-built-component-from-appexchange', {
      url: '/install-a-pre-built-component-from-appexchange',
      views: {
        monitor: {
          template: require('./app/3-build-your-app/partials/3-install-a-pre-built-component-from-appexchange.html'),
          controller: 'InstallAPreBuiltComponentFromAppexchangeController'
        },
        drawer: {
          template: require('./app/3-build-your-app/partials/3-install-a-pre-built-component-from-appexchange.drawer.html'),
          controller: 'InstallAPreBuiltComponentFromAppexchangeDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('create-an-app-from-base-and-custom-lightning-components', {
      url: '/create-an-app-from-base-and-custom-lightning-components',
      views: {
        monitor: {
          template: require('./app/3-build-your-app/partials/2-create-an-app-from-base-and-custom-lightning-components.html'),
          controller: 'CreateAnAppFromBaseAndCustomLightningComponentsController'
        },
        drawer: {
          template: require('./app/3-build-your-app/partials/2-create-an-app-from-base-and-custom-lightning-components.drawer.html'),
          controller: 'CreateAnAppFromBaseAndCustomLightningComponentsDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('add-custom-components', {
      url: '/add-custom-components',
      views: {
        monitor: {
          template: require('./app/3-build-your-app/partials/4-add-custom-components.html'),
          controller: 'AddCustomComponentsController'
        },
        drawer: {
          template: require('./app/3-build-your-app/partials/4-add-custom-components.drawer.html'),
          controller: 'AddCustomComponentsDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('customize-a-page-layout', {
      url: '/customize-a-page-layout',
      views: {
        monitor: {
          template: require('./app/3-build-your-app/partials/5-customize-a-page-layout.html'),
          controller: 'CustomizeAPageLayoutController'
        },
        drawer: {
          template: require('./app/3-build-your-app/partials/5-customize-a-page-layout.drawer.html'),
          controller: 'CustomizeAPageLayoutDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('customize-navigation', {
      url: '/customize-navigation',
      views: {
        monitor: {
          template: require('./app/3-build-your-app/partials/6-customize-navigation.html'),
          controller: 'CustomizeNavigationController'
        },
        drawer: {
          template: require('./app/3-build-your-app/partials/6-customize-navigation.drawer.html'),
          controller: 'CustomizeNavigationDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('create-a-custom-action', {
      url: '/create-a-custom-action',
      views: {
        monitor: {
          template: require('./app/4-customize-mobile/partials/1-create-a-custom-action.html'),
          controller: 'CreateACustomActionController'
        },
        drawer: {
          template: require('./app/4-customize-mobile/partials/1-create-a-custom-action.drawer.html'),
          controller: 'CreateACustomActionDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('customize-the-action-bar', {
      url: '/customize-the-action-bar',
      views: {
        monitor: {
          template: require('./app/4-customize-mobile/partials/2-customize-the-action-bar.html'),
          controller: 'CustomizeTheActionBarController'
        },
        drawer: {
          template: require('./app/4-customize-mobile/partials/2-customize-the-action-bar.drawer.html'),
          controller: 'CustomizeTheActionBarDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('end', {
      url: '/end',
      views: {
        monitor: {
          template: require('./app/4-customize-mobile/partials/3-end.html'),
          controller: 'EndController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    });

  $urlRouterProvider.otherwise('/');
}
