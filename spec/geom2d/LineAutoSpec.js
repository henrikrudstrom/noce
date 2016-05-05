const geom2d = require('../../lib/geom2d.js');
var geom2dCreate = require('../geom2d/create.js');
const gp = require('../../lib/gp.js');
var gpCreate = require('../gp/create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('geom2d.Line', function(){

  // Arguments or return type not wrapped.
  xit('setLin2D(gp_Lin2d)', function() { });

  it('setDirection(gp.Dir2d)', function() {
    var obj = geom2dCreate.line();
    var res = obj.setDirection(gpCreate.dir2d());
  });

  it('direction()', function() {
    var obj = geom2dCreate.line();
    var res = obj.direction();
    helpers.expectType(res, 'Dir2d');
  });

  it('setLocation(gp.Pnt2d)', function() {
    var obj = geom2dCreate.line();
    var res = obj.setLocation(gpCreate.pnt2d());
  });

  it('location()', function() {
    var obj = geom2dCreate.line();
    var res = obj.location();
    helpers.expectType(res, 'Pnt2d');
  });

  it('setPosition(gp.Ax2d)', function() {
    var obj = geom2dCreate.line();
    var res = obj.setPosition(gpCreate.ax2d());
  });

  it('position()', function() {
    var obj = geom2dCreate.line();
    var res = obj.position();
    helpers.expectType(res, 'Ax2d');
  });

  // Arguments or return type not wrapped.
  xit('lin2D()', function() { });

  it('reverse()', function() {
    var obj = geom2dCreate.line();
    var res = obj.reverse();
  });

  it('reversedParameter(Double)', function() {
    var obj = geom2dCreate.line();
    var res = obj.reversedParameter(0.5);
    expect(typeof res).to.equal('number');
  });

  it('firstParameter()', function() {
    var obj = geom2dCreate.line();
    var res = obj.firstParameter();
    expect(typeof res).to.equal('number');
  });

  it('lastParameter()', function() {
    var obj = geom2dCreate.line();
    var res = obj.lastParameter();
    expect(typeof res).to.equal('number');
  });

  it('isClosed()', function() {
    var obj = geom2dCreate.line();
    var res = obj.isClosed();
    expect(typeof res).to.equal('boolean');
  });

  it('isPeriodic()', function() {
    var obj = geom2dCreate.line();
    var res = obj.isPeriodic();
    expect(typeof res).to.equal('boolean');
  });

  it('continuity()', function() {
    var obj = geom2dCreate.line();
    var res = obj.continuity();
    expect(typeof res).to.equal('number');
  });

  it('distance(gp.Pnt2d)', function() {
    var obj = geom2dCreate.line();
    var res = obj.distance(gpCreate.pnt2d());
    expect(typeof res).to.equal('number');
  });

  it('isCn(Integer)', function() {
    var obj = geom2dCreate.line();
    var res = obj.isCn(1);
    expect(typeof res).to.equal('boolean');
  });

  it('d0(Double, gp.Pnt2d)', function() {
    var obj = geom2dCreate.line();
    var res = obj.d0(0.5);
    helpers.expectType(res, 'Pnt2d');
  });

  it('d1(Double, gp.Pnt2d, gp.Vec2d)', function() {
    var obj = geom2dCreate.line();
    var res = obj.d1(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt2d');
    helpers.expectType(res.v1, 'gp.Vec2d');
  });

  it('d2(Double, gp.Pnt2d, gp.Vec2d, gp.Vec2d)', function() {
    var obj = geom2dCreate.line();
    var res = obj.d2(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt2d');
    helpers.expectType(res.v1, 'gp.Vec2d');
    helpers.expectType(res.v2, 'gp.Vec2d');
  });

  it('d3(Double, gp.Pnt2d, gp.Vec2d, gp.Vec2d, gp.Vec2d)', function() {
    var obj = geom2dCreate.line();
    var res = obj.d3(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt2d');
    helpers.expectType(res.v1, 'gp.Vec2d');
    helpers.expectType(res.v2, 'gp.Vec2d');
    helpers.expectType(res.v3, 'gp.Vec2d');
  });

  it('dn(Double, Integer)', function() {
    var obj = geom2dCreate.line();
    var res = obj.dn(0.5, 2);
    helpers.expectType(res, 'Vec2d');
  });

  it('transform(gp.Trsf2d)', function() {
    var obj = geom2dCreate.line();
    var res = obj.transform(gpCreate.trsf2d());
  });

  it('transformedParameter(Double, gp.Trsf2d)', function() {
    var obj = geom2dCreate.line();
    var res = obj.transformedParameter(0.5, gpCreate.trsf2d());
    expect(typeof res).to.equal('number');
  });

  it('parametricTransformation(gp.Trsf2d)', function() {
    var obj = geom2dCreate.line();
    var res = obj.parametricTransformation(gpCreate.trsf2d());
    expect(typeof res).to.equal('number');
  });

  it('copy()', function() {
    var obj = geom2dCreate.line();
    var res = obj.copy();
    helpers.expectType(res, 'Line');
  });

  it('Line(gp.Ax2d)', function() {
    var res = new geom2d.Line(gpCreate.ax2d());
    helpers.expectType(res, 'Line');
  });

  // Arguments or return type not wrapped.
  xit('Line(gp_Lin2d)', function() { });

  it('Line(gp.Pnt2d, gp.Dir2d)', function() {
    var res = new geom2d.Line(gpCreate.pnt2d(), gpCreate.dir2d());
    helpers.expectType(res, 'Line');
  });
});
