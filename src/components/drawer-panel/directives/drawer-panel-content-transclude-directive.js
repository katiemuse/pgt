'use strict';
/**
 * @ngdoc directive
 * @name pardotInteractiveGuidedTour.directive:hotSpotPanel
 * @description
 * # hotSpotPanel
 */

angular.module('pardotInteractiveGuidedTour')
  .directive('drawerPanelTabContentTransclude', function() {
    return {
      restrict: 'A',
      require: '^drawerPanel',
      link: function(scope, elm, attrs) {
        var tab = scope.$eval(attrs.drawerPanelTabContentTransclude);

        //Now our tab is ready to be transcluded: both the tab heading area
        //and the tab content area are loaded.  Transclude 'em both.
        tab.$transcludeFn(tab.$parent, function(contents) {
          angular.forEach(contents, function(node) {
            if (isTabHeading(node)) {
              //Let tabHeadingTransclude know.
              tab.headingElement = node;
            } else {
              elm.append(node);
            }
          });
        });
      }
    };
    function isTabHeading(node) {
      return node.tagName &&  (
        node.hasAttribute('tab-heading') ||
        node.hasAttribute('data-tab-heading') ||
        node.tagName.toLowerCase() === 'tab-heading' ||
        node.tagName.toLowerCase() === 'data-tab-heading'
        );
    }
  });
