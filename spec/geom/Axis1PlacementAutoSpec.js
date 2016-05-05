const geom = require('../../lib/geom.js');
var geomCreate = require('../geom/create.js');
const gp = require('../../lib/gp.js');
var gpCreate = require('../gp/create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('geom.Axis1Placement', function(){

  it('ax1()', function() {
    var obj = geomCreate.axis1Placement();
    var res = obj.ax1();
    helpers.expectType(res, 'Ax1');
  });

  it('reverse()', function() {
    var obj = geomCreate.axis1Placement();
    var res = obj.reverse();
  });

  it('reversed()', function() {
    var obj = geomCreate.axis1Placement();
    var res = obj.reversed();
    helpers.expectType(res, 'Axis1Placement');
  });

  it('setDirection(gp.Dir)', function() {
    var obj = geomCreate.axis1Placement();
    var res = obj.setDirection(gpCreate.dir());
  });

  it('transform(gp.Trsf)', function() {
    var obj = geomCreate.axis1Placement();
    var res = obj.transform(gpCreate.trsf());
  });

  it('copy()', function() {
    var obj = geomCreate.axis1Placement();
    var res = obj.copy();
    helpers.expectType(res, 'Axis1Placement');
  });

  it('Axis1Placement(gp.Ax1)', function() {
    var res = new geom.Axis1Placement(gpCreate.ax1());
    helpers.expectType(res, 'Axis1Placement');
  });

  it('Axis1Placement(gp.Pnt, gp.Dir)', function() {
    var res = new geom.Axis1Placement(gpCreate.pnt(), gpCreate.dir());
    helpers.expectType(res, 'Axis1Placement');
  });
});
