var topo = require('../../lib/topo.js');
var geom = require('../../lib/geom.js');
var gp = require('../../lib/gp.js');
var helpers = require('../testHelpers.js');
var create = require('../create.js');

describe('topo', function(){
  // makeEdge(geom.Curve) Redefined.
  // makeEdge(geom.Curve, Double, Double) Redefined.
  // makeEdge(geom.Curve, gp.Pnt, gp.Pnt) Redefined.
  // makeEdge(geom.Curve, topo.Vertex, topo.Vertex) Redefined.
  // makeEdge(geom.Curve, gp.Pnt, gp.Pnt, Double, Double) Redefined.
  // makeEdge(geom.Curve, topo.Vertex, topo.Vertex, Double, Double) Redefined.


  it('makeVertex(gp.Pnt)', function(){
    var res = topo.makeVertex(create.gp.Pnt());
    helpers.expectType(res, 'Vertex');
  });
  // makeWire() Redefined.


  it('makeWire(topo.Edge)', function(){
    var res = topo.makeWire(create.topo.Edge());
    helpers.expectType(res, 'Wire');
  });
  // makeWire(topo.Edge, topo.Edge) Redefined.
  // makeWire(topo.Edge, topo.Edge, topo.Edge) Redefined.
  // makeWire(topo.Edge, topo.Edge, topo.Edge, topo.Edge) Redefined.


  it('makeWire(topo.Wire)', function(){
    var res = topo.makeWire(create.topo.Wire());
    helpers.expectType(res, 'Wire');
  });
  // makeWire(topo.Wire, topo.Edge) Redefined.


  it('makeFace(geom.Surface, Double)', function(){
    var res = topo.makeFace(create.geom.Surface(), 0.5);
    helpers.expectType(res, 'Face');
  });


  it('makeFace(geom.Surface, Double, Double, Double, Double, Double)', function(){
    var res = topo.makeFace(create.geom.Surface(), 0.5, 1, 1.5, 2, 2.5);
    helpers.expectType(res, 'Face');
  });


  it('makeFace(geom.Surface, topo.Wire, Boolean)', function(){
    var res = topo.makeFace(create.geom.Surface(), create.topo.Wire(), false);
    helpers.expectType(res, 'Face');
  });
  // makeFace(topo.Face) Redefined.
  // makeFace(topo.Wire, Boolean) Redefined.


  it('makeFace(topo.Face, topo.Wire)', function(){
    var res = topo.makeFace(create.topo.Face(), create.topo.Wire());
    helpers.expectType(res, 'Face');
  });
  // makeShell(geom.Surface, Boolean) Redefined.
  // makeShell(geom.Surface, Double, Double, Double, Double, Boolean) Redefined.
});
