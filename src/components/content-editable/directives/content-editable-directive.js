'use strict';

export default function contenteditable() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, element, attrs, ngModel) => {
      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function () {
        element.html(ngModel.$viewValue || '');
      };

      element.bind('blur keyup change', () => {
        scope.$apply(read);
      });
    }
  };
}

