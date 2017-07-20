'use strict';

import angular from 'angular';

export default function progressStateInvertedClass($rootScope) {
  return {
    restrict: 'A',
    scope: {},
    link: (scope, element, attrs) => {
      const progressStateIndex = attrs.progressStateInvertedClass;
      const iconClass = 'icon-indicator-gray';
      const completeClass = 'icon-indicator-complete-inverse';

      const setClass = index => {
        if (index > progressStateIndex) {
          angular.element(element).removeClass(iconClass).addClass(completeClass);
        } else {
          angular.element(element).removeClass(completeClass).addClass(iconClass);
        }
      };

      const setActiveClass = index => {
        if (index === progressStateIndex) {
          angular.element(element).addClass('active');
        } else {
          angular.element(element).removeClass('active');
        }
      };

      scope.$watch(
        () => {
          return $rootScope.progressIndex;
        },
        newValue => {
          setClass(newValue);
          setActiveClass(newValue);
        }
      );
    }
  };
}
