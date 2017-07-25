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
          templateUrl: 'app/0-intro/partials/intro.html'
        },
        drawer: {
          controller: 'IntroDrawerController',
          template: '<div></div>'
        },
        mobile: {
          templateUrl: 'app/1-create-a-campaign/partials/create-a-campaign.mobile.html'
        },
        intro: {
          templateUrl: 'app/0-intro/partials/intro.mobile.html'
        },
        'getting-started': {
          templateUrl: 'app/0-intro/partials/getting-started.html'
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    })
    .state('create-a-campaign', {
      url: '/create-a-campaign',
      views: {
        monitor: {
          templateUrl: 'app/1-create-a-campaign/partials/create-a-campaign.html',
          controller: 'CreateACampaignController'
        },
        drawer: {
          templateUrl: 'app/1-create-a-campaign/partials/create-a-campaign.drawer.html',
          controller: 'CreateACampaignDrawerController'
        },
        mobile: {
          templateUrl: 'app/1-create-a-campaign/partials/create-a-campaign.mobile.html'
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 2;
        TopNavbar.HotspotsEnabled = true;
      }
    })
    .state('build-a-form-and-landing-page', {
      url: '/build-a-form-and-landing-page',
      views: {
        monitor: {
          templateUrl: 'app/2-build-a-form-and-landing-page/partials/build-a-form-and-landing-page.html',
          controller: 'BuildAFormAndLandingController'
        },
        drawer: {
          templateUrl: 'app/2-build-a-form-and-landing-page/partials/build-a-form-and-landing-page.drawer.html',
          controller: 'BuildAFormAndLandingDrawerController'
        },
        mobile: {
          templateUrl: 'app/2-build-a-form-and-landing-page/partials/build-a-form-and-landing-page.mobile.html'
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 0;
        TopNavbar.DidYouKnowEnabled = false;
        TopNavbar.HotspotsCount = 2;
        TopNavbar.HotspotsEnabled = true;
      }
    })
    .state('form-builder', {
      url: '/form-builder',
      views: {
        monitor: {
          templateUrl: 'app/2-build-a-form-and-landing-page/partials/form-builder.html',
          controller: 'FormBuilderController'
        },
        drawer: {
          templateUrl: 'app/2-build-a-form-and-landing-page/partials/form-builder.drawer.html',
          controller: 'FormBuilderDrawerController'
        },
        mobile: {
          templateUrl: 'app/2-build-a-form-and-landing-page/partials/build-a-form-and-landing-page.mobile.html'
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 1;
        TopNavbar.HotspotsCount = 2;
      }
    })
    .state('form-completion-actions', {
      url: '/form-completion-actions',
      views: {
        monitor: {
          templateUrl: 'app/2-build-a-form-and-landing-page/partials/form-completion-actions.html',
          controller: 'FormCompletionActionsController'
        },
        drawer: {
          templateUrl: 'app/2-build-a-form-and-landing-page/partials/form-completion-actions.drawer.html',
          controller: 'FormCompletionActionsDrawerController'
        },
        mobile: {
          templateUrl: 'app/2-build-a-form-and-landing-page/partials/build-a-form-and-landing-page.mobile.html'
        }
      },
      onEnter(TopNavbar) {
        TopNavbar.DidYouKnowCount = 1;
        TopNavbar.HotspotsCount = 1;
      }
    })
    .state('landing-page-builder', {
      url: '/landing-page-builder',
      views: {
        monitor: {
          templateUrl: 'app/2-build-a-form-and-landing-page/partials/landing-page-builder.html',
          controller: 'LandingPageBuilderController'
        },
        drawer: {
          templateUrl: 'app/2-build-a-form-and-landing-page/partials/landing-page-builder.drawer.html',
          controller: 'LandingPageBuilderDrawerController'
        },
        mobile: {
          templateUrl: 'app/2-build-a-form-and-landing-page/partials/build-a-form-and-landing-page.mobile.html'
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
          templateUrl: 'app/3-build-an-email/partials/build-an-email.html',
          controller: 'BuildAnEmailController'
        },
        drawer: {
          templateUrl: 'app/3-build-an-email/partials/build-an-email.drawer.html',
          controller: 'BuildAnEmailDrawerController'
        },
        mobile: {
          templateUrl: 'app/3-build-an-email/partials/build-an-email.mobile.html'
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
          templateUrl: 'app/3-build-an-email/partials/a-b-testing.html',
          controller: 'ABTestingController'
        },
        drawer: {
          templateUrl: 'app/3-build-an-email/partials/a-b-testing.drawer.html',
          controller: 'ABTestingDrawerController'
        },
        mobile: {
          templateUrl: 'app/3-build-an-email/partials/build-an-email.mobile.html'
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
          templateUrl: 'app/3-build-an-email/partials/email-preview.html',
          controller: 'EmailPreviewController'
        },
        drawer: {
          templateUrl: 'app/3-build-an-email/partials/email-preview.drawer.html',
          controller: 'EmailPreviewDrawerController'
        },
        mobile: {
          templateUrl: 'app/3-build-an-email/partials/build-an-email.mobile.html'
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
          templateUrl: 'app/3-build-an-email/partials/send-email.html',
          controller: 'SendEmailController'
        },
        drawer: {
          templateUrl: 'app/3-build-an-email/partials/send-email.drawer.html',
          controller: 'SendEmailDrawerController'
        },
        mobile: {
          templateUrl: 'app/3-build-an-email/partials/build-an-email.mobile.html'
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
          templateUrl: 'app/4-view-a-prospect-profile/partials/view-a-prospect-profile.html',
          controller: 'ViewAProspectProfileController'
        },
        drawer: {
          templateUrl: 'app/4-view-a-prospect-profile/partials/view-a-prospect-profile.drawer.html',
          controller: 'ViewAProspectProfileDrawerController'
        },
        mobile: {
          templateUrl: 'app/4-view-a-prospect-profile/partials/view-a-prospect-profile.mobile.html'
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
          templateUrl: 'app/5-engagement-studio/partials/engagement-studio.html',
          controller: 'EngagementStudioController'

        },
        drawer: {
          templateUrl: 'app/5-engagement-studio/partials/engagement-studio.drawer.html',
          controller: 'EngagementStudioDrawerController'
        },
        mobile: {
          templateUrl: 'app/5-engagement-studio/partials/engagement-studio.mobile.html'
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
          templateUrl: 'app/5-engagement-studio/partials/engagement-studio-trigger.html',
          controller: 'EngagementStudioTriggerController'

        },
        drawer: {
          templateUrl: 'app/5-engagement-studio/partials/engagement-studio-trigger.drawer.html',
          controller: 'EngagementStudioTriggerDrawerController'
        },
        mobile: {
          templateUrl: 'app/5-engagement-studio/partials/engagement-studio.mobile.html'
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
          templateUrl: 'app/5-engagement-studio/partials/engagement-studio-rule.html',
          controller: 'EngagementStudioRuleController'

        },
        drawer: {
          templateUrl: 'app/5-engagement-studio/partials/engagement-studio-rule.drawer.html',
          controller: 'EngagementStudioRuleDrawerController'
        },
        mobile: {
          templateUrl: 'app/5-engagement-studio/partials/engagement-studio.mobile.html'
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
          templateUrl: 'app/5-engagement-studio/partials/engagement-studio-test.html',
          controller: 'EngagementStudioTestController'

        },
        drawer: {
          templateUrl: 'app/5-engagement-studio/partials/engagement-studio-test.drawer.html',
          controller: 'EngagementStudioTestDrawerController'
        },
        mobile: {
          templateUrl: 'app/5-engagement-studio/partials/engagement-studio.mobile.html'
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
          templateUrl: 'app/5-engagement-studio/partials/engagement-studio-report.html',
          controller: 'EngagementStudioReportController'

        },
        drawer: {
          templateUrl: 'app/5-engagement-studio/partials/engagement-studio-report.drawer.html',
          controller: 'EngagementStudioReportDrawerController'
        },
        mobile: {
          templateUrl: 'app/5-engagement-studio/partials/engagement-studio.mobile.html'
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
          templateUrl: 'app/5-set-up-a-lead-nurturing-campaign/partials/set-up-a-lead-nurturing-campaign.html',
          controller: 'SetUpALeadNurturingCampaignController'

        },
        drawer: {
          templateUrl: 'app/5-set-up-a-lead-nurturing-campaign/partials/set-up-a-lead-nurturing-campaign.drawer.html',
          controller: 'SetUpALeadNurturingCampaignDrawerController'
        },
        mobile: {
          templateUrl: 'app/5-set-up-a-lead-nurturing-campaign/partials/set-up-a-lead-nurturing-campaign.mobile.html'
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
          templateUrl: 'app/6-assign-your-leads-to-sales/partials/assign-your-leads-to-sales.html',
          controller: 'AssignYourLeadsToSalesController'
        },
        drawer: {
          templateUrl: 'app/6-assign-your-leads-to-sales/partials/assign-your-leads-to-sales.drawer.html',
          controller: 'AssignYourLeadsToSalesDrawerController'
        },
        mobile: {
          templateUrl: 'app/6-assign-your-leads-to-sales/partials/assign-your-leads-to-sales.mobile.html'
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
          templateUrl: 'app/6-assign-your-leads-to-sales/partials/complete-action.html',
          controller: 'CompleteActionController'
        },
        drawer: {
          templateUrl: 'app/6-assign-your-leads-to-sales/partials/complete-action.drawer.html',
          controller: 'CompleteActionDrawerController'
        },
        mobile: {
          templateUrl: 'app/6-assign-your-leads-to-sales/partials/assign-your-leads-to-sales.mobile.html'
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
          templateUrl: 'app/7-sales-view-in-salesforce/partials/sales-view-in-salesforce.html',
          controller: 'SalesViewInSalesforceController'
        },
        drawer: {
          templateUrl: 'app/7-sales-view-in-salesforce/partials/sales-view-in-salesforce.drawer.html',
          controller: 'SalesViewInSalesforceDrawerController'
        },
        mobile: {
          templateUrl: 'app/7-sales-view-in-salesforce/partials/sales-view-in-salesforce.mobile.html'
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
          templateUrl: 'app/7-sales-view-in-salesforce/partials/personalized-email.html',
          controller: 'PersonalizedEmailController'
        },
        drawer: {
          templateUrl: 'app/7-sales-view-in-salesforce/partials/personalized-email.drawer.html',
          controller: 'PersonalizedEmailDrawerController'
        },
        mobile: {
          templateUrl: 'app/7-sales-view-in-salesforce/partials/sales-view-in-salesforce.mobile.html'
        }
      }
    })
    .state('salesforce-engage', {
      url: '/salesforce-engage',
      views: {
        monitor: {
          templateUrl: 'app/8-salesforce-engage/partials/sales-cloud-engage.html',
          controller: 'SalesCloudEngageController'
        },
        drawer: {
          templateUrl: 'app/8-salesforce-engage/partials/sales-cloud-engage.drawer.html',
          controller: 'SalesCloudEngageDrawerController'
        },
        mobile: {
          templateUrl: 'app/8-salesforce-engage/partials/sales-cloud-engage.mobile.html'
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
          templateUrl: 'app/8-salesforce-engage/partials/engage-campaigns.html',
          controller: 'EngageCampaignsController'
        },
        drawer: {
          templateUrl: 'app/8-salesforce-engage/partials/engage-campaigns.drawer.html',
          controller: 'EngageCampaignsDrawerController'
        },
        mobile: {
          templateUrl: 'app/8-salesforce-engage/partials/sales-cloud-engage.mobile.html'
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
          templateUrl: 'app/8-salesforce-engage/partials/select-template.html',
          controller: 'SelectTemplateController'
        },
        drawer: {
          templateUrl: 'app/8-salesforce-engage/partials/select-template.drawer.html',
          controller: 'SelectTemplateDrawerController'
        },
        mobile: {
          templateUrl: 'app/8-salesforce-engage/partials/sales-cloud-engage.mobile.html'
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
          templateUrl: 'app/8-salesforce-engage/partials/engage-reports.html',
          controller: 'MicroCampaignReportingController'
        },
        drawer: {
          templateUrl: 'app/8-salesforce-engage/partials/engage-reports.drawer.html',
          controller: 'MicroCampaignReportingDrawerController'
        },
        mobile: {
          templateUrl: 'app/8-salesforce-engage/partials/sales-cloud-engage.mobile.html'
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
          templateUrl: 'app/9-pardot-reporting/partials/pardot-reporting.html',
          controller: 'PardotReportingController'
        },
        drawer: {
          templateUrl: 'app/9-pardot-reporting/partials/pardot-reporting.drawer.html',
          controller: 'PardotReportingDrawerController'
        },
        mobile: {
          templateUrl: 'app/9-pardot-reporting/partials/pardot-reporting.mobile.html'
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
          templateUrl: 'app/9-pardot-reporting/partials/advanced-email-report.html',
          controller: 'ReportController'
        },
        drawer: {
          templateUrl: 'app/9-pardot-reporting/partials/advanced-email-report.drawer.html',
          controller: 'AdvancedEmailReportDrawerController'
        },
        mobile: {
          templateUrl: 'app/9-pardot-reporting/partials/pardot-reporting.mobile.html'
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
          templateUrl: 'app/9-pardot-reporting/partials/interaction-report.html',
          controller: 'ReportController'
        },
        drawer: {
          templateUrl: 'app/9-pardot-reporting/partials/interaction-report.drawer.html',
          controller: 'InteractionReportDrawerController'
        },
        mobile: {
          templateUrl: 'app/9-pardot-reporting/partials/pardot-reporting.mobile.html'
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
          templateUrl: 'app/9-pardot-reporting/partials/click-through-rate-report.html',
          controller: 'ReportController'
        },
        drawer: {
          templateUrl: 'app/9-pardot-reporting/partials/click-through-rate-report.drawer.html',
          controller: 'ClickThroughRateReportDrawerController'
        },
        mobile: {
          templateUrl: 'app/9-pardot-reporting/partials/pardot-reporting.mobile.html'
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
          templateUrl: 'app/9-pardot-reporting/partials/email-client-report.html',
          controller: 'ReportController'
        },
        drawer: {
          templateUrl: 'app/9-pardot-reporting/partials/email-client-report.drawer.html',
          controller: 'EmailClientReportDrawerController'
        },
        mobile: {
          templateUrl: 'app/9-pardot-reporting/partials/pardot-reporting.mobile.html'
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
          templateUrl: 'app/9-pardot-reporting/partials/the-end.html'
        },
        mobile: {
          templateUrl: 'app/9-pardot-reporting/partials/pardot-reporting.mobile.html'
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
