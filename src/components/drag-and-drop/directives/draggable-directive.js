'use strict';

export default function draggable() {
  return {
    restrict: 'A',
    link(element) {
      element.draggable({
        revert: true,
        start() {},
        stop() {}
      });
    }
  };
}
