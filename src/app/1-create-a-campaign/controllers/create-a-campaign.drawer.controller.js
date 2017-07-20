'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:CreateACampaignDrawerCtrl
 * @description
 * # CreateACampaignDrawerCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('CreateACampaignDrawerCtrl', function ($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {

    TopNavbar.InfoActive = true;
    Drawer.openToIntro();

    $scope.beginStory = function(){
      Drawer.close();
      WizardHandler.wizard("monitor").next();
      TopNavbar.InfoActive = false;

      Steps.clear();
      Steps.pop({
        number: 'one',
        title: "It's pretty simple &mdash; input the name of your campaign."
      });

      Steps.pop({
        number: 'two',
        title: 'Input the cost of your<br/> campaign.'
      });

      Steps.pop({
        number: 'three',
        title: 'Click &lsquo;Create Campaign&rsquo;.'
      });

      Hotspots.clear();
      Hotspots.pop({
        number:1,
        position: {
          left: '117px',
          top: '223px'
        }
      });

      Hotspots.pop({
        number:2,
        position: {
          left: '117px',
          top: '273px'
        }
      });

      $timeout(function(){
        Steps.activate('one');
      }, 1000);
    };

  });
