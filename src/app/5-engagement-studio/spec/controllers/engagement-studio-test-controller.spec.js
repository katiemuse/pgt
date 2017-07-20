'use strict';
describe('Controller: EngagementStudioTestCtrl', function () {
// load the controller's module
  beforeEach(module('pardotInteractiveGuidedTour'));
  var EngagementStudioTestCtrl,
      scope;
// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EngagementStudioTestCtrl = $controller('EngagementStudioTestCtrl', {
      $scope: scope
    });
  }));
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
