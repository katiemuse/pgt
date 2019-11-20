'use strict';

import Pace from 'pace-progress';
Pace.start();

import 'jquery';
import './assets/js/jquery-ui-with-touch-punch';
import angular from 'angular';
import 'angular-animate';
import 'angular-touch';
import 'angular-sanitize';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-dragdrop';
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
import stripTags from './components/stip-tags/filters/stip-tags-filter';
import userProfile from './components/user-profile/factories/user-profile-factory';
import wizardStep from './components/wizard/directives/step-directive';
import wizardDirective from './components/wizard/directives/wizard-directive';
import WizardHandler from './components/wizard/factories/wizard-factory';
import {wzNext, wzPrevious, wzFinish, wzCancel} from './components/wizard/directives/buttons-directive';
import WelcomeController from './controllers/welcome/desktop.controller';
import WelcomeDrawerController from './controllers/welcome/drawer.controller';
import OutroController from './controllers/outro/desktop.controller';
import ChapterDataController from './controllers/chapter-data/desktop.controller';
import ChapterDataDrawerController from './controllers/chapter-data/drawer.controller';
import ChapterBuilderController from './controllers/chapter-builder/desktop.controller';
import ChapterBuilderDrawerController from './controllers/chapter-builder/drawer.controller';
import ChapterFlowController from './controllers/chapter-flow/desktop.controller';
import ChapterFlowDrawerController from './controllers/chapter-flow/drawer.controller';
import ChapterAIController from './controllers/chapter-ai/desktop.controller';
import ChapterAIDrawerController from './controllers/chapter-ai/drawer.controller';
import ChapterAIPhoneController from './controllers/chapter-ai/phone.controller';
import ChapterCustomerAppController from './controllers/chapter-customer-app/desktop.controller';
import ChapterCustomerAppDrawerController from './controllers/chapter-customer-app/drawer.controller';
import ChapterBlockchainController from './controllers/chapter-blockchain/desktop.controller';
import ChapterBlockchainDrawerController from './controllers/chapter-blockchain/drawer.controller';
import ChapterBlockchainPhoneController from './controllers/chapter-blockchain/phone.controller';
import ChapterMobileController from './controllers/chapter-mobile/desktop.controller';
import ChapterMobileDrawerController from './controllers/chapter-mobile/drawer.controller';
import ChapterMobilePhoneController from './controllers/chapter-mobile/phone.controller';
import ChapterVoiceController from './controllers/chapter-voice/desktop.controller';
import ChapterVoiceDrawerController from './controllers/chapter-voice/drawer.controller';
import ChapterVoicePhoneController from './controllers/chapter-voice/phone.controller';

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
  .service('successConfetti', successConfetti)
  .factory('stepsRegisterEvents', stepsFactory)
  .factory('UserProfile', userProfile)
  .factory('WizardHandler', WizardHandler)
  .factory('drawerRegisterEvents', drawerRegisterEvents)
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
  .controller('ChapterCustomerAppController', ChapterCustomerAppController)
  .controller('ChapterCustomerAppDrawerController', ChapterCustomerAppDrawerController)
  .controller('ChapterBlockchainController', ChapterBlockchainController)
  .controller('ChapterBlockchainDrawerController', ChapterBlockchainDrawerController)
  .controller('ChapterBlockchainPhoneController', ChapterBlockchainPhoneController)
  .controller('ChapterMobileController', ChapterMobileController)
  .controller('ChapterMobileDrawerController', ChapterMobileDrawerController)
  .controller('ChapterMobilePhoneController', ChapterMobilePhoneController)
  .controller('ChapterVoiceController', ChapterVoiceController)
  .controller('ChapterVoiceDrawerController', ChapterVoiceDrawerController)
  .controller('ChapterVoicePhoneController', ChapterVoicePhoneController)
  .service('Hotspots', Hotspots)
  .config(routerConfig)
  .run(run);
