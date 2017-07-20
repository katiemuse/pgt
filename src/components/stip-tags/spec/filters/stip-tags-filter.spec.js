'use strict';

describe('Filter: stipTags', function () {
// load the filter's module
  beforeEach(module('pardotInteractiveGuidedTour'));
// initialize a new instance of the filter before each test
  var stipTags;
  beforeEach(inject(function ($filter) {
    stipTags = $filter('stipTags');
  }));
  it('should return the input prefixed with "stipTags filter:"', function () {
    var text = 'angularjs';
    expect(stipTags(text)).toBe('stipTags filter: ' + text);
  });
});
