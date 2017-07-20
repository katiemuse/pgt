describe('Service: stepsService', function() {
  var steps;
  beforeEach(module('pardotInteractiveGuidedTour'));
  beforeEach(inject(function(_stepsService_) {
  steps = _stepsService_;
  }));

  it('should attach a list of awesomeThings to the service', function() {
    expect(steps.awesomeThings.length).toBe(3);
  });

});
