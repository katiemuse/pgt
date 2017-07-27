'use strict';

function wzNext() {
  return {
    restrict: 'A',
    replace: false,
    require: '^wizard',
    link($scope, $element, $attrs, wizard) {
      $element.on('click', e => {
        e.preventDefault();
        $scope.$apply(() => {
          $scope.$eval($attrs.wzNext);
          wizard.next();
        });
      });
    }
  };
}

function wzPrevious() {
  return {
    restrict: 'A',
    replace: false,
    require: '^wizard',
    link($scope, $element, $attrs, wizard) {
      $element.on('click', e => {
        e.preventDefault();
        $scope.$apply(() => {
          $scope.$eval($attrs.wzPrevious);
          wizard.previous();
        });
      });
    }
  };
}

function wzFinish() {
  return {
    restrict: 'A',
    replace: false,
    require: '^wizard',
    link($scope, $element, $attrs, wizard) {
      $element.on('click', e => {
        e.preventDefault();
        $scope.$apply(() => {
          $scope.$eval($attrs.wzFinish);
          wizard.finish();
        });
      });
    }
  };
}

function wzCancel() {
  return {
    restrict: 'A',
    replace: false,
    require: '^wizard',
    link($scope, $element, $attrs, wizard) {
      $element.on('click', e => {
        e.preventDefault();
        $scope.$apply(() => {
          $scope.$eval($attrs.wzCancel);
          wizard.cancel();
        });
      });
    }
  };
}

module.exports = {wzNext, wzPrevious, wzFinish, wzCancel};
