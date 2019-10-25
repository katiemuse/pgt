'use strict';

export default function ChapterAIPhoneController($scope, $timeout, Steps, WizardHandler, $rootScope) {
  $scope.GoToStep3 = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("three");
  };

  $scope.GoToStep4 = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("three");
  };

  $scope.GoToSuccess = function() {
    Steps.clear();
    $rootScope.showMobilePopout = false;
    WizardHandler.wizard("monitor").next();
  };
}
