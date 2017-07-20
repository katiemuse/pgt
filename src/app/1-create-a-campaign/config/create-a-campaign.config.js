'use strict';

angular.module('pardotInteractiveGuidedTour')
  .config(function ($stateProvider) {

    $stateProvider
      .state('create-a-campaign', {
        url: '/create-a-campaign',
        views: {
          "monitor": {
            templateUrl: 'app/1-create-a-campaign/partials/create-a-campaign.html',
            controller: 'CreateACampaignCtrl'
          },
          "drawer": {
            templateUrl: 'app/1-create-a-campaign/partials/create-a-campaign.drawer.html',
            controller: 'CreateACampaignDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/1-create-a-campaign/partials/create-a-campaign.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 0;
          TopNavbar.DidYouKnowEnabled = false;
          TopNavbar.HotspotsCount = 2;
          TopNavbar.HotspotsEnabled = true;
        }
      });
  });

