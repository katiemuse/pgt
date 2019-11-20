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
          template: require('./partials/welcome/mobile.html')
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
    .state('outro', {
      url: '/outro',
      views: {
        monitor: {
          template: require('./partials/outro/desktop.html'),
          controller: 'OutroController'
        }
      },
      onEnter(TopNavbar, Hotspots) {
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
          template: require('./partials/chapter-data/mobile.html'),
          controller: 'ChapterDataMobileController'
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
        phone: {
          template: require('./partials/chapter-ai/phone.html'),
          controller: 'ChapterAIPhoneController'
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
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    })
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
        phone: {
          template: require('./partials/chapter-blockchain/phone.html'),
          controller: 'ChapterBlockchainPhoneController'
        },
        mobile: {
          template: require('./mobile.html')
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
          template: require('./partials/chapter-mobile/mobile.html')
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
        phone: {
          template: require('./partials/chapter-voice/phone.html'),
          controller: 'ChapterVoicePhoneController'
        },
        mobile: {
          template: require('./mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        resetState(TopNavbar, Hotspots);
      }
    });

  $urlRouterProvider.otherwise('/');
}
