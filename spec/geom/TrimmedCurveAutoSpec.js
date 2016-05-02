const geom = require('../../lib/geom.js');
const create = require('../create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('geom.TrimmedCurve', function(){


  it('reverse()', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.reverse();
  });


  it('reversedParameter(Double)', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.reversedParameter(0.5);
    expect(typeof res).to.equal('number');
  });

  // TODO: setTrim(Double, Double, Boolean)not working.

  xit('setTrim(Double, Double, Boolean)', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.setTrim(0.5, 1, false);
  });


  it('basisCurve()', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.basisCurve();
    helpers.expectType(res, 'Circle');
  });


  it('continuity()', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.continuity();
    expect(typeof res).to.equal('number');
  });


  it('isCn(Integer)', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.isCn(1);
    expect(typeof res).to.equal('boolean');
  });


  it('endPoint()', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.endPoint();
    helpers.expectType(res, 'Pnt');
  });


  it('firstParameter()', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.firstParameter();
    expect(typeof res).to.equal('number');
  });


  it('isClosed()', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.isClosed();
    expect(typeof res).to.equal('boolean');
  });


  it('isPeriodic()', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.isPeriodic();
    expect(typeof res).to.equal('boolean');
  });


  it('period()', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.period();
    expect(typeof res).to.equal('number');
  });


  it('lastParameter()', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.lastParameter();
    expect(typeof res).to.equal('number');
  });


  it('startPoint()', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.startPoint();
    helpers.expectType(res, 'Pnt');
  });


  it('d0(Double, gp.Pnt)', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.d0(0.5);
    helpers.expectType(res, 'Pnt');
  });


  it('d1(Double, gp.Pnt, gp.Vec)', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.d1(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.v1, 'gp.Vec');
  });


  it('d2(Double, gp.Pnt, gp.Vec, gp.Vec)', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.d2(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.v1, 'gp.Vec');
    helpers.expectType(res.v2, 'gp.Vec');
  });


  it('d3(Double, gp.Pnt, gp.Vec, gp.Vec, gp.Vec)', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.d3(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.v1, 'gp.Vec');
    helpers.expectType(res.v2, 'gp.Vec');
    helpers.expectType(res.v3, 'gp.Vec');
  });


  it('dn(Double, Integer)', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.dn(0.5, 2);
    helpers.expectType(res, 'Vec');
  });


  it('transform(gp.Trsf)', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.transform(create.gp.Trsf());
  });

  // TODO: transformedParameter(Double, gp.Trsf)not working.

  xit('transformedParameter(Double, gp.Trsf)', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.transformedParameter(0.5, create.gp.Trsf());
    expect(typeof res).to.equal('number');
  });


  it('parametricTransformation(gp.Trsf)', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.parametricTransformation(create.gp.Trsf());
    expect(typeof res).to.equal('number');
  });


  it('copy()', function(){
    var obj = create.geom.TrimmedCurve();
    var res = obj.copy();
    helpers.expectType(res, 'TrimmedCurve');
  });

  // Arguments or return type not wrapped.

  xit('makeArcOfCircle(gp_Circ, Double, Double, Boolean)', function(){
    var res = geom.TrimmedCurve.makeArcOfCircle(create.gp_Circ(), 0.5, 1, false);
    helpers.expectType(res, 'TrimmedCurve');
  });

  // Arguments or return type not wrapped.

  xit('makeArcOfCircle(gp_Circ, gp.Pnt, Double, Boolean)', function(){
    var res = geom.TrimmedCurve.makeArcOfCircle(create.gp_Circ(), create.gp.Pnt(), 0.5, false);
    helpers.expectType(res, 'TrimmedCurve');
  });

  // Arguments or return type not wrapped.

  xit('makeArcOfCircle(gp_Circ, gp.Pnt, gp.Pnt, Boolean)', function(){
    var res = geom.TrimmedCurve.makeArcOfCircle(create.gp_Circ(), create.gp.Pnt(), create.gp.Pnt(), false);
    helpers.expectType(res, 'TrimmedCurve');
  });

  // TODO: makeArcOfCircle(gp.Pnt, gp.Pnt, gp.Pnt)not working.

  xit('makeArcOfCircle(gp.Pnt, gp.Pnt, gp.Pnt)', function(){
    var res = geom.TrimmedCurve.makeArcOfCircle(create.gp.Pnt(), create.gp.Pnt(), create.gp.Pnt());
    helpers.expectType(res, 'TrimmedCurve');
  });


  it('makeArcOfCircle(gp.Pnt, gp.Vec, gp.Pnt)', function(){
    var res = geom.TrimmedCurve.makeArcOfCircle(create.gp.Pnt(), create.gp.Vec(), create.gp.Pnt());
    helpers.expectType(res, 'TrimmedCurve');
  });


  it('makeSegment(gp.Pnt, gp.Pnt)', function(){
    var res = geom.TrimmedCurve.makeSegment(create.gp.Pnt(), create.gp.Pnt());
    helpers.expectType(res, 'TrimmedCurve');
  });

  // Arguments or return type not wrapped.

  xit('makeSegment(gp_Lin, Double, Double)', function(){
    var res = geom.TrimmedCurve.makeSegment(create.gp_Lin(), 0.5, 1);
    helpers.expectType(res, 'TrimmedCurve');
  });

  // Arguments or return type not wrapped.

  xit('makeSegment(gp_Lin, gp.Pnt, Double)', function(){
    var res = geom.TrimmedCurve.makeSegment(create.gp_Lin(), create.gp.Pnt(), 0.5);
    helpers.expectType(res, 'TrimmedCurve');
  });

  // Arguments or return type not wrapped.

  xit('makeSegment(gp_Lin, gp.Pnt, gp.Pnt)', function(){
    var res = geom.TrimmedCurve.makeSegment(create.gp_Lin(), create.gp.Pnt(), create.gp.Pnt());
    helpers.expectType(res, 'TrimmedCurve');
  });
  // TrimmedCurve(geom.Curve, Double, Double, Boolean) Redefined.
});
