'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:EngageCampaignsDrawerCtrl
 * @description
 * # EngageCampaignsDrawerCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('EngageCampaignsDrawerCtrl', function ($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {

    TopNavbar.InfoActive = true;

    Drawer.openToIntro();

    $scope.beginStory = function(){
      Drawer.close();
      WizardHandler.wizard("monitor").next();
      TopNavbar.InfoActive = false;

      Steps.clear();
      Steps.pop({
        number: 'one',
        title: "Click &lsquo;Send Engage Email&rsquo; to start building a Campaign of your own."
      });

      Hotspots.clear();

      $timeout(function(){
        Steps.activate('one');
      }, 1000);
    };

  });
