'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:SelectTemplateDrawerCtrl
 * @description
 * # SelectTemplateDrawerCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('SelectTemplateDrawerCtrl', function ($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {

    TopNavbar.InfoActive = true;
    Drawer.openToIntro();

    $scope.beginStory = function(){
      Drawer.close();
      WizardHandler.wizard("monitor").next();
      TopNavbar.InfoActive = false;

      Steps.clear();

      Steps.pop({
        number: 'one',
        title: "Preview your event invite. Notice that it is displayed within a WYSIWYG editor for easy editing and further personalization, if desired."
      });

      Steps.pop({
        number: 'two',
        title: "Press &ldquo;Send&rdquo; in the upper right corner to invite Jeremy to the upcoming event! Keep in mind that opens and clicks will be tracked with Salesforce® Engage."
      });

      Hotspots.clear();

      Hotspots.pop({
        number:1,
        position: {
          left: '130px',
          top: '95px'
          /*left: '81px',
           top: '322px'*/
        }
      });

      Hotspots.pop({
        number:2,
        position: {
          left: '274px',
          top: '95px'
        }
      });

      $timeout(function(){
        Steps.activate('one');
      }, 1000);
    };

  });
