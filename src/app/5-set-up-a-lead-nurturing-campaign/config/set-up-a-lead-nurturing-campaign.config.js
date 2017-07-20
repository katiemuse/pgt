'use strict';

angular.module('pardotInteractiveGuidedTour')
  .config(function ($stateProvider) {

    $stateProvider
      .state('set-up-a-lead-nurturing-campaign', {
        url: '/set-up-a-lead-nurturing-campaign',
        views: {
          "monitor": {
            templateUrl: 'app/5-set-up-a-lead-nurturing-campaign/partials/set-up-a-lead-nurturing-campaign.html',
            controller: 'SetUpALeadNurturingCampaignCtrl'

          },
          "drawer": {
            templateUrl: 'app/5-set-up-a-lead-nurturing-campaign/partials/set-up-a-lead-nurturing-campaign.drawer.html',
            controller: 'SetUpALeadNurturingCampaignDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/5-set-up-a-lead-nurturing-campaign/partials/set-up-a-lead-nurturing-campaign.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 2;
          TopNavbar.HotspotsCount = 4;
          TopNavbar.HotspotsEnabled = true;
        }
      });

  });
