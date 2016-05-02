const topo = require('../lib/topo.node');
const geom = require('../lib/geom.node');
const gp = require('../lib/gp.node');
const create = require('./create.js')
const helpers = require('./testHelpers.js');

describe('topo', function() {
  it('makeEdge(geom.Curve)', function() {
    var res = topo.makeEdge(create.geom.Curve());
    helpers.expectType(res, 'Edge');
  });

  it('makeEdge(geom.Curve, Double, Double)', function() {
    var res = topo.makeEdge(create.geom.Curve(), 0.5, 1);
    helpers.expectType(res, 'Edge');
  });

  it('makeEdge(geom.Curve, gp.Pnt, gp.Pnt)', function() {
    var p1 = new gp.Pnt(0, 0, 0);
    var p2 = new gp.Pnt(5, 0, 0);
    var line = new geom.Line(p1, new gp.Dir(1, 0, 0));
    var res = topo.makeEdge(line, p1, p2);
    helpers.expectType(res, 'Edge');
  });

  xit('makeEdge(geom.Curve, topo.Vertex, topo.Vertex)', function() {
    var res = topo.makeEdge(create.geom.Curve(), create.topo.Vertex(), create.topo.Vertex());
    helpers.expectType(res, 'Edge');
  });

  xit('makeEdge(geom.Curve, gp.Pnt, gp.Pnt, Double, Double)', function() {
    var p1 = new gp.Pnt(0, 0, 0);
    var p2 = new gp.Pnt(5, 0, 0);
    var line = new geom.Line(p1, new gp.Dir(1, 0, 0));
    var res = topo.makeEdge(line, p1, p2, 0.2, 0.7);
    helpers.expectType(res, 'Edge');
  });

  xit('makeEdge(geom.Curve, topo.Vertex, topo.Vertex, Double, Double)', function() {
    var res = topo.makeEdge(create.geom.Curve(), create.topo.Vertex(), create.topo.Vertex(), 2.5, 3);
    helpers.expectType(res, 'Edge');
  });

  xit('makeWire()', function() {
    var res = topo.makeWire();
    helpers.expectType(res, 'Wire');
  });

  xit('makeWire(topo.Edge, topo.Edge)', function() {
    var res = topo.makeWire(create.topo.Edge(), create.topo.Edge());
    helpers.expectType(res, 'Wire');
  });

  xit('makeWire(topo.Edge, topo.Edge, topo.Edge)', function() {
    var res = topo.makeWire(create.topo.Edge(), create.topo.Edge(), create.topo.Edge());
    helpers.expectType(res, 'Wire');
  });

  xit('makeWire(topo.Edge, topo.Edge, topo.Edge, topo.Edge)', function() {
    var res = topo.makeWire(create.topo.Edge(), create.topo.Edge(), create.topo.Edge(), create.topo.Edge());
    helpers.expectType(res, 'Wire');
  });

  xit('makeWire(topo.Wire, topo.Edge)', function() {
    var res = topo.makeWire(create.topo.Wire(), create.topo.Edge());
    helpers.expectType(res, 'Wire');
  });

  xit('makeFace(topo.Face)', function() {
    var res = topo.makeFace(create.topo.Face());
    helpers.expectType(res, 'Face');
  });

  xit('makeFace(topo.Wire, Boolean)', function() {
    var res = topo.makeFace(create.topo.Wire(), true);
    helpers.expectType(res, 'Face');
  });

  xit('makeShell(geom.Surface, Boolean)', function() {
    var res = topo.makeShell(create.geom.SphericalSurface(), false);
    helpers.expectType(res, 'Shell');
  });

  xit('makeShell(geom.Surface, Double, Double, Double, Double, Boolean)', function() {
    var res = topo.makeShell(create.geom.SphericalSurface(), 0, 1, 0, 1, false);
    helpers.expectType(res, 'Shell');
  });
});


describe('topo.TopExp', function() {
  it('mapShapes(topo.Shape, topo.ShapeEnum, Array)', function() {
    // causes segfault atm
    var line = new geom.Line(new gp.Pnt(0, 0, 0), new gp.Dir(0, 1, 0));
    var edge = topo.makeEdge(line, -1, 1);
    var res = topo.TopExp.mapShapes(edge, 7);
    helpers.expectType(res, 'Array');
  });

  xit('mapShapes(topo.Shape, Array)', function() {
    // causes segfault atm
    var ax2 = new gp.Ax3(new gp.Pnt(0, 0, 0), new gp.Dir(0, 1, 0), new gp.Dir(0, 0, 1));
    var plane = new geom.Plane(ax2);
    var face = topo.makeFace(plane, -1, 1, -1, 1, 0.01);
    var res = topo.TopExp.mapShapes(face, 7);
    helpers.expectType(res, 'Array');
  });
});
