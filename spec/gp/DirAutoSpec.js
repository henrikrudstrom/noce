var gp = require('../../lib/gp.node');
var create = require('../create.js')
describe('gp.Dir', function(){


  it('Dir()', function(){
    // console.log('Dir()')
    var res = new gp.Dir();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('Dir(gp.Vec)', function(){
    // console.log('Dir(gp.Vec)')
    var res = new gp.Dir(create.gp.Vec());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('Dir(gp.double, gp.double, gp.double)', function(){
    // console.log('Dir(gp.double, gp.double, gp.double)')
    var res = new gp.Dir(59, 59.5, 60);
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('setXyz(gp.Vec)', function(){
    // console.log('setXyz(gp.Vec)')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.setXyz(create.gp.Vec());
  });


  it('xyz()', function(){
    // console.log('xyz()')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.xyz();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('isEqual(gp.Dir, gp.double)', function(){
    // console.log('isEqual(gp.Dir, gp.double)')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.isEqual(create.gp.Dir(), 60.5);
    expect(typeof res).toBe('boolean');
  });


  it('isNormal(gp.Dir, gp.double)', function(){
    // console.log('isNormal(gp.Dir, gp.double)')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.isNormal(create.gp.Dir(), 61);
    expect(typeof res).toBe('boolean');
  });


  it('isOpposite(gp.Dir, gp.double)', function(){
    // console.log('isOpposite(gp.Dir, gp.double)')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.isOpposite(create.gp.Dir(), 61.5);
    expect(typeof res).toBe('boolean');
  });


  it('isParallel(gp.Dir, gp.double)', function(){
    // console.log('isParallel(gp.Dir, gp.double)')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.isParallel(create.gp.Dir(), 62);
    expect(typeof res).toBe('boolean');
  });


  it('angle(gp.Dir)', function(){
    // console.log('angle(gp.Dir)')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.angle(create.gp.Dir());
    expect(typeof res).toBe('number');
  });


  it('angleWithRef(gp.Dir, gp.Dir)', function(){
    // console.log('angleWithRef(gp.Dir, gp.Dir)')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.angleWithRef(create.gp.Dir(), create.gp.Dir());
    expect(typeof res).toBe('number');
  });
// cross(gp.Dir) - Redefined.
// crossCross(gp.Dir, gp.Dir) - Redefined.


  it('dot(gp.Dir)', function(){
    // console.log('dot(gp.Dir)')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.dot(create.gp.Dir());
    expect(typeof res).toBe('number');
  });


  it('dotCross(gp.Dir, gp.Dir)', function(){
    // console.log('dotCross(gp.Dir, gp.Dir)')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.dotCross(create.gp.Dir(), create.gp.Dir());
    expect(typeof res).toBe('number');
  });


  it('reverse()', function(){
    // console.log('reverse()')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.reverse();
  });


  it('reversed()', function(){
    // console.log('reversed()')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('mirror(gp.Dir)', function(){
    // console.log('mirror(gp.Dir)')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Dir());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('mirror(gp.Ax1)', function(){
    // console.log('mirror(gp.Ax1)')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Ax1());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('mirror(gp.Ax2)', function(){
    // console.log('mirror(gp.Ax2)')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Ax2());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('rotate(gp.Ax1, gp.double)', function(){
    // console.log('rotate(gp.Ax1, gp.double)')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.rotate(create.gp.Ax1(), 62.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('transform(gp.Trsf)', function(){
    // console.log('transform(gp.Trsf)')
    var obj = create.gp.Dir();
    var obj_h = obj._handle;
    var res = obj.transform(create.gp.Trsf());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('x', function(){
    // console.log('x')
    var obj = create.gp.Dir();
    var val = 63;
    obj.x = val;
    expect(obj.x).toBe(val);
  });


  it('y', function(){
    // console.log('y')
    var obj = create.gp.Dir();
    var val = 63.5;
    obj.y = val;
    expect(obj.y).toBe(val);
  });


  it('z', function(){
    // console.log('z')
    var obj = create.gp.Dir();
    var val = 64;
    obj.z = val;
    expect(obj.z).toBe(val);
  });
});
