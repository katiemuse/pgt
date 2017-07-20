'use strict';
/**
 * @ngdoc directive
 * @name pardotInteractiveGuidedTour.directive:autofocus
 * @description
 * # autofocus
 */
angular.module('pardotInteractiveGuidedTour')
  .directive('liAutofocus', function ($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.$watch( attrs.liAutofocus, function( val ){
          if(angular.isDefined(val) && val) {
            $timeout(function(){
              element[0].focus();
            });
          }
        }, true);
      }
    };
  });
