'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:EngagementStudioCtrl
 * @description
 * # EngagementStudioCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('EngagementStudioCtrl', function ($scope, Steps, Hotspots, WizardHandler, Drawer, $timeout) {

    $scope.list = {
      sendEmail: null
    }

    $scope.sendEmailOptions = [
      { label: "Introduction Email", value: 1 }
    ];

    $scope.$watch('wizard.stateIndex', function(newValue, oldValue){
      if(newValue != oldValue) {
        if(oldValue == 2 && newValue == 3) {
          $timeout(function(){
            $('.list-group').stop().animate({
              scrollTop: $('.list-group')[0].scrollHeight
            }, 800);
          }, 1000);
        }
      }
    });

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
