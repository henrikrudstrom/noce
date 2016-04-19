var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('gp.Dir', function(){


  it('Dir()', function(){
    var res = new gp.Dir();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });



  it('xyz()', function(){
    var obj = create.gp.Dir();
    var res = obj.xyz();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('reverse()', function(){
    var obj = create.gp.Dir();
    var res = obj.reverse();
  });


  it('reversed()', function(){
    var obj = create.gp.Dir();
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Dir');
  });


  it('x', function(){
    var obj = create.gp.Dir();
    var val = 17;
    obj.x = val;
    expect(obj.x).toBe(val);
  });


  it('y', function(){
    var obj = create.gp.Dir();
    var val = 17.5;
    obj.y = val;
    expect(obj.y).toBe(val);
  });


  it('z', function(){
    var obj = create.gp.Dir();
    var val = 18;
    obj.z = val;
    expect(obj.z).toBe(val);
  });
});
