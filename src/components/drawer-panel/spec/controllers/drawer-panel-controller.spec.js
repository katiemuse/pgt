'use strict';
describe('Controller: drawerPanelCtrl', function () {
// load the controller's module
  beforeEach(module('pardotInteractiveGuidedTour'));
  var drawerPanelCtrl,
      scope;
// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    drawerPanelCtrl = $controller('drawerPanelCtrl', {
      $scope: scope
    });
  }));
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
