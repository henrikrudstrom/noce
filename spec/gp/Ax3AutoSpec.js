var gp = require('../../lib/gp.node');
var create = require('../create.js')
describe('gp.Ax3', function(){


  it('Ax3()', function(){
    // console.log('Ax3()')
    var res = new gp.Ax3();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax3');
  });


  it('Ax3(gp.Ax2)', function(){
    // console.log('Ax3(gp.Ax2)')
    var res = new gp.Ax3(create.gp.Ax2());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax3');
  });
// Ax3(gp.Pnt, gp.Dir, gp.Dir) - Redefined.


  it('Ax3(gp.Pnt, gp.Dir)', function(){
    // console.log('Ax3(gp.Pnt, gp.Dir)')
    var res = new gp.Ax3(create.gp.Pnt(), create.gp.Dir());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax3');
  });


  it('xreverse()', function(){
    // console.log('xreverse()')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.xreverse();
  });


  it('yreverse()', function(){
    // console.log('yreverse()')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.yreverse();
  });


  it('zreverse()', function(){
    // console.log('zreverse()')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.zreverse();
  });


  it('setAxis(gp.Ax1)', function(){
    // console.log('setAxis(gp.Ax1)')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.setAxis(create.gp.Ax1());
  });


  it('setDirection(gp.Dir)', function(){
    // console.log('setDirection(gp.Dir)')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.setDirection(create.gp.Dir());
  });


  it('setLocation(gp.Pnt)', function(){
    // console.log('setLocation(gp.Pnt)')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.setLocation(create.gp.Pnt());
  });


  it('setXdirection(gp.Dir)', function(){
    // console.log('setXdirection(gp.Dir)')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.setXdirection(create.gp.Dir());
  });


  it('setYdirection(gp.Dir)', function(){
    // console.log('setYdirection(gp.Dir)')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.setYdirection(create.gp.Dir());
  });


  it('angle(gp.Ax3)', function(){
    // console.log('angle(gp.Ax3)')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.angle(create.gp.Ax3());
    expect(typeof res).toBe('number');
  });


  it('axis()', function(){
    // console.log('axis()')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.axis();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('ax2()', function(){
    // console.log('ax2()')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.ax2();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax2');
  });


  it('direction()', function(){
    // console.log('direction()')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.direction();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('location()', function(){
    // console.log('location()')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.location();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('xdirection()', function(){
    // console.log('xdirection()')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.xdirection();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('ydirection()', function(){
    // console.log('ydirection()')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.ydirection();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('direct()', function(){
    // console.log('direct()')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.direct();
    expect(typeof res).toBe('boolean');
  });


  it('isCoplanar(gp.Ax3, gp.double, gp.double)', function(){
    // console.log('isCoplanar(gp.Ax3, gp.double, gp.double)')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.isCoplanar(create.gp.Ax3(), 71, 71.5);
    expect(typeof res).toBe('boolean');
  });


  it('isCoplanar(gp.Ax1, gp.double, gp.double)', function(){
    // console.log('isCoplanar(gp.Ax1, gp.double, gp.double)')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.isCoplanar(create.gp.Ax1(), 72, 72.5);
    expect(typeof res).toBe('boolean');
  });


  it('mirror(gp.Pnt)', function(){
    // console.log('mirror(gp.Pnt)')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax3');
  });


  it('mirror(gp.Ax1)', function(){
    // console.log('mirror(gp.Ax1)')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Ax1());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax3');
  });


  it('mirror(gp.Ax2)', function(){
    // console.log('mirror(gp.Ax2)')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.mirror(create.gp.Ax2());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax3');
  });


  it('rotate(gp.Ax1, gp.double)', function(){
    // console.log('rotate(gp.Ax1, gp.double)')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.rotate(create.gp.Ax1(), 73);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax3');
  });


  it('scale(gp.Pnt, gp.double)', function(){
    // console.log('scale(gp.Pnt, gp.double)')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.scale(create.gp.Pnt(), 73.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax3');
  });


  it('transform(gp.Trsf)', function(){
    // console.log('transform(gp.Trsf)')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.transform(create.gp.Trsf());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax3');
  });


  it('translate(gp.Vec)', function(){
    // console.log('translate(gp.Vec)')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.translate(create.gp.Vec());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax3');
  });


  it('translate(gp.Pnt, gp.Pnt)', function(){
    // console.log('translate(gp.Pnt, gp.Pnt)')
    var obj = create.gp.Ax3();
    var obj_h = obj._handle;
    var res = obj.translate(create.gp.Pnt(), create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax3');
  });

});
