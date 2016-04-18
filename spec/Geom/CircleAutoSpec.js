var Geom = require('../../lib/Geom.node');
var gp = require('../../lib/gp.node');
var create = require('../create.js')
describe('Geom.Circle', function(){


  // arguments or return type not wrapped
  xit('Circle(gp_Circ)', function(){
    console.log('Circle(gp_Circ)')
    var res = new Geom.Circle(create.gp_Circ());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('Circle(gp.Ax2, gp.double)', function(){
    console.log('Circle(gp.Ax2, gp.double)')
    var res = new Geom.Circle(create.gp.Ax2(), 24.5);
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  // arguments or return type not wrapped
  xit('makeCircle(gp_Circ)', function(){
    console.log('makeCircle(gp_Circ)')
    var res = Geom.Circle.makeCircle(create.gp_Circ());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('makeCircle(gp.Ax2, gp.double)', function(){
    console.log('makeCircle(gp.Ax2, gp.double)')
    var res = Geom.Circle.makeCircle(create.gp.Ax2(), 25);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  // arguments or return type not wrapped
  xit('makeCircle(gp_Circ, gp.double)', function(){
    console.log('makeCircle(gp_Circ, gp.double)')
    var res = Geom.Circle.makeCircle(create.gp_Circ(), 25.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  // arguments or return type not wrapped
  xit('makeCircle(gp_Circ, gp.Pnt)', function(){
    console.log('makeCircle(gp_Circ, gp.Pnt)')
    var res = Geom.Circle.makeCircle(create.gp_Circ(), create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  // TODO: not working
  xit('makeCircle(gp.Pnt, gp.Pnt, gp.Pnt)', function(){
    console.log('makeCircle(gp.Pnt, gp.Pnt, gp.Pnt)')
    var res = Geom.Circle.makeCircle(create.gp.Pnt(), create.gp.Pnt(), create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('makeCircle(gp.Pnt, gp.Dir, gp.double)', function(){
    console.log('makeCircle(gp.Pnt, gp.Dir, gp.double)')
    var res = Geom.Circle.makeCircle(create.gp.Pnt(), create.gp.Dir(), 26);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('makeCircle(gp.Pnt, gp.Pnt, gp.double)', function(){
    console.log('makeCircle(gp.Pnt, gp.Pnt, gp.double)')
    var res = Geom.Circle.makeCircle(create.gp.Pnt(), create.gp.Pnt(), 26.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('makeCircle(gp.Ax1, gp.double)', function(){
    console.log('makeCircle(gp.Ax1, gp.double)')
    var res = Geom.Circle.makeCircle(create.gp.Ax1(), 27);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  // arguments or return type not wrapped
  xit('setCirc(gp_Circ)', function(){
    console.log('setCirc(gp_Circ)')
    var obj = create.Geom.Circle();
    var res = obj.setCirc(create.gp_Circ());
  });


  it('setRadius(gp.double)', function(){
    console.log('setRadius(gp.double)')
    var obj = create.Geom.Circle();
    var res = obj.setRadius(27.5);
  });


  // arguments or return type not wrapped
  xit('circ()', function(){
    console.log('circ()')
    var obj = create.Geom.Circle();
    var res = obj.circ();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('gp_Circ');
  });


  it('radius()', function(){
    console.log('radius()')
    var obj = create.Geom.Circle();
    var res = obj.radius();
    expect(typeof res).toBe('number');
  });


  it('reversedParameter(gp.double)', function(){
    console.log('reversedParameter(gp.double)')
    var obj = create.Geom.Circle();
    var res = obj.reversedParameter(28);
    expect(typeof res).toBe('number');
  });


  it('eccentricity()', function(){
    console.log('eccentricity()')
    var obj = create.Geom.Circle();
    var res = obj.eccentricity();
    expect(typeof res).toBe('number');
  });


  it('firstParameter()', function(){
    console.log('firstParameter()')
    var obj = create.Geom.Circle();
    var res = obj.firstParameter();
    expect(typeof res).toBe('number');
  });


  it('lastParameter()', function(){
    console.log('lastParameter()')
    var obj = create.Geom.Circle();
    var res = obj.lastParameter();
    expect(typeof res).toBe('number');
  });


  it('isClosed()', function(){
    console.log('isClosed()')
    var obj = create.Geom.Circle();
    var res = obj.isClosed();
    expect(typeof res).toBe('boolean');
  });


  it('isPeriodic()', function(){
    console.log('isPeriodic()')
    var obj = create.Geom.Circle();
    var res = obj.isPeriodic();
    expect(typeof res).toBe('boolean');
  });


  it('d0(gp.double, gp.Pnt)', function(){
    console.log('d0(gp.double, gp.Pnt)')
    var obj = create.Geom.Circle();
    var res = obj.d0(28.5, create.gp.Pnt());
  });


  it('d1(gp.double, gp.Pnt, gp.Vec)', function(){
    console.log('d1(gp.double, gp.Pnt, gp.Vec)')
    var obj = create.Geom.Circle();
    var res = obj.d1(29, create.gp.Pnt(), create.gp.Vec());
  });


  it('d2(gp.double, gp.Pnt, gp.Vec, gp.Vec)', function(){
    console.log('d2(gp.double, gp.Pnt, gp.Vec, gp.Vec)')
    var obj = create.Geom.Circle();
    var res = obj.d2(29.5, create.gp.Pnt(), create.gp.Vec(), create.gp.Vec());
  });


  it('d3(gp.double, gp.Pnt, gp.Vec, gp.Vec, gp.Vec)', function(){
    console.log('d3(gp.double, gp.Pnt, gp.Vec, gp.Vec, gp.Vec)')
    var obj = create.Geom.Circle();
    var res = obj.d3(30, create.gp.Pnt(), create.gp.Vec(), create.gp.Vec(), create.gp.Vec());
  });


  it('dn(gp.double, gp.int)', function(){
    console.log('dn(gp.double, gp.int)')
    var obj = create.Geom.Circle();
    var res = obj.dn(30.5, 1);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('transform(gp.Trsf)', function(){
    console.log('transform(gp.Trsf)')
    var obj = create.Geom.Circle();
    var res = obj.transform(create.gp.Trsf());
  });


  it('copy()', function(){
    console.log('copy()')
    var obj = create.Geom.Circle();
    var res = obj.copy();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  // arguments or return type not wrapped
  xit('dynamicType()', function(){
    console.log('dynamicType()')
    var obj = create.Geom.Circle();
    var res = obj.dynamicType();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_Standard_Type');
  });


  it('setAxis(gp.Ax1)', function(){
    console.log('setAxis(gp.Ax1)')
    var obj = create.Geom.Circle();
    var res = obj.setAxis(create.gp.Ax1());
  });


  it('setLocation(gp.Pnt)', function(){
    console.log('setLocation(gp.Pnt)')
    var obj = create.Geom.Circle();
    var res = obj.setLocation(create.gp.Pnt());
  });


  it('setPosition(gp.Ax2)', function(){
    console.log('setPosition(gp.Ax2)')
    var obj = create.Geom.Circle();
    var res = obj.setPosition(create.gp.Ax2());
  });


  it('axis()', function(){
    console.log('axis()')
    var obj = create.Geom.Circle();
    var res = obj.axis();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('location()', function(){
    console.log('location()')
    var obj = create.Geom.Circle();
    var res = obj.location();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('position()', function(){
    console.log('position()')
    var obj = create.Geom.Circle();
    var res = obj.position();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax2');
  });


  it('xaxis()', function(){
    console.log('xaxis()')
    var obj = create.Geom.Circle();
    var res = obj.xaxis();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('yaxis()', function(){
    console.log('yaxis()')
    var obj = create.Geom.Circle();
    var res = obj.yaxis();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('reverse()', function(){
    console.log('reverse()')
    var obj = create.Geom.Circle();
    var res = obj.reverse();
  });


  // arguments or return type not wrapped
  xit('continuity()', function(){
    console.log('continuity()')
    var obj = create.Geom.Circle();
    var res = obj.continuity();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('GeomAbs_Shape');
  });


  it('isCn(gp.int)', function(){
    console.log('isCn(gp.int)')
    var obj = create.Geom.Circle();
    var res = obj.isCn(1);
    expect(typeof res).toBe('boolean');
  });


  it('transformedParameter(gp.double, gp.Trsf)', function(){
    console.log('transformedParameter(gp.double, gp.Trsf)')
    var obj = create.Geom.Circle();
    var res = obj.transformedParameter(31, create.gp.Trsf());
    expect(typeof res).toBe('number');
  });


  it('parametricTransformation(gp.Trsf)', function(){
    console.log('parametricTransformation(gp.Trsf)')
    var obj = create.Geom.Circle();
    var res = obj.parametricTransformation(create.gp.Trsf());
    expect(typeof res).toBe('number');
  });


  it('reversed()', function(){
    console.log('reversed()')
    var obj = create.Geom.Circle();
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('period()', function(){
    console.log('period()')
    var obj = create.Geom.Circle();
    var res = obj.period();
    expect(typeof res).toBe('number');
  });


  it('value(gp.double)', function(){
    console.log('value(gp.double)')
    var obj = create.Geom.Circle();
    var res = obj.value(31.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('mirror(gp.Pnt)', function(){
    console.log('mirror(gp.Pnt)')
    var obj = create.Geom.Circle();
    var res = obj.mirror(create.gp.Pnt());
  });


  it('mirror(gp.Ax1)', function(){
    console.log('mirror(gp.Ax1)')
    var obj = create.Geom.Circle();
    var res = obj.mirror(create.gp.Ax1());
  });


  it('mirror(gp.Ax2)', function(){
    console.log('mirror(gp.Ax2)')
    var obj = create.Geom.Circle();
    var res = obj.mirror(create.gp.Ax2());
  });


  it('rotate(gp.Ax1, gp.double)', function(){
    console.log('rotate(gp.Ax1, gp.double)')
    var obj = create.Geom.Circle();
    var res = obj.rotate(create.gp.Ax1(), 32);
  });


  it('scale(gp.Pnt, gp.double)', function(){
    console.log('scale(gp.Pnt, gp.double)')
    var obj = create.Geom.Circle();
    var res = obj.scale(create.gp.Pnt(), 32.5);
  });


  it('translate(gp.Vec)', function(){
    console.log('translate(gp.Vec)')
    var obj = create.Geom.Circle();
    var res = obj.translate(create.gp.Vec());
  });


  it('translate(gp.Pnt, gp.Pnt)', function(){
    console.log('translate(gp.Pnt, gp.Pnt)')
    var obj = create.Geom.Circle();
    var res = obj.translate(create.gp.Pnt(), create.gp.Pnt());
  });


  it('mirrored(gp.Pnt)', function(){
    console.log('mirrored(gp.Pnt)')
    var obj = create.Geom.Circle();
    var res = obj.mirrored(create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('mirrored(gp.Ax1)', function(){
    console.log('mirrored(gp.Ax1)')
    var obj = create.Geom.Circle();
    var res = obj.mirrored(create.gp.Ax1());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('mirrored(gp.Ax2)', function(){
    console.log('mirrored(gp.Ax2)')
    var obj = create.Geom.Circle();
    var res = obj.mirrored(create.gp.Ax2());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('rotated(gp.Ax1, gp.double)', function(){
    console.log('rotated(gp.Ax1, gp.double)')
    var obj = create.Geom.Circle();
    var res = obj.rotated(create.gp.Ax1(), 33);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('scaled(gp.Pnt, gp.double)', function(){
    console.log('scaled(gp.Pnt, gp.double)')
    var obj = create.Geom.Circle();
    var res = obj.scaled(create.gp.Pnt(), 33.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('transformed(gp.Trsf)', function(){
    console.log('transformed(gp.Trsf)')
    var obj = create.Geom.Circle();
    var res = obj.transformed(create.gp.Trsf());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('translated(gp.Vec)', function(){
    console.log('translated(gp.Vec)')
    var obj = create.Geom.Circle();
    var res = obj.translated(create.gp.Vec());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('translated(gp.Pnt, gp.Pnt)', function(){
    console.log('translated(gp.Pnt, gp.Pnt)')
    var obj = create.Geom.Circle();
    var res = obj.translated(create.gp.Pnt(), create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });

});
