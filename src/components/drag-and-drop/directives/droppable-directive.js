'use strict';

export default function droppable() {
  return {
    restrict: 'A',
    scope: {
      drop: '&'
    },
    link(scope, element) {
      element.droppable({
        accept: '*',
        hoverClass: 'drop-hover',
        drop(event, ui) {
          scope.drop(event, ui);
        }
      });
    }
  };
}
