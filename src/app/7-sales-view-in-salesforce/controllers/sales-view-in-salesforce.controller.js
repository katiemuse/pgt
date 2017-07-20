'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:salesViewInSalesforceCtrl
 * @description
 * # salesViewInSalesforceCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('SalesViewInSalesforceCtrl', function ($scope, WizardHandler, Steps, Hotspots, $timeout, $state) {

    $scope.view = {
      selectedList: null,
      showArrow: true
    };


    $scope.view.listOptions = [
      { label: 'Active - 30 day nurture', value: 13 }
    ];

    $scope.ScrollDownToStep = function(number){
      switch(WizardHandler.wizard("monitor").currentStepNumber()){
        case 1:
          WizardHandler.wizard("monitor").next();

          $timeout(function() {

            Hotspots.pop({
              number: 1,
              position: {
                left: '88px',
                top: '9px'
              }
            });

            Hotspots.pop({
              number: 2,
              position: {
                left: '159px',
                top: '200px'
              }
            });

          }, 1000);
          break;
        case 2:
          Hotspots.clear();

          $scope.view.showArrow = false;

          $timeout(function(){
            $state.go("personalized-email");
          }, 600);

          break;
      }
    }

  });
