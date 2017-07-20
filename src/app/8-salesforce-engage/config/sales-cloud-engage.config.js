'use strict';

angular.module('pardotInteractiveGuidedTour')
  .config(function ($stateProvider) {

    $stateProvider
      .state('salesforce-engage', {
        url: '/salesforce-engage',
        views: {
          "monitor": {
            templateUrl: 'app/8-salesforce-engage/partials/sales-cloud-engage.html',
            controller: 'SalesCloudEngageCtrl'
          },
          "drawer": {
            templateUrl: 'app/8-salesforce-engage/partials/sales-cloud-engage.drawer.html',
            controller: 'SalesCloudEngageDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/8-salesforce-engage/partials/sales-cloud-engage.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 1;
          TopNavbar.HotspotsCount = 1;
          TopNavbar.HotspotsEnabled = false;
        }
      })
      .state('engage-campaigns', {
        url: '/engage-campaigns',
        views: {
          "monitor": {
            templateUrl: 'app/8-salesforce-engage/partials/engage-campaigns.html',
            controller: 'EngageCampaignsCtrl'
          },
          "drawer": {
            templateUrl: 'app/8-salesforce-engage/partials/engage-campaigns.drawer.html',
            controller: 'EngageCampaignsDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/8-salesforce-engage/partials/sales-cloud-engage.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 3;
          TopNavbar.HotspotsCount = 0;
          TopNavbar.HotspotsEnabled = false;
        }
      })
      .state('select-template', {
        url: '/select-template',
        views: {
          "monitor": {
            templateUrl: 'app/8-salesforce-engage/partials/select-template.html',
            controller: 'SelectTemplateCtrl'
          },
          "drawer": {
            templateUrl: 'app/8-salesforce-engage/partials/select-template.drawer.html',
            controller: 'SelectTemplateDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/8-salesforce-engage/partials/sales-cloud-engage.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 3;
          TopNavbar.HotspotsCount = 2;
          TopNavbar.HotspotsEnabled = true;
        }
      })
      .state('engage-reports', {
        url: '/engage-reports',
        views: {
          "monitor": {
            templateUrl: 'app/8-salesforce-engage/partials/engage-reports.html',
            controller: 'MicroCampaignReportingCtrl'
          },
          "drawer": {
            templateUrl: 'app/8-salesforce-engage/partials/engage-reports.drawer.html',
            controller: 'MicroCampaignReportingDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/8-salesforce-engage/partials/sales-cloud-engage.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 1;
          TopNavbar.HotspotsCount = 1;
          TopNavbar.HotspotsEnabled = false;
        }
      });
  });
