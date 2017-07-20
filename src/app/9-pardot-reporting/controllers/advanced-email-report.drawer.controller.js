'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:AdvancedEmailReportDrawerCtrl
 * @description
 * # AdvancedEmailReportDrawerCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('AdvancedEmailReportDrawerCtrl', function ($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout, $stateParams) {

    $scope.beginStory = function() {
      Drawer.close();
      Steps.clear();
      Steps.pop({
        number: 'one',
        title: "Take a look at the reports to see how the email you created in step three is performing. Click on the tabs at the top to view the different email reports available."
      });

      $timeout(function(){
        Hotspots.clear();
        Hotspots.pop({
          number:1,
          position: {
            left: '223px',
            top: '86px'
          }
        });

        Hotspots.pop({
          number:2,
          position: {
            left: '372px',
            top: '86px'
          }
        });

        Hotspots.pop({
          number:3,
          position: {
            left: '478px',
            top: '86px'
          }
        });

        Hotspots.pop({
          number:4,
          position: {
            left: '80px',
            top: '205px'
          }
        });

        Hotspots.pop({
          number:5,
          position: {
            left: '68px',
            top: '420px'
          }
        });

        document.getElementById("click-through-link").className += " active";
        document.getElementById("interaction-link").className += " active";
        document.getElementById("email-client-link").className += " active";
        document.getElementById("done-button").className += " active";
      },0);

      $timeout(function () {
        Steps.activate('one');
      }, 1000);
    };

    if($stateParams.intro){
      Drawer.openToIntro();
    } else {
      $scope.beginStory();
    }

  });
