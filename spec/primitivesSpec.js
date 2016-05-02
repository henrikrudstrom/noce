const expect = require('chai').expect;
const helpers = require('./testHelpers.js');
const create = require('./create.js');
const gp = require('../lib/gp.node');
const geom = require('../lib/geom.node');
const topo = require('../lib/topo.node');
const primitives = require('../lib/primitives.node');

describe('primitives', function() {
  it('makePrism(topo.Shape, gp.Vec, Boolean, Boolean)', function() {
    var plane = new geom.Plane(new gp.Ax3(
      new gp.Pnt(0, 0, 0), new gp.Dir(1, 0, 0), new gp.Dir(0, -1, 0)
    ));
    var face = topo.makeFace(plane, 0, 2, 0, 2, 0.01);
    var res = primitives.makePrism(face, new gp.Vec(1, 0, 0), false, true);
    helpers.expectType(res, 'Shape');
  });


  it('makePrism(topo.Shape, gp.Dir, Boolean, Boolean, Boolean)', function() {
    var plane = new geom.Plane(new gp.Ax3(
      new gp.Pnt(0, 0, 0), new gp.Dir(1, 0, 0), new gp.Dir(0, -1, 0)
    ));
    var face = topo.makeFace(plane, 0, 2, 0, 2, 0.01);
    var res = primitives.makePrism(face, create.gp.Dir(), false, false, false);

    helpers.expectType(res, 'Shape');
  });


  it('makeRevol(topo.Shape, gp.Ax1, Double, Boolean)', function() {
    var plane = new geom.Plane(new gp.Ax3(
      new gp.Pnt(0, 0, 0), new gp.Dir(1, 0, 0), new gp.Dir(0, -1, 0)
    ));
    var face = topo.makeFace(plane, 0, 2, 0, 2, 0.01);
    var res = primitives.makeRevol(face, create.gp.Ax1(), 0.5, false);
    helpers.expectType(res, 'Shape');
  });


  it('makeRevol(topo.Shape, gp.Ax1, Boolean)', function() {
    var plane = new geom.Plane(new gp.Ax3(
      new gp.Pnt(0, 0, 0), new gp.Dir(1, 0, 0), new gp.Dir(0, -1, 0)
    ));
    var face = topo.makeFace(plane, 0, 2, 0, 2, 0.01);
    var res = primitives.makeRevol(face, create.gp.Ax1(), false);
    helpers.expectType(res, 'Shape');
  });
});
