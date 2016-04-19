var brep = require('../../lib/brep.js');
var Geom = require('../../lib/Geom.js');
var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('brep', function(){
  // makeEdge(Geom.Curve) - Redefined.
  // makeEdge(Geom.Curve, Double, Double) - Redefined.
  // makeEdge(Geom.Curve, gp.Pnt, gp.Pnt) - Redefined.
  // makeEdge(Geom.Curve, brep.Vertex, brep.Vertex) - Redefined.
  // makeEdge(Geom.Curve, gp.Pnt, gp.Pnt, Double, Double) - Redefined.
  // makeEdge(Geom.Curve, brep.Vertex, brep.Vertex, Double, Double) - Redefined.


  it('makeVertex(gp.Pnt)', function(){
    console.log('makeVertex(gp.Pnt)')
    var res = brep.makeVertex(create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vertex');
  });
  // makeWire() - Redefined.


  it('makeWire(brep.Edge)', function(){
    console.log('makeWire(brep.Edge)')
    var res = brep.makeWire(create.brep.Edge());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Wire');
  });
  // makeWire(brep.Edge, brep.Edge) - Redefined.
  // makeWire(brep.Edge, brep.Edge, brep.Edge) - Redefined.
  // makeWire(brep.Edge, brep.Edge, brep.Edge, brep.Edge) - Redefined.


  it('makeWire(brep.Wire)', function(){
    console.log('makeWire(brep.Wire)')
    var res = brep.makeWire(create.brep.Wire());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Wire');
  });
  // makeWire(brep.Wire, brep.Edge) - Redefined.


  it('makeFace(Geom.Surface, Double)', function(){
    console.log('makeFace(Geom.Surface, Double)')
    var res = brep.makeFace(create.Geom.Surface(), 3.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Face');
  });


  it('makeFace(Geom.Surface, Double, Double, Double, Double, Double)', function(){
    console.log('makeFace(Geom.Surface, Double, Double, Double, Double, Double)')
    var res = brep.makeFace(create.Geom.Surface(), 4, 4.5, 5, 5.5, 6);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Face');
  });


  it('makeFace(Geom.Surface, brep.Wire, Boolean)', function(){
    console.log('makeFace(Geom.Surface, brep.Wire, Boolean)')
    var res = brep.makeFace(create.Geom.Surface(), create.brep.Wire(), false);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Face');
  });
  // makeFace(brep.Face) - Redefined.
  // makeFace(brep.Wire, Boolean) - Redefined.


  it('makeFace(brep.Face, brep.Wire)', function(){
    console.log('makeFace(brep.Face, brep.Wire)')
    var res = brep.makeFace(create.brep.Face(), create.brep.Wire());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Face');
  });
});
