'use strict';

import angular from 'angular';
import '../styles/_hotspots.scss';

export default function hotspotsContainer() {
  return {
    replace: true,
    require: '^hotspots-container',
    restrict: 'EA',
    transclude: true,

    scope: true, // creates an internal scope for this directive
    link(attrs, hotspotsContainerCtrl) {
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
