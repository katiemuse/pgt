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
import autofocus from './components/autofocus/directives/autofocus-directive';
import center from './components/center/directives/center-directive';
import contentEditable from './components/content-editable/directives/content-editable-directive';
import draggable from './components/drag-and-drop/directives/draggable-directive';
import droppable from './components/drag-and-drop/directives/droppable-directive';
import drawerDirective from './components/drawer/directives/drawer-directive';
import {drawerPanelConfig} from './components/drawer-panel/constants/drawer-panel-constant';
import {drawerPanelController} from './components/drawer-panel/controllers/drawer-panel-controller';
import drawerPanelContentTransclude from './components/drawer-panel/directives/drawer-panel-content-transclude-directive';
import drawerPanelHeadingTransclude from './components/drawer-panel/directives/drawer-panel-heading-transclude-directive';
import drawerPanelTab from './components/drawer-panel/directives/drawer-panel-tab-directive';
import drawerPanel from './components/drawer-panel/directives/drawer-panel-directive';
import hotspotsDirective from './components/hotspots/directives/hotspots-directive';
import hotspotsContainer from './components/hotspots/directives/hotspots-container-directive';
import stepsDirective from './components/steps/directives/steps-directive';
import stepsFactory from './components/steps/factories/steps-factory';
import stripTags from './components/stip-tags/filters/stip-tags-filter';
import userProfile from './components/user-profile/factories/user-profile-factory';
import wizardStep from './components/wizard/directives/step-directive';
import wizardDirective from './components/wizard/directives/wizard-directive';
import wizardFactory from './components/wizard/factories/wizard-factory';
import wizardButton from './components/wizard/directives/buttons-directive';

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
  .constant('drawerPanelConfig', drawerPanelConfig)
  .filter('stripTags', stripTags)
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
  .directive('autofocus', autofocus)
  .directive('center', center)
  .directive('contentEditable', contentEditable)
  .directive('draggable', draggable)
  .directive('droppable', droppable)
  .directive('drawerDirective', drawerDirective)
  .directive('drawerPanelContentTransclude', drawerPanelContentTransclude)
  .directive('drawerPanelHeadingTransclude', drawerPanelHeadingTransclude)
  .directive('drawerPanelTab', drawerPanelTab)
  .directive('drawerPanel', drawerPanel)
  .directive('hotspotsDirective', hotspotsDirective)
  .directive('hotspotsContainer', hotspotsContainer)
  .directive('stepsDirective', stepsDirective)
  .directive('wizardStep', wizardStep)
  .directive('wizardDirective', wizardDirective)
  .directive('wzNext', wizardButton('wzNext'))
  .directive('wzPrevious', wizardButton('wzPrevious'))
  .directive('wzFinish', wizardButton('wzFinish'))
  .directive('wzCancel', wizardButton('wzCancel'))
  .service('Steps', Steps)
  .service('TopNavbar', TopNavbar)
  .service('Drawer', Drawer)
  .factory('stepsFactory', stepsFactory)
  .factory('userProfile', userProfile)
  .factory('wizardFactory', wizardFactory)
  .controller('TopNavbarController', TopNavbarController)
  .controller('drawerPanelController', drawerPanelController)
  .service('Hotspots', Hotspots)
  .run(run);
