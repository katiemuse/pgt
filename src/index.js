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
import successConfetti from './components/steps/directives/success-directive';
import stepsFactory from './components/steps/factories/steps-factory';
// import renderConfetti from './components/steps/services/render-confetti-service';
import stripTags from './components/stip-tags/filters/stip-tags-filter';
import userProfile from './components/user-profile/factories/user-profile-factory';
import wizardStep from './components/wizard/directives/step-directive';
import wizardDirective from './components/wizard/directives/wizard-directive';
import WizardHandler from './components/wizard/factories/wizard-factory';
import {wzNext, wzPrevious, wzFinish, wzCancel} from './components/wizard/directives/buttons-directive';
import WelcomeController from './controllers/welcome/desktop.controller';
import OutroController from './controllers/outro/desktop.controller';
import WelcomeDrawerController from './controllers/welcome/drawer.controller';
import ChapterDataController from './controllers/chapter-data/desktop.controller';
import ChapterDataDrawerController from './controllers/chapter-data/drawer.controller';
import ChapterBuilderController from './controllers/chapter-builder/desktop.controller';
import ChapterBuilderDrawerController from './controllers/chapter-builder/drawer.controller';
import ChapterFlowController from './controllers/chapter-flow/desktop.controller';
import ChapterFlowDrawerController from './controllers/chapter-flow/drawer.controller';
import ChapterAIController from './controllers/chapter-ai/desktop.controller';
import ChapterAIDrawerController from './controllers/chapter-ai/drawer.controller';
import ChapterAIPhoneController from './controllers/chapter-ai/phone.controller';
// import BuildASchemaController from './app/1-build-a-data-model/controllers/6-build-a-schema.controller';
// import BuildASchemaDrawerController from './app/1-build-a-data-model/controllers/6-build-a-schema.drawer.controller';
import ChapterCustomerAppController from './controllers/chapter-customer-app/desktop.controller';
import ChapterCustomerAppDrawerController from './controllers/chapter-customer-app/drawer.controller';
import ChapterBlockchainController from './controllers/chapter-blockchain/desktop.controller';
import ChapterBlockchainDrawerController from './controllers/chapter-blockchain/drawer.controller';
import ChapterBlockchainPhoneController from './controllers/chapter-blockchain/phone.controller';
import ChooseProcessObjectController from './controllers/choose-process-object/desktop.controller';
import ChooseProcessObjectDrawerController from './controllers/choose-process-object/drawer.controller';
import AddCriteriaController from './controllers/add-process-criteria/desktop.controller';
import AddCriteriaDrawerController from './controllers/add-process-criteria/drawer.controller';
import CreateProcessActionController from './controllers/create-process-action/desktop.controller';
import CreateProcessActionDrawerController from './controllers/create-process-action/drawer.controller';
import ChapterMobileController from './controllers/chapter-mobile/desktop.controller';
import ChapterMobileDrawerController from './controllers/chapter-mobile/drawer.controller';
import ChapterMobilePhoneController from './controllers/chapter-mobile/phone.controller';
import ChapterVoiceController from './controllers/chapter-voice/desktop.controller';
import ChapterVoiceDrawerController from './controllers/chapter-voice/drawer.controller';
import ChapterVoicePhoneController from './controllers/chapter-voice/phone.controller';
import AddAppexchangeComponentsController from './controllers/add-appexchange-components/desktop.controller';
import AddAppexchangeComponentsDrawerController from './controllers/add-appexchange-components/drawer.controller';
import AddBaseLightningComponentsController from './controllers/add-base-lightning-components/desktop.controller';
import AddBaseLightningComponentsDrawerController from './controllers/add-base-lightning-components/drawer.controller';
import AddCustomComponentsController from './controllers/add-custom-components/desktop.controller';
import AddCustomComponentsDrawerController from './controllers/add-custom-components/drawer.controller';
import CustomizePageLayoutController from './controllers/customize-page-layout/desktop.controller';
import CustomizePageLayoutDrawerController from './controllers/customize-page-layout/drawer.controller';
import DeployYourAppController from './controllers/deploy-your-app/desktop.controller';
import DeployYourAppDrawerController from './controllers/deploy-your-app/drawer.controller';
import CreateCustomActionsController from './controllers/create-custom-actions/desktop.controller';
import CreateCustomActionsDrawerController from './controllers/create-custom-actions/drawer.controller';
import CustomizeActionBarController from './controllers/customize-action-bar/desktop.controller';
import CustomizeActionBarDrawerController from './controllers/customize-action-bar/drawer.controller';
import BuildLightningAppController from './controllers/build-lightning-app/desktop.controller';
import BuildLightningAppDrawerController from './controllers/build-lightning-app/drawer.controller';
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

import './styles/vendor.scss';
import './styles/index.scss';
import './styles/app.scss';

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
  .directive('successConfetti', successConfetti)
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
  // .service('renderConfetti', renderConfetti)
  .factory('stepsRegisterEvents', stepsFactory)
  .factory('UserProfile', userProfile)
  .factory('WizardHandler', WizardHandler)
  .factory('drawerRegisterEvents', drawerRegisterEvents)
  // .factory('steplog', steplog)
  .controller('WelcomeController', WelcomeController)
  .controller('OutroController', OutroController)
  .controller('DrawerPanelController', drawerPanelController)
  .controller('WelcomeDrawerController', WelcomeDrawerController)
  .controller('ChapterDataController', ChapterDataController)
  .controller('ChapterDataDrawerController', ChapterDataDrawerController)
  .controller('ChapterAIController', ChapterAIController)
  .controller('ChapterAIDrawerController', ChapterAIDrawerController)
  .controller('ChapterAIPhoneController', ChapterAIPhoneController)
  .controller('ChapterFlowController', ChapterFlowController)
  .controller('ChapterFlowDrawerController', ChapterFlowDrawerController)
  .controller('ChapterBuilderController', ChapterBuilderController)
  .controller('ChapterBuilderDrawerController', ChapterBuilderDrawerController)
  // .controller('BuildASchemaController', BuildASchemaController)
  // .controller('BuildASchemaDrawerController', BuildASchemaDrawerController)
  .controller('ChapterCustomerAppController', ChapterCustomerAppController)
  .controller('ChapterCustomerAppDrawerController', ChapterCustomerAppDrawerController)
  .controller('ChapterBlockchainController', ChapterBlockchainController)
  .controller('ChapterBlockchainDrawerController', ChapterBlockchainDrawerController)
  .controller('ChapterBlockchainPhoneController', ChapterBlockchainPhoneController)
  .controller('ChooseProcessObjectController', ChooseProcessObjectController)
  .controller('ChooseProcessObjectDrawerController', ChooseProcessObjectDrawerController)
  .controller('AddCriteriaController', AddCriteriaController)
  .controller('AddCriteriaDrawerController', AddCriteriaDrawerController)
  .controller('CreateProcessActionController', CreateProcessActionController)
  .controller('CreateProcessActionDrawerController', CreateProcessActionDrawerController)
  .controller('ChapterMobileController', ChapterMobileController)
  .controller('ChapterMobileDrawerController', ChapterMobileDrawerController)
  .controller('ChapterMobilePhoneController', ChapterMobilePhoneController)
  .controller('ChapterVoiceController', ChapterVoiceController)
  .controller('ChapterVoiceDrawerController', ChapterVoiceDrawerController)
  .controller('ChapterVoicePhoneController', ChapterVoicePhoneController)
  .controller('AddAppexchangeComponentsController', AddAppexchangeComponentsController)
  .controller('AddAppexchangeComponentsDrawerController', AddAppexchangeComponentsDrawerController)
  .controller('AddBaseLightningComponentsController', AddBaseLightningComponentsController)
  .controller('AddBaseLightningComponentsDrawerController', AddBaseLightningComponentsDrawerController)
  .controller('AddCustomComponentsController', AddCustomComponentsController)
  .controller('AddCustomComponentsDrawerController', AddCustomComponentsDrawerController)
  .controller('CustomizePageLayoutController', CustomizePageLayoutController)
  .controller('CustomizePageLayoutDrawerController', CustomizePageLayoutDrawerController)
  .controller('DeployYourAppController', DeployYourAppController)
  .controller('DeployYourAppDrawerController', DeployYourAppDrawerController)
  .controller('CreateCustomActionsController', CreateCustomActionsController)
  .controller('CreateCustomActionsDrawerController', CreateCustomActionsDrawerController)
  .controller('CustomizeActionBarController', CustomizeActionBarController)
  .controller('CustomizeActionBarDrawerController', CustomizeActionBarDrawerController)
  .controller('BuildLightningAppController', BuildLightningAppController)
  .controller('BuildLightningAppDrawerController', BuildLightningAppDrawerController)
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
