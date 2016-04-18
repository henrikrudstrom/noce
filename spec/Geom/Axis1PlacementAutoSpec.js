var Geom = require('../../lib/Geom.node');
var gp = require('../../lib/gp.node');
var create = require('../create.js')
describe('Geom.Axis1Placement', function(){


  it('Axis1Placement(gp.Ax1)', function(){
    console.log('Axis1Placement(gp.Ax1)')
    var res = new Geom.Axis1Placement(create.gp.Ax1());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Axis1Placement');
  });


  it('Axis1Placement(gp.Pnt, gp.Dir)', function(){
    console.log('Axis1Placement(gp.Pnt, gp.Dir)')
    var res = new Geom.Axis1Placement(create.gp.Pnt(), create.gp.Dir());
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


  it('setDirection(gp.Dir)', function(){
    console.log('setDirection(gp.Dir)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.setDirection(create.gp.Dir());
  });


  it('transform(gp.Trsf)', function(){
    console.log('transform(gp.Trsf)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.transform(create.gp.Trsf());
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


  it('setAxis(gp.Ax1)', function(){
    console.log('setAxis(gp.Ax1)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.setAxis(create.gp.Ax1());
  });


  it('setLocation(gp.Pnt)', function(){
    console.log('setLocation(gp.Pnt)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.setLocation(create.gp.Pnt());
  });


  it('angle(Geom.AxisPlacement)', function(){
    console.log('angle(Geom.AxisPlacement)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.angle(create.Geom.AxisPlacement());
    expect(typeof res).toBe('number');
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


  it('mirror(gp.Pnt)', function(){
    console.log('mirror(gp.Pnt)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.mirror(create.gp.Pnt());
  });


  it('mirror(gp.Ax1)', function(){
    console.log('mirror(gp.Ax1)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.mirror(create.gp.Ax1());
  });


  it('mirror(gp.Ax2)', function(){
    console.log('mirror(gp.Ax2)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.mirror(create.gp.Ax2());
  });


  it('rotate(gp.Ax1, gp.double)', function(){
    console.log('rotate(gp.Ax1, gp.double)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.rotate(create.gp.Ax1(), 22.5);
  });


  it('scale(gp.Pnt, gp.double)', function(){
    console.log('scale(gp.Pnt, gp.double)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.scale(create.gp.Pnt(), 23);
  });


  it('translate(gp.Vec)', function(){
    console.log('translate(gp.Vec)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.translate(create.gp.Vec());
  });


  it('translate(gp.Pnt, gp.Pnt)', function(){
    console.log('translate(gp.Pnt, gp.Pnt)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.translate(create.gp.Pnt(), create.gp.Pnt());
  });


  it('mirrored(gp.Pnt)', function(){
    console.log('mirrored(gp.Pnt)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.mirrored(create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Axis1Placement');
  });


  it('mirrored(gp.Ax1)', function(){
    console.log('mirrored(gp.Ax1)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.mirrored(create.gp.Ax1());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Axis1Placement');
  });


  it('mirrored(gp.Ax2)', function(){
    console.log('mirrored(gp.Ax2)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.mirrored(create.gp.Ax2());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Axis1Placement');
  });


  it('rotated(gp.Ax1, gp.double)', function(){
    console.log('rotated(gp.Ax1, gp.double)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.rotated(create.gp.Ax1(), 23.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Axis1Placement');
  });


  it('scaled(gp.Pnt, gp.double)', function(){
    console.log('scaled(gp.Pnt, gp.double)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.scaled(create.gp.Pnt(), 24);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Axis1Placement');
  });


  it('transformed(gp.Trsf)', function(){
    console.log('transformed(gp.Trsf)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.transformed(create.gp.Trsf());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Axis1Placement');
  });


  it('translated(gp.Vec)', function(){
    console.log('translated(gp.Vec)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.translated(create.gp.Vec());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Axis1Placement');
  });


  it('translated(gp.Pnt, gp.Pnt)', function(){
    console.log('translated(gp.Pnt, gp.Pnt)')
    var obj = create.Geom.Axis1Placement();
    var res = obj.translated(create.gp.Pnt(), create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Axis1Placement');
  });

});
