var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('gp.Vec', function(){


  it('Vec()', function(){
    console.log('Vec()')
    var res = new gp.Vec();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });



  it('xyz()', function(){
    console.log('xyz()')
    var obj = create.gp.Vec();
    var res = obj.xyz();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('magnitude()', function(){
    console.log('magnitude()')
    var obj = create.gp.Vec();
    var res = obj.magnitude();
    expect(typeof res).toBe('number');
  });


  it('squareMagnitude()', function(){
    console.log('squareMagnitude()')
    var obj = create.gp.Vec();
    var res = obj.squareMagnitude();
    expect(typeof res).toBe('number');
  });


  it('normalize()', function(){
    console.log('normalize()')
    var obj = create.gp.Vec();
    var res = obj.normalize();
  });


  it('normalized()', function(){
    console.log('normalized()')
    var obj = create.gp.Vec();
    var res = obj.normalized();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('reverse()', function(){
    console.log('reverse()')
    var obj = create.gp.Vec();
    var res = obj.reverse();
  });


  it('reversed()', function(){
    console.log('reversed()')
    var obj = create.gp.Vec();
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('x', function(){
    console.log('x')
    var obj = create.gp.Vec();
    var val = 15.5;
    obj.x = val;
    expect(obj.x).toBe(val);
  });


  it('y', function(){
    console.log('y')
    var obj = create.gp.Vec();
    var val = 16;
    obj.y = val;
    expect(obj.y).toBe(val);
  });


  it('z', function(){
    console.log('z')
    var obj = create.gp.Vec();
    var val = 16.5;
    obj.z = val;
    expect(obj.z).toBe(val);
  });
});
