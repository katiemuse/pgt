'use strict';

import '../styles/_center.scss';

export default function liCenter() {
  return {
    restrict: 'ECA',
    transclude: true,
    template:
      '<div class="center-container">\
        <div class="centered" ng-transclude>\
        </div>\
      </div>'
  };
}
