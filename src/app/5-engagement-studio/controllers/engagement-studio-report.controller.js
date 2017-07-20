'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:EngagementStudioReportCtrl
 * @description
 * # EngagementStudioReportCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('EngagementStudioReportCtrl', function ($scope, Steps, Hotspots, WizardHandler, Drawer, $timeout) {
    
    $scope.nextStep = function() {
      var steps = ["one", "two", "three", "four", "five", "six"];
      // console.log(WizardHandler.wizard("monitor").currentStepNumber());
      // console.log(steps[WizardHandler.wizard("monitor").currentStepNumber()]);
      Steps.activate(steps[WizardHandler.wizard("monitor").currentStepNumber() - 2]);
      if(WizardHandler.wizard("monitor").currentStepNumber() == 3){
        Hotspots.clear();
      }
    }
    
    $scope.nextWizardStep = function() {
      var steps = ["one", "two", "three", "four", "five", "six"];
      WizardHandler.wizard("monitor").next();
      Steps.activate(steps[WizardHandler.wizard("monitor").currentStepNumber() - 2]);
    }

    $scope.successScreen = function() {
      Steps.clear();
      Hotspots.clear();
      // console.log("Success");
    }

  });
