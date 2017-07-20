'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:EngagementStudioRuleDrawerCtrl
 * @description
 * # EngagementStudioRuleDrawerCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('EngagementStudioRuleDrawerCtrl', function ($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {

    TopNavbar.InfoActive = true;
    Drawer.openToIntro();

    $scope.beginStory = function(){
      Drawer.close();
      WizardHandler.wizard("monitor").next();
      TopNavbar.InfoActive = false;

      Steps.clear();
      Steps.pop({
        number: 'one',
        title: "Now, let's add a rule. Click the (+)."
      });

      Steps.pop({
        number: 'two',
        title: "Next, select 'Rule'."
      });

      Steps.pop({
        number: 'three',
        title: "Select ‘Prospect Default Field’ to check for data in your lead or contact record."
      });

      Steps.pop({
        number: 'four',
        title: "Let's look for customers in Sales. Select 'Job Title'. Then enter 'Sales'. To finish click 'Save'."
      })

      Hotspots.clear();
      Hotspots.pop({
        number:1,
        position: {
          left: '382px',
          top: '84px'
        }
      });

      


      $timeout(function(){
        Steps.activate('one');
      }, 100);
    };

  });
