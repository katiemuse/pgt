'use strict';

export default function ChapterMobilePhoneController($scope, $timeout, Steps, WizardHandler, $rootScope) {
  $scope.Next = function () {
    WizardHandler.wizard('phone').next();
    Steps.activate('one');
  };

  $scope.GoToStep4 = function() {
    WizardHandler.wizard("phone").next();
    Steps.activate("");
  };

  $scope.GoToSuccess = function() {
    Steps.clear();
    $rootScope.showMobilePopout = false;
    WizardHandler.wizard("monitor").next();
  };
}
