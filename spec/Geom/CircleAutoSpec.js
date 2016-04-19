var Geom = require('../../lib/Geom.js');
var gp = require('../../lib/gp.js');
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


    // arguments or return type not wrapped
  xit('makeCircle(gp_Circ)', function(){
    console.log('makeCircle(gp_Circ)')
    var res = Geom.Circle.makeCircle(create.gp_Circ());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('makeCircle(gp.Ax2, Double)', function(){
    console.log('makeCircle(gp.Ax2, Double)')
    var res = Geom.Circle.makeCircle(create.gp.Ax2(), 7.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


    // arguments or return type not wrapped
  xit('makeCircle(gp_Circ, Double)', function(){
    console.log('makeCircle(gp_Circ, Double)')
    var res = Geom.Circle.makeCircle(create.gp_Circ(), 8);
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


  it('makeCircle(gp.Pnt, gp.Dir, Double)', function(){
    console.log('makeCircle(gp.Pnt, gp.Dir, Double)')
    var res = Geom.Circle.makeCircle(create.gp.Pnt(), create.gp.Dir(), 8.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('makeCircle(gp.Pnt, gp.Pnt, Double)', function(){
    console.log('makeCircle(gp.Pnt, gp.Pnt, Double)')
    var res = Geom.Circle.makeCircle(create.gp.Pnt(), create.gp.Pnt(), 9);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('makeCircle(gp.Ax1, Double)', function(){
    console.log('makeCircle(gp.Ax1, Double)')
    var res = Geom.Circle.makeCircle(create.gp.Ax1(), 9.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
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

});
