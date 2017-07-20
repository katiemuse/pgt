'use strict';

angular.module('pardotInteractiveGuidedTour')
  .config(function ($stateProvider) {

    $stateProvider
      .state('sales-view-in-salesforce', {
        url: '/sales-view-in-salesforce',
        views: {
          "monitor": {
            templateUrl: 'app/7-sales-view-in-salesforce/partials/sales-view-in-salesforce.html',
            controller: 'SalesViewInSalesforceCtrl'
          },
          "drawer": {
            templateUrl: 'app/7-sales-view-in-salesforce/partials/sales-view-in-salesforce.drawer.html',
            controller: 'SalesViewInSalesforceDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/7-sales-view-in-salesforce/partials/sales-view-in-salesforce.mobile.html'
          }
        },
        onEnter: function(TopNavbar, Hotspots){
          Hotspots.clear();
          TopNavbar.DidYouKnowCount = 1;
          TopNavbar.HotspotsCount = 2;
          TopNavbar.HotspotsEnabled = true;
        }
      })
      .state('personalized-email', {
        url: '/personalized-email',
        views: {
          "monitor": {
            templateUrl: 'app/7-sales-view-in-salesforce/partials/personalized-email.html',
            controller: 'PersonalizedEmailCtrl'
          },
          "drawer": {
            templateUrl: 'app/7-sales-view-in-salesforce/partials/personalized-email.drawer.html',
            controller: 'PersonalizedEmailDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/7-sales-view-in-salesforce/partials/sales-view-in-salesforce.mobile.html'
          }
        }
      });

  });
