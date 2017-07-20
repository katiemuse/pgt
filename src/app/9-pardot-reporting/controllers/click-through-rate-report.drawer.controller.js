'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:ClickThroughRateReportDrawerCtrl
 * @description
 * # ClickThroughRateReportDrawerCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('ClickThroughRateReportDrawerCtrl', function ($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: "Get a visual look at your click-through rates with this report."
    });

    $timeout(function(){
      Hotspots.clear();
      Hotspots.pop({
        number:1,
        position: {
          left: '229px',
          top: '281px'
        }
      });

      document.getElementById("report-link").className += " active";
      document.getElementById("interaction-link").className += " active";
      document.getElementById("email-client-link").className += " active";
      document.getElementById("done-button").className += " active";
    },0);

    $timeout(function(){
      Steps.activate('one');
    }, 1000);

  });
