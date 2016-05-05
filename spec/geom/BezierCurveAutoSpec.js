const geom = require('../../lib/geom.js');
var geomCreate = require('../geom/create.js');
const gp = require('../../lib/gp.js');
var gpCreate = require('../gp/create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('geom.BezierCurve', function(){

  // TODO: increase(Integer)not working.
  xit('increase(Integer)', function() { });

  it('insertPoleAfter(Integer, gp.Pnt)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.insertPoleAfter(2, gpCreate.pnt());
  });

  it('insertPoleAfter(Integer, gp.Pnt, Double)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.insertPoleAfter(1, gpCreate.pnt(), 1.5);
  });

  it('insertPoleBefore(Integer, gp.Pnt)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.insertPoleBefore(1, gpCreate.pnt());
  });

  it('insertPoleBefore(Integer, gp.Pnt, Double)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.insertPoleBefore(1, gpCreate.pnt(), 1.5);
  });

  it('removePole(Integer)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.removePole(1);
  });

  it('reverse()', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.reverse();
  });

  it('reversedParameter(Double)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.reversedParameter(0.5);
    expect(typeof res).to.equal('number');
  });

  it('segment(Double, Double)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.segment(0.5, 1);
  });

  it('setPole(Integer, gp.Pnt)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.setPole(1, gpCreate.pnt());
  });

  it('setPole(Integer, gp.Pnt, Double)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.setPole(1, gpCreate.pnt(), 1.5);
  });

  it('setWeight(Integer, Double)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.setWeight(1, 1.5);
  });

  it('isClosed()', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.isClosed();
    expect(typeof res).to.equal('boolean');
  });

  it('isCn(Integer)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.isCn(1);
    expect(typeof res).to.equal('boolean');
  });

  it('isPeriodic()', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.isPeriodic();
    expect(typeof res).to.equal('boolean');
  });

  it('isRational()', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.isRational();
    expect(typeof res).to.equal('boolean');
  });

  it('continuity()', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.continuity();
    expect(typeof res).to.equal('number');
  });

  it('degree()', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.degree();
    expect(typeof res).to.equal('number');
  });

  it('d0(Double, gp.Pnt)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.d0(0.5);
    helpers.expectType(res, 'Pnt');
  });

  it('d1(Double, gp.Pnt, gp.Vec)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.d1(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.v1, 'gp.Vec');
  });

  it('d2(Double, gp.Pnt, gp.Vec, gp.Vec)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.d2(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.v1, 'gp.Vec');
    helpers.expectType(res.v2, 'gp.Vec');
  });

  it('d3(Double, gp.Pnt, gp.Vec, gp.Vec, gp.Vec)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.d3(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.v1, 'gp.Vec');
    helpers.expectType(res.v2, 'gp.Vec');
    helpers.expectType(res.v3, 'gp.Vec');
  });

  it('dn(Double, Integer)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.dn(0.5, 2);
    helpers.expectType(res, 'Vec');
  });

  it('startPoint()', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.startPoint();
    helpers.expectType(res, 'Pnt');
  });

  it('endPoint()', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.endPoint();
    helpers.expectType(res, 'Pnt');
  });

  it('firstParameter()', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.firstParameter();
    expect(typeof res).to.equal('number');
  });

  it('lastParameter()', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.lastParameter();
    expect(typeof res).to.equal('number');
  });

  it('nbPoles()', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.nbPoles();
    expect(typeof res).to.equal('number');
  });

  it('pole(Integer)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.pole(1);
    helpers.expectType(res, 'Pnt');
  });

  it('poles(Array)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.poles();
    helpers.expectType(res, 'Array');
  });

  it('weight(Integer)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.weight(1);
    expect(typeof res).to.equal('number');
  });

  it('weights(Array)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.weights();
    helpers.expectType(res, 'Array');
  });

  it('transform(gp.Trsf)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.transform(gpCreate.trsf());
  });

  it('resolution(Double, Double)', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.resolution(0.5);
    expect(typeof res).to.equal('number');
  });

  it('copy()', function() {
    var obj = geomCreate.bezierCurve();
    var res = obj.copy();
    helpers.expectType(res, 'BezierCurve');
  });

  it('maxDegree()', function() {
    var res = geom.BezierCurve.maxDegree();
    expect(typeof res).to.equal('number');
  });
// ${excludedReason}
// ${excludedReason}
});
