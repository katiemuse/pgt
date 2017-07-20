'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:buildAnEmailCtrl
 * @description
 * # buildAnEmailCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('BuildAnEmailCtrl', function ($scope, WizardHandler, Steps, $timeout) {

    $scope.editor = {
      templateSelected: false,
      open: false,
      html:
        '<h2>Going Green Without a Lot of Gold</h2><p>LenoxSoft comes complete with a suite of powerful features that can help you get the most out of your energy usage. Tailor your energy management software to your exact specifications &mdash; without any IT headaches.</p>',
      showSave: false

    };


    $scope.Apply = function() {
      if($scope.editor.templateSelected)
      {
        if(WizardHandler.wizard("monitor").currentStepNumber() == 2) {
          WizardHandler.wizard("monitor").next();
          Steps.activate("two");
        }
      }
    };

    $scope.ToggleEditor = function() {
      $scope.editor.open = !$scope.editor.open;
      $scope.editor.showSave = true;
    };

    $scope.$watch('editor.showSave', function(newValue){
      if(newValue) {
        if(WizardHandler.wizard("monitor").currentStepNumber() == 3) {
          Steps.activate("three");
        }
      }
    });

    $scope.SelectTemplate = function(){
      $scope.editor.templateSelected = true;
    };

    $scope.BuildEmailSuccess = function(){
      $timeout(function(){
        Steps.clear();
      }, 0);
    }

  });
