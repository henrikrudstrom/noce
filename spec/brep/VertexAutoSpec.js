var brep = require('../../lib/brep.js');
var Geom = require('../../lib/Geom.js');
var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('brep.Vertex', function(){




  it('isNull()', function(){
    console.log('isNull()')
    var obj = create.brep.Vertex();
    var res = obj.isNull();
    expect(typeof res).toBe('boolean');
  });


  it('nullify()', function(){
    console.log('nullify()')
    var obj = create.brep.Vertex();
    var res = obj.nullify();
  });


    // arguments or return type not wrapped
  xit('tshape()', function(){
    console.log('tshape()')
    var obj = create.brep.Vertex();
    var res = obj.tshape();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_TopoDS_TShape');
  });


    // arguments or return type not wrapped
  xit('shapeType()', function(){
    console.log('shapeType()')
    var obj = create.brep.Vertex();
    var res = obj.shapeType();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TopAbs_ShapeEnum');
  });


  it('reverse()', function(){
    console.log('reverse()')
    var obj = create.brep.Vertex();
    var res = obj.reverse();
  });


  it('reversed()', function(){
    console.log('reversed()')
    var obj = create.brep.Vertex();
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Shape');
  });


  it('complement()', function(){
    console.log('complement()')
    var obj = create.brep.Vertex();
    var res = obj.complement();
  });


  it('complemented()', function(){
    console.log('complemented()')
    var obj = create.brep.Vertex();
    var res = obj.complemented();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Shape');
  });


  it('emptyCopy()', function(){
    console.log('emptyCopy()')
    var obj = create.brep.Vertex();
    var res = obj.emptyCopy();
  });


  it('emptyCopied()', function(){
    console.log('emptyCopied()')
    var obj = create.brep.Vertex();
    var res = obj.emptyCopied();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Shape');
  });


  it('free', function(){
    console.log('free')
    var obj = create.brep.Vertex();
    var val = false;
    obj.free = val;
    expect(obj.free).toBe(val);
  });


  it('modified', function(){
    console.log('modified')
    var obj = create.brep.Vertex();
    var val = true;
    obj.modified = val;
    expect(obj.modified).toBe(val);
  });


  it('checked', function(){
    console.log('checked')
    var obj = create.brep.Vertex();
    var val = false;
    obj.checked = val;
    expect(obj.checked).toBe(val);
  });


  it('orientable', function(){
    console.log('orientable')
    var obj = create.brep.Vertex();
    var val = true;
    obj.orientable = val;
    expect(obj.orientable).toBe(val);
  });


  it('closed', function(){
    console.log('closed')
    var obj = create.brep.Vertex();
    var val = false;
    obj.closed = val;
    expect(obj.closed).toBe(val);
  });


  it('infinite', function(){
    console.log('infinite')
    var obj = create.brep.Vertex();
    var val = true;
    obj.infinite = val;
    expect(obj.infinite).toBe(val);
  });


  it('convex', function(){
    console.log('convex')
    var obj = create.brep.Vertex();
    var val = false;
    obj.convex = val;
    expect(obj.convex).toBe(val);
  });


  it('orientation', function(){
    console.log('orientation')
    var obj = create.brep.Vertex();
    var val = create.brep.Orientation();
    obj.orientation = val;
    expect(obj.orientation).toBe(val);
  });


  it('location', function(){
    console.log('location')
    var obj = create.brep.Vertex();
    var val = create.brep.Location();
    obj.location = val;
    expect(obj.location).toBe(val);
  });
});
