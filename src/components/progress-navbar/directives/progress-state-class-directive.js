'use strict';

import angular from 'angular';

export default function progressStateClass($rootScope) {
  return {
    restrict: 'A',
    scope: {},
    link: (scope, element, attrs) => {
      const progressStateIndex = attrs.progressStateClass;
      const iconClass = 'icon-indicator-white';
      const completeClass = 'icon-indicator-complete';

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
