'use strict';

export default function ChapterBlockchainPhoneController($scope, $timeout, Steps, WizardHandler, $rootScope, $log) {
  $scope.GoToSuccess = function() {
    $log.info("phone success");
    Steps.clear();
    $rootScope.showMobilePopout = false;
    WizardHandler.wizard("monitor").next();
  };
}
