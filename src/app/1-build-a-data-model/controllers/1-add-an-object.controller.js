'use strict';

export default function AddAnObjectController($scope, Steps, Hotspots, WizardHandler, $timeout, UserProfile, TopNavbar) {
  $scope.campaign = {
    name: '',
    cost: ''
  };

  const delayInMs = 1000;

  let timeoutPromiseCampaignName;
  $scope.$watch('campaign.name', (newValue, oldValue) => {
    if (oldValue !== newValue) {
      $timeout.cancel(timeoutPromiseCampaignName);
      timeoutPromiseCampaignName = $timeout(() => {
        if (newValue.length > 3) {
          Steps.activate('two');
          if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
            WizardHandler.wizard('monitor').next();
          }
        }
      }, delayInMs);
    }
  });

  let timeoutPromiseCampaignCost;
  $scope.$watch('campaign.cost', (newValue, oldValue) => {
    if (oldValue !== newValue) {
      $timeout.cancel(timeoutPromiseCampaignCost);
      timeoutPromiseCampaignCost = $timeout(() => {
        Steps.activate('three');
        if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
          WizardHandler.wizard('monitor').next();
        }
      }, delayInMs);
    }
  });

  $scope.CreateCampaign = function () {
    if (WizardHandler.wizard('monitor').currentStepNumber() === 4) {
      UserProfile.CampaignName = $scope.campaign.name;
      Steps.clear();
      Hotspots.clear();
      TopNavbar.HotspotsCount = 0;
      TopNavbar.HotspotsEnabled = false;
      WizardHandler.wizard('monitor').next();
    }
  };
}
