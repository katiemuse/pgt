describe('Factory: userProfileFactory', function() {
  var userProfile;
  beforeEach(module('pardotInteractiveGuidedTour'));
  beforeEach(inject(function(_userProfileFactory_) {
    userProfile = _userProfileFactory_;
  }));

  it('should provide the meaning of life', function() {
    expect(userProfile.someMethod() == 42).toBeTruthy();
  });

});
