const geom2d = require('../../lib/geom2d.js');
const gp = require('../../lib/gp.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('geom2d.Circle', function(){

  // Arguments or return type not wrapped.
  xit('setCirc2D(gp_Circ2d)', function() { });

  it('setRadius(Double)', function() {
    var obj = create.geom2d.circle();
    var res = obj.setRadius(0.5);
  });

  // Arguments or return type not wrapped.
  xit('circ2D()', function() { });

  it('radius()', function() {
    var obj = create.geom2d.circle();
    var res = obj.radius();
    expect(typeof res).to.equal('number');
  });

  it('reversedParameter(Double)', function() {
    var obj = create.geom2d.circle();
    var res = obj.reversedParameter(0.5);
    expect(typeof res).to.equal('number');
  });

  it('eccentricity()', function() {
    var obj = create.geom2d.circle();
    var res = obj.eccentricity();
    expect(typeof res).to.equal('number');
  });

  it('firstParameter()', function() {
    var obj = create.geom2d.circle();
    var res = obj.firstParameter();
    expect(typeof res).to.equal('number');
  });

  it('lastParameter()', function() {
    var obj = create.geom2d.circle();
    var res = obj.lastParameter();
    expect(typeof res).to.equal('number');
  });

  it('isClosed()', function() {
    var obj = create.geom2d.circle();
    var res = obj.isClosed();
    expect(typeof res).to.equal('boolean');
  });

  it('isPeriodic()', function() {
    var obj = create.geom2d.circle();
    var res = obj.isPeriodic();
    expect(typeof res).to.equal('boolean');
  });

  it('d0(Double, gp.Pnt2d)', function() {
    var obj = create.geom2d.circle();
    var res = obj.d0(0.5);
    helpers.expectType(res, 'Pnt2d');
  });

  it('d1(Double, gp.Pnt2d, gp.Vec2d)', function() {
    var obj = create.geom2d.circle();
    var res = obj.d1(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt2d');
    helpers.expectType(res.v1, 'gp.Vec2d');
  });

  it('d2(Double, gp.Pnt2d, gp.Vec2d, gp.Vec2d)', function() {
    var obj = create.geom2d.circle();
    var res = obj.d2(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt2d');
    helpers.expectType(res.v1, 'gp.Vec2d');
    helpers.expectType(res.v2, 'gp.Vec2d');
  });

  it('d3(Double, gp.Pnt2d, gp.Vec2d, gp.Vec2d, gp.Vec2d)', function() {
    var obj = create.geom2d.circle();
    var res = obj.d3(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt2d');
    helpers.expectType(res.v1, 'gp.Vec2d');
    helpers.expectType(res.v2, 'gp.Vec2d');
    helpers.expectType(res.v3, 'gp.Vec2d');
  });

  it('dn(Double, Integer)', function() {
    var obj = create.geom2d.circle();
    var res = obj.dn(0.5, 2);
    helpers.expectType(res, 'Vec2d');
  });

  it('transform(gp.Trsf2d)', function() {
    var obj = create.geom2d.circle();
    var res = obj.transform(create.gp.trsf2d());
  });

  it('copy()', function() {
    var obj = create.geom2d.circle();
    var res = obj.copy();
    helpers.expectType(res, 'Circle');
  });

  // Arguments or return type not wrapped.
  xit('makeCircle(gp_Circ2d)', function() { });

  it('makeCircle(gp.Ax2d, Double, Boolean)', function() {
    var res = geom2d.Circle.makeCircle(create.gp.ax2d(), 0.5, false);
    helpers.expectType(res, 'Circle');
  });

  it('makeCircle(gp.Ax22d, Double)', function() {
    var res = geom2d.Circle.makeCircle(create.gp.ax22d(), 0.5);
    helpers.expectType(res, 'Circle');
  });

  // Arguments or return type not wrapped.
  xit('makeCircle(gp_Circ2d, Double)', function() { });

  // Arguments or return type not wrapped.
  xit('makeCircle(gp_Circ2d, gp.Pnt2d)', function() { });

  it('makeCircle(gp.Pnt2d, gp.Pnt2d, gp.Pnt2d)', function() {
    var res = geom2d.Circle.makeCircle(create.gp.pnt2d(), create.gp.pnt2d(), create.gp.pnt2d());
    helpers.expectType(res, 'Circle');
  });

  it('makeCircle(gp.Pnt2d, Double, Boolean)', function() {
    var res = geom2d.Circle.makeCircle(create.gp.pnt2d(), 0.5, false);
    helpers.expectType(res, 'Circle');
  });

  it('makeCircle(gp.Pnt2d, gp.Pnt2d, Boolean)', function() {
    var res = geom2d.Circle.makeCircle(create.gp.pnt2d(), create.gp.pnt2d(), false);
    helpers.expectType(res, 'Circle');
  });

  // Arguments or return type not wrapped.
  xit('Circle(gp_Circ2d)', function() { });

  it('Circle(gp.Ax2d, Double, Boolean)', function() {
    var res = new geom2d.Circle(create.gp.ax2d(), 0.5, false);
    helpers.expectType(res, 'Circle');
  });

  it('Circle(gp.Ax22d, Double)', function() {
    var res = new geom2d.Circle(create.gp.ax22d(), 0.5);
    helpers.expectType(res, 'Circle');
  });
});
