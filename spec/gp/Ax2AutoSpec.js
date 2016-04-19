var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('gp.Ax2', function(){


  it('Ax2()', function(){
    console.log('Ax2()')
    var res = new gp.Ax2();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax2');
  });



  it('axis()', function(){
    console.log('axis()')
    var obj = create.gp.Ax2();
    var res = obj.axis();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('direction()', function(){
    console.log('direction()')
    var obj = create.gp.Ax2();
    var res = obj.direction();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('location()', function(){
    console.log('location()')
    var obj = create.gp.Ax2();
    var res = obj.location();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('xdirection()', function(){
    console.log('xdirection()')
    var obj = create.gp.Ax2();
    var res = obj.xdirection();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('ydirection()', function(){
    console.log('ydirection()')
    var obj = create.gp.Ax2();
    var res = obj.ydirection();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });

});
