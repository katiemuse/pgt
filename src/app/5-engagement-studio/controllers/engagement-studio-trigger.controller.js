'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:EngagementStudioTriggerCtrl
 * @description
 * # EngagementStudioTriggerCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('EngagementStudioTriggerCtrl', function ($scope, Steps, Hotspots, WizardHandler, Drawer, $timeout) {

    $scope.list = {
      sendEmail: null
    }
    
    $scope.triggerDays = {
      value: "",
      done: false
    };
    
    var timeoutTriggerDays;
    $scope.$watch("triggerDays.value", function(newValue, oldValue){
      if(oldValue != newValue){
        $timeout.cancel(timeoutTriggerDays);
        timeoutTriggerDays = $timeout(function(){
          if (newValue.length > 0) {
            $scope.triggerDays.done = true;
          }
        }, 1000);
      }
    });
    
    $scope.sendEmailOptions = [
      { label: "Introduction Email", value: 1 }
    ];
    
    $scope.nextStep = function() {
      var steps = ["one", "two", "three", "four", "five", "six"];
      // console.log(WizardHandler.wizard("monitor").currentStepNumber());
      // console.log(steps[WizardHandler.wizard("monitor").currentStepNumber()]);
      Steps.activate(steps[WizardHandler.wizard("monitor").currentStepNumber() - 2]);
    }

    $scope.successScreen = function() {
      Steps.clear();
      Hotspots.clear();
      // console.log("Success");
    }

  });
