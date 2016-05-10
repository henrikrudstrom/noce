const geom = require('../../lib/geom.js');
const gp = require('../../lib/gp.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('geom.Line', function(){

  // Arguments or return type not wrapped.
  xit('setLin(gp_Lin)', function() { });

  it('setDirection(gp.Dir)', function() {
    var obj = create.geom.line();
    var res = obj.setDirection(create.gp.dir());
  });

  it('setLocation(gp.Pnt)', function() {
    var obj = create.geom.line();
    var res = obj.setLocation(create.gp.pnt());
  });

  it('setPosition(gp.Ax1)', function() {
    var obj = create.geom.line();
    var res = obj.setPosition(create.gp.ax1());
  });

  // Arguments or return type not wrapped.
  xit('lin()', function() { });

  it('position()', function() {
    var obj = create.geom.line();
    var res = obj.position();
    helpers.expectType(res, 'Ax1');
  });

  it('reverse()', function() {
    var obj = create.geom.line();
    var res = obj.reverse();
  });

  it('reversedParameter(Double)', function() {
    var obj = create.geom.line();
    var res = obj.reversedParameter(0.5);
    expect(typeof res).to.equal('number');
  });

  it('firstParameter()', function() {
    var obj = create.geom.line();
    var res = obj.firstParameter();
    expect(typeof res).to.equal('number');
  });

  it('lastParameter()', function() {
    var obj = create.geom.line();
    var res = obj.lastParameter();
    expect(typeof res).to.equal('number');
  });

  it('isClosed()', function() {
    var obj = create.geom.line();
    var res = obj.isClosed();
    expect(typeof res).to.equal('boolean');
  });

  it('isPeriodic()', function() {
    var obj = create.geom.line();
    var res = obj.isPeriodic();
    expect(typeof res).to.equal('boolean');
  });

  it('continuity()', function() {
    var obj = create.geom.line();
    var res = obj.continuity();
    expect(typeof res).to.equal('number');
  });

  it('isCn(Integer)', function() {
    var obj = create.geom.line();
    var res = obj.isCn(1);
    expect(typeof res).to.equal('boolean');
  });

  it('d0(Double, gp.Pnt)', function() {
    var obj = create.geom.line();
    var res = obj.d0(0.5);
    helpers.expectType(res, 'Pnt');
  });

  it('d1(Double, gp.Pnt, gp.Vec)', function() {
    var obj = create.geom.line();
    var res = obj.d1(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.v1, 'gp.Vec');
  });

  it('d2(Double, gp.Pnt, gp.Vec, gp.Vec)', function() {
    var obj = create.geom.line();
    var res = obj.d2(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.v1, 'gp.Vec');
    helpers.expectType(res.v2, 'gp.Vec');
  });

  it('d3(Double, gp.Pnt, gp.Vec, gp.Vec, gp.Vec)', function() {
    var obj = create.geom.line();
    var res = obj.d3(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.v1, 'gp.Vec');
    helpers.expectType(res.v2, 'gp.Vec');
    helpers.expectType(res.v3, 'gp.Vec');
  });

  it('dn(Double, Integer)', function() {
    var obj = create.geom.line();
    var res = obj.dn(0.5, 2);
    helpers.expectType(res, 'Vec');
  });

  it('transform(gp.Trsf)', function() {
    var obj = create.geom.line();
    var res = obj.transform(create.gp.trsf());
  });

  it('transformedParameter(Double, gp.Trsf)', function() {
    var obj = create.geom.line();
    var res = obj.transformedParameter(0.5, create.gp.trsf());
    expect(typeof res).to.equal('number');
  });

  it('parametricTransformation(gp.Trsf)', function() {
    var obj = create.geom.line();
    var res = obj.parametricTransformation(create.gp.trsf());
    expect(typeof res).to.equal('number');
  });

  it('copy()', function() {
    var obj = create.geom.line();
    var res = obj.copy();
    helpers.expectType(res, 'Line');
  });

  it('Line(gp.Ax1)', function() {
    var res = new geom.Line(create.gp.ax1());
    helpers.expectType(res, 'Line');
  });

  // Arguments or return type not wrapped.
  xit('Line(gp_Lin)', function() { });

  it('Line(gp.Pnt, gp.Dir)', function() {
    var res = new geom.Line(create.gp.pnt(), create.gp.dir());
    helpers.expectType(res, 'Line');
  });
});
