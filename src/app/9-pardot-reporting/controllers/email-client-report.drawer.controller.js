'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:EmailClientReportDrawerCtrl
 * @description
 * # EmailClientReportDrawerCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('EmailClientReportDrawerCtrl', function ($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout, $stateParams) {

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: "View a breakdown of the email clients and devices used to open your emails. When you're done looking at the reports, click &ldquo;Done&rdquo;."
    });

    $timeout(function(){
      document.getElementById("report-link").className += " active";
      document.getElementById("interaction-link").className += " active";
      document.getElementById("click-through-link").className += " active";
      document.getElementById("done-button").className += " active";
    },0);

    $timeout(function(){
      Steps.activate('one');
    }, 1000);

  });
