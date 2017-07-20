'use strict';

angular.module('pardotInteractiveGuidedTour')
  .config(function ($stateProvider) {

    $stateProvider
      .state('view-a-prospect-profile', {
        url: '/view-a-prospect-profile',
        views: {
          "monitor": {
            templateUrl: 'app/4-view-a-prospect-profile/partials/view-a-prospect-profile.html',
            controller: 'ViewAProspectProfileCtrl'
          },
          "drawer": {
            templateUrl: 'app/4-view-a-prospect-profile/partials/view-a-prospect-profile.drawer.html',
            controller: 'ViewAProspectProfileDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/4-view-a-prospect-profile/partials/view-a-prospect-profile.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 1;
          TopNavbar.HotspotsCount = 3;
          TopNavbar.HotspotsEnabled = true;
        }
      });

  });
