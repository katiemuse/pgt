'use strict';
describe('Controller: SalesEdgeCtrl', function () {
// load the controller's module
  beforeEach(module('pardotInteractiveGuidedTour'));
  var salesEdgeCtrl,
      scope;
// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    salesEdgeCtrl = $controller('SalesEdgeCtrl', {
      $scope: scope
    });
  }));
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
