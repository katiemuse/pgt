'use strict';

angular.module('pardotInteractiveGuidedTour')
  .config(function ($stateProvider) {

    $stateProvider
      .state('pardot-reporting', {
        url: '/partdot-reporting',
        views: {
          "monitor": {
            templateUrl: 'app/9-pardot-reporting/partials/pardot-reporting.html',
            controller: 'PardotReportingCtrl'
          },
          "drawer": {
            templateUrl: 'app/9-pardot-reporting/partials/pardot-reporting.drawer.html',
            controller: 'PardotReportingDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/9-pardot-reporting/partials/pardot-reporting.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
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
          "monitor": {
            templateUrl: 'app/9-pardot-reporting/partials/advanced-email-report.html',
            controller: 'ReportCtrl'
          },
          "drawer": {
            templateUrl: 'app/9-pardot-reporting/partials/advanced-email-report.drawer.html',
            controller: 'AdvancedEmailReportDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/9-pardot-reporting/partials/pardot-reporting.mobile.html'
          }
        },
        onEnter: function(TopNavbar, Steps, Hotspots){
          TopNavbar.DidYouKnowCount = 2;
          TopNavbar.HotspotsCount = 5;
          TopNavbar.HotspotsEnabled = false;


        },
        onExit: function(Hotspots, Steps){
          Steps.clear();
          Hotspots.clear();
        }
      })
      .state('interaction-report', {
        url: '/interaction-report',
        views: {
          "monitor": {
            templateUrl: 'app/9-pardot-reporting/partials/interaction-report.html',
            controller: 'ReportCtrl'
          },
          "drawer": {
            templateUrl: 'app/9-pardot-reporting/partials/interaction-report.drawer.html',
            controller: 'InteractionReportDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/9-pardot-reporting/partials/pardot-reporting.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 0;
          TopNavbar.DidYouKnowEnabled = false;
          TopNavbar.HotspotsCount = 4;
          TopNavbar.HotspotsEnabled = true;
        },
        onExit: function(Hotspots, Steps){
          Steps.clear();
          Hotspots.clear();
        }
      })
      .state('click-through-rate-report', {
        url: '/click-through-rate-report',
        views: {
          "monitor": {
            templateUrl: 'app/9-pardot-reporting/partials/click-through-rate-report.html',
            controller: 'ReportCtrl'
          },
          "drawer": {
            templateUrl: 'app/9-pardot-reporting/partials/click-through-rate-report.drawer.html',
            controller: 'ClickThroughRateReportDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/9-pardot-reporting/partials/pardot-reporting.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 0;
          TopNavbar.DidYouKnowEnabled = false;
          TopNavbar.HotspotsCount = 1;
          TopNavbar.HotspotsEnabled = true;
        },
        onExit: function(Hotspots, Steps){
          Steps.clear();
          Hotspots.clear();
        }
      })
      .state('email-client-report', {
        url: '/email-client-report',
        views: {
          "monitor": {
            templateUrl: 'app/9-pardot-reporting/partials/email-client-report.html',
            controller: 'ReportCtrl'
          },
          "drawer": {
            templateUrl: 'app/9-pardot-reporting/partials/email-client-report.drawer.html',
            controller: 'EmailClientReportDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/9-pardot-reporting/partials/pardot-reporting.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 1;
          TopNavbar.HotspotsCount = 0;
          TopNavbar.HotspotsEnabled = false;
        },
        onExit: function(Hotspots, Steps){
          Steps.clear();
          Hotspots.clear();
        }
      })
      .state('the-end', {
        url: '/the-end',
        views: {
          "monitor": {
            templateUrl: 'app/9-pardot-reporting/partials/the-end.html'
          },
          "mobile": {
            templateUrl: 'app/9-pardot-reporting/partials/pardot-reporting.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 0;
          TopNavbar.DidYouKnowEnabled = false;
          TopNavbar.HotspotsCount = 0;
          TopNavbar.HotspotsEnabled = false;
        }
      });


  });
