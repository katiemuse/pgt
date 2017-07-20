'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:CreateACampaignDrawerCtrl
 * @description
 * # CreateACampaignDrawerCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('ViewAProspectProfileDrawerCtrl', function ($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {

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
        title: "Click on the highlighted &lsquo;page views&rsquo; link under the Prospect Activities section to explore how this prospect has interacted with your website."
      });

      Steps.pop({
        number: 'two',
        title: "Click &lsquo;Next&rsquo; to continue."
      });

      Hotspots.clear();
      Hotspots.pop({
        number:1,
        position: {
          left: '54px',
          top: '391px'
        }
      });

      Hotspots.pop({
        number:2,
        position: {
          left: '140px',
          top: '421px'
        }
      });

      Hotspots.pop({
        number:3,
        position: {
          left: '365px',
          top: '115px'
        }
      });

      $timeout(function(){
        Steps.activate('one');
      }, 1000);
    };

  });
