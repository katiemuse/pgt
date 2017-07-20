'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:EngagementStudioTriggerDrawerCtrl
 * @description
 * # EngagementStudioTriggerDrawerCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('EngagementStudioTriggerDrawerCtrl', function ($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {

    TopNavbar.InfoActive = true;
    Drawer.openToIntro();

    $scope.beginStory = function(){
      Drawer.close();
      WizardHandler.wizard("monitor").next();
      TopNavbar.InfoActive = false;

      Steps.clear();
      Steps.pop({
        number: 'one',
        title: "To add a trigger, just click the (+)."
      });

      Steps.pop({
        number: 'two',
        title: "Next, select 'Trigger'."
      });

      Steps.pop({
        number: 'three',
        title: "Select ‘Email Open’ to listen for engagmenet activity."
      });

      Steps.pop({
        number: 'four',
        title: "Choose your email template. Enter the number of days you’d like to watch for this trigger. If a customer opens your email, they instantly head down the yes path. If they don’t, they will be sent down the no path after a designated number of days. Click ‘Save’ to complete this step."
      })

      Hotspots.clear();


      $timeout(function(){
        Steps.activate('one');
      }, 100);
    };

  });
