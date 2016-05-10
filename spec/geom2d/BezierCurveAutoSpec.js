const geom2d = require('../../lib/geom2d.js');
const gp = require('../../lib/gp.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('geom2d.BezierCurve', function(){

  // TODO: increase(Integer)not working.
  xit('increase(Integer)', function() { });

  it('insertPoleAfter(Integer, gp.Pnt2d, Double)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.insertPoleAfter(2, create.gp.pnt2d(), 2.5);
  });

  it('insertPoleBefore(Integer, gp.Pnt2d, Double)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.insertPoleBefore(1, create.gp.pnt2d(), 1.5);
  });

  it('removePole(Integer)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.removePole(1);
  });

  it('reverse()', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.reverse();
  });

  it('reversedParameter(Double)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.reversedParameter(0.5);
    expect(typeof res).to.equal('number');
  });

  it('segment(Double, Double)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.segment(0.5, 1);
  });

  it('setPole(Integer, gp.Pnt2d)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.setPole(1, create.gp.pnt2d());
  });

  it('setPole(Integer, gp.Pnt2d, Double)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.setPole(1, create.gp.pnt2d(), 1.5);
  });

  it('setWeight(Integer, Double)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.setWeight(1, 1.5);
  });

  it('isClosed()', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.isClosed();
    expect(typeof res).to.equal('boolean');
  });

  it('isCn(Integer)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.isCn(1);
    expect(typeof res).to.equal('boolean');
  });

  it('isPeriodic()', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.isPeriodic();
    expect(typeof res).to.equal('boolean');
  });

  it('isRational()', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.isRational();
    expect(typeof res).to.equal('boolean');
  });

  it('continuity()', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.continuity();
    expect(typeof res).to.equal('number');
  });

  it('degree()', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.degree();
    expect(typeof res).to.equal('number');
  });

  it('d0(Double, gp.Pnt2d)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.d0(0.5);
    helpers.expectType(res, 'Pnt2d');
  });

  it('d1(Double, gp.Pnt2d, gp.Vec2d)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.d1(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt2d');
    helpers.expectType(res.v1, 'gp.Vec2d');
  });

  it('d2(Double, gp.Pnt2d, gp.Vec2d, gp.Vec2d)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.d2(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt2d');
    helpers.expectType(res.v1, 'gp.Vec2d');
    helpers.expectType(res.v2, 'gp.Vec2d');
  });

  it('d3(Double, gp.Pnt2d, gp.Vec2d, gp.Vec2d, gp.Vec2d)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.d3(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt2d');
    helpers.expectType(res.v1, 'gp.Vec2d');
    helpers.expectType(res.v2, 'gp.Vec2d');
    helpers.expectType(res.v3, 'gp.Vec2d');
  });

  it('dn(Double, Integer)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.dn(0.5, 2);
    helpers.expectType(res, 'Vec2d');
  });

  it('endPoint()', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.endPoint();
    helpers.expectType(res, 'Pnt2d');
  });

  it('firstParameter()', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.firstParameter();
    expect(typeof res).to.equal('number');
  });

  it('lastParameter()', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.lastParameter();
    expect(typeof res).to.equal('number');
  });

  it('nbPoles()', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.nbPoles();
    expect(typeof res).to.equal('number');
  });

  it('pole(Integer)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.pole(1);
    helpers.expectType(res, 'Pnt2d');
  });

  it('poles(Array)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.poles();
    helpers.expectType(res, 'Array');
  });

  it('startPoint()', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.startPoint();
    helpers.expectType(res, 'Pnt2d');
  });

  it('weight(Integer)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.weight(1);
    expect(typeof res).to.equal('number');
  });

  it('weights(Array)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.weights();
    helpers.expectType(res, 'Array');
  });

  it('transform(gp.Trsf2d)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.transform(create.gp.trsf2d());
  });

  it('resolution(Double, Double)', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.resolution(0.5);
    expect(typeof res).to.equal('number');
  });

  it('copy()', function() {
    var obj = create.geom2d.bezierCurve();
    var res = obj.copy();
    helpers.expectType(res, 'BezierCurve');
  });

  it('maxDegree()', function() {
    var res = geom2d.BezierCurve.maxDegree();
    expect(typeof res).to.equal('number');
  });

  // TODO: BezierCurve(Array)not working.
  xit('BezierCurve(Array)', function() { });

  // TODO: BezierCurve(Array, Array)not working.
  xit('BezierCurve(Array, Array)', function() { });
});
