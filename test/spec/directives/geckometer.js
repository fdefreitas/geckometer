'use strict';

describe('Directive: geckoMeter', function () {

  // load the directive's module
  beforeEach(module('geckometerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gecko-meter></gecko-meter>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the geckoMeter directive');
  }));
});
