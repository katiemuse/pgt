'use strict';

import angular from 'angular';
import $ from 'jquery';
import 'sly/dist/sly';

import '../styles/_drawer-panel.scss';

export default function drawerPanel(drawerPanelConfig) {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    scope: {
      type: '@',
      selected: '='
    },
    controller: 'DrawerPanelController',
    templateUrl: 'components/drawer-panel/partials/drawer-panel.html',
    link(scope, element, attrs) {
      /* eslint-disable */
      const frame = $(element);
      /* eslint-enable */
      const wrap = frame.parent();

      const defaultControls = {
        scrollBar: wrap.find('.scrollbar') || null,
        pagesBar: wrap.find('.pages') || null,
        forward: wrap.find('.forward') || null,
        backward: wrap.find('.backward') || null,
        prev: wrap.find('.prev') || null,
        next: wrap.find('.next') || null,
        prevPage: wrap.find('.prevPage') || null,
        nextPage: wrap.find('.nextPage') || null
      };

      // Merge parts into options for sly argument
      const options = $.extend({}, drawerPanelConfig, defaultControls);
      // const callback = scope.$eval(attrs.panelCallback) || function () {};

      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;

      // Call Sly on frame
      frame.sly(options);
    }
  };
}
