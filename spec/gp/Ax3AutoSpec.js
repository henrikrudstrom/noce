var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('gp.Ax3', function(){


  it('Ax3()', function(){
    var res = new gp.Ax3();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax3');
  });



  it('xreverse()', function(){
    var obj = create.gp.Ax3();
    var res = obj.xreverse();
  });


  it('yreverse()', function(){
    var obj = create.gp.Ax3();
    var res = obj.yreverse();
  });


  it('zreverse()', function(){
    var obj = create.gp.Ax3();
    var res = obj.zreverse();
  });


  it('axis()', function(){
    var obj = create.gp.Ax3();
    var res = obj.axis();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('ax2()', function(){
    var obj = create.gp.Ax3();
    var res = obj.ax2();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax2');
  });


  it('direction()', function(){
    var obj = create.gp.Ax3();
    var res = obj.direction();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('location()', function(){
    var obj = create.gp.Ax3();
    var res = obj.location();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('xdirection()', function(){
    var obj = create.gp.Ax3();
    var res = obj.xdirection();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('ydirection()', function(){
    var obj = create.gp.Ax3();
    var res = obj.ydirection();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('direct()', function(){
    var obj = create.gp.Ax3();
    var res = obj.direct();
    expect(typeof res).toBe('boolean');
  });

});
