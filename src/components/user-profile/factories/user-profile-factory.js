'use strict';
/**
 * @ngdoc service
 * @name pardotInteractiveGuidedTour.userProfile
 * @description
 * # userProfile
 * Factory in the pardotInteractiveGuidedTour.
 */
angular.module('pardotInteractiveGuidedTour')
  .factory('UserProfile', function () {
// Service logic
// ...

    var userProfile = {
      CampaignName: "My First Campaign",
      FormName: "LenoxSoft White Paper"
    };

// Public API here
    return userProfile;
  });
