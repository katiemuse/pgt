'use strict';
/* eslint-disable */
import angular from 'angular';

export default function drawerPanelTabContentTransclude() {
  return {
    restrict: 'A',
    require: '^drawerPanel',
    link(scope, elm, attrs) {
      const tab = scope.$eval(attrs.drawerPanelTabContentTransclude);

      // Now our tab is ready to be transcluded: both the tab heading area
      // and the tab content area are loaded.  Transclude 'em both.

      tab.$transcludeFn(tab.$parent, contents => {
        angular.forEach(contents, node => {
          if (isTabHeading(node)) {
            // Let tabHeadingTransclude know.
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };
  function isTabHeading(node) {
    return node.tagName && (
      node.hasAttribute('tab-heading') ||
      node.hasAttribute('data-tab-heading') ||
      node.tagName.toLowerCase() === 'tab-heading' ||
      node.tagName.toLowerCase() === 'data-tab-heading'
    );
  }
}
/* eslint-enable */
