'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:AssignYourLeadsToSalesDrawerCtrl
 * @description
 * # AssignYourLeadsToSalesDrawerCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('AssignYourLeadsToSalesDrawerCtrl', function ($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {

    TopNavbar.InfoActive = true;
    Drawer.openToIntro();

    $scope.beginStory = function(){
      Drawer.close();
      WizardHandler.wizard("monitor").next();
      TopNavbar.InfoActive = false;
      TopNavbar.DidYouKnowCount = 1;

      Steps.clear();
      Steps.pop({
        number: 'one',
        title: "Type in a numeric value that you would like to use as a scoring threshold."
      });

      Steps.pop({
        number: 'two',
        title: "Select a letter grade from the dropdown menu to use as a grading threshold."
      });

      Hotspots.clear();
      Hotspots.pop({
        number:1,
        position: {
          left: '94px',
          top: '124px'
        }
      });

      Hotspots.pop({
        number:2,
        position: {
          left: '94px',
          top: '224px'
        }
      });

      $timeout(function(){
        Steps.activate('one');
      }, 1000);
    };

  });
