'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:CreateACampaignDrawerCtrl
 * @description
 * # CreateACampaignDrawerCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('SalesViewInSalesforceDrawerCtrl', function ($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout, $state) {

    TopNavbar.InfoActive = true;
    Drawer.openToIntro();

    $scope.beginStory = function(){
      Drawer.close();
      TopNavbar.InfoActive = false;
      TopNavbar.DidYouKnowCount = 1;

      Steps.clear();
      Steps.pop({
        number: 'one',
        title: "See how Pardot data integrates with Salesforce by exploring the hot spots on this page.<br/><br/>Click the down-arrow to explore."
      });
      Steps.pop({
        number: 'two',
        title: "Place your lead on a targeted nurturing list using the dropdown menu."
      });
      Steps.pop({
        number: 'three',
        title: "Click &lsquo;Next&rsquo; to learn more about Pardot's sales tool, Salesforce® Engage."
      });

      $timeout(function(){
        Steps.activate('one');
      }, 500);
    };

  });
