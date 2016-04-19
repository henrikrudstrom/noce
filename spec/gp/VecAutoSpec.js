var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('gp.Vec', function(){


  it('Vec()', function(){
    var res = new gp.Vec();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });



  it('xyz()', function(){
    var obj = create.gp.Vec();
    var res = obj.xyz();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('magnitude()', function(){
    var obj = create.gp.Vec();
    var res = obj.magnitude();
    expect(typeof res).toBe('number');
  });


  it('squareMagnitude()', function(){
    var obj = create.gp.Vec();
    var res = obj.squareMagnitude();
    expect(typeof res).toBe('number');
  });


  it('normalize()', function(){
    var obj = create.gp.Vec();
    var res = obj.normalize();
  });


  it('normalized()', function(){
    var obj = create.gp.Vec();
    var res = obj.normalized();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('reverse()', function(){
    var obj = create.gp.Vec();
    var res = obj.reverse();
  });


  it('reversed()', function(){
    var obj = create.gp.Vec();
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('x', function(){
    var obj = create.gp.Vec();
    var val = 15.5;
    obj.x = val;
    expect(obj.x).toBe(val);
  });


  it('y', function(){
    var obj = create.gp.Vec();
    var val = 16;
    obj.y = val;
    expect(obj.y).toBe(val);
  });


  it('z', function(){
    var obj = create.gp.Vec();
    var val = 16.5;
    obj.z = val;
    expect(obj.z).toBe(val);
  });
});
