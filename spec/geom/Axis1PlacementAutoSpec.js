const geom = require('../../lib/geom.js');
const gp = require('../../lib/gp.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('geom.Axis1Placement', function(){

  it('ax1()', function() {
    var obj = create.geom.axis1Placement();
    var res = obj.ax1();
    helpers.expectType(res, 'Ax1');
  });

  it('reverse()', function() {
    var obj = create.geom.axis1Placement();
    var res = obj.reverse();
  });

  it('reversed()', function() {
    var obj = create.geom.axis1Placement();
    var res = obj.reversed();
    helpers.expectType(res, 'Axis1Placement');
  });

  it('setDirection(gp.Dir)', function() {
    var obj = create.geom.axis1Placement();
    var res = obj.setDirection(create.gp.dir());
  });

  it('transform(gp.Trsf)', function() {
    var obj = create.geom.axis1Placement();
    var res = obj.transform(create.gp.trsf());
  });

  it('copy()', function() {
    var obj = create.geom.axis1Placement();
    var res = obj.copy();
    helpers.expectType(res, 'Axis1Placement');
  });

  it('Axis1Placement(gp.Ax1)', function() {
    var res = new geom.Axis1Placement(create.gp.ax1());
    helpers.expectType(res, 'Axis1Placement');
  });

  it('Axis1Placement(gp.Pnt, gp.Dir)', function() {
    var res = new geom.Axis1Placement(create.gp.pnt(), create.gp.dir());
    helpers.expectType(res, 'Axis1Placement');
  });
});
