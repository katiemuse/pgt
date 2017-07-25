'use strict';

export default function draggable() {
  return {
    restrict: 'A',
    link(scope, element) {
      element.draggable({
        revert: true,
        start() {},
        stop() {}
      });
    }
  };
}
