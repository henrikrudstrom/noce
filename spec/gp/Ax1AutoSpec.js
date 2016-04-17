var gp = require('../../lib/gp.node');
var create = require('../create.js')
describe('gp.Ax1', function(){


  it('Ax1()', function(){
    // console.log('Ax1()')
    var res = new gp.Ax1();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('Ax1(gp.Pnt, gp.Dir)', function(){
    // console.log('Ax1(gp.Pnt, gp.Dir)')
    var res = new gp.Ax1(create.gp.Pnt(), create.gp.Dir());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('setDirection(gp.Dir)', function(){
    // console.log('setDirection(gp.Dir)')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.setDirection(create.gp.Dir());
  });


  it('setLocation(gp.Pnt)', function(){
    // console.log('setLocation(gp.Pnt)')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.setLocation(create.gp.Pnt());
  });


  it('direction()', function(){
    // console.log('direction()')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.direction();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('location()', function(){
    // console.log('location()')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.location();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('isCoaxial(gp.Ax1, gp.double, gp.double)', function(){
    // console.log('isCoaxial(gp.Ax1, gp.double, gp.double)')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.isCoaxial(create.gp.Ax1(), 64.5, 65);
    expect(typeof res).toBe('boolean');
  });


  it('isNormal(gp.Ax1, gp.double)', function(){
    // console.log('isNormal(gp.Ax1, gp.double)')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.isNormal(create.gp.Ax1(), 65.5);
    expect(typeof res).toBe('boolean');
  });


  it('isOpposite(gp.Ax1, gp.double)', function(){
    // console.log('isOpposite(gp.Ax1, gp.double)')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.isOpposite(create.gp.Ax1(), 66);
    expect(typeof res).toBe('boolean');
  });


  it('isParallel(gp.Ax1, gp.double)', function(){
    // console.log('isParallel(gp.Ax1, gp.double)')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.isParallel(create.gp.Ax1(), 66.5);
    expect(typeof res).toBe('boolean');
  });


  it('angle(gp.Ax1)', function(){
    // console.log('angle(gp.Ax1)')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.angle(create.gp.Ax1());
    expect(typeof res).toBe('number');
  });


  it('reverse()', function(){
    // console.log('reverse()')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.reverse();
  });


  it('reversed()', function(){
    // console.log('reversed()')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('mirror(gp.Pnt)', function(){
    // console.log('mirror(gp.Pnt)')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('mirror(gp.Ax1)', function(){
    // console.log('mirror(gp.Ax1)')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Ax1());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('mirror(gp.Ax2)', function(){
    // console.log('mirror(gp.Ax2)')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Ax2());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('rotate(gp.Ax1, gp.double)', function(){
    // console.log('rotate(gp.Ax1, gp.double)')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.rotate(create.gp.Ax1(), 67);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('scale(gp.Pnt, gp.double)', function(){
    // console.log('scale(gp.Pnt, gp.double)')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.scale(create.gp.Pnt(), 67.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('transform(gp.Trsf)', function(){
    // console.log('transform(gp.Trsf)')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.transform(create.gp.Trsf());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('translate(gp.Vec)', function(){
    // console.log('translate(gp.Vec)')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.translate(create.gp.Vec());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('translate(gp.Pnt, gp.Pnt)', function(){
    // console.log('translate(gp.Pnt, gp.Pnt)')
    var obj = create.gp.Ax1();
    var obj_h = obj._handle;
    var res = obj.translate(create.gp.Pnt(), create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });

});
