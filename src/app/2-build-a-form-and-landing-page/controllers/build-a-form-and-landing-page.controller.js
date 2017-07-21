'use strict';

export default function BuildAFormAndLandingController($scope, $timeout, Steps, WizardHandler, $state, UserProfile) {
  $scope.form = {
    name: 'LenoxSoft White Paper',
    campaignName: UserProfile.CampaignName
  };

  $scope.CreateForm = function () {
    if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      UserProfile.FormName = $scope.form.name;
      $state.go('form-builder');
    }
  };
}
