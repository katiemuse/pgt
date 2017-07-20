'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:InteractionReportDrawerCtrl
 * @description
 * # InteractionReportDrawerCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('InteractionReportDrawerCtrl', function ($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: "View the engagement and activity for your email."
    });

    $timeout(function(){
      Hotspots.clear();
      Hotspots.pop({
        number:1,
        position: {
          left: '60px',
          top: '253px'
        }
      });

      Hotspots.pop({
        number:2,
        position: {
          left: '51px',
          top: '290px'
        }
      });

      Hotspots.pop({
        number:3,
        position: {
          left: '67px',
          top: '320px'
        }
      });

      Hotspots.pop({
        number:4,
        position: {
          left: '76px',
          top: '354px'
        }
      });

      document.getElementById("click-through-link").className += " active";
      document.getElementById("report-link").className += " active";
      document.getElementById("email-client-link").className += " active";
      document.getElementById("done-button").className += " active";
    },0);

    $timeout(function(){
      Steps.activate('one');
    }, 1000);

  });
