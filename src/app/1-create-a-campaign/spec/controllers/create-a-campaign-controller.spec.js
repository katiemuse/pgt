'use strict';
describe('Controller: CreateACampaignCtrl', function () {
// load the controller's module
  beforeEach(module('pardotInteractiveGuidedTour'));
  var createACampaignCtrl,
      scope;
// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    createACampaignCtrl = $controller('CreateACampaignCtrl', {
      $scope: scope
    });
  }));
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
