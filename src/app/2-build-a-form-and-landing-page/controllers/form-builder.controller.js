'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:buildAFormAndLandingPageCtrl
 * @description
 * # buildAFormAndLandingPageCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('FormBuilderCtrl', function ($scope, $timeout, Steps, WizardHandler, Drawer, $state) {
    $scope.formBuilder = {
    };



    $scope.formBuilder.sortableOptions = {
      update: function(e, ui) {
        if(WizardHandler.wizard("monitor").currentStepNumber() == 2)
        {
          WizardHandler.wizard("monitor").next();
          Steps.activate("three");
        }
      },
      axis: 'y'
    };

    $scope.formBuilder.fields = [
      {
        name: "First Name",
        required: true
      },
      {
        name: "Last Name",
        required: true
      },
      {
        name: "Company",
        required: false
      },
      {
        name: "Email (a)",
        required: true
      }
    ]

    $scope.Next = function(formBuilder) {
      Steps.clear();
      $state.go('form-completion-actions');
    };
  });
