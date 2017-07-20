'use strict';

angular.module('pardotInteractiveGuidedTour')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('build-an-email', {
        url: '/build-an-email',
        views: {
          "monitor": {
            templateUrl: 'app/3-build-an-email/partials/build-an-email.html',
            controller: 'BuildAnEmailCtrl'
          },
          "drawer": {
            templateUrl: 'app/3-build-an-email/partials/build-an-email.drawer.html',
            controller: 'BuildAnEmailDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/3-build-an-email/partials/build-an-email.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 2;
          TopNavbar.HotspotsCount = 0;
          TopNavbar.HotspotsEnabled = false;
        }
      })
      .state('a-b-testing', {
        url: '/a-b-testing',
        views: {
          "monitor": {
            templateUrl: 'app/3-build-an-email/partials/a-b-testing.html',
            controller: 'ABTestingCtrl'
          },
          "drawer": {
            templateUrl: 'app/3-build-an-email/partials/a-b-testing.drawer.html',
            controller: 'ABTestingDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/3-build-an-email/partials/build-an-email.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 3;
          TopNavbar.HotspotsCount = 0;
          TopNavbar.HotspotsEnabled = false;
        }
      })
      .state('email-preview', {
        url: '/email-preview',
        views: {
          "monitor": {
            templateUrl: 'app/3-build-an-email/partials/email-preview.html',
            controller: 'EmailPreviewCtrl'
          },
          "drawer": {
            templateUrl: 'app/3-build-an-email/partials/email-preview.drawer.html',
            controller: 'EmailPreviewDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/3-build-an-email/partials/build-an-email.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 1;
          TopNavbar.HotspotsCount = 0;
          TopNavbar.HotspotsEnabled = false;
        }
      })
      .state('send-email', {
        url: '/send-email',
        views: {
          "monitor": {
            templateUrl: 'app/3-build-an-email/partials/send-email.html',
            controller: 'SendEmailCtrl'
          },
          "drawer": {
            templateUrl: 'app/3-build-an-email/partials/send-email.drawer.html',
            controller: 'SendEmailDrawerCtrl'
          },
          "mobile": {
            templateUrl: 'app/3-build-an-email/partials/build-an-email.mobile.html'
          }
        },
        onEnter: function(TopNavbar){
          TopNavbar.DidYouKnowCount = 1;
          TopNavbar.HotspotsCount = 1;
          TopNavbar.HotspotsEnabled = true;
        }
      });


  });
