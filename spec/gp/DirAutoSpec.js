var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('gp.Dir', function(){


  it('Dir()', function(){
    console.log('Dir()')
    var res = new gp.Dir();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });



  it('xyz()', function(){
    console.log('xyz()')
    var obj = create.gp.Dir();
    var res = obj.xyz();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('reverse()', function(){
    console.log('reverse()')
    var obj = create.gp.Dir();
    var res = obj.reverse();
  });


  it('reversed()', function(){
    console.log('reversed()')
    var obj = create.gp.Dir();
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('x', function(){
    console.log('x')
    var obj = create.gp.Dir();
    var val = 17;
    obj.x = val;
    expect(obj.x).toBe(val);
  });


  it('y', function(){
    console.log('y')
    var obj = create.gp.Dir();
    var val = 17.5;
    obj.y = val;
    expect(obj.y).toBe(val);
  });


  it('z', function(){
    console.log('z')
    var obj = create.gp.Dir();
    var val = 18;
    obj.z = val;
    expect(obj.z).toBe(val);
  });
});
