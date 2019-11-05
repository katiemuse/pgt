'use strict';

export default function ChapterBlockchainPhoneController($scope, $timeout, Steps, WizardHandler, $rootScope) {
  $scope.GoToSuccess = function() {
    Steps.clear();
    $rootScope.showMobilePopout = false;
    WizardHandler.wizard("monitor").next();
  };
}
