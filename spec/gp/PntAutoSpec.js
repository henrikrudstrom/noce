var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('gp.Pnt', function(){


  it('Pnt()', function(){
    console.log('Pnt()')
    var res = new gp.Pnt();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });



  it('xyz()', function(){
    console.log('xyz()')
    var obj = create.gp.Pnt();
    var res = obj.xyz();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('x', function(){
    console.log('x')
    var obj = create.gp.Pnt();
    var val = 14;
    obj.x = val;
    expect(obj.x).toBe(val);
  });


  it('y', function(){
    console.log('y')
    var obj = create.gp.Pnt();
    var val = 14.5;
    obj.y = val;
    expect(obj.y).toBe(val);
  });


  it('z', function(){
    console.log('z')
    var obj = create.gp.Pnt();
    var val = 15;
    obj.z = val;
    expect(obj.z).toBe(val);
  });
});
