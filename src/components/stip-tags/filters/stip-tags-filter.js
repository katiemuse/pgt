'use strict';
/**
 * @ngdoc filter
 * @name pardotInteractiveGuidedTour.filter:stripTags
 * @function
 * @description
 * # stripTags
 * Filter in the pardotInteractiveGuidedTour.
 */
angular.module('pardotInteractiveGuidedTour')
  .filter('stripTags', function () {
    return function(text) {
      return String(text).replace(/<[^>]+>/gm, '');
    }
  });

