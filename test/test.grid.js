define([
  'jquery',
  'backbone',
  'chai',
  'lib/grid'
], function($, Backbone, chai, Grid) {
  'use strict';

  var expect = chai.expect;

  describe('Grid', function() {
    it('should have a name attribute by default', function() {
      expect(new Grid().get('name')).to.equal('');
    });
  });
});
