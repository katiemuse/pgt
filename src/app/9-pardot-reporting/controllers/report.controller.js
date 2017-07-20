'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:ReportCtrl
 * @description
 * # ReportCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('ReportCtrl', function ($scope, Hotspots, Steps, $state) {
    $scope.Done = function(){
      Steps.clear();
      Hotspots.clear();
      $state.go('the-end');
    };

  });
