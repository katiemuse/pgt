'use strict';

export default function drawerPanelTabHeadingTransclue() {
  return {
    restrict: 'A',
    require: '^drawerPanelTab',
    link(scope, elm) {
      scope.$watch('headingElement', heading => {
        if (heading) {
          elm.html('');
          elm.append(heading);
          // console.log('heading', heading);
        }
      });
    }
  };
}
