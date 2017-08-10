'use strict';
require('jquery');
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/selectable';
import 'jquery-ui/ui/widgets/sortable';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/droppable';
import angular from 'angular';
import 'angular-animate';
// import 'angular-cookies';
import 'angular-touch';
import 'angular-sanitize';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-ui-sortable';
// import 'textangular';
// import 'textAngular/dist/textAngular-sanitize';
import run from './index.run';
import routerConfig from './index.config';
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
import IntroDrawerController from './app/0-intro/controllers/intro.drawer.controller';
import AddAnObjectController from './app/1-build-a-data-model/controllers/1-add-an-object.controller';
import AddAnObjectDrawerController from './app/1-build-a-data-model/controllers/1-add-an-object.drawer.controller';
import AddAnExternalObjectController from './app/1-build-a-data-model/controllers/2-add-an-external-object.controller';
import AddAnExternalObjectDrawerController from './app/1-build-a-data-model/controllers/2-add-an-external-object.drawer.controller';
import SetupAWorkflowController from './app/2-add-logic/controllers/1-setup-a-workflow.controller';
import SetupAWorkflowDrawerController from './app/2-add-logic/controllers/1-setup-a-workflow.drawer.controller';
import ChooseAnObjectForTheProcessController from './app/2-add-logic/controllers/2-choose-an-object-for-the-process.controller';
import ChooseAnObjectForTheProcessDrawerController from './app/2-add-logic/controllers/2-choose-an-object-for-the-process.drawer.controller';
import AddCriteriaController from './app/2-add-logic/controllers/3-add-criteria.controller';
import AddCriteriaDrawerController from './app/2-add-logic/controllers/3-add-criteria.drawer.controller';
import AddActionsController from './app/2-add-logic/controllers/4-add-actions.controller';
import AddActionsDrawerController from './app/2-add-logic/controllers/4-add-actions.drawer.controller';
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
import steplog from './app/5-engagement-studio/factory/engagement-studio-test.factory';
import EngagementStudioTriggerController from './app/5-engagement-studio/controllers/engagement-studio-trigger.controller';
import EngagementStudioTriggerDrawerController from './app/5-engagement-studio/controllers/engagement-studio-trigger.drawer.controller';
import SetUpALeadNurturingCampaignController from './app/5-set-up-a-lead-nurturing-campaign/controllers/set-up-a-lead-nurturing-campaign.controller';
import SetUpALeadNurturingCampaignDrawerController from './app/5-set-up-a-lead-nurturing-campaign/controllers/set-up-a-lead-nurturing-campaign.drawer.controller';
import AssignYourLeadsToSalesController from './app/6-assign-your-leads-to-sales/controllers/assign-your-leads-to-sales.controller';
import AssignYourLeadsToSalesDrawerController from './app/6-assign-your-leads-to-sales/controllers/assign-your-leads-to-sales.drawer.controller';
import CompleteActionController from './app/6-assign-your-leads-to-sales/controllers/complete-action.controller';
import CompleteActionDrawerController from './app/6-assign-your-leads-to-sales/controllers/complete-action.drawer.controller';
import PersonalizedEmailController from './app/7-sales-view-in-salesforce/controllers/personalized-email.controller';
import PersonalizedEmailDrawerController from './app/7-sales-view-in-salesforce/controllers/personalized-email.drawer.controller';
import SalesViewInSalesforceController from './app/7-sales-view-in-salesforce/controllers/sales-view-in-salesforce.controller';
import SalesViewInSalesforceDrawerController from './app/7-sales-view-in-salesforce/controllers/sales-view-in-salesforce.drawer.controller';
import EngageCampaignsController from './app/8-salesforce-engage/controllers/engage-campaigns.controller';
import EngageCampaignsDrawerController from './app/8-salesforce-engage/controllers/engage-campaigns.drawer.controller';
import MicroCampaignReportingController from './app/8-salesforce-engage/controllers/micro-campaign-reporting.controller';
import MicroCampaignReportingDrawerController from './app/8-salesforce-engage/controllers/micro-campaign-reporting.drawer.controller';
import SalesCloudEngageController from './app/8-salesforce-engage/controllers/sales-cloud-engage.controller';
import SalesCloudEngageDrawerController from './app/8-salesforce-engage/controllers/sales-cloud-engage.drawer.controller';
import SelectTemplateController from './app/8-salesforce-engage/controllers/select-template.controller';
import SelectTemplateDrawerController from './app/8-salesforce-engage/controllers/select-template.drawer.controller';
import AdvancedEmailReportDrawerController from './app/9-pardot-reporting/controllers/advanced-email-report.drawer.controller';
import ClickThroughRateReportDrawerController from './app/9-pardot-reporting/controllers/click-through-rate-report.drawer.controller';
import EmailClientReportDrawerController from './app/9-pardot-reporting/controllers/email-client-report.drawer.controller';
import InteractionReportDrawerController from './app/9-pardot-reporting/controllers/interaction-report.drawer.controller';
import PardotReportingController from './app/9-pardot-reporting/controllers/pardot-reporting.controller';
import PardotReportingDrawerController from './app/9-pardot-reporting/controllers/pardot-reporting.drawer.controller';
import ReportController from './app/9-pardot-reporting/controllers/report.controller';

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
    'ui.sortable'
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
  .service('Steps', Steps)
  .service('TopNavbar', TopNavbar)
  .service('Drawer', Drawer)
  .factory('stepsRegisterEvents', stepsFactory)
  .factory('UserProfile', userProfile)
  .factory('WizardHandler', WizardHandler)
  .factory('drawerRegisterEvents', drawerRegisterEvents)
  .factory('steplog', steplog)
  .controller('TopNavbarController', TopNavbarController)
  .controller('DrawerPanelController', drawerPanelController)
  .controller('IntroDrawerController', IntroDrawerController)
  .controller('AddAnObjectController', AddAnObjectController)
  .controller('AddAnObjectDrawerController', AddAnObjectDrawerController)
  .controller('AddAnExternalObjectController', AddAnExternalObjectController)
  .controller('AddAnExternalObjectDrawerController', AddAnExternalObjectDrawerController)
  .controller('SetupAWorkflowController', SetupAWorkflowController)
  .controller('SetupAWorkflowDrawerController', SetupAWorkflowDrawerController)
  .controller('ChooseAnObjectForTheProcessController', ChooseAnObjectForTheProcessController)
  .controller('ChooseAnObjectForTheProcessDrawerController', ChooseAnObjectForTheProcessDrawerController)
  .controller('AddCriteriaController', AddCriteriaController)
  .controller('AddCriteriaDrawerController', AddCriteriaDrawerController)
  .controller('AddActionsController', AddActionsController)
  .controller('AddActionsDrawerController', AddActionsDrawerController)
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
  .controller('AssignYourLeadsToSalesDrawerController', AssignYourLeadsToSalesDrawerController)
  .controller('AssignYourLeadsToSalesController', AssignYourLeadsToSalesController)
  .controller('CompleteActionController', CompleteActionController)
  .controller('CompleteActionDrawerController', CompleteActionDrawerController)
  .controller('PersonalizedEmailController', PersonalizedEmailController)
  .controller('PersonalizedEmailDrawerController', PersonalizedEmailDrawerController)
  .controller('SalesViewInSalesforceController', SalesViewInSalesforceController)
  .controller('SalesViewInSalesforceDrawerController', SalesViewInSalesforceDrawerController)
  .controller('EngageCampaignsController', EngageCampaignsController)
  .controller('EngageCampaignsDrawerController', EngageCampaignsDrawerController)
  .controller('MicroCampaignReportingController', MicroCampaignReportingController)
  .controller('MicroCampaignReportingDrawerController', MicroCampaignReportingDrawerController)
  .controller('SalesCloudEngageController', SalesCloudEngageController)
  .controller('SalesCloudEngageDrawerController', SalesCloudEngageDrawerController)
  .controller('SelectTemplateController', SelectTemplateController)
  .controller('SelectTemplateDrawerController', SelectTemplateDrawerController)
  .controller('AdvancedEmailReportDrawerController', AdvancedEmailReportDrawerController)
  .controller('ClickThroughRateReportDrawerController', ClickThroughRateReportDrawerController)
  .controller('EmailClientReportDrawerController', EmailClientReportDrawerController)
  .controller('InteractionReportDrawerController', InteractionReportDrawerController)
  .controller('PardotReportingController', PardotReportingController)
  .controller('PardotReportingDrawerController', PardotReportingDrawerController)
  .controller('ReportController', ReportController)
  .service('Hotspots', Hotspots)
  .config(routerConfig)
  .run(run);
