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
    .state('welcome', {
      url: '/',
      views: {
        monitor: {
          template: require('./partials/welcome/desktop.html'),
          controller: 'WelcomeController'
        },
        drawer: {
          controller: 'WelcomeDrawerController',
          template: '<div></div>'
        },
        mobile: {
          template: require('./mobile.html')
        },
        'getting-started': {
          template: require('./partials/welcome/getting-started.html'),
          controller: 'WelcomeController'
        }
      },
      onEnter(TopNavbar, Drawer, Hotspots) {
        Drawer.close();
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('chapter-data', {
      url: '/chapter-data',
      views: {
        monitor: {
          template: require('./partials/chapter-data/desktop.html'),
          controller: 'ChapterDataController'
        },
        drawer: {
          template: require('./partials/chapter-data/drawer.html'),
          controller: 'ChapterDataDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('chapter-flow', {
      url: '/chapter-flow',
      views: {
        monitor: {
          template: require('./partials/chapter-flow/desktop.html'),
          controller: 'ChapterFlowController'
        },
        drawer: {
          template: require('./partials/chapter-flow/drawer.html'),
          controller: 'ChapterFlowDrawerController'
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
    .state('chapter-ai', {
      url: '/chapter-ai',
      views: {
        monitor: {
          template: require('./partials/chapter-ai/desktop.html'),
          controller: 'ChapterAIController'
        },
        drawer: {
          template: require('./partials/chapter-ai/drawer.html'),
          controller: 'ChapterAIDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('chapter-builder', {
      url: '/chapter-builder',
      views: {
        monitor: {
          template: require('./partials/chapter-builder/desktop.html'),
          controller: 'ChapterBuilderController'
        },
        drawer: {
          template: require('./partials/chapter-builder/drawer.html'),
          controller: 'ChapterBuilderDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        },
        phone: {
          template: require('./partials/chapter-builder/phone.html')
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
    .state('chapter-customer-app', {
      url: '/chapter-customer-app',
      views: {
        monitor: {
          template: require('./partials/chapter-customer-app/desktop.html'),
          controller: 'ChapterCustomerAppController'
        },
        drawer: {
          template: require('./partials/chapter-customer-app/drawer.html'),
          controller: 'ChapterCustomerAppDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('chapter-blockchain', {
      url: '/chapter-blockchain',
      views: {
        monitor: {
          template: require('./partials/chapter-blockchain/desktop.html'),
          controller: 'ChapterBlockchainController'
        },
        drawer: {
          template: require('./partials/chapter-blockchain/drawer.html'),
          controller: 'ChapterBlockchainDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('choose-process-object', {
      url: '/choose-process-object',
      views: {
        monitor: {
          template: require('./partials/choose-process-object/desktop.html'),
          controller: 'ChooseProcessObjectController'
        },
        drawer: {
          template: require('./partials/choose-process-object/drawer.html'),
          controller: 'ChooseProcessObjectDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('add-process-criteria', {
      url: '/add-process-criteria',
      views: {
        monitor: {
          template: require('./partials/add-process-criteria/desktop.html'),
          controller: 'AddCriteriaController'
        },
        drawer: {
          template: require('./partials/add-process-criteria/drawer.html'),
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
    .state('create-process-action', {
      url: '/create-process-action',
      views: {
        monitor: {
          template: require('./partials/create-process-action/desktop.html'),
          controller: 'CreateProcessActionController'
        },
        drawer: {
          template: require('./partials/create-process-action/drawer.html'),
          controller: 'CreateProcessActionDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        },
        phone: {
          template: require('./partials/create-process-action/phone.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('chapter-mobile', {
      url: '/chapter-mobile',
      views: {
        monitor: {
          template: require('./partials/chapter-mobile/desktop.html'),
          controller: 'ChapterMobileController'
        },
        drawer: {
          template: require('./partials/chapter-mobile/drawer.html'),
          controller: 'ChapterMobileDrawerController'
        },
        phone: {
          template: require('./partials/chapter-mobile/phone.html'),
          controller: 'ChapterMobilePhoneController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('chapter-voice', {
      url: '/chapter-voice',
      views: {
        monitor: {
          template: require('./partials/chapter-voice/desktop.html'),
          controller: 'ChapterVoiceController'
        },
        drawer: {
          template: require('./partials/chapter-voice/drawer.html'),
          controller: 'ChapterVoiceDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('add-appexchange-components', {
      url: '/add-appexchange-components',
      views: {
        monitor: {
          template: require('./partials/add-appexchange-components/desktop.html'),
          controller: 'AddAppexchangeComponentsController'
        },
        drawer: {
          template: require('./partials/add-appexchange-components/drawer.html'),
          controller: 'AddAppexchangeComponentsDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        },
        phone: {
          template: require('./partials/add-appexchange-components/phone.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('add-base-lightning-components', {
      url: '/add-base-lightning-components',
      views: {
        monitor: {
          template: require('./partials/add-base-lightning-components/desktop.html'),
          controller: 'AddBaseLightningComponentsController'
        },
        drawer: {
          template: require('./partials/add-base-lightning-components/drawer.html'),
          controller: 'AddBaseLightningComponentsDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        },
        phone: {
          template: require('./partials/add-base-lightning-components/phone.html')
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
          template: require('./partials/add-custom-components/desktop.html'),
          controller: 'AddCustomComponentsController'
        },
        drawer: {
          template: require('./partials/add-custom-components/drawer.html'),
          controller: 'AddCustomComponentsDrawerController'
        },
        phone: {
          template: require('./partials/add-custom-components/phone.html')
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('customize-page-layout', {
      url: '/customize-page-layout',
      views: {
        monitor: {
          template: require('./partials/customize-page-layout/desktop.html'),
          controller: 'CustomizePageLayoutController'
        },
        drawer: {
          template: require('./partials/customize-page-layout/drawer.html'),
          controller: 'CustomizePageLayoutDrawerController'
        },
        phone: {
          template: require('./partials/customize-page-layout/phone.html')
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('deploy-your-app', {
      url: '/deploy-your-app',
      views: {
        monitor: {
          template: require('./partials/deploy-your-app/desktop.html'),
          controller: 'DeployYourAppController'
        },
        drawer: {
          template: require('./partials/deploy-your-app/drawer.html'),
          controller: 'DeployYourAppDrawerController'
        },
        phone: {
          template: require('./partials/deploy-your-app/phone.html')
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('create-custom-actions', {
      url: '/create-custom-actions',
      views: {
        monitor: {
          template: require('./partials/create-custom-actions/desktop.html'),
          controller: 'CreateCustomActionsController'
        },
        drawer: {
          template: require('./partials/create-custom-actions/drawer.html'),
          controller: 'CreateCustomActionsDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('customize-action-bar', {
      url: '/customize-action-bar',
      views: {
        monitor: {
          template: require('./partials/customize-action-bar/desktop.html'),
          controller: 'CustomizeActionBarController'
        },
        drawer: {
          template: require('./partials/customize-action-bar/drawer.html'),
          controller: 'CustomizeActionBarDrawerController'
        },
        mobile: {
          template: require('./mobile.html')
        },
        phone: {
          template: require('./partials/customize-action-bar/phone.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('build-lightning-app', {
      url: '/build-lightning-app',
      views: {
        monitor: {
          template: require('./partials/build-lightning-app/desktop.html'),
          controller: 'BuildLightningAppController'
        },
        drawer: {
          template: require('./partials/build-lightning-app/drawer.html'),
          controller: 'BuildLightningAppDrawerController'
        },
        phone: {
          template: require('./mobile.html')
        },
        mobile: {
          template: require('./partials/create-custom-actions/mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
    .state('app-in-action', {
      url: '/app-in-action',
      views: {
        monitor: {
          template: require('./partials/app-in-action/desktop.html'),
          controller: 'OutroController'
        },
        drawer: {
          template: require('./partials/app-in-action/drawer.html'),
          controller: 'OutroDrawerController'
        },
        mobile: {
          template: require('./partials/app-in-action/mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    });

  $urlRouterProvider.otherwise('/');
}
