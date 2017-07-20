'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:assignYourLeadsToSalesCtrl
 * @description
 * # assignYourLeadsToSalesCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('AssignYourLeadsToSalesCtrl', function ($scope, Steps, WizardHandler, Hotspots, $timeout, $state) {
    $scope.prospect = {
      score: "",
      grade: ""
    }

    $scope.gradeOptions = [
      { label: 'A+', value: 13 },
      { label: 'A',  value: 12 },
      { label: 'A-', value: 11 },
      { label: 'B+', value: 10 },
      { label: 'B',  value: 9 },
      { label: 'B-', value: 8 },
      { label: 'C+', value: 7 },
      { label: 'C',  value: 6 },
      { label: 'C-', value: 5 },
      { label: 'D+', value: 4 },
      { label: 'D',  value: 3 },
      { label: 'D-', value: 2 },
      { label: 'F',  value: 1 }
    ];

    var delayInMs = 1000;

    var timeoutPromiseProspectScore;
    $scope.$watch("prospect.score", function(newValue, oldValue){
      if(oldValue != newValue){
        $timeout.cancel(timeoutPromiseProspectScore);
        timeoutPromiseProspectScore = $timeout(function() {
          if (newValue.length >= 1) {
            Steps.activate("two");
            if (WizardHandler.wizard("monitor").currentStepNumber() == 2) {
              WizardHandler.wizard("monitor").next();
            }
          }
        }, delayInMs);
      }
    });

    $scope.prospectNextBtn = false;

    $scope.$watch("prospect.grade", function(newValue, oldValue){
      if(oldValue != newValue){
          $scope.prospectNextBtn = true;
      }
    });

    $scope.prospectNext = function(){
      if (WizardHandler.wizard("monitor").currentStepNumber() == 3) {
        $state.go("complete-action");
      }
    };

  });
