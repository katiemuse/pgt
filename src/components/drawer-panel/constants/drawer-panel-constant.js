'use strict';
/**
 * @ngdoc service
 * @name pardotInteractiveGuidedTour.steps
 * @description
 * # steps
 * Constant in the pardotInteractiveGuidedTour.
 */
angular.module('pardotInteractiveGuidedTour')
  .constant('drawerPanelConfig', {
    horizontal: 1,
    itemNav: 'centered',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    scrollBy: 1,
    speed: 300,
    elasticBounds: 1,
    easing: 'linear',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1
  });

