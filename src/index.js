'use strict';

import Pace from 'pace-progress';
Pace.start();

import 'jquery';
import './assets/js/jquery-ui-with-touch-punch';
import angular from 'angular';
import 'angular-animate';
// import 'angular-cookies';
import 'angular-touch';
import 'angular-sanitize';
import 'angular-resource';
import 'angular-ui-router';
// import 'angular-ui-sortable';
import 'angular-dragdrop';
// import 'textangular';
// import 'textAngular/dist/textAngular-sanitize';
import run from './index.run';
import routerConfig from './index.config';
import {Steps} from './components/steps/services/steps-service';
import StepsConfig from './components/steps/constants/steps-constant';
import {TopNavbar} from './components/top-navbar/factories/top-navbar-factory';
import {Drawer} from './components/drawer/service/drawer-service';
import topNavbar from './components/top-navbar/directives/top-navbar-directive';
import topNavbarMobile from './components/top-navbar/directives/top-navbar-mobile-directive';
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
import drawerRegisterEvents from './components/drawer/factory/drawer-factory';
import drawerDirective from './components/drawer/directives/drawer-directive';
import {drawerPanelConfig} from './components/drawer-panel/constants/drawer-panel-constant';
import drawerPanelController from './components/drawer-panel/controllers/drawer-panel-controller';
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
import WizardHandler from './components/wizard/factories/wizard-factory';
import {wzNext, wzPrevious, wzFinish, wzCancel} from './components/wizard/directives/buttons-directive';
import IntroController from './app/0-intro/controllers/intro.controller';
import IntroDrawerController from './app/0-intro/controllers/intro.drawer.controller';
import AddAnObjectController from './app/1-build-a-data-model/controllers/1-add-an-object.controller';
import AddAnObjectDrawerController from './app/1-build-a-data-model/controllers/1-add-an-object.drawer.controller';
import HerokuConnectController from './app/1-build-a-data-model/controllers/2-heroku-connect.controller';
import HerokuConnectDrawerController from './app/1-build-a-data-model/controllers/2-heroku-connect.drawer.controller';
import AddAnExternalObjectController from './app/1-build-a-data-model/controllers/4-add-an-external-object.controller';
import AddAnExternalObjectDrawerController from './app/1-build-a-data-model/controllers/4-add-an-external-object.drawer.controller';
import EinsteinBuilderController from './app/1-build-a-data-model/controllers/3-einstein-builder.controller';
import EinsteinBuilderDrawerController from './app/1-build-a-data-model/controllers/3-einstein-builder.drawer.controller';
// import BuildASchemaController from './app/1-build-a-data-model/controllers/6-build-a-schema.controller';
// import BuildASchemaDrawerController from './app/1-build-a-data-model/controllers/6-build-a-schema.drawer.controller';
import SetupAWorkflowController from './app/2-add-logic/controllers/1-setup-a-workflow.controller';
import SetupAWorkflowDrawerController from './app/2-add-logic/controllers/1-setup-a-workflow.drawer.controller';
import ChooseAnObjectForTheProcessController from './app/2-add-logic/controllers/2-choose-an-object-for-the-process.controller';
import ChooseAnObjectForTheProcessDrawerController from './app/2-add-logic/controllers/2-choose-an-object-for-the-process.drawer.controller';
import AddCriteriaController from './app/2-add-logic/controllers/3-add-criteria.controller';
import AddCriteriaDrawerController from './app/2-add-logic/controllers/3-add-criteria.drawer.controller';
import AddActionsController from './app/2-add-logic/controllers/4-add-actions.controller';
import AddActionsDrawerController from './app/2-add-logic/controllers/4-add-actions.drawer.controller';
import IotController from './app/2-add-logic/controllers/5-iot.controller';
import IotDrawerController from './app/2-add-logic/controllers/5-iot.drawer.controller';
import CreateANewLightningPageController from './app/3-build-your-app/controllers/1-create-a-new-lightning-page.controller';
import CreateANewLightningPageDrawerController from './app/3-build-your-app/controllers/1-create-a-new-lightning-page.drawer.controller';
import InstallAPreBuiltComponentFromAppexchangeController from './app/3-build-your-app/controllers/3-install-a-pre-built-component-from-appexchange.controller';
import InstallAPreBuiltComponentFromAppexchangeDrawerController from './app/3-build-your-app/controllers/3-install-a-pre-built-component-from-appexchange.drawer.controller';
import CreateAnAppFromBaseAndCustomLightningComponentsController from './app/3-build-your-app/controllers/2-create-an-app-from-base-and-custom-lightning-components.controller';
import CreateAnAppFromBaseAndCustomLightningComponentsDrawerController from './app/3-build-your-app/controllers/2-create-an-app-from-base-and-custom-lightning-components.drawer.controller';
import AddCustomComponentsController from './app/3-build-your-app/controllers/4-add-custom-components.controller';
import AddCustomComponentsDrawerController from './app/3-build-your-app/controllers/4-add-custom-components.drawer.controller';
import CustomizeAPageLayoutController from './app/3-build-your-app/controllers/5-customize-a-page-layout.controller';
import CustomizeAPageLayoutDrawerController from './app/3-build-your-app/controllers/5-customize-a-page-layout.drawer.controller';
import CustomizeNavigationController from './app/3-build-your-app/controllers/6-customize-navigation.controller';
import CustomizeNavigationDrawerController from './app/3-build-your-app/controllers/6-customize-navigation.drawer.controller';
import CreateACustomActionController from './app/4-customize-mobile/controllers/1-create-a-custom-action.controller';
import CreateACustomActionDrawerController from './app/4-customize-mobile/controllers/1-create-a-custom-action.drawer.controller';
import CustomizeTheActionBarController from './app/4-customize-mobile/controllers/2-customize-the-action-bar.controller';
import CustomizeTheActionBarDrawerController from './app/4-customize-mobile/controllers/2-customize-the-action-bar.drawer.controller';
import CreateALightningAppFromYourPageController from './app/4-customize-mobile/controllers/3-create-a-lightning-app-from-your-page.controller';
import CreateALightningAppFromYourPageDrawerController from './app/4-customize-mobile/controllers/3-create-a-lightning-app-from-your-page.drawer.controller';
import OutroController from './app/5-outro/controllers/1-outro.controller';
import OutroDrawerController from './app/5-outro/controllers/1-outro.drawer.controller';
// import EngagementStudioController from './app/5-in-the-field/controllers/engagement-studio.controller';
// import EngagementStudioDrawerController from './app/5-in-the-field/controllers/engagement-studio.drawer.controller';
// import EngagementStudioReportController from './app/5-in-the-field/controllers/engagement-studio-report.controller';
// import EngagementStudioReportDrawerController from './app/5-in-the-field/controllers/engagement-studio-report.drawer.controller';
// import EngagementStudioRuleController from './app/5-in-the-field/controllers/engagement-studio-rule.controller';
// import EngagementStudioRuleDrawerController from './app/5-in-the-field/controllers/engagement-studio-rule.drawer.controller';
// import EngagementStudioTestController from './app/5-in-the-field/controllers/engagement-studio-test.controller';
// import EngagementStudioTestDrawerController from './app/5-in-the-field/controllers/engagement-studio-test.drawer.controller';
// import steplog from './app/5-in-the-field/factory/engagement-studio-test.factory';
// import EngagementStudioTriggerController from './app/5-in-the-field/controllers/engagement-studio-trigger.controller';
// import EngagementStudioTriggerDrawerController from './app/5-in-the-field/controllers/engagement-studio-trigger.drawer.controller';

import './app/vendor.scss';
import './app/index.scss';
import './app/app.scss';

angular
  .module('pardotInteractiveGuidedTour', [
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ngResource',
    'ui.router',
    'ngDragDrop'
  ])
  .constant('stepsConfig', StepsConfig)
  .constant('drawerPanelConfig', drawerPanelConfig)
  .filter('stripTags', stripTags)
  .directive('progressStateClass', progressStateClass)
  .directive('progressStateInvertedClass', progressStateInvertedClass)
  .directive('progressDisabledClass', progressDisabledClass)
  .directive('progressNavbar', progressNavbar)
  .directive('liAutofocus', autofocus)
  .directive('liCenter', center)
  .directive('contenteditable', contentEditable)
  .directive('draggable', draggable)
  .directive('droppable', droppable)
  .directive('drawer', drawerDirective)
  .directive('drawerPanelTabContentTransclude', drawerPanelContentTransclude)
  .directive('drawerPanelTabHeadingTransclude', drawerPanelHeadingTransclude)
  .directive('drawerPanelTab', drawerPanelTab)
  .directive('drawerPanel', drawerPanel)
  .directive('hotspotsContainer', hotspotsContainer)
  .directive('hotspot', hotspotsDirective)
  .directive('stepsContainer', stepsDirective)
  .directive('wizard', wizardDirective)
  .directive('wzStep', wizardStep)
  .directive('wzNext', wzNext)
  .directive('wzPrevious', wzPrevious)
  .directive('wzFinish', wzFinish)
  .directive('wzCancel', wzCancel)
  .directive('topNavbar', topNavbar)
  .directive('topNavbarMobile', topNavbarMobile)
  .service('Steps', Steps)
  .service('TopNavbar', TopNavbar)
  .service('Drawer', Drawer)
  .factory('stepsRegisterEvents', stepsFactory)
  .factory('UserProfile', userProfile)
  .factory('WizardHandler', WizardHandler)
  .factory('drawerRegisterEvents', drawerRegisterEvents)
  // .factory('steplog', steplog)
  .controller('IntroController', IntroController)
  .controller('DrawerPanelController', drawerPanelController)
  .controller('IntroDrawerController', IntroDrawerController)
  .controller('AddAnObjectController', AddAnObjectController)
  .controller('AddAnObjectDrawerController', AddAnObjectDrawerController)
  .controller('EinsteinBuilderController', EinsteinBuilderController)
  .controller('EinsteinBuilderDrawerController', EinsteinBuilderDrawerController)
  .controller('AddAnExternalObjectController', AddAnExternalObjectController)
  .controller('AddAnExternalObjectDrawerController', AddAnExternalObjectDrawerController)
  .controller('HerokuConnectController', HerokuConnectController)
  .controller('HerokuConnectDrawerController', HerokuConnectDrawerController)
  // .controller('BuildASchemaController', BuildASchemaController)
  // .controller('BuildASchemaDrawerController', BuildASchemaDrawerController)
  .controller('SetupAWorkflowController', SetupAWorkflowController)
  .controller('SetupAWorkflowDrawerController', SetupAWorkflowDrawerController)
  .controller('ChooseAnObjectForTheProcessController', ChooseAnObjectForTheProcessController)
  .controller('ChooseAnObjectForTheProcessDrawerController', ChooseAnObjectForTheProcessDrawerController)
  .controller('AddCriteriaController', AddCriteriaController)
  .controller('AddCriteriaDrawerController', AddCriteriaDrawerController)
  .controller('AddActionsController', AddActionsController)
  .controller('AddActionsDrawerController', AddActionsDrawerController)
  .controller('IotController', IotController)
  .controller('IotDrawerController', IotDrawerController)
  .controller('CreateANewLightningPageController', CreateANewLightningPageController)
  .controller('CreateANewLightningPageDrawerController', CreateANewLightningPageDrawerController)
  .controller('InstallAPreBuiltComponentFromAppexchangeController', InstallAPreBuiltComponentFromAppexchangeController)
  .controller('InstallAPreBuiltComponentFromAppexchangeDrawerController', InstallAPreBuiltComponentFromAppexchangeDrawerController)
  .controller('CreateAnAppFromBaseAndCustomLightningComponentsController', CreateAnAppFromBaseAndCustomLightningComponentsController)
  .controller('CreateAnAppFromBaseAndCustomLightningComponentsDrawerController', CreateAnAppFromBaseAndCustomLightningComponentsDrawerController)
  .controller('AddCustomComponentsController', AddCustomComponentsController)
  .controller('AddCustomComponentsDrawerController', AddCustomComponentsDrawerController)
  .controller('CustomizeAPageLayoutController', CustomizeAPageLayoutController)
  .controller('CustomizeAPageLayoutDrawerController', CustomizeAPageLayoutDrawerController)
  .controller('CustomizeNavigationController', CustomizeNavigationController)
  .controller('CustomizeNavigationDrawerController', CustomizeNavigationDrawerController)
  .controller('CreateACustomActionController', CreateACustomActionController)
  .controller('CreateACustomActionDrawerController', CreateACustomActionDrawerController)
  .controller('CustomizeTheActionBarController', CustomizeTheActionBarController)
  .controller('CustomizeTheActionBarDrawerController', CustomizeTheActionBarDrawerController)
  .controller('CreateALightningAppFromYourPageController', CreateALightningAppFromYourPageController)
  .controller('CreateALightningAppFromYourPageDrawerController', CreateALightningAppFromYourPageDrawerController)
  .controller('OutroController', OutroController)
  .controller('OutroDrawerController', OutroDrawerController)
  // .controller('EngagementStudioController', EngagementStudioController)
  // .controller('EngagementStudioDrawerController', EngagementStudioDrawerController)
  // .controller('EngagementStudioReportController', EngagementStudioReportController)
  // .controller('EngagementStudioReportDrawerController', EngagementStudioReportDrawerController)
  // .controller('EngagementStudioRuleController', EngagementStudioRuleController)
  // .controller('EngagementStudioRuleDrawerController', EngagementStudioRuleDrawerController)
  // .controller('EngagementStudioTestController', EngagementStudioTestController)
  // .controller('EngagementStudioTestDrawerController', EngagementStudioTestDrawerController)
  // .controller('EngagementStudioTriggerController', EngagementStudioTriggerController)
  // .controller('EngagementStudioTriggerDrawerController', EngagementStudioTriggerDrawerController)
  .service('Hotspots', Hotspots)
  .config(routerConfig)
  .run(run);
