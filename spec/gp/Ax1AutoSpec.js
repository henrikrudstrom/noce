var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('gp.Ax1', function(){


  it('Ax1()', function(){
    var res = new gp.Ax1();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });



  it('direction()', function(){
    var obj = create.gp.Ax1();
    var res = obj.direction();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('location()', function(){
    var obj = create.gp.Ax1();
    var res = obj.location();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('reverse()', function(){
    var obj = create.gp.Ax1();
    var res = obj.reverse();
  });


  it('reversed()', function(){
    var obj = create.gp.Ax1();
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });

});
