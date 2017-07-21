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
import run from './index.run';
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
import IntroDrawerController from './app/0-intro/controllers/intro.drawer.controller';
import CreateACampaignController from './app/1-create-a-campaign/controllers/create-a-campaign.controller';
import CreateACampaignDrawerController from './app/1-create-a-campaign/controllers/create-a-campaign.drawer.controller';
import BuildAFormAndLandingController from './app/2-build-a-form-and-landing-page/controllers/build-a-form-and-landing-page.controller';
import BuildAFormAndLandingDrawerController from './app/2-build-a-form-and-landing-page/controllers/build-a-form-and-landing-page.drawer.controller';
import FormBuilderController from './app/2-build-a-form-and-landing-page/controllers/form-builder.controller';
import FormBuilderDrawerController from './app/2-build-a-form-and-landing-page/controllers/form-builder.drawer.controller';
import FormCompletionActionsController from './app/2-build-a-form-and-landing-page/controllers/form-completion-actions.controller';
import FormCompletionActionsDrawerController from './app/2-build-a-form-and-landing-page/controllers/form-completion-actions.drawer.controller';
import LandingPageBuilderController from './app/2-build-a-form-and-landing-page/controllers/landing-page-builder.controller';
import LandingPageBuilderDrawerController from './app/2-build-a-form-and-landing-page/controllers/landing-page-builder.drawer.controller';
import ABTestingController from './app/3-build-an-email/controllers/a-b-testing.controller';
import ABTestingDrawerController from './app/3-build-an-email/controllers/a-b-testing.drawer.controller';
import BuildAnEmailController from './app/3-build-an-email/controllers/build-an-email.controller';
import BuildAnEmailDrawerController from './app/3-build-an-email/controllers/build-an-email.drawer.controller';
import EmailPreviewController from './app/3-build-an-email/controllers/email-preview.controller';
import EmailPreviewDrawerController from './app/3-build-an-email/controllers/email-preview.drawer.controller';
import SendEmailController from './app/3-build-an-email/controllers/send-email.controller';
import SendEmailDrawerController from './app/3-build-an-email/controllers/send-email.drawer.controller';
import ViewAProspectProfileController from './app/4-view-a-prospect-profile/controllers/view-a-prospect-profile.controller';
import ViewAProspectProfileDrawerController from './app/4-view-a-prospect-profile/controllers/view-a-prospect-profile.drawer.controller';
import EngagementStudioController from './app/5-engagement-studio/controllers/engagement-studio.controller';
import EngagementStudioDrawerController from './app/5-engagement-studio/controllers/engagement-studio.drawer.controller';
import EngagementStudioReportController from './app/5-engagement-studio/controllers/engagement-studio-report.controller';
import EngagementStudioReportDrawerController from './app/5-engagement-studio/controllers/engagement-studio-report.drawer.controller';
import EngagementStudioRuleController from './app/5-engagement-studio/controllers/engagement-studio-rule.controller';
import EngagementStudioRuleDrawerController from './app/5-engagement-studio/controllers/engagement-studio-rule.drawer.controller';
import EngagementStudioTestController from './app/5-engagement-studio/controllers/engagement-studio-test.controller';
import EngagementStudioTestDrawerController from './app/5-engagement-studio/controllers/engagement-studio-test.drawer.controller';
import EngagementStudioTriggerController from './app/5-engagement-studio/controllers/engagement-studio-trigger.controller';
import EngagementStudioTriggerDrawerController from './app/5-engagement-studio/controllers/engagement-studio-trigger.drawer.controller';
import SetUpALeadNurturingCampaignController from './app/5-set-up-a-lead-nurturing-campaign/controllers/set-up-a-lead-nurturing-campaign.controller';
import SetUpALeadNurturingCampaignDrawerController from './app/5-set-up-a-lead-nurturing-campaign/controllers/set-up-a-lead-nurturing-campaign.drawer.controller';

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
  .controller('IntroDrawerController', IntroDrawerController)
  .controller('CreateACampaignController', CreateACampaignController)
  .controller('CreateACampaignDrawerController', CreateACampaignDrawerController)
  .controller('BuildAFormAndLandingController', BuildAFormAndLandingController)
  .controller('BuildAFormAndLandingDrawerController', BuildAFormAndLandingDrawerController)
  .controller('FormBuilderController', FormBuilderController)
  .controller('FormBuilderDrawerController', FormBuilderDrawerController)
  .controller('FormCompletionActionsController', FormCompletionActionsController)
  .controller('FormCompletionActionsDrawerController', FormCompletionActionsDrawerController)
  .controller('LandingPageBuilderController', LandingPageBuilderController)
  .controller('LandingPageBuilderDrawerController', LandingPageBuilderDrawerController)
  .controller('ABTestingController', ABTestingController)
  .controller('ABTestingDrawerController', ABTestingDrawerController)
  .controller('BuildAnEmailController', BuildAnEmailController)
  .controller('BuildAnEmailDrawerController', BuildAnEmailDrawerController)
  .controller('EmailPreviewController', EmailPreviewController)
  .controller('EmailPreviewDrawerController', EmailPreviewDrawerController)
  .controller('SendEmailController', SendEmailController)
  .controller('SendEmailDrawerController', SendEmailDrawerController)
  .controller('ViewAProspectProfileController', ViewAProspectProfileController)
  .controller('ViewAProspectProfileDrawerController', ViewAProspectProfileDrawerController)
  .controller('EngagementStudioController', EngagementStudioController)
  .controller('EngagementStudioDrawerController', EngagementStudioDrawerController)
  .controller('EngagementStudioReportController', EngagementStudioReportController)
  .controller('EngagementStudioReportDrawerController', EngagementStudioReportDrawerController)
  .controller('EngagementStudioRuleController', EngagementStudioRuleController)
  .controller('EngagementStudioRuleDrawerController', EngagementStudioRuleDrawerController)
  .controller('EngagementStudioTestController', EngagementStudioTestController)
  .controller('EngagementStudioTestDrawerController', EngagementStudioTestDrawerController)
  .controller('EngagementStudioTriggerController', EngagementStudioTriggerController)
  .controller('EngagementStudioTriggerDrawerController', EngagementStudioTriggerDrawerController)
  .controller('SetUpALeadNurturingCampaignController', SetUpALeadNurturingCampaignController)
  .controller('SetUpALeadNurturingCampaignDrawerController', SetUpALeadNurturingCampaignDrawerController)
  .service('Hotspots', Hotspots)
  .run(run);
