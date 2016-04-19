var Geom = require('../../lib/Geom.js');
var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('Geom.Axis1Placement', function(){


  it('Axis1Placement(gp.Ax1)', function(){
    var res = new Geom.Axis1Placement(create.gp.Ax1());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Axis1Placement');
  });



  it('ax1()', function(){
    var obj = create.Geom.Axis1Placement();
    var res = obj.ax1();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('reverse()', function(){
    var obj = create.Geom.Axis1Placement();
    var res = obj.reverse();
  });


  it('reversed()', function(){
    var obj = create.Geom.Axis1Placement();
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Axis1Placement');
  });


  it('copy()', function(){
    var obj = create.Geom.Axis1Placement();
    var res = obj.copy();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Axis1Placement');
  });


    // arguments or return type not wrapped
  xit('dynamicType()', function(){
    var obj = create.Geom.Axis1Placement();
    var res = obj.dynamicType();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_Standard_Type');
  });


  it('axis()', function(){
    var obj = create.Geom.Axis1Placement();
    var res = obj.axis();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('direction()', function(){
    var obj = create.Geom.Axis1Placement();
    var res = obj.direction();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('location()', function(){
    var obj = create.Geom.Axis1Placement();
    var res = obj.location();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });

});
