'use strict';
/**
 * @ngdoc directive
 * @name pardotInteractiveGuidedTour.directive:dragAndDrop
 * @description
 * # dragAndDrop
 */
angular.module('pardotInteractiveGuidedTour')
  .directive('draggable', function ($log) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.draggable({
          revert: true,
          start: function(event, ui){},
          stop: function(event, ui) {}
        });
      }
    };
  })
  .directive('droppable', function($log){
    return {
      restrict: 'A',
      scope: {
        drop: "&"
      },
      link: function(scope,element,attrs){
        element.droppable({
          accept: "*",
          hoverClass: "drop-hover",
          drop:function(event, ui){
            scope.drop(event,ui);
          }
        })
      }
    }
  });
