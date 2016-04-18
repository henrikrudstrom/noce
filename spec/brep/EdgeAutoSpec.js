var brep = require('../../lib/brep.node');
var Geom = require('../../lib/Geom.node');
var gp = require('../../lib/gp.node');
var create = require('../create.js')
describe('brep.Edge', function(){


  it('Edge()', function(){
    console.log('Edge()')
    var res = new brep.Edge();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Edge');
  });


  it('Shape()', function(){
    console.log('Shape()')
    var res = new brep.Shape();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Edge');
  });



  it('isNull()', function(){
    console.log('isNull()')
    var obj = create.brep.Edge();
    var res = obj.isNull();
    expect(typeof res).toBe('boolean');
  });


  it('nullify()', function(){
    console.log('nullify()')
    var obj = create.brep.Edge();
    var res = obj.nullify();
  });


  it('location()', function(){
    console.log('location()')
    var obj = create.brep.Edge();
    var res = obj.location();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TopLoc_Location');
  });


  it('location(brep.TopLoc_Location)', function(){
    console.log('location(brep.TopLoc_Location)')
    var obj = create.brep.Edge();
    var res = obj.location(create.brep.TopLoc_Location());
  });


  it('located(brep.TopLoc_Location)', function(){
    console.log('located(brep.TopLoc_Location)')
    var obj = create.brep.Edge();
    var res = obj.located(create.brep.TopLoc_Location());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Shape');
  });


  it('orientation()', function(){
    console.log('orientation()')
    var obj = create.brep.Edge();
    var res = obj.orientation();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TopAbs_Orientation');
  });


  it('orientation(brep.TopAbs_Orientation)', function(){
    console.log('orientation(brep.TopAbs_Orientation)')
    var obj = create.brep.Edge();
    var res = obj.orientation(create.brep.TopAbs_Orientation());
  });


  it('oriented(brep.TopAbs_Orientation)', function(){
    console.log('oriented(brep.TopAbs_Orientation)')
    var obj = create.brep.Edge();
    var res = obj.oriented(create.brep.TopAbs_Orientation());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Shape');
  });


  // arguments or return type not wrapped
  xit('tshape()', function(){
    console.log('tshape()')
    var obj = create.brep.Edge();
    var res = obj.tshape();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_TopoDS_TShape');
  });


  // arguments or return type not wrapped
  xit('shapeType()', function(){
    console.log('shapeType()')
    var obj = create.brep.Edge();
    var res = obj.shapeType();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TopAbs_ShapeEnum');
  });


  it('free()', function(){
    console.log('free()')
    var obj = create.brep.Edge();
    var res = obj.free();
    expect(typeof res).toBe('boolean');
  });


  it('free(gp.bool)', function(){
    console.log('free(gp.bool)')
    var obj = create.brep.Edge();
    var res = obj.free(false);
  });


  it('modified()', function(){
    console.log('modified()')
    var obj = create.brep.Edge();
    var res = obj.modified();
    expect(typeof res).toBe('boolean');
  });


  it('modified(gp.bool)', function(){
    console.log('modified(gp.bool)')
    var obj = create.brep.Edge();
    var res = obj.modified(true);
  });


  it('checked()', function(){
    console.log('checked()')
    var obj = create.brep.Edge();
    var res = obj.checked();
    expect(typeof res).toBe('boolean');
  });


  it('checked(gp.bool)', function(){
    console.log('checked(gp.bool)')
    var obj = create.brep.Edge();
    var res = obj.checked(false);
  });


  it('orientable()', function(){
    console.log('orientable()')
    var obj = create.brep.Edge();
    var res = obj.orientable();
    expect(typeof res).toBe('boolean');
  });


  it('orientable(gp.bool)', function(){
    console.log('orientable(gp.bool)')
    var obj = create.brep.Edge();
    var res = obj.orientable(true);
  });


  it('closed()', function(){
    console.log('closed()')
    var obj = create.brep.Edge();
    var res = obj.closed();
    expect(typeof res).toBe('boolean');
  });


  it('closed(gp.bool)', function(){
    console.log('closed(gp.bool)')
    var obj = create.brep.Edge();
    var res = obj.closed(false);
  });


  it('infinite()', function(){
    console.log('infinite()')
    var obj = create.brep.Edge();
    var res = obj.infinite();
    expect(typeof res).toBe('boolean');
  });


  it('infinite(gp.bool)', function(){
    console.log('infinite(gp.bool)')
    var obj = create.brep.Edge();
    var res = obj.infinite(true);
  });


  it('convex()', function(){
    console.log('convex()')
    var obj = create.brep.Edge();
    var res = obj.convex();
    expect(typeof res).toBe('boolean');
  });


  it('convex(gp.bool)', function(){
    console.log('convex(gp.bool)')
    var obj = create.brep.Edge();
    var res = obj.convex(false);
  });


  it('move(brep.TopLoc_Location)', function(){
    console.log('move(brep.TopLoc_Location)')
    var obj = create.brep.Edge();
    var res = obj.move(create.brep.TopLoc_Location());
  });


  it('moved(brep.TopLoc_Location)', function(){
    console.log('moved(brep.TopLoc_Location)')
    var obj = create.brep.Edge();
    var res = obj.moved(create.brep.TopLoc_Location());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Shape');
  });


  it('reverse()', function(){
    console.log('reverse()')
    var obj = create.brep.Edge();
    var res = obj.reverse();
  });


  it('reversed()', function(){
    console.log('reversed()')
    var obj = create.brep.Edge();
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Shape');
  });


  it('complement()', function(){
    console.log('complement()')
    var obj = create.brep.Edge();
    var res = obj.complement();
  });


  it('complemented()', function(){
    console.log('complemented()')
    var obj = create.brep.Edge();
    var res = obj.complemented();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Shape');
  });


  it('compose(brep.TopAbs_Orientation)', function(){
    console.log('compose(brep.TopAbs_Orientation)')
    var obj = create.brep.Edge();
    var res = obj.compose(create.brep.TopAbs_Orientation());
  });


  it('composed(brep.TopAbs_Orientation)', function(){
    console.log('composed(brep.TopAbs_Orientation)')
    var obj = create.brep.Edge();
    var res = obj.composed(create.brep.TopAbs_Orientation());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Shape');
  });


  it('isPartner(brep.Shape)', function(){
    console.log('isPartner(brep.Shape)')
    var obj = create.brep.Edge();
    var res = obj.isPartner(create.brep.Shape());
    expect(typeof res).toBe('boolean');
  });


  it('isSame(brep.Shape)', function(){
    console.log('isSame(brep.Shape)')
    var obj = create.brep.Edge();
    var res = obj.isSame(create.brep.Shape());
    expect(typeof res).toBe('boolean');
  });


  it('isEqual(brep.Shape)', function(){
    console.log('isEqual(brep.Shape)')
    var obj = create.brep.Edge();
    var res = obj.isEqual(create.brep.Shape());
    expect(typeof res).toBe('boolean');
  });


  it('isNotEqual(brep.Shape)', function(){
    console.log('isNotEqual(brep.Shape)')
    var obj = create.brep.Edge();
    var res = obj.isNotEqual(create.brep.Shape());
    expect(typeof res).toBe('boolean');
  });


  it('hashCode(gp.int)', function(){
    console.log('hashCode(gp.int)')
    var obj = create.brep.Edge();
    var res = obj.hashCode(1);
    expect(typeof res).toBe('number');
  });


  it('emptyCopy()', function(){
    console.log('emptyCopy()')
    var obj = create.brep.Edge();
    var res = obj.emptyCopy();
  });


  it('emptyCopied()', function(){
    console.log('emptyCopied()')
    var obj = create.brep.Edge();
    var res = obj.emptyCopied();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Shape');
  });


  // arguments or return type not wrapped
  xit('tshape(Handle_TopoDS_TShape)', function(){
    console.log('tshape(Handle_TopoDS_TShape)')
    var obj = create.brep.Edge();
    var res = obj.tshape(create.Handle_TopoDS_TShape());
  });

});
