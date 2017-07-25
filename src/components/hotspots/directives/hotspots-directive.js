'use strict';

import '../styles/_hotspots.scss';

export default function hotspot() {
  return {
    replace: true,
    require: '^hotspots-container',
    restrict: 'EA',
    transclude: true,

    scope: true, // creates an internal scope for this directive
    link(scope, elm, attrs, hotspotsContainerCtrl) {
      hotspotsContainerCtrl.addHotspot({
        number: attrs.number,
        position: {
          left: attrs.left,
          top: attrs.top
        },
        active: false
      });
    }
  };
}
