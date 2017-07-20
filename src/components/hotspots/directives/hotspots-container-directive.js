'use strict';

import angular from 'angular';
import '../styles/_hotspots.scss';

export default function hotspotsContainer($parse, $rootScope, $interval, $sce, Hotspots, TopNavbar) {
  return {
    replace: true,
    restrict: 'EA',
    transclude: true,
    scope: true, // creates an internal scope for this directive
    link(scope, elm, attrs) {
      let id = 0;
      const mergedConfig = angular.extend({}, scope.$eval(attrs.hotspotsOptions));

      scope.config = {
        position: mergedConfig['extra-class']
      };

      function addHotspot(hotspot) {
        id++;
        angular.extend(hotspot, {id});
        if (scope.hotspots === null) {
          scope.hotspots = [];
        }
        scope.hotspots.push(hotspot);
      }

      const x = $rootScope.$on('hotspots-new', () => {
        addHotspot(Hotspots.hotspot);
      });

      $rootScope.$on('$destroy', x);

      /* $rootScope.$on('hotspots-activate', function (event, number) {
         var i = 0;
         for (i; i < scope.hotspots.length; i++) {
           scope.hotspots[i].active = scope.hotspots[i].number === number ? true : false;
         }
       });
       */

      const y = $rootScope.$on('hotspots-clear', () => {
        scope.hotspots.splice(0, scope.hotspots.length);
        TopNavbar.HotspotsCount = 0;
        TopNavbar.HotspotsEnabled = false;
        // console.log('clear hotspots');
      });

      $rootScope.$on('$destroy', y);
    },
    controller($scope, $element, $attrs, $rootScope, Drawer, TopNavbar) {
      const x = $rootScope.$on('$stateChangeSuccess',
        (event, toState, toParams, fromState, fromParams) => {
          Hotspots.clear();
          $scope.hotspots = Hotspots.hotspots;
        }
      );

      $rootScope.$on('$destroy', x);

      $scope.$watch(() => {
        return Hotspots.hotspots;
      }, () => {
        $scope.hotspots = Hotspots.hotspots;
      });

      $scope.removeHotspot = function (id) {
        let i = 0;
        for (i; i < $scope.hotspots.length; i++) {
          if ($scope.hotspots[i].id === id) {
            break;
          }
        }
        $scope.hotspots.splice(i, 1);
      };

      this.addHotspot = function (hotspot) {
        Hotspots.pop(hotspot);
      };

      $scope.click = function (hotspot) {
        const foundActiveHotspot = _.find($scope.hotspots, hs => {
          return hs.number === hotspot.number && hs.active === true;
        });

        if (foundActiveHotspot) {
          Hotspots.activate(foundActiveHotspot.number);
          Drawer.close();
          return;
        }

        Hotspots.activate(hotspot.number);
        Drawer.openToHotspot(hotspot);
        TopNavbar.HotspotsActive = true;
        TopNavbar.HotspotsCount = 0;
      };
    },
    templateUrl: 'components/hotspots/partials/hotspots.html'
  };
}
