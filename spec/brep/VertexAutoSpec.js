var brep = require('../../lib/brep.js');
var Geom = require('../../lib/Geom.js');
var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('brep.Vertex', function(){




  it('isNull()', function(){
    var obj = create.brep.Vertex();
    var res = obj.isNull();
    expect(typeof res).toBe('boolean');
  });


  it('nullify()', function(){
    var obj = create.brep.Vertex();
    var res = obj.nullify();
  });


    // arguments or return type not wrapped
  xit('tshape()', function(){
    var obj = create.brep.Vertex();
    var res = obj.tshape();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_TopoDS_TShape');
  });


    // arguments or return type not wrapped
  xit('shapeType()', function(){
    var obj = create.brep.Vertex();
    var res = obj.shapeType();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TopAbs_ShapeEnum');
  });


  it('reverse()', function(){
    var obj = create.brep.Vertex();
    var res = obj.reverse();
  });


  it('reversed()', function(){
    var obj = create.brep.Vertex();
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Shape');
  });


  it('complement()', function(){
    var obj = create.brep.Vertex();
    var res = obj.complement();
  });


  it('complemented()', function(){
    var obj = create.brep.Vertex();
    var res = obj.complemented();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Shape');
  });


  it('emptyCopy()', function(){
    var obj = create.brep.Vertex();
    var res = obj.emptyCopy();
  });


  it('emptyCopied()', function(){
    var obj = create.brep.Vertex();
    var res = obj.emptyCopied();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Shape');
  });


  it('free', function(){
    var obj = create.brep.Vertex();
    var val = false;
    obj.free = val;
    expect(obj.free).toBe(val);
  });


  it('modified', function(){
    var obj = create.brep.Vertex();
    var val = true;
    obj.modified = val;
    expect(obj.modified).toBe(val);
  });


  it('checked', function(){
    var obj = create.brep.Vertex();
    var val = false;
    obj.checked = val;
    expect(obj.checked).toBe(val);
  });


  it('orientable', function(){
    var obj = create.brep.Vertex();
    var val = true;
    obj.orientable = val;
    expect(obj.orientable).toBe(val);
  });


  it('closed', function(){
    var obj = create.brep.Vertex();
    var val = false;
    obj.closed = val;
    expect(obj.closed).toBe(val);
  });


  it('infinite', function(){
    var obj = create.brep.Vertex();
    var val = true;
    obj.infinite = val;
    expect(obj.infinite).toBe(val);
  });


  it('convex', function(){
    var obj = create.brep.Vertex();
    var val = false;
    obj.convex = val;
    expect(obj.convex).toBe(val);
  });


  it('orientation', function(){
    var obj = create.brep.Vertex();
    var val = create.brep.Orientation();
    obj.orientation = val;
    expect(obj.orientation).toBe(val);
  });


  it('location', function(){
    var obj = create.brep.Vertex();
    var val = create.brep.Location();
    obj.location = val;
    expect(obj.location).toBe(val);
  });
});
