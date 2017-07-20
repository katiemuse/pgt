describe('Factory: stepsFactory', function() {
  var steps;
  beforeEach(module('pardotInteractiveGuidedTour'));
  beforeEach(inject(function(_stepsFactory_) {
    steps = _stepsFactory_;
  }));

  it('should provide the meaning of life', function() {
    expect(steps.someMethod() == 42).toBeTruthy();
  });

});
