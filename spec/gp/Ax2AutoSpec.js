var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('gp.Ax2', function(){


  it('Ax2()', function(){
    var res = new gp.Ax2();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax2');
  });



  it('axis()', function(){
    var obj = create.gp.Ax2();
    var res = obj.axis();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('direction()', function(){
    var obj = create.gp.Ax2();
    var res = obj.direction();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('location()', function(){
    var obj = create.gp.Ax2();
    var res = obj.location();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('xdirection()', function(){
    var obj = create.gp.Ax2();
    var res = obj.xdirection();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('ydirection()', function(){
    var obj = create.gp.Ax2();
    var res = obj.ydirection();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });

});
