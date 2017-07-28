'use strict';

import angular from 'angular';

export default function liAutoFocus($timeout) {
  return {
    restrict: 'A',
    link: (scope, element, attrs) => {
      scope.$watch(attrs.liAutofocus, val => {
        if (angular.isDefined(val) && val) {
          $timeout(() => {
            element[0].focus();
          }, 10);
        }
      }, true);
    }
  };
}
