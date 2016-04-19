var Geom = require('../../lib/Geom.js');
var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('Geom.TrimmedCurve', function(){
  // TrimmedCurve(Geom.Curve, Double, Double, Boolean) - Redefined.


    // arguments or return type not wrapped
  xit('makeArcOfCircle(gp_Circ, Double, Double, Boolean)', function(){
    var res = Geom.TrimmedCurve.makeArcOfCircle(create.gp_Circ(), 11, 11.5, true);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


    // arguments or return type not wrapped
  xit('makeArcOfCircle(gp_Circ, gp.Pnt, Double, Boolean)', function(){
    var res = Geom.TrimmedCurve.makeArcOfCircle(create.gp_Circ(), create.gp.Pnt(), 12, false);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


    // arguments or return type not wrapped
  xit('makeArcOfCircle(gp_Circ, gp.Pnt, gp.Pnt, Boolean)', function(){
    var res = Geom.TrimmedCurve.makeArcOfCircle(create.gp_Circ(), create.gp.Pnt(), create.gp.Pnt(), true);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


    // TODO: not working
  xit('makeArcOfCircle(gp.Pnt, gp.Pnt, gp.Pnt)', function(){
    var res = Geom.TrimmedCurve.makeArcOfCircle(create.gp.Pnt(), create.gp.Pnt(), create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


  it('makeArcOfCircle(gp.Pnt, gp.Vec, gp.Pnt)', function(){
    var res = Geom.TrimmedCurve.makeArcOfCircle(create.gp.Pnt(), create.gp.Vec(), create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


  it('makeSegment(gp.Pnt, gp.Pnt)', function(){
    var res = Geom.TrimmedCurve.makeSegment(create.gp.Pnt(), create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


    // arguments or return type not wrapped
  xit('makeSegment(gp_Lin, Double, Double)', function(){
    var res = Geom.TrimmedCurve.makeSegment(create.gp_Lin(), 12.5, 13);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


    // arguments or return type not wrapped
  xit('makeSegment(gp_Lin, gp.Pnt, Double)', function(){
    var res = Geom.TrimmedCurve.makeSegment(create.gp_Lin(), create.gp.Pnt(), 13.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


    // arguments or return type not wrapped
  xit('makeSegment(gp_Lin, gp.Pnt, gp.Pnt)', function(){
    var res = Geom.TrimmedCurve.makeSegment(create.gp_Lin(), create.gp.Pnt(), create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


  it('reverse()', function(){
    var obj = create.Geom.TrimmedCurve();
    var res = obj.reverse();
  });


  it('basisCurve()', function(){
    var obj = create.Geom.TrimmedCurve();
    var res = obj.basisCurve();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


    // arguments or return type not wrapped
  xit('continuity()', function(){
    var obj = create.Geom.TrimmedCurve();
    var res = obj.continuity();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('GeomAbs_Shape');
  });


  it('endPoint()', function(){
    var obj = create.Geom.TrimmedCurve();
    var res = obj.endPoint();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('firstParameter()', function(){
    var obj = create.Geom.TrimmedCurve();
    var res = obj.firstParameter();
    expect(typeof res).toBe('number');
  });


  it('isClosed()', function(){
    var obj = create.Geom.TrimmedCurve();
    var res = obj.isClosed();
    expect(typeof res).toBe('boolean');
  });


  it('isPeriodic()', function(){
    var obj = create.Geom.TrimmedCurve();
    var res = obj.isPeriodic();
    expect(typeof res).toBe('boolean');
  });


  it('period()', function(){
    var obj = create.Geom.TrimmedCurve();
    var res = obj.period();
    expect(typeof res).toBe('number');
  });


  it('lastParameter()', function(){
    var obj = create.Geom.TrimmedCurve();
    var res = obj.lastParameter();
    expect(typeof res).toBe('number');
  });


  it('startPoint()', function(){
    var obj = create.Geom.TrimmedCurve();
    var res = obj.startPoint();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('copy()', function(){
    var obj = create.Geom.TrimmedCurve();
    var res = obj.copy();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


    // arguments or return type not wrapped
  xit('dynamicType()', function(){
    var obj = create.Geom.TrimmedCurve();
    var res = obj.dynamicType();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_Standard_Type');
  });


  it('reversed()', function(){
    var obj = create.Geom.TrimmedCurve();
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });

});
