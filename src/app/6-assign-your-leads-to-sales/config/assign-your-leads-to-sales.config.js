'use strict';

angular.module('pardotInteractiveGuidedTour')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('assign-your-leads-to-sales', {
        url: '/assign-your-leads-to-sales',
        views: {
          "monitor": {
            templateUrl: 'app/6-assign-your-leads-to-sales/partials/assign-your-leads-to-sales.html',
            controller: 'AssignYourLeadsToSalesCtrl'
          },
          "drawer": {
            templateUrl: 'app/6-assign-your-leads-to-sales/partials/assign-your-leads-to-sales.drawer.html',
            controller: 'AssignYourLeadsToSalesDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/6-assign-your-leads-to-sales/partials/assign-your-leads-to-sales.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 1;
          TopNavbar.HotspotsCount = 2;
          TopNavbar.HotspotsEnabled = true;
        }
      })
    .state('complete-action', {
      url: '/complete-action',
      views: {
        "monitor": {
          templateUrl: 'app/6-assign-your-leads-to-sales/partials/complete-action.html',
          controller: 'CompleteActionCtrl'
        },
        "drawer": {
          templateUrl: 'app/6-assign-your-leads-to-sales/partials/complete-action.drawer.html',
          controller: 'CompleteActionDrawerCtrl'
        },
        "mobile": {
          templateUrl: 'app/6-assign-your-leads-to-sales/partials/assign-your-leads-to-sales.mobile.html'
        }
      },
      onEnter: function(TopNavbar){
        TopNavbar.DidYouKnowCount = 1;
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
      }
    });


  });
