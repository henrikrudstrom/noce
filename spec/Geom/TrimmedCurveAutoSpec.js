var Geom = require('../../lib/Geom.node');
var gp = require('../../lib/gp.node');
var create = require('../create.js')
describe('Geom.TrimmedCurve', function(){
// TrimmedCurve(Geom.Curve, gp.double, gp.double, gp.bool) - Redefined.


  it('reverse()', function(){
    // console.log('reverse()')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.reverse();
  });


  it('reversedParameter(gp.double)', function(){
    // console.log('reversedParameter(gp.double)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.reversedParameter(32.5);
    expect(typeof res).toBe('number');
  });


  it('setTrim(gp.double, gp.double, gp.bool)', function(){
    // console.log('setTrim(gp.double, gp.double, gp.bool)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.setTrim(33, 33.5, false);
  });


  it('basisCurve()', function(){
    // console.log('basisCurve()')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.basisCurve();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  // arguments or return type not wrapped
  xit('continuity()', function(){
    // console.log('continuity()')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.continuity();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('GeomAbs_Shape');
  });


  it('isCn(gp.int)', function(){
    // console.log('isCn(gp.int)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.isCn(1);
    expect(typeof res).toBe('boolean');
  });


  it('endPoint()', function(){
    // console.log('endPoint()')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.endPoint();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('firstParameter()', function(){
    // console.log('firstParameter()')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.firstParameter();
    expect(typeof res).toBe('number');
  });


  it('isClosed()', function(){
    // console.log('isClosed()')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.isClosed();
    expect(typeof res).toBe('boolean');
  });


  it('isPeriodic()', function(){
    // console.log('isPeriodic()')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.isPeriodic();
    expect(typeof res).toBe('boolean');
  });


  it('period()', function(){
    // console.log('period()')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.period();
    expect(typeof res).toBe('number');
  });


  it('lastParameter()', function(){
    // console.log('lastParameter()')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.lastParameter();
    expect(typeof res).toBe('number');
  });


  it('startPoint()', function(){
    // console.log('startPoint()')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.startPoint();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('d0(gp.double, gp.Pnt)', function(){
    // console.log('d0(gp.double, gp.Pnt)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.d0(34, create.gp.Pnt());
  });


  it('d1(gp.double, gp.Pnt, gp.Vec)', function(){
    // console.log('d1(gp.double, gp.Pnt, gp.Vec)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.d1(34.5, create.gp.Pnt(), create.gp.Vec());
  });


  it('d2(gp.double, gp.Pnt, gp.Vec, gp.Vec)', function(){
    // console.log('d2(gp.double, gp.Pnt, gp.Vec, gp.Vec)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.d2(35, create.gp.Pnt(), create.gp.Vec(), create.gp.Vec());
  });


  it('d3(gp.double, gp.Pnt, gp.Vec, gp.Vec, gp.Vec)', function(){
    // console.log('d3(gp.double, gp.Pnt, gp.Vec, gp.Vec, gp.Vec)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.d3(35.5, create.gp.Pnt(), create.gp.Vec(), create.gp.Vec(), create.gp.Vec());
  });


  it('dn(gp.double, gp.int)', function(){
    // console.log('dn(gp.double, gp.int)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.dn(36, 1);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('transform(gp.Trsf)', function(){
    // console.log('transform(gp.Trsf)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.transform(create.gp.Trsf());
  });


  it('transformedParameter(gp.double, gp.Trsf)', function(){
    // console.log('transformedParameter(gp.double, gp.Trsf)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.transformedParameter(36.5, create.gp.Trsf());
    expect(typeof res).toBe('number');
  });


  it('parametricTransformation(gp.Trsf)', function(){
    // console.log('parametricTransformation(gp.Trsf)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.parametricTransformation(create.gp.Trsf());
    expect(typeof res).toBe('number');
  });


  it('copy()', function(){
    // console.log('copy()')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.copy();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


  // arguments or return type not wrapped
  xit('dynamicType()', function(){
    // console.log('dynamicType()')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.dynamicType();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_Standard_Type');
  });


  it('reversed()', function(){
    // console.log('reversed()')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


  it('value(gp.double)', function(){
    // console.log('value(gp.double)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.value(37);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('mirror(gp.Pnt)', function(){
    // console.log('mirror(gp.Pnt)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Pnt());
  });


  it('mirror(gp.Ax1)', function(){
    // console.log('mirror(gp.Ax1)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Ax1());
  });


  it('mirror(gp.Ax2)', function(){
    // console.log('mirror(gp.Ax2)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Ax2());
  });


  it('rotate(gp.Ax1, gp.double)', function(){
    // console.log('rotate(gp.Ax1, gp.double)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.rotate(create.gp.Ax1(), 37.5);
  });


  it('scale(gp.Pnt, gp.double)', function(){
    // console.log('scale(gp.Pnt, gp.double)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.scale(create.gp.Pnt(), 38);
  });


  it('translate(gp.Vec)', function(){
    // console.log('translate(gp.Vec)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.translate(create.gp.Vec());
  });


  it('translate(gp.Pnt, gp.Pnt)', function(){
    // console.log('translate(gp.Pnt, gp.Pnt)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.translate(create.gp.Pnt(), create.gp.Pnt());
  });


  it('mirrored(gp.Pnt)', function(){
    // console.log('mirrored(gp.Pnt)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.mirrored(create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


  it('mirrored(gp.Ax1)', function(){
    // console.log('mirrored(gp.Ax1)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.mirrored(create.gp.Ax1());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


  it('mirrored(gp.Ax2)', function(){
    // console.log('mirrored(gp.Ax2)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.mirrored(create.gp.Ax2());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


  it('rotated(gp.Ax1, gp.double)', function(){
    // console.log('rotated(gp.Ax1, gp.double)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.rotated(create.gp.Ax1(), 38.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


  it('scaled(gp.Pnt, gp.double)', function(){
    // console.log('scaled(gp.Pnt, gp.double)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.scaled(create.gp.Pnt(), 39);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


  it('transformed(gp.Trsf)', function(){
    // console.log('transformed(gp.Trsf)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.transformed(create.gp.Trsf());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


  it('translated(gp.Vec)', function(){
    // console.log('translated(gp.Vec)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.translated(create.gp.Vec());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });


  it('translated(gp.Pnt, gp.Pnt)', function(){
    // console.log('translated(gp.Pnt, gp.Pnt)')
    var obj = create.Geom.TrimmedCurve();
    var obj_h = obj._handle;
    var res = obj.translated(create.gp.Pnt(), create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });

});
