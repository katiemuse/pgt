'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:MicroCampaignReportingCtrl
 * @description
 * # MicroCampaignReportingCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('MicroCampaignReportingCtrl', function ($scope, WizardHandler, Steps, Hotspots, $timeout) {


  $scope.Next = function() {
    console.log(WizardHandler.wizard("monitor").currentStepNumber());
    if(WizardHandler.wizard("monitor").currentStepNumber() == 2)
    {
      $timeout(function(){
        Steps.clear();
        Hotspots.clear();
      }, 0);
      WizardHandler.wizard("monitor").next();
    }
  };


  });
