const primitives = require('../../lib/primitives.js');
const topo = require('../../lib/topo.js');
const geom = require('../../lib/geom.js');
const gp = require('../../lib/gp.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;


describe('topo.Solid', function() {
  beforeEach(function() {
    this.box = primitives.makeBox(1, 2, 3);
  });

  it('can access vertices', function() {
    var vertices = this.box.vertices();
    expect(vertices.length).to.equal(8);
    helpers.expectType(vertices[0], 'Vertex');
  });

  it('can access edges', function() {
    var edges = this.box.edges();
    expect(edges.length).to.equal(12);
    helpers.expectType(edges[0], 'Edge');

    var vertices = edges[0].vertices();
    expect(vertices.length).to.equal(2);
  });

  it('can access wires', function() {
    var wires = this.box.wires();
    expect(wires.length).to.equal(6);
    helpers.expectType(wires[0], 'Wire');

    var edges = wires[0].edges();
    expect(edges.length).to.equal(4);

    var vertices = edges[0].vertices();
    expect(vertices.length).to.equal(2);
  });

  it('can access faces', function() {
    var faces = this.box.faces();
    expect(faces.length).to.equal(6);
    helpers.expectType(faces[0], 'Face');

    var vertices = faces[0].vertices();
    expect(vertices.length).to.equal(4);
  });

  it('can access shells', function() {
    var shells = this.box.shells();
    expect(shells.length).to.equal(1);
    helpers.expectType(shells[0], 'Shell');

    var vertices = shells[0].vertices();
    expect(vertices.length).to.equal(8);
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
