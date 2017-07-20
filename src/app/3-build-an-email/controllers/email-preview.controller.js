'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:EmailPreviewDrawerCtrl
 * @description
 * # EmailPreviewDrawerCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('EmailPreviewCtrl', function ($scope, WizardHandler, Steps, $timeout) {

    $scope.preview = {
      iPhoneSelected: false
    };

    $scope.SelectDevice = function(){
      $scope.preview.iPhoneSelected = true;

      Steps.activate("two");

      $timeout(function(){
        if(WizardHandler.wizard("monitor").currentStepNumber() == 2) {
          WizardHandler.wizard("monitor").next();
        }
      }, 1000);

    };

    $scope.EmailPreviewSuccess = function(){
      $timeout(function(){
        Steps.clear();
      }, 0);
    }

  });
