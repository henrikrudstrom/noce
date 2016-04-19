var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('gp.Ax1', function(){


  it('Ax1()', function(){
    console.log('Ax1()')
    var res = new gp.Ax1();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });



  it('direction()', function(){
    console.log('direction()')
    var obj = create.gp.Ax1();
    var res = obj.direction();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('location()', function(){
    console.log('location()')
    var obj = create.gp.Ax1();
    var res = obj.location();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('reverse()', function(){
    console.log('reverse()')
    var obj = create.gp.Ax1();
    var res = obj.reverse();
  });


  it('reversed()', function(){
    console.log('reversed()')
    var obj = create.gp.Ax1();
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });

});
