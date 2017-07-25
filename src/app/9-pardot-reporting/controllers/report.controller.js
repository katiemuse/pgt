'use strict';

export default function ReportController($scope, Hotspots, Steps, $state) {
  $scope.Done = function () {
    Steps.clear();
    Hotspots.clear();
    $state.go('the-end');
  };
}
