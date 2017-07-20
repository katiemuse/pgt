describe('Factory: topNavbarFactory', function() {
  var topNavbar;
  beforeEach(module('pardotInteractiveGuidedTour'));
  beforeEach(inject(function(_topNavbarFactory_) {
    topNavbar = _topNavbarFactory_;
  }));

  it('should provide the meaning of life', function() {
    expect(topNavbar.someMethod() == 42).toBeTruthy();
  });

});
