'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:viewAProspectProfileCtrl
 * @description
 * # viewAProspectProfileCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('ViewAProspectProfileCtrl', function ($scope, Steps, WizardHandler, Hotspots) {


    $scope.ShowVisitorPageViews = function() {
      if (WizardHandler.wizard("monitor").currentStepNumber() == 2) {
        Steps.activate("two");
        Hotspots.clear();
        WizardHandler.wizard("monitor").next();
      }
    };

    $scope.Next = function() {
      if (WizardHandler.wizard("monitor").currentStepNumber() == 3) {
        Steps.clear();
        Hotspots.clear();
        WizardHandler.wizard("monitor").next();
      }
    }
  });
