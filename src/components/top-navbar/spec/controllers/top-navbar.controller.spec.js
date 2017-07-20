'use strict';
describe('Controller: TopNavbarController', function () {
// load the controller's module
  beforeEach(module('pardotInteractiveGuidedTour'));
  var progressNavbarCtrl,
      scope;
// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    progressNavbarCtrl = $controller('TopNavbarController', {
      $scope: scope
    });
  }));
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
