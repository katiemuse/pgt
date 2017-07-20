'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:CreateACampaignDrawerCtrl
 * @description
 * # CreateACampaignDrawerCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('BuildAFormAndLandingDrawerCtrl', function ($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {

    TopNavbar.InfoActive = true;
    Drawer.openToIntro();

    $scope.beginStory = function(){

      Drawer.close();
      WizardHandler.wizard("monitor").next();
      TopNavbar.InfoActive = false;

      Steps.clear();
      Steps.pop({
        number: 'one',
        title: "Click &lsquo;Next&rsquo; to start setting up your form."
      });

      Steps.pop({
        number: 'two',
        title: 'Click and drag the form fields into the order that you prefer.'
      });

      Steps.pop({
        number: 'three',
        title: 'Click &lsquo;Next&rsquo; to learn how to add completion actions to your form.'
      });

      Steps.pop({
        number: 'four',
        title: "Use the blank dropdown menu to view all the possible completion actions that can be triggered after a form submission. See some unfamiliar terminology? Don't worry &mdash; we'll cover everything by the end of our interactive tour."
      });

      Steps.pop({
        number: 'five',
        title: "Click &rsquo;Confirm &amp; Save&lsquo; to advance to the Landing Page Builder."
      });

      Hotspots.clear();

      Hotspots.pop({
        number: 1,
        position: {
          left: '154px',
          top: '324px'
        }
      });

      Hotspots.pop({
        number: 2,
        position: {
          left: '127px',
          top: '375px'
        }
      });


      $timeout(function(){
        Steps.activate('one');
      }, 1000);
    };


    $scope.beginForBuilderStory = function(){

      Drawer.close();
      WizardHandler.wizard("monitor").next();
      TopNavbar.InfoActive = false;
      TopNavbar.DidYouKnowCount = 6;

      $timeout(function(){
        Steps.activate('two');
      }, 1000);
    };

  });
