describe('Provider: drawer', function() {
  var drawer;
  beforeEach(module('pardotInteractiveGuidedTour'));
  beforeEach(inject(function(_drawer_) {
    drawer = _drawer_;
  }));

  it('should say hello', function() {
    expect(drawer.greet()).toEqual('Hello');
  });

});
