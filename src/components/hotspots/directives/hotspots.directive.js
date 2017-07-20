'use strict';

import '../styles/_hotspots.scss';

angular.module('pardotInteractiveGuidedTour')
  .directive('hotspotsContainer', function ($parse, $rootScope, $interval, $sce, Hotspots, TopNavbar) {
      return {
        replace: true,
        restrict: 'EA',
        transclude: true,
        scope: true, // creates an internal scope for this directive
        link: function (scope, elm, attrs) {

          var id = 0,
            mergedConfig;

          mergedConfig = angular.extend({}, scope.$eval(attrs.hotspotsOptions));

          scope.config = {
            position: mergedConfig['extra-class']
          };

          function addHotspot(hotspot) {
            id++;
            angular.extend(hotspot, { id: id });
            if(scope.hotspots == null) {
              scope.hotspots = [];
            }
            scope.hotspots.push(hotspot);
           }

         $rootScope.$on('hotspots-new', function () {
            addHotspot(Hotspots.hotspot);
          });

         /*$rootScope.$on('hotspots-activate', function (event, number) {
            var i = 0;
            for (i; i < scope.hotspots.length; i++) {
              scope.hotspots[i].active = scope.hotspots[i].number === number ? true : false;
            }
          });
          */

          $rootScope.$on('hotspots-clear', function () {
            scope.hotspots.splice(0, scope.hotspots.length);
            TopNavbar.HotspotsCount = 0;
            TopNavbar.HotspotsEnabled = false;
            // console.log('clear hotspots');
          });

        },
        controller:  function ($scope, $element, $attrs, $rootScope, Drawer, TopNavbar) {

          $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {
              Hotspots.clear();
              $scope.hotspots = Hotspots.hotspots;
            }
          );

          $scope.$watch(function(){ return Hotspots.hotspots;}, function(){
              $scope.hotspots = Hotspots.hotspots;
          });

          $scope.removeHotspot = function (id) {
            var i = 0;
            for (i; i < $scope.hotspots.length; i++) {
              if ($scope.hotspots[i].id === id)
                break;
            }
            $scope.hotspots.splice(i, 1);
          };

          this.addHotspot = function(hotspot) {
            Hotspots.pop(hotspot);
          };

          $scope.click = function (hotspot) {


            var foundActiveHotspot = _.find($scope.hotspots, function(hs){
              return hs.number == hotspot.number && hs.active == true;
            });

           if(foundActiveHotspot) {
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
    })
  .directive('hotspot', function ($parse, $rootScope, $interval, $sce, Hotspots, TopNavbar, $log) {
    return {
      replace: true,
      require: "^hotspots-container",
      restrict: 'EA',
      transclude: true,

      scope: true, // creates an internal scope for this directive
      link: function (scope, elm, attrs, hotspotsContainerCtrl) {
        hotspotsContainerCtrl.addHotspot({
          number: attrs.number,
          position: {
            left: attrs.left,
            top: attrs.top
          },
          active: false
        });
      }
    }
  });
