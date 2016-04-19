var Geom = require('../../lib/Geom.js');
var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('Geom.Axis1Placement', function(){


  it('Axis1Placement(gp.Ax1)', function(){
    console.log('Axis1Placement(gp.Ax1)')
    var res = new Geom.Axis1Placement(create.gp.Ax1());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Axis1Placement');
  });



  it('ax1()', function(){
    console.log('ax1()')
    var obj = create.Geom.Axis1Placement();
    var res = obj.ax1();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('reverse()', function(){
    console.log('reverse()')
    var obj = create.Geom.Axis1Placement();
    var res = obj.reverse();
  });


  it('reversed()', function(){
    console.log('reversed()')
    var obj = create.Geom.Axis1Placement();
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Axis1Placement');
  });


  it('copy()', function(){
    console.log('copy()')
    var obj = create.Geom.Axis1Placement();
    var res = obj.copy();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Axis1Placement');
  });


    // arguments or return type not wrapped
  xit('dynamicType()', function(){
    console.log('dynamicType()')
    var obj = create.Geom.Axis1Placement();
    var res = obj.dynamicType();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_Standard_Type');
  });


  it('axis()', function(){
    console.log('axis()')
    var obj = create.Geom.Axis1Placement();
    var res = obj.axis();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('direction()', function(){
    console.log('direction()')
    var obj = create.Geom.Axis1Placement();
    var res = obj.direction();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('location()', function(){
    console.log('location()')
    var obj = create.Geom.Axis1Placement();
    var res = obj.location();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });

});
