'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:EngagementStudioTestCtrl
 * @description
 * # EngagementStudioTestCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('EngagementStudioTestCtrl', function ($scope, Steps, Hotspots, WizardHandler, Drawer, $timeout, steplog) {

    $scope.log = {
      step1: null,
      emailSent: steplog.getEmailSent,
      wasEmailOpened: steplog.getWasEmailOpened,
      prospectDefaultFieldMatched: steplog.getProspectDefaultFieldMatched,
      assignedToUser: steplog.getAssignedToUser,
      engagementEnded: steplog.getEngagementEnded
    }

    $scope.step2Log = function() {
      $timeout(function(){
        steplog.setProspectDefaultFieldMatched(true);
      }, 2600);
    }

    $scope.step3Log = function() {
      $timeout(function(){
        steplog.setAssignedToUser(true);
      }, 2000);
      $timeout(function(){
        steplog.setEngagementEnded(true);
      }, 3600);
    }
    
    $scope.nextStep = function() {
      var steps = ["one", "two", "three", "four", "five", "six"];
      // console.log(WizardHandler.wizard("monitor").currentStepNumber());
      // console.log(steps[WizardHandler.wizard("monitor").currentStepNumber()]);
      Steps.activate(steps[WizardHandler.wizard("monitor").currentStepNumber() - 2]);
      if (WizardHandler.wizard("monitor").currentStepNumber() == 4) {
        Hotspots.clear();
        $timeout(function() {
          Hotspots.pop({
            number:1,
            position: {
              left: '426px',
              top: '436px'
            }
          });

          Hotspots.pop({
            number:2,
            position: {
              left: '540px',
              top: '307px'
            }
          });
        }, 3600);
      }
    }

    $scope.successScreen = function() {
      Steps.clear();
      Hotspots.clear();
      // console.log("Success");
    }

  });
