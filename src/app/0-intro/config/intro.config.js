'use strict';

angular.module('pardotInteractiveGuidedTour')
  .config(function ($stateProvider) {

    $stateProvider
      .state('intro', {
        url: '/',
        views: {
          "monitor": {
            templateUrl: 'app/0-intro/partials/intro.html',
            controller: "IntroCtrl"
          },
          "drawer": {
            controller: "IntroDrawerCtrl"
          },
          "mobile": {
            templateUrl: 'app/1-create-a-campaign/partials/create-a-campaign.mobile.html'
          },
          "intro": {
            templateUrl: 'app/0-intro/partials/intro.mobile.html'
          },
          "getting-started": {
            templateUrl: 'app/0-intro/partials/getting-started.html'
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
