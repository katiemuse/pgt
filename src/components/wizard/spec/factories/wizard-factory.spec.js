describe('Factory: wizardFactory', function() {
  var wizard;
  beforeEach(module('pardotInteractiveGuidedTour'));
  beforeEach(inject(function(_wizardFactory_) {
    wizard = _wizardFactory_;
  }));

  it('should provide the meaning of life', function() {
    expect(wizard.someMethod() == 42).toBeTruthy();
  });

});
