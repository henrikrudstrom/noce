const geom2d = require('../../lib/geom2d.js');
const gp = require('../../lib/gp.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('geom2d.TrimmedCurve', function(){

  it('reverse()', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.reverse();
  });

  it('reversedParameter(Double)', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.reversedParameter(0.5);
    expect(typeof res).to.equal('number');
  });

  it('setTrim(Double, Double, Boolean)', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.setTrim(0.5, 1, false);
  });

  it('basisCurve()', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.basisCurve();
    helpers.expectType(res, 'Curve');
  });

  it('continuity()', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.continuity();
    expect(typeof res).to.equal('number');
  });

  it('isCn(Integer)', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.isCn(1);
    expect(typeof res).to.equal('boolean');
  });

  it('endPoint()', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.endPoint();
    helpers.expectType(res, 'Pnt2d');
  });

  it('firstParameter()', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.firstParameter();
    expect(typeof res).to.equal('number');
  });

  it('isClosed()', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.isClosed();
    expect(typeof res).to.equal('boolean');
  });

  it('isPeriodic()', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.isPeriodic();
    expect(typeof res).to.equal('boolean');
  });

  it('period()', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.period();
    expect(typeof res).to.equal('number');
  });

  it('lastParameter()', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.lastParameter();
    expect(typeof res).to.equal('number');
  });

  it('startPoint()', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.startPoint();
    helpers.expectType(res, 'Pnt2d');
  });

  it('d0(Double, gp.Pnt2d)', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.d0(0.5);
    helpers.expectType(res, 'Pnt2d');
  });

  it('d1(Double, gp.Pnt2d, gp.Vec2d)', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.d1(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt2d');
    helpers.expectType(res.v1, 'gp.Vec2d');
  });

  it('d2(Double, gp.Pnt2d, gp.Vec2d, gp.Vec2d)', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.d2(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt2d');
    helpers.expectType(res.v1, 'gp.Vec2d');
    helpers.expectType(res.v2, 'gp.Vec2d');
  });

  it('d3(Double, gp.Pnt2d, gp.Vec2d, gp.Vec2d, gp.Vec2d)', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.d3(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt2d');
    helpers.expectType(res.v1, 'gp.Vec2d');
    helpers.expectType(res.v2, 'gp.Vec2d');
    helpers.expectType(res.v3, 'gp.Vec2d');
  });

  it('dn(Double, Integer)', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.dn(0.5, 2);
    helpers.expectType(res, 'Vec2d');
  });

  it('transform(gp.Trsf2d)', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.transform(create.gp.trsf2d());
  });

  it('transformedParameter(Double, gp.Trsf2d)', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.transformedParameter(0.5, create.gp.trsf2d());
    expect(typeof res).to.equal('number');
  });

  it('parametricTransformation(gp.Trsf2d)', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.parametricTransformation(create.gp.trsf2d());
    expect(typeof res).to.equal('number');
  });

  it('copy()', function() {
    var obj = create.geom2d.trimmedCurve();
    var res = obj.copy();
    helpers.expectType(res, 'TrimmedCurve');
  });

  // Arguments or return type not wrapped.
  xit('makeArcOfCircle(gp_Circ2d, Double, Double, Boolean)', function() { });

  // Arguments or return type not wrapped.
  xit('makeArcOfCircle(gp_Circ2d, gp.Pnt2d, Double, Boolean)', function() { });

  // Arguments or return type not wrapped.
  xit('makeArcOfCircle(gp_Circ2d, gp.Pnt2d, gp.Pnt2d, Boolean)', function() { });

  it('makeArcOfCircle(gp.Pnt2d, gp.Pnt2d, gp.Pnt2d)', function() {
    var res = geom2d.TrimmedCurve.makeArcOfCircle(create.gp.pnt2d(), create.gp.pnt2d(), create.gp.pnt2d());
    helpers.expectType(res, 'TrimmedCurve');
  });

  it('makeArcOfCircle(gp.Pnt2d, gp.Vec2d, gp.Pnt2d)', function() {
    var res = geom2d.TrimmedCurve.makeArcOfCircle(create.gp.pnt2d(), create.gp.vec2d(), create.gp.pnt2d());
    helpers.expectType(res, 'TrimmedCurve');
  });

  it('makeSegment(gp.Pnt2d, gp.Pnt2d)', function() {
    var res = geom2d.TrimmedCurve.makeSegment(create.gp.pnt2d(), create.gp.pnt2d());
    helpers.expectType(res, 'TrimmedCurve');
  });

  it('makeSegment(gp.Pnt2d, gp.Dir2d, gp.Pnt2d)', function() {
    var res = geom2d.TrimmedCurve.makeSegment(create.gp.pnt2d(), create.gp.dir2d(), create.gp.pnt2d());
    helpers.expectType(res, 'TrimmedCurve');
  });

  // Arguments or return type not wrapped.
  xit('makeSegment(gp_Lin2d, Double, Double)', function() { });

  // Arguments or return type not wrapped.
  xit('makeSegment(gp_Lin2d, gp.Pnt2d, Double)', function() { });

  // Arguments or return type not wrapped.
  xit('makeSegment(gp_Lin2d, gp.Pnt2d, gp.Pnt2d)', function() { });

  it('TrimmedCurve(geom2d.Curve, Double, Double, Boolean)', function() {
    var res = new geom2d.TrimmedCurve(create.geom2d.curve(), 0.5, 1, false);
    helpers.expectType(res, 'TrimmedCurve');
  });
});
