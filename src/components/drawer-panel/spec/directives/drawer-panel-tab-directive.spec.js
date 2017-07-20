'use strict';
describe('Directive: drawerPanelTab', function () {
// load the directive's module
  beforeEach(module('pardotInteractiveGuidedTour'));
  var element,
    scope;
  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));
  it('should make hidden element visible', inject(function ($compile) {
    expect(element.text()).toBe('this is the drawerPanelTab directive');
  }));
});
