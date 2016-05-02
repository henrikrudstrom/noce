const geom = require('../../lib/geom.js');
const create = require('../create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('geom.BezierCurve', function(){

  // TODO: increase(Integer)not working.

  xit('increase(Integer)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.increase(1);
  });


  it('insertPoleAfter(Integer, gp.Pnt)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.insertPoleAfter(1, create.gp.Pnt());
  });


  it('insertPoleAfter(Integer, gp.Pnt, Double)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.insertPoleAfter(1, create.gp.Pnt(), 1.5);
  });


  it('insertPoleBefore(Integer, gp.Pnt)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.insertPoleBefore(1, create.gp.Pnt());
  });


  it('insertPoleBefore(Integer, gp.Pnt, Double)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.insertPoleBefore(1, create.gp.Pnt(), 1.5);
  });


  it('removePole(Integer)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.removePole(1);
  });


  it('reverse()', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.reverse();
  });


  it('reversedParameter(Double)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.reversedParameter(0.5);
    expect(typeof res).to.equal('number');
  });


  it('segment(Double, Double)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.segment(0.5, 1);
  });


  it('setPole(Integer, gp.Pnt)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.setPole(1, create.gp.Pnt());
  });


  it('setPole(Integer, gp.Pnt, Double)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.setPole(1, create.gp.Pnt(), 1.5);
  });


  it('setWeight(Integer, Double)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.setWeight(1, 1.5);
  });


  it('isClosed()', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.isClosed();
    expect(typeof res).to.equal('boolean');
  });


  it('isCn(Integer)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.isCn(1);
    expect(typeof res).to.equal('boolean');
  });


  it('isPeriodic()', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.isPeriodic();
    expect(typeof res).to.equal('boolean');
  });


  it('isRational()', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.isRational();
    expect(typeof res).to.equal('boolean');
  });


  it('continuity()', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.continuity();
    expect(typeof res).to.equal('number');
  });


  it('degree()', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.degree();
    expect(typeof res).to.equal('number');
  });


  it('d0(Double, gp.Pnt)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.d0(0.5);
    helpers.expectType(res, 'Pnt');
  });


  it('d1(Double, gp.Pnt, gp.Vec)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.d1(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.v1, 'gp.Vec');
  });


  it('d2(Double, gp.Pnt, gp.Vec, gp.Vec)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.d2(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.v1, 'gp.Vec');
    helpers.expectType(res.v2, 'gp.Vec');
  });


  it('d3(Double, gp.Pnt, gp.Vec, gp.Vec, gp.Vec)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.d3(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.v1, 'gp.Vec');
    helpers.expectType(res.v2, 'gp.Vec');
    helpers.expectType(res.v3, 'gp.Vec');
  });


  it('dn(Double, Integer)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.dn(0.5, 2);
    helpers.expectType(res, 'Vec');
  });


  it('startPoint()', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.startPoint();
    helpers.expectType(res, 'Pnt');
  });


  it('endPoint()', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.endPoint();
    helpers.expectType(res, 'Pnt');
  });


  it('firstParameter()', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.firstParameter();
    expect(typeof res).to.equal('number');
  });


  it('lastParameter()', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.lastParameter();
    expect(typeof res).to.equal('number');
  });


  it('nbPoles()', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.nbPoles();
    expect(typeof res).to.equal('number');
  });


  it('pole(Integer)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.pole(1);
    helpers.expectType(res, 'Pnt');
  });


  it('poles(Array)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.poles();
    helpers.expectType(res, 'Array');
  });


  it('weight(Integer)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.weight(1);
    expect(typeof res).to.equal('number');
  });


  it('weights(Array)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.weights();
    helpers.expectType(res, 'Array');
  });


  it('transform(gp.Trsf)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.transform(create.gp.Trsf());
  });


  it('resolution(Double, Double)', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.resolution(0.5);
    expect(typeof res).to.equal('number');
  });


  it('copy()', function(){
    var obj = create.geom.BezierCurve();
    var res = obj.copy();
    helpers.expectType(res, 'BezierCurve');
  });


  it('maxDegree()', function(){
    var res = geom.BezierCurve.maxDegree();
    expect(typeof res).to.equal('number');
  });
  // BezierCurve(Array) Redefined.
  // BezierCurve(Array, Array) Redefined.
});
