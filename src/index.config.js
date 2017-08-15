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
          template: require('./app/0-intro/partials/intro.html')
        },
        drawer: {
          controller: 'IntroDrawerController',
          template: '<div></div>'
        },
        mobile: {
          template: require('./app/1-build-a-data-model/partials/1-add-an-object.mobile.html')
        },
        intro: {
          template: require('./app/0-intro/partials/intro.mobile.html')
        },
        'getting-started': {
          template: require('./app/0-intro/partials/getting-started.html')
        }
      },
      onEnter(TopNavbar) {
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
          template: require('./app/1-build-a-data-model/partials/1-add-an-object.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 2;
        TopNavbar.HotspotsEnabled = true;
      }
    })
    .state('add-an-external-object', {
      url: '/add-an-external-object',
      views: {
        monitor: {
          template: require('./app/1-build-a-data-model/partials/2-add-an-external-object.html'),
          controller: 'AddAnExternalObjectController'
        },
        drawer: {
          template: require('./app/1-build-a-data-model/partials/2-add-an-external-object.drawer.html'),
          controller: 'AddAnExternalObjectDrawerController'
        },
        mobile: {
          template: require('./app/1-build-a-data-model/partials/2-add-an-external-object.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 2;
        TopNavbar.HotspotsEnabled = true;
      }
    })
    .state('heroku-connect', {
      url: '/heroku-connect',
      views: {
        monitor: {
          template: require('./app/1-build-a-data-model/partials/4-heroku-connect.html'),
          controller: 'HerokuConnectController'
        },
        drawer: {
          template: require('./app/1-build-a-data-model/partials/4-heroku-connect.drawer.html'),
          controller: 'HerokuConnectDrawerController'
        },
        mobile: {
          template: require('./app/1-build-a-data-model/partials/4-heroku-connect.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 2;
        TopNavbar.HotspotsEnabled = true;
      }
    })
    .state('build-a-schema', {
      url: '/build-a-schema',
      views: {
        monitor: {
          template: require('./app/1-build-a-data-model/partials/5-build-a-schema.html'),
          controller: 'BuildASchemaController'
        },
        drawer: {
          template: require('./app/1-build-a-data-model/partials/5-build-a-schema.drawer.html'),
          controller: 'BuildASchemaDrawerController'
        },
        mobile: {
          template: require('./app/1-build-a-data-model/partials/5-build-a-schema.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 2;
        TopNavbar.HotspotsEnabled = true;
      }
    })
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
          template: require('./app/2-add-logic/partials/1-setup-a-workflow.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 2;
        TopNavbar.HotspotsEnabled = true;
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
          template: require('./app/2-add-logic/partials/1-setup-a-workflow.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 1;
        TopNavbar.HotspotsCount = 2;
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
          template: require('./app/2-add-logic/partials/1-setup-a-workflow.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 1;
        TopNavbar.HotspotsCount = 1;
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
          template: require('./app/2-add-logic/partials/1-setup-a-workflow.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 4;
        TopNavbar.HotspotsCount = 0;
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
          template: require('./app/3-build-your-app/partials/2-install-a-pre-built-component-from-appexchange.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 3;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('install-a-pre-built-component-from-appexchange', {
      url: '/install-a-pre-built-component-from-appexchange',
      views: {
        monitor: {
          template: require('./app/3-build-your-app/partials/2-install-a-pre-built-component-from-appexchange.html'),
          controller: 'InstallAPreBuiltComponentFromAppexchangeController'
        },
        drawer: {
          template: require('./app/3-build-your-app/partials/2-install-a-pre-built-component-from-appexchange.drawer.html'),
          controller: 'InstallAPreBuiltComponentFromAppexchangeDrawerController'
        },
        mobile: {
          template: require('./app/3-build-your-app/partials/2-install-a-pre-built-component-from-appexchange.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 2;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('email-preview', {
      url: '/email-preview',
      views: {
        monitor: {
          template: require('./app/3-build-your-app/partials/email-preview.html'),
          controller: 'EmailPreviewController'
        },
        drawer: {
          template: require('./app/3-build-your-app/partials/email-preview.drawer.html'),
          controller: 'EmailPreviewDrawerController'
        },
        mobile: {
          template: require('./app/3-build-your-app/partials/2-install-a-pre-built-component-from-appexchange.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 1;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('send-email', {
      url: '/send-email',
      views: {
        monitor: {
          template: require('./app/3-build-your-app/partials/send-email.html'),
          controller: 'SendEmailController'
        },
        drawer: {
          template: require('./app/3-build-your-app/partials/send-email.drawer.html'),
          controller: 'SendEmailDrawerController'
        },
        mobile: {
          template: require('./app/3-build-your-app/partials/2-install-a-pre-built-component-from-appexchange.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 1;
        TopNavbar.HotspotsCount = 1;
        TopNavbar.HotspotsEnabled = true;
      }
    })
    .state('view-a-prospect-profile', {
      url: '/view-a-prospect-profile',
      views: {
        monitor: {
          template: require('./app/4-customize-mobile/partials/view-a-prospect-profile.html'),
          controller: 'ViewAProspectProfileController'
        },
        drawer: {
          template: require('./app/4-customize-mobile/partials/view-a-prospect-profile.drawer.html'),
          controller: 'ViewAProspectProfileDrawerController'
        },
        mobile: {
          template: require('./app/4-customize-mobile/partials/view-a-prospect-profile.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 1;
        TopNavbar.HotspotsCount = 3;
        TopNavbar.HotspotsEnabled = true;
      }
    })
    .state('engagement-studio', {
      url: '/engagement-studio',
      views: {
        monitor: {
          template: require('./app/5-in-the-field/partials/engagement-studio.html'),
          controller: 'EngagementStudioController'

        },
        drawer: {
          template: require('./app/5-in-the-field/partials/engagement-studio.drawer.html'),
          controller: 'EngagementStudioDrawerController'
        },
        mobile: {
          template: require('./app/5-in-the-field/partials/engagement-studio.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 2;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('engagement-studio-trigger', {
      url: '/engagement-studio-trigger',
      views: {
        monitor: {
          template: require('./app/5-in-the-field/partials/engagement-studio-trigger.html'),
          controller: 'EngagementStudioTriggerController'

        },
        drawer: {
          template: require('./app/5-in-the-field/partials/engagement-studio-trigger.drawer.html'),
          controller: 'EngagementStudioTriggerDrawerController'
        },
        mobile: {
          template: require('./app/5-in-the-field/partials/engagement-studio.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 2;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('engagement-studio-rule', {
      url: '/engagement-studio-rule',
      views: {
        monitor: {
          template: require('./app/5-in-the-field/partials/engagement-studio-rule.html'),
          controller: 'EngagementStudioRuleController'

        },
        drawer: {
          template: require('./app/5-in-the-field/partials/engagement-studio-rule.drawer.html'),
          controller: 'EngagementStudioRuleDrawerController'
        },
        mobile: {
          template: require('./app/5-in-the-field/partials/engagement-studio.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 2;
        TopNavbar.HotspotsCount = 1;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('engagement-studio-test', {
      url: '/engagement-studio-test',
      views: {
        monitor: {
          template: require('./app/5-in-the-field/partials/engagement-studio-test.html'),
          controller: 'EngagementStudioTestController'

        },
        drawer: {
          template: require('./app/5-in-the-field/partials/engagement-studio-test.drawer.html'),
          controller: 'EngagementStudioTestDrawerController'
        },
        mobile: {
          template: require('./app/5-in-the-field/partials/engagement-studio.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 2;
        TopNavbar.HotspotsCount = 2;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('engagement-studio-report', {
      url: '/engagement-studio-report',
      views: {
        monitor: {
          template: require('./app/5-in-the-field/partials/engagement-studio-report.html'),
          controller: 'EngagementStudioReportController'

        },
        drawer: {
          template: require('./app/5-in-the-field/partials/engagement-studio-report.drawer.html'),
          controller: 'EngagementStudioReportDrawerController'
        },
        mobile: {
          template: require('./app/5-in-the-field/partials/engagement-studio.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 2;
        TopNavbar.HotspotsCount = 1;
        TopNavbar.HotspotsEnabled = false;
      }
    });

  $urlRouterProvider.otherwise('/');
}
