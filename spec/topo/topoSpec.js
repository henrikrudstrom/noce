const topo = require('../../lib/topo.js');
const geom = require('../../lib/geom.js');
const gp = require('../../lib/gp.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;


describe('topo', function() {
  it('makeEdge(geom.Curve)', function() {
    var line = new geom.Line(new gp.Pnt(0, 0, 0), new gp.Dir(1, 0, 0));
    var curve = new geom.TrimmedCurve(line, 0, 1.5, true);
    var res = topo.makeEdge(curve);
    helpers.expectType(res, 'Edge');

  });

  it('makeEdge(geom.Curve)', function() {
    var curve = geom.TrimmedCurve.makeSegment(new gp.Pnt(0, 0, 0), new gp.Pnt(10, 0, 0));
    var res = topo.makeEdge(curve);
    helpers.expectType(res, 'Edge');
  });


  it('makeEdge(geom.Curve, Double, Double)', function() {
    var res = topo.makeEdge(create.geom.curve(), 0.5, 1);
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
    // var res = topo.makeEdge(geomCreate.curve(), topoCreate.vertex(), topoCreate.vertex());
    // helpers.expectType(res, 'Edge');
  });

  xit('makeEdge(geom.Curve, gp.Pnt, gp.Pnt, Double, Double)', function() {
    // var p1 = new gp.Pnt(0, 0, 0);
    // var p2 = new gp.Pnt(5, 0, 0);
    // var line = new geom.Line(p1, new gp.Dir(1, 0, 0));
    // var res = topo.makeEdge(line, p1, p2, 0.2, 0.7);
    // helpers.expectType(res, 'Edge');
  });

  xit('makeEdge(geom.Curve, topo.Vertex, topo.Vertex, Double, Double)', function() {
    // var res = topo.makeEdge(geomCreate.curve(), topoCreate.vertex(), topoCreate.vertex(), 2.5, 3);
    // helpers.expectType(res, 'Edge');
  });

  xit('makeWire()', function() {
    // var res = topo.makeWire();
    // helpers.expectType(res, 'Wire');
  });

  xit('makeWire(topo.Edge, topo.Edge)', function() {
    // var res = topo.makeWire(topoCreate.edge(), topoCreate.edge());
    // helpers.expectType(res, 'Wire');
  });

  xit('makeWire(topo.Edge, topo.Edge, topo.Edge)', function() {
    // var res = topo.makeWire(topoCreate.edge(), topoCreate.edge(), topoCreate.edge());
    // helpers.expectType(res, 'Wire');
  });

  xit('makeWire(topo.Edge, topo.Edge, topo.Edge, topo.Edge)', function() {
    // var res = topo.makeWire(
    //   topoCreate.edge(), topoCreate.edge(),
    //   topoCreate.edge(), topoCreate.edge());
    // helpers.expectType(res, 'Wire');
  });

  xit('makeWire(topo.Wire, topo.Edge)', function() {
    // var res = topo.makeWire(topoCreate.wire(), topoCreate.edge());
    // helpers.expectType(res, 'Wire');
  });

  it('makeWire(Array)', function() {
    var pt1 = new gp.Pnt(0, 0, 0);
    var pt2 = new gp.Pnt(1, 4, 6);
    var pt3 = new gp.Pnt(4, 5, 0);
    var l1 = geom.TrimmedCurve.makeSegment(pt1, pt2);
    var e1 = topo.makeEdge(l1);
    var l2 = geom.TrimmedCurve.makeSegment(pt2, pt3);
    var e2 = topo.makeEdge(l2);

    var wire = topo.makeWire([e1, e2]);
    expect(wire.edges().length).to.equal(2);
    expect(wire.vertices().length).to.equal(3);
  });


  xit('makeFace(topo.Face)', function() {
    var res = topo.makeFace(topoCreate.face());
    helpers.expectType(res, 'Face');
  });

  xit('makeFace(topo.Wire, Boolean)', function() {
    var res = topo.makeFace(topoCreate.wire(), true);
    helpers.expectType(res, 'Face');
  });

  xit('makeShell(geom.Surface, Boolean)', function() {
    var res = topo.makeShell(geomCreate.sphericalSurface(), false);
    helpers.expectType(res, 'Shell');
  });

  xit('makeShell(geom.Surface, Double, Double, Double, Double, Boolean)', function() {
    var res = topo.makeShell(geomCreate.sphericalSurface(), 0, 1, 0, 1, false);
    helpers.expectType(res, 'Shell');
  });
});
