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
    .state('build-an-email', {
      url: '/build-an-email',
      views: {
        monitor: {
          template: require('./app/3-build-an-email/partials/build-an-email.html'),
          controller: 'BuildAnEmailController'
        },
        drawer: {
          template: require('./app/3-build-an-email/partials/build-an-email.drawer.html'),
          controller: 'BuildAnEmailDrawerController'
        },
        mobile: {
          template: require('./app/3-build-an-email/partials/build-an-email.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 2;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('a-b-testing', {
      url: '/a-b-testing',
      views: {
        monitor: {
          template: require('./app/3-build-an-email/partials/a-b-testing.html'),
          controller: 'ABTestingController'
        },
        drawer: {
          template: require('./app/3-build-an-email/partials/a-b-testing.drawer.html'),
          controller: 'ABTestingDrawerController'
        },
        mobile: {
          template: require('./app/3-build-an-email/partials/build-an-email.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 3;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('email-preview', {
      url: '/email-preview',
      views: {
        monitor: {
          template: require('./app/3-build-an-email/partials/email-preview.html'),
          controller: 'EmailPreviewController'
        },
        drawer: {
          template: require('./app/3-build-an-email/partials/email-preview.drawer.html'),
          controller: 'EmailPreviewDrawerController'
        },
        mobile: {
          template: require('./app/3-build-an-email/partials/build-an-email.mobile.html')
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
          template: require('./app/3-build-an-email/partials/send-email.html'),
          controller: 'SendEmailController'
        },
        drawer: {
          template: require('./app/3-build-an-email/partials/send-email.drawer.html'),
          controller: 'SendEmailDrawerController'
        },
        mobile: {
          template: require('./app/3-build-an-email/partials/build-an-email.mobile.html')
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
          template: require('./app/4-view-a-prospect-profile/partials/view-a-prospect-profile.html'),
          controller: 'ViewAProspectProfileController'
        },
        drawer: {
          template: require('./app/4-view-a-prospect-profile/partials/view-a-prospect-profile.drawer.html'),
          controller: 'ViewAProspectProfileDrawerController'
        },
        mobile: {
          template: require('./app/4-view-a-prospect-profile/partials/view-a-prospect-profile.mobile.html')
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
          template: require('./app/5-engagement-studio/partials/engagement-studio.html'),
          controller: 'EngagementStudioController'

        },
        drawer: {
          template: require('./app/5-engagement-studio/partials/engagement-studio.drawer.html'),
          controller: 'EngagementStudioDrawerController'
        },
        mobile: {
          template: require('./app/5-engagement-studio/partials/engagement-studio.mobile.html')
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
          template: require('./app/5-engagement-studio/partials/engagement-studio-trigger.html'),
          controller: 'EngagementStudioTriggerController'

        },
        drawer: {
          template: require('./app/5-engagement-studio/partials/engagement-studio-trigger.drawer.html'),
          controller: 'EngagementStudioTriggerDrawerController'
        },
        mobile: {
          template: require('./app/5-engagement-studio/partials/engagement-studio.mobile.html')
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
          template: require('./app/5-engagement-studio/partials/engagement-studio-rule.html'),
          controller: 'EngagementStudioRuleController'

        },
        drawer: {
          template: require('./app/5-engagement-studio/partials/engagement-studio-rule.drawer.html'),
          controller: 'EngagementStudioRuleDrawerController'
        },
        mobile: {
          template: require('./app/5-engagement-studio/partials/engagement-studio.mobile.html')
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
          template: require('./app/5-engagement-studio/partials/engagement-studio-test.html'),
          controller: 'EngagementStudioTestController'

        },
        drawer: {
          template: require('./app/5-engagement-studio/partials/engagement-studio-test.drawer.html'),
          controller: 'EngagementStudioTestDrawerController'
        },
        mobile: {
          template: require('./app/5-engagement-studio/partials/engagement-studio.mobile.html')
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
          template: require('./app/5-engagement-studio/partials/engagement-studio-report.html'),
          controller: 'EngagementStudioReportController'

        },
        drawer: {
          template: require('./app/5-engagement-studio/partials/engagement-studio-report.drawer.html'),
          controller: 'EngagementStudioReportDrawerController'
        },
        mobile: {
          template: require('./app/5-engagement-studio/partials/engagement-studio.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 2;
        TopNavbar.HotspotsCount = 1;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('set-up-a-lead-nurturing-campaign', {
      url: '/set-up-a-lead-nurturing-campaign',
      views: {
        monitor: {
          template: require('./app/5-set-up-a-lead-nurturing-campaign/partials/set-up-a-lead-nurturing-campaign.html'),
          controller: 'SetUpALeadNurturingCampaignController'

        },
        drawer: {
          template: require('./app/5-set-up-a-lead-nurturing-campaign/partials/set-up-a-lead-nurturing-campaign.drawer.html'),
          controller: 'SetUpALeadNurturingCampaignDrawerController'
        },
        mobile: {
          template: require('./app/5-set-up-a-lead-nurturing-campaign/partials/set-up-a-lead-nurturing-campaign.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 2;
        TopNavbar.HotspotsCount = 4;
        TopNavbar.HotspotsEnabled = true;
      }
    })
    .state('assign-your-leads-to-sales', {
      url: '/assign-your-leads-to-sales',
      views: {
        monitor: {
          template: require('./app/6-assign-your-leads-to-sales/partials/assign-your-leads-to-sales.html'),
          controller: 'AssignYourLeadsToSalesController'
        },
        drawer: {
          template: require('./app/6-assign-your-leads-to-sales/partials/assign-your-leads-to-sales.drawer.html'),
          controller: 'AssignYourLeadsToSalesDrawerController'
        },
        mobile: {
          template: require('./app/6-assign-your-leads-to-sales/partials/assign-your-leads-to-sales.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 1;
        TopNavbar.HotspotsCount = 2;
        TopNavbar.HotspotsEnabled = true;
      }
    })
    .state('complete-action', {
      url: '/complete-action',
      views: {
        monitor: {
          template: require('./app/6-assign-your-leads-to-sales/partials/complete-action.html'),
          controller: 'CompleteActionController'
        },
        drawer: {
          template: require('./app/6-assign-your-leads-to-sales/partials/complete-action.drawer.html'),
          controller: 'CompleteActionDrawerController'
        },
        mobile: {
          template: require('./app/6-assign-your-leads-to-sales/partials/assign-your-leads-to-sales.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 1;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('sales-view-in-salesforce', {
      url: '/sales-view-in-salesforce',
      views: {
        monitor: {
          template: require('./app/7-sales-view-in-salesforce/partials/sales-view-in-salesforce.html'),
          controller: 'SalesViewInSalesforceController'
        },
        drawer: {
          template: require('./app/7-sales-view-in-salesforce/partials/sales-view-in-salesforce.drawer.html'),
          controller: 'SalesViewInSalesforceDrawerController'
        },
        mobile: {
          template: require('./app/7-sales-view-in-salesforce/partials/sales-view-in-salesforce.mobile.html')
        }
      },
      onEnter(TopNavbar, Hotspots) {
        Hotspots.clear();
        TopNavbar.DidYouKnowCount = 1;
        TopNavbar.HotspotsCount = 2;
        TopNavbar.HotspotsEnabled = true;
      }
    })
    .state('personalized-email', {
      url: '/personalized-email',
      views: {
        monitor: {
          template: require('./app/7-sales-view-in-salesforce/partials/personalized-email.html'),
          controller: 'PersonalizedEmailController'
        },
        drawer: {
          template: require('./app/7-sales-view-in-salesforce/partials/personalized-email.drawer.html'),
          controller: 'PersonalizedEmailDrawerController'
        },
        mobile: {
          template: require('./app/7-sales-view-in-salesforce/partials/sales-view-in-salesforce.mobile.html')
        }
      }
    })
    .state('salesforce-engage', {
      url: '/salesforce-engage',
      views: {
        monitor: {
          template: require('./app/8-salesforce-engage/partials/sales-cloud-engage.html'),
          controller: 'SalesCloudEngageController'
        },
        drawer: {
          template: require('./app/8-salesforce-engage/partials/sales-cloud-engage.drawer.html'),
          controller: 'SalesCloudEngageDrawerController'
        },
        mobile: {
          template: require('./app/8-salesforce-engage/partials/sales-cloud-engage.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 1;
        TopNavbar.HotspotsCount = 1;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('engage-campaigns', {
      url: '/engage-campaigns',
      views: {
        monitor: {
          template: require('./app/8-salesforce-engage/partials/engage-campaigns.html'),
          controller: 'EngageCampaignsController'
        },
        drawer: {
          template: require('./app/8-salesforce-engage/partials/engage-campaigns.drawer.html'),
          controller: 'EngageCampaignsDrawerController'
        },
        mobile: {
          template: require('./app/8-salesforce-engage/partials/sales-cloud-engage.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 3;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('select-template', {
      url: '/select-template',
      views: {
        monitor: {
          template: require('./app/8-salesforce-engage/partials/select-template.html'),
          controller: 'SelectTemplateController'
        },
        drawer: {
          template: require('./app/8-salesforce-engage/partials/select-template.drawer.html'),
          controller: 'SelectTemplateDrawerController'
        },
        mobile: {
          template: require('./app/8-salesforce-engage/partials/sales-cloud-engage.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 3;
        TopNavbar.HotspotsCount = 2;
        TopNavbar.HotspotsEnabled = true;
      }
    })
    .state('engage-reports', {
      url: '/engage-reports',
      views: {
        monitor: {
          template: require('./app/8-salesforce-engage/partials/engage-reports.html'),
          controller: 'MicroCampaignReportingController'
        },
        drawer: {
          template: require('./app/8-salesforce-engage/partials/engage-reports.drawer.html'),
          controller: 'MicroCampaignReportingDrawerController'
        },
        mobile: {
          template: require('./app/8-salesforce-engage/partials/sales-cloud-engage.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 1;
        TopNavbar.HotspotsCount = 1;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('pardot-reporting', {
      url: '/partdot-reporting',
      views: {
        monitor: {
          template: require('./app/9-pardot-reporting/partials/pardot-reporting.html'),
          controller: 'PardotReportingController'
        },
        drawer: {
          template: require('./app/9-pardot-reporting/partials/pardot-reporting.drawer.html'),
          controller: 'PardotReportingDrawerController'
        },
        mobile: {
          template: require('./app/9-pardot-reporting/partials/pardot-reporting.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 1;
        TopNavbar.HotspotsCount = 1;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('advanced-email-report', {
      url: '/advanced-email-report',
      params: {
        intro: true
      },
      views: {
        monitor: {
          template: require('./app/9-pardot-reporting/partials/advanced-email-report.html'),
          controller: 'ReportController'
        },
        drawer: {
          template: require('./app/9-pardot-reporting/partials/advanced-email-report.drawer.html'),
          controller: 'AdvancedEmailReportDrawerController'
        },
        mobile: {
          template: require('./app/9-pardot-reporting/partials/pardot-reporting.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 2;
        TopNavbar.HotspotsCount = 5;
        TopNavbar.HotspotsEnabled = false;
      },
      onExit(Hotspots, Steps) {
        Steps.clear();
        Hotspots.clear();
      }
    })
    .state('interaction-report', {
      url: '/interaction-report',
      views: {
        monitor: {
          template: require('./app/9-pardot-reporting/partials/interaction-report.html'),
          controller: 'ReportController'
        },
        drawer: {
          template: require('./app/9-pardot-reporting/partials/interaction-report.drawer.html'),
          controller: 'InteractionReportDrawerController'
        },
        mobile: {
          template: require('./app/9-pardot-reporting/partials/pardot-reporting.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 4;
        TopNavbar.HotspotsEnabled = true;
      },
      onExit(Hotspots, Steps) {
        Steps.clear();
        Hotspots.clear();
      }
    })
    .state('click-through-rate-report', {
      url: '/click-through-rate-report',
      views: {
        monitor: {
          template: require('./app/9-pardot-reporting/partials/click-through-rate-report.html'),
          controller: 'ReportController'
        },
        drawer: {
          template: require('./app/9-pardot-reporting/partials/click-through-rate-report.drawer.html'),
          controller: 'ClickThroughRateReportDrawerController'
        },
        mobile: {
          template: require('./app/9-pardot-reporting/partials/pardot-reporting.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 1;
        TopNavbar.HotspotsEnabled = true;
      },
      onExit(Hotspots, Steps) {
        Steps.clear();
        Hotspots.clear();
      }
    })
    .state('email-client-report', {
      url: '/email-client-report',
      views: {
        monitor: {
          template: require('./app/9-pardot-reporting/partials/email-client-report.html'),
          controller: 'ReportController'
        },
        drawer: {
          template: require('./app/9-pardot-reporting/partials/email-client-report.drawer.html'),
          controller: 'EmailClientReportDrawerController'
        },
        mobile: {
          template: require('./app/9-pardot-reporting/partials/pardot-reporting.mobile.html')
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 1;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      },
      onExit(Hotspots, Steps) {
        Steps.clear();
        Hotspots.clear();
      }
    })
    .state('the-end', {
      url: '/the-end',
      views: {
        monitor: {
          template: require('./app/9-pardot-reporting/partials/the-end.html')
        },
        mobile: {
          template: require('./app/9-pardot-reporting/partials/pardot-reporting.mobile.html')
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
