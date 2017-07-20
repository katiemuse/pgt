'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:SalesCloudEngageCtrl
 * @description
 * # SalesCloudEngageCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('SalesCloudEngageCtrl', function ($scope, WizardHandler, Steps) {

    $scope.SelectCard = function(){
      if(WizardHandler.wizard("monitor").currentStepNumber() == 2){
        WizardHandler.wizard("monitor").next();
        Steps.activate("two");
      }
    };

});
