'use strict';

angular.module('pardotInteractiveGuidedTour')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('build-a-form-and-landing-page', {
        url: '/build-a-form-and-landing-page',
        views: {
          "monitor": {
            templateUrl: 'app/2-build-a-form-and-landing-page/partials/build-a-form-and-landing-page.html',
            controller: 'BuildAFormAndLandingCtrl'
          },
          "drawer": {
            templateUrl: 'app/2-build-a-form-and-landing-page/partials/build-a-form-and-landing-page.drawer.html',
            controller: 'BuildAFormAndLandingDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/2-build-a-form-and-landing-page/partials/build-a-form-and-landing-page.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 0;
          TopNavbar.DidYouKnowEnabled = false;
          TopNavbar.HotspotsCount = 2;
          TopNavbar.HotspotsEnabled = true;
        }
      })
      .state('form-builder', {
        url: '/form-builder',
        views: {
          "monitor": {
            templateUrl: 'app/2-build-a-form-and-landing-page/partials/form-builder.html',
            controller: 'FormBuilderCtrl'
          },
          "drawer": {
            templateUrl: 'app/2-build-a-form-and-landing-page/partials/form-builder.drawer.html',
            controller: 'FormBuilderDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/2-build-a-form-and-landing-page/partials/build-a-form-and-landing-page.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 1;
          TopNavbar.HotspotsCount = 2;
        }
      })
      .state('form-completion-actions', {
        url: '/form-completion-actions',
        views: {
          "monitor": {
            templateUrl: 'app/2-build-a-form-and-landing-page/partials/form-completion-actions.html',
            controller: 'FormCompletionActionsCtrl'
          },
          "drawer": {
            templateUrl: 'app/2-build-a-form-and-landing-page/partials/form-completion-actions.drawer.html',
            controller: 'FormCompletionActionsDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/2-build-a-form-and-landing-page/partials/build-a-form-and-landing-page.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 1;
          TopNavbar.HotspotsCount = 1;
        }
      })
      .state('landing-page-builder', {
        url: '/landing-page-builder',
        views: {
          "monitor": {
            templateUrl: 'app/2-build-a-form-and-landing-page/partials/landing-page-builder.html',
            controller: 'LandingPageBuilderCtrl'
          },
          "drawer": {
            templateUrl: 'app/2-build-a-form-and-landing-page/partials/landing-page-builder.drawer.html',
            controller: 'LandingPageBuilderDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/2-build-a-form-and-landing-page/partials/build-a-form-and-landing-page.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 4;
          TopNavbar.HotspotsCount = 0;
        }
      });

  });
