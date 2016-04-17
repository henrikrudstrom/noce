var gp = require('../../lib/gp.node');
var create = require('../create.js')
describe('gp.Pnt', function(){


  it('Pnt()', function(){
    // console.log('Pnt()')
    var res = new gp.Pnt();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('Pnt(gp.Vec)', function(){
    // console.log('Pnt(gp.Vec)')
    var res = new gp.Pnt(create.gp.Vec());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('Pnt(gp.double, gp.double, gp.double)', function(){
    // console.log('Pnt(gp.double, gp.double, gp.double)')
    var res = new gp.Pnt(39.5, 40, 40.5);
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('setXyz(gp.Vec)', function(){
    // console.log('setXyz(gp.Vec)')
    var obj = create.gp.Pnt();
    var obj_h = obj._handle;
    var res = obj.setXyz(create.gp.Vec());
  });


  it('xyz()', function(){
    // console.log('xyz()')
    var obj = create.gp.Pnt();
    var obj_h = obj._handle;
    var res = obj.xyz();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('baryCenter(gp.double, gp.Pnt, gp.double)', function(){
    // console.log('baryCenter(gp.double, gp.Pnt, gp.double)')
    var obj = create.gp.Pnt();
    var obj_h = obj._handle;
    var res = obj.baryCenter(41, create.gp.Pnt(), 41.5);
  });


  it('isEqual(gp.Pnt, gp.double)', function(){
    // console.log('isEqual(gp.Pnt, gp.double)')
    var obj = create.gp.Pnt();
    var obj_h = obj._handle;
    var res = obj.isEqual(create.gp.Pnt(), 42);
    expect(typeof res).toBe('boolean');
  });


  it('distance(gp.Pnt)', function(){
    // console.log('distance(gp.Pnt)')
    var obj = create.gp.Pnt();
    var obj_h = obj._handle;
    var res = obj.distance(create.gp.Pnt());
    expect(typeof res).toBe('number');
  });


  it('squareDistance(gp.Pnt)', function(){
    // console.log('squareDistance(gp.Pnt)')
    var obj = create.gp.Pnt();
    var obj_h = obj._handle;
    var res = obj.squareDistance(create.gp.Pnt());
    expect(typeof res).toBe('number');
  });


  it('mirror(gp.Pnt)', function(){
    // console.log('mirror(gp.Pnt)')
    var obj = create.gp.Pnt();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('mirror(gp.Ax1)', function(){
    // console.log('mirror(gp.Ax1)')
    var obj = create.gp.Pnt();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Ax1());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('mirror(gp.Ax2)', function(){
    // console.log('mirror(gp.Ax2)')
    var obj = create.gp.Pnt();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Ax2());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('rotate(gp.Ax1, gp.double)', function(){
    // console.log('rotate(gp.Ax1, gp.double)')
    var obj = create.gp.Pnt();
    var obj_h = obj._handle;
    var res = obj.rotate(create.gp.Ax1(), 42.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('scale(gp.Pnt, gp.double)', function(){
    // console.log('scale(gp.Pnt, gp.double)')
    var obj = create.gp.Pnt();
    var obj_h = obj._handle;
    var res = obj.scale(create.gp.Pnt(), 43);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('transform(gp.Trsf)', function(){
    // console.log('transform(gp.Trsf)')
    var obj = create.gp.Pnt();
    var obj_h = obj._handle;
    var res = obj.transform(create.gp.Trsf());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('translate(gp.Vec)', function(){
    // console.log('translate(gp.Vec)')
    var obj = create.gp.Pnt();
    var obj_h = obj._handle;
    var res = obj.translate(create.gp.Vec());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('translate(gp.Pnt, gp.Pnt)', function(){
    // console.log('translate(gp.Pnt, gp.Pnt)')
    var obj = create.gp.Pnt();
    var obj_h = obj._handle;
    var res = obj.translate(create.gp.Pnt(), create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('x', function(){
    // console.log('x')
    var obj = create.gp.Pnt();
    var val = 43.5;
    obj.x = val;
    expect(obj.x).toBe(val);
  });


  it('y', function(){
    // console.log('y')
    var obj = create.gp.Pnt();
    var val = 44;
    obj.y = val;
    expect(obj.y).toBe(val);
  });


  it('z', function(){
    // console.log('z')
    var obj = create.gp.Pnt();
    var val = 44.5;
    obj.z = val;
    expect(obj.z).toBe(val);
  });
});
