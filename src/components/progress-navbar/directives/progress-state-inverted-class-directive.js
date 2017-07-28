'use strict';

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
          element.removeClass(iconClass).addClass(completeClass);
        } else {
          element.removeClass(completeClass).addClass(iconClass);
        }
      };

      const setActiveClass = index => {
        if (index === progressStateIndex) {
          element.addClass('active');
        } else {
          element.removeClass('active');
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
