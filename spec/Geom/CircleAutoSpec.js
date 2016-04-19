var Geom = require('../../lib/Geom.js');
var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('Geom.Circle', function(){


    // arguments or return type not wrapped
  xit('Circle(gp_Circ)', function(){
    var res = new Geom.Circle(create.gp_Circ());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


    // arguments or return type not wrapped
  xit('makeCircle(gp_Circ)', function(){
    var res = Geom.Circle.makeCircle(create.gp_Circ());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('makeCircle(gp.Ax2, Double)', function(){
    var res = Geom.Circle.makeCircle(create.gp.Ax2(), 7.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


    // arguments or return type not wrapped
  xit('makeCircle(gp_Circ, Double)', function(){
    var res = Geom.Circle.makeCircle(create.gp_Circ(), 8);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


    // arguments or return type not wrapped
  xit('makeCircle(gp_Circ, gp.Pnt)', function(){
    var res = Geom.Circle.makeCircle(create.gp_Circ(), create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


    // TODO: not working
  xit('makeCircle(gp.Pnt, gp.Pnt, gp.Pnt)', function(){
    var res = Geom.Circle.makeCircle(create.gp.Pnt(), create.gp.Pnt(), create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('makeCircle(gp.Pnt, gp.Dir, Double)', function(){
    var res = Geom.Circle.makeCircle(create.gp.Pnt(), create.gp.Dir(), 8.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('makeCircle(gp.Pnt, gp.Pnt, Double)', function(){
    var res = Geom.Circle.makeCircle(create.gp.Pnt(), create.gp.Pnt(), 9);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('makeCircle(gp.Ax1, Double)', function(){
    var res = Geom.Circle.makeCircle(create.gp.Ax1(), 9.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


    // arguments or return type not wrapped
  xit('circ()', function(){
    var obj = create.Geom.Circle();
    var res = obj.circ();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('gp_Circ');
  });


  it('radius()', function(){
    var obj = create.Geom.Circle();
    var res = obj.radius();
    expect(typeof res).toBe('number');
  });


  it('eccentricity()', function(){
    var obj = create.Geom.Circle();
    var res = obj.eccentricity();
    expect(typeof res).toBe('number');
  });


  it('firstParameter()', function(){
    var obj = create.Geom.Circle();
    var res = obj.firstParameter();
    expect(typeof res).toBe('number');
  });


  it('lastParameter()', function(){
    var obj = create.Geom.Circle();
    var res = obj.lastParameter();
    expect(typeof res).toBe('number');
  });


  it('isClosed()', function(){
    var obj = create.Geom.Circle();
    var res = obj.isClosed();
    expect(typeof res).toBe('boolean');
  });


  it('isPeriodic()', function(){
    var obj = create.Geom.Circle();
    var res = obj.isPeriodic();
    expect(typeof res).toBe('boolean');
  });


  it('copy()', function(){
    var obj = create.Geom.Circle();
    var res = obj.copy();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


    // arguments or return type not wrapped
  xit('dynamicType()', function(){
    var obj = create.Geom.Circle();
    var res = obj.dynamicType();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_Standard_Type');
  });


  it('axis()', function(){
    var obj = create.Geom.Circle();
    var res = obj.axis();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('location()', function(){
    var obj = create.Geom.Circle();
    var res = obj.location();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('position()', function(){
    var obj = create.Geom.Circle();
    var res = obj.position();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax2');
  });


  it('xaxis()', function(){
    var obj = create.Geom.Circle();
    var res = obj.xaxis();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('yaxis()', function(){
    var obj = create.Geom.Circle();
    var res = obj.yaxis();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('reverse()', function(){
    var obj = create.Geom.Circle();
    var res = obj.reverse();
  });


    // arguments or return type not wrapped
  xit('continuity()', function(){
    var obj = create.Geom.Circle();
    var res = obj.continuity();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('GeomAbs_Shape');
  });


  it('reversed()', function(){
    var obj = create.Geom.Circle();
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('period()', function(){
    var obj = create.Geom.Circle();
    var res = obj.period();
    expect(typeof res).toBe('number');
  });

});
