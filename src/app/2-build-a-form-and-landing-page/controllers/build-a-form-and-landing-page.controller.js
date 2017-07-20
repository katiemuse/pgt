'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:buildAFormAndLandingPageCtrl
 * @description
 * # buildAFormAndLandingPageCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('BuildAFormAndLandingCtrl', function ($scope, $timeout, Steps, WizardHandler, $state, UserProfile) {
    $scope.form = {
      name: "LenoxSoft White Paper",
      campaignName: UserProfile.CampaignName
    };

    $scope.CreateForm = function(form) {

       if(WizardHandler.wizard("monitor").currentStepNumber() == 2) {
         UserProfile.FormName = $scope.form.name;
         $state.go('form-builder');
       }
    };
  });
