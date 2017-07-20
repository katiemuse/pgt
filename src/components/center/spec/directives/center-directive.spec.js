'use strict';
describe('Directive: center', function () {
// load the directive's module
  beforeEach(module('pardotInteractiveGuidedTour'));
  var element,
    $element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<li-center><tag>Testing 123</tag></li-center>');
    $element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should contain the text contents', inject(function ($compile) {
    expect(element.html()).toContain('Testing 123');
  }));
  it('should contain two divs', inject(function ($compile) {
    expect($element.find("div").length).toEqual(2);
  }));
  it('should contain a div with matching container class outside', inject(function ($compile) {
    expect($element.find("div:eq(0)").hasClass("launch-center-container")).toBe(true);
  }));
  it('should contain a div with matching center class inside', inject(function ($compile) {
    expect($element.find("div:eq(1)").hasClass("launch-centered")).toBe(true);
  }));
  it('should preserve tags after transclusion', inject(function ($compile) {
    expect($element.find("tag").length).toEqual(1);
  }));
});
