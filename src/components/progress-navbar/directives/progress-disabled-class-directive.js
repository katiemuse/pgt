'use strict';

export default function progressDisabledClass($rootScope) {
  return {
    restrict: 'A',
    scope: {},
    link: (scope, element, attrs) => {
      const progressStateIndex = parseInt(attrs.progressDisabledClass, 10);
      const setDisabledClass = index => {
        if (progressStateIndex < index) {
          element.removeClass('disabled');
          // console.log('setDisabledClass', progressStateIndex,index, 'enabled');
        } else {
          element.addClass('disabled');
          // console.log('setDisabledClass', progressStateIndex,index, 'disabled');
        }
      };

      if (!$rootScope.allowJumpingStories) {
        scope.$watch(
          () => {
            return $rootScope.progressIndex;
          },
          newValue => {
            setDisabledClass(newValue);
          }
        );
      }
    }
  };
}
