var gp = require('../../lib/gp.node');
var create = require('../create.js')
describe('gp.Vec', function(){


  it('Vec()', function(){
    // console.log('Vec()')
    var res = new gp.Vec();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('Vec(gp.Dir)', function(){
    // console.log('Vec(gp.Dir)')
    var res = new gp.Vec(create.gp.Dir());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('Vec(gp.Vec)', function(){
    // console.log('Vec(gp.Vec)')
    var res = new gp.Vec(create.gp.Vec());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('Vec(gp.double, gp.double, gp.double)', function(){
    // console.log('Vec(gp.double, gp.double, gp.double)')
    var res = new gp.Vec(45, 45.5, 46);
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('Vec(gp.Pnt, gp.Pnt)', function(){
    // console.log('Vec(gp.Pnt, gp.Pnt)')
    var res = new gp.Vec(create.gp.Pnt(), create.gp.Pnt());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('setXyz(gp.Vec)', function(){
    // console.log('setXyz(gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.setXyz(create.gp.Vec());
  });


  it('xyz()', function(){
    // console.log('xyz()')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.xyz();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('isEqual(gp.Vec, gp.double, gp.double)', function(){
    // console.log('isEqual(gp.Vec, gp.double, gp.double)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.isEqual(create.gp.Vec(), 46.5, 47);
    expect(typeof res).toBe('boolean');
  });


  it('isNormal(gp.Vec, gp.double)', function(){
    // console.log('isNormal(gp.Vec, gp.double)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.isNormal(create.gp.Vec(), 47.5);
    expect(typeof res).toBe('boolean');
  });


  it('isOpposite(gp.Vec, gp.double)', function(){
    // console.log('isOpposite(gp.Vec, gp.double)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.isOpposite(create.gp.Vec(), 48);
    expect(typeof res).toBe('boolean');
  });


  it('isParallel(gp.Vec, gp.double)', function(){
    // console.log('isParallel(gp.Vec, gp.double)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.isParallel(create.gp.Vec(), 48.5);
    expect(typeof res).toBe('boolean');
  });


  it('angle(gp.Vec)', function(){
    // console.log('angle(gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.angle(create.gp.Vec());
    expect(typeof res).toBe('number');
  });


  it('angleWithRef(gp.Vec, gp.Vec)', function(){
    // console.log('angleWithRef(gp.Vec, gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.angleWithRef(create.gp.Vec(), create.gp.Vec());
    expect(typeof res).toBe('number');
  });


  it('magnitude()', function(){
    // console.log('magnitude()')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.magnitude();
    expect(typeof res).toBe('number');
  });


  it('squareMagnitude()', function(){
    // console.log('squareMagnitude()')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.squareMagnitude();
    expect(typeof res).toBe('number');
  });


  it('add(gp.Vec)', function(){
    // console.log('add(gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.add(create.gp.Vec());
  });


  it('added(gp.Vec)', function(){
    // console.log('added(gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.added(create.gp.Vec());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('subtract(gp.Vec)', function(){
    // console.log('subtract(gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.subtract(create.gp.Vec());
  });


  it('subtracted(gp.Vec)', function(){
    // console.log('subtracted(gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.subtracted(create.gp.Vec());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('multiply(gp.double)', function(){
    // console.log('multiply(gp.double)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.multiply(49);
  });


  it('multiplied(gp.double)', function(){
    // console.log('multiplied(gp.double)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.multiplied(49.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('divide(gp.double)', function(){
    // console.log('divide(gp.double)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.divide(50);
  });


  it('divided(gp.double)', function(){
    // console.log('divided(gp.double)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.divided(50.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('cross(gp.Vec)', function(){
    // console.log('cross(gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.cross(create.gp.Vec());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('crossMagnitude(gp.Vec)', function(){
    // console.log('crossMagnitude(gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.crossMagnitude(create.gp.Vec());
    expect(typeof res).toBe('number');
  });


  it('crossSquareMagnitude(gp.Vec)', function(){
    // console.log('crossSquareMagnitude(gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.crossSquareMagnitude(create.gp.Vec());
    expect(typeof res).toBe('number');
  });


  it('crossCross(gp.Vec, gp.Vec)', function(){
    // console.log('crossCross(gp.Vec, gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.crossCross(create.gp.Vec(), create.gp.Vec());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('dot(gp.Vec)', function(){
    // console.log('dot(gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.dot(create.gp.Vec());
    expect(typeof res).toBe('number');
  });


  it('dotCross(gp.Vec, gp.Vec)', function(){
    // console.log('dotCross(gp.Vec, gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.dotCross(create.gp.Vec(), create.gp.Vec());
    expect(typeof res).toBe('number');
  });


  it('normalize()', function(){
    // console.log('normalize()')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.normalize();
  });


  it('normalized()', function(){
    // console.log('normalized()')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.normalized();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('reverse()', function(){
    // console.log('reverse()')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.reverse();
  });


  it('reversed()', function(){
    // console.log('reversed()')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('setLinearForm(gp.double, gp.Vec, gp.double, gp.Vec, gp.double, gp.Vec, gp.Vec)', function(){
    // console.log('setLinearForm(gp.double, gp.Vec, gp.double, gp.Vec, gp.double, gp.Vec, gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.setLinearForm(51, create.gp.Vec(), 51.5, create.gp.Vec(), 52, create.gp.Vec(), create.gp.Vec());
  });


  it('setLinearForm(gp.double, gp.Vec, gp.double, gp.Vec, gp.double, gp.Vec)', function(){
    // console.log('setLinearForm(gp.double, gp.Vec, gp.double, gp.Vec, gp.double, gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.setLinearForm(52.5, create.gp.Vec(), 53, create.gp.Vec(), 53.5, create.gp.Vec());
  });


  it('setLinearForm(gp.double, gp.Vec, gp.double, gp.Vec, gp.Vec)', function(){
    // console.log('setLinearForm(gp.double, gp.Vec, gp.double, gp.Vec, gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.setLinearForm(54, create.gp.Vec(), 54.5, create.gp.Vec(), create.gp.Vec());
  });


  it('setLinearForm(gp.double, gp.Vec, gp.double, gp.Vec)', function(){
    // console.log('setLinearForm(gp.double, gp.Vec, gp.double, gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.setLinearForm(55, create.gp.Vec(), 55.5, create.gp.Vec());
  });


  it('setLinearForm(gp.double, gp.Vec, gp.Vec)', function(){
    // console.log('setLinearForm(gp.double, gp.Vec, gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.setLinearForm(56, create.gp.Vec(), create.gp.Vec());
  });


  it('setLinearForm(gp.Vec, gp.Vec)', function(){
    // console.log('setLinearForm(gp.Vec, gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.setLinearForm(create.gp.Vec(), create.gp.Vec());
  });


  it('mirror(gp.Vec)', function(){
    // console.log('mirror(gp.Vec)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Vec());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('mirror(gp.Ax1)', function(){
    // console.log('mirror(gp.Ax1)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Ax1());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('mirror(gp.Ax2)', function(){
    // console.log('mirror(gp.Ax2)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Ax2());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('rotate(gp.Ax1, gp.double)', function(){
    // console.log('rotate(gp.Ax1, gp.double)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.rotate(create.gp.Ax1(), 56.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('scale(gp.double)', function(){
    // console.log('scale(gp.double)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.scale(57);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('transform(gp.Trsf)', function(){
    // console.log('transform(gp.Trsf)')
    var obj = create.gp.Vec();
    var obj_h = obj._handle;
    var res = obj.transform(create.gp.Trsf());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('x', function(){
    // console.log('x')
    var obj = create.gp.Vec();
    var val = 57.5;
    obj.x = val;
    expect(obj.x).toBe(val);
  });


  it('y', function(){
    // console.log('y')
    var obj = create.gp.Vec();
    var val = 58;
    obj.y = val;
    expect(obj.y).toBe(val);
  });


  it('z', function(){
    // console.log('z')
    var obj = create.gp.Vec();
    var val = 58.5;
    obj.z = val;
    expect(obj.z).toBe(val);
  });
});
