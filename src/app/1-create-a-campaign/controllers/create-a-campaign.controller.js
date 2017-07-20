'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:CreateACampaignCtrl
 * @description
 * # CreateACampaignCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('CreateACampaignCtrl', function ($scope, Steps, Hotspots, WizardHandler, $timeout, UserProfile, TopNavbar) {

    $scope.campaign = {
      name: "",
      cost: ""
    };

    var delayInMs = 1000;

    var timeoutPromiseCampaignName;
    $scope.$watch("campaign.name", function(newValue, oldValue){
      if(oldValue != newValue){
        $timeout.cancel(timeoutPromiseCampaignName);
        timeoutPromiseCampaignName = $timeout(function() {
            if (newValue.length > 3) {
              Steps.activate("two");
              if (WizardHandler.wizard("monitor").currentStepNumber() == 2) {
                WizardHandler.wizard("monitor").next();
              }
            }
          }, delayInMs);
      }
    });

    var timeoutPromiseCampaignCost;
    $scope.$watch("campaign.cost", function(newValue, oldValue){
      if(oldValue != newValue){
        $timeout.cancel(timeoutPromiseCampaignCost);
        timeoutPromiseCampaignCost = $timeout(function() {
          Steps.activate("three");
          if (WizardHandler.wizard("monitor").currentStepNumber() == 3) {
            WizardHandler.wizard("monitor").next();
          }
        }, delayInMs);
      }
    });

    $scope.CreateCampaign = function() {
      if (WizardHandler.wizard("monitor").currentStepNumber() == 4) {
        UserProfile.CampaignName = $scope.campaign.name;
        Steps.clear();
        Hotspots.clear();
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
        WizardHandler.wizard("monitor").next();
      }
    }
  });
