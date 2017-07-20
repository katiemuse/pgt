'use strict';

angular.module('pardotInteractiveGuidedTour')
  .config(function ($stateProvider) {

    $stateProvider
      .state('engagement-studio', {
        url: '/engagement-studio',
        views: {
          "monitor": {
            templateUrl: 'app/5-engagement-studio/partials/engagement-studio.html',
            controller: 'EngagementStudioCtrl'

          },
          "drawer": {
            templateUrl: 'app/5-engagement-studio/partials/engagement-studio.drawer.html',
            controller: 'EngagementStudioDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/5-engagement-studio/partials/engagement-studio.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 2;
          TopNavbar.HotspotsCount = 0;
          TopNavbar.HotspotsEnabled = false;
        }
      })
      .state('engagement-studio-trigger', {
        url: '/engagement-studio-trigger',
        views: {
          "monitor": {
            templateUrl: 'app/5-engagement-studio/partials/engagement-studio-trigger.html',
            controller: 'EngagementStudioTriggerCtrl'

          },
          "drawer": {
            templateUrl: 'app/5-engagement-studio/partials/engagement-studio-trigger.drawer.html',
            controller: 'EngagementStudioTriggerDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/5-engagement-studio/partials/engagement-studio.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 2;
          TopNavbar.HotspotsCount = 0;
          TopNavbar.HotspotsEnabled = false;
        }
      })
      .state('engagement-studio-rule', {
        url: '/engagement-studio-rule',
        views: {
          "monitor": {
            templateUrl: 'app/5-engagement-studio/partials/engagement-studio-rule.html',
            controller: 'EngagementStudioRuleCtrl'

          },
          "drawer": {
            templateUrl: 'app/5-engagement-studio/partials/engagement-studio-rule.drawer.html',
            controller: 'EngagementStudioRuleDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/5-engagement-studio/partials/engagement-studio.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 2;
          TopNavbar.HotspotsCount = 1;
          TopNavbar.HotspotsEnabled = false;
        }
      })
      .state('engagement-studio-test', {
        url: '/engagement-studio-test',
        views: {
          "monitor": {
            templateUrl: 'app/5-engagement-studio/partials/engagement-studio-test.html',
            controller: 'EngagementStudioTestCtrl'

          },
          "drawer": {
            templateUrl: 'app/5-engagement-studio/partials/engagement-studio-test.drawer.html',
            controller: 'EngagementStudioTestDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/5-engagement-studio/partials/engagement-studio.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 2;
          TopNavbar.HotspotsCount = 2;
          TopNavbar.HotspotsEnabled = false;
        }
      })
      .state('engagement-studio-report', {
        url: '/engagement-studio-report',
        views: {
          "monitor": {
            templateUrl: 'app/5-engagement-studio/partials/engagement-studio-report.html',
            controller: 'EngagementStudioReportCtrl'

          },
          "drawer": {
            templateUrl: 'app/5-engagement-studio/partials/engagement-studio-report.drawer.html',
            controller: 'EngagementStudioReportDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/5-engagement-studio/partials/engagement-studio.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 2;
          TopNavbar.HotspotsCount = 1;
          TopNavbar.HotspotsEnabled = false;
        }
      });

  });
