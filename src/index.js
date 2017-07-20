'use strict';

import angular from 'angular';
import 'angular-animate';
import 'angular-cookies';
import 'angular-touch';
import 'angular-sanitize';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-ui-sortable';
import 'textangular';
import 'textAngular/dist/textAngular-sanitize';
import run from './run';
import {Steps} from './components/steps/services/steps-service';
import StepsConfig from './components/steps/constants/steps-constant';
import {TopNavbar} from './components/top-navbar/factories/top-navbar-factory';
import {Drawer} from './components/drawer/service/drawer-service';
import {TopNavbarController} from './components/top-navbar/controllers/topNavbar.controller';
import {Hotspots} from './components/hotspots/service/hotspots-service';
import progressNavbar from './components/progress-navbar/directives/progress-navbar-directive';
import progressDisabledClass from './components/progress-navbar/directives/progress-disabled-class-directive';
import progressStateClass from './components/progress-navbar/directives/progress-state-class-directive';
import progressStateInvertedClass from './components/progress-navbar/directives/progress-state-inverted-class-directive';

import 'font-awesome-sass-loader';
import './app/vendor.scss';
import './app/index.scss';

angular
  .module('pardotInteractiveGuidedTour', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngResource',
    'ui.router',
    'ui.sortable',
    'textAngular'
  ])
  .constant('stepsConfig', StepsConfig)
  .config(($stateProvider, $urlRouterProvider, $provide) => {
    $provide.decorator('$uiViewScroll', ($delegate, $window) => {
      return () => {
        $window.scrollTo(0, 0);
      };
    });

    $urlRouterProvider.otherwise('/');
  })
  .directive('progressStateClass', progressStateClass)
  .directive('progressDisabledClass', progressDisabledClass)
  .directive('progressStateInvertedClass', progressStateInvertedClass)
  .directive('progressNavbar', progressNavbar)
  .service('Steps', Steps)
  .service('TopNavbar', TopNavbar)
  .service('Drawer', Drawer)
  .controller('TopNavbarController', TopNavbarController)
  .service('Hotspots', Hotspots)
  .run(run);
