'use strict';
describe('Controller: PardotReportingCtrl', function () {
// load the controller's module
  beforeEach(module('pardotInteractiveGuidedTour'));
  var pardotReportingCtrl,
      scope;
// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    pardotReportingCtrl = $controller('PardotReportingCtrl', {
      $scope: scope
    });
  }));
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
