'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:IntroDrawerCtrl
 * @description
 * # IntroDrawerCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('IntroDrawerCtrl', function ($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: ""
    });

    Steps.pop({
      number: 'two',
      title: ''
    });

    Steps.pop({
      number: 'three',
      title: ''
    });

  });
