const expect = require('chai').expect;
const helpers = require('../testHelpers.js');
const gpCreate = require('../gp/create.js');
const gp = require('../../lib/gp.js');
const geom = require('../../lib/geom.js');
const topo = require('../../lib/topo.js');
const primitives = require('../../lib/primitives.js');

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
    var res = primitives.makePrism(face, gpCreate.dir(), false, false, false);

    helpers.expectType(res, 'Shape');
  });


  it('makeRevol(topo.Shape, gp.Ax1, Double, Boolean)', function() {
    var plane = new geom.Plane(new gp.Ax3(
      new gp.Pnt(0, 0, 0), new gp.Dir(1, 0, 0), new gp.Dir(0, -1, 0)
    ));
    var face = topo.makeFace(plane, 0, 2, 0, 2, 0.01);
    var res = primitives.makeRevol(face, gpCreate.ax1(), 0.5, false);
    helpers.expectType(res, 'Shape');
  });


  it('makeRevol(topo.Shape, gp.Ax1, Boolean)', function() {
    var plane = new geom.Plane(new gp.Ax3(
      new gp.Pnt(0, 0, 0), new gp.Dir(1, 0, 0), new gp.Dir(0, -1, 0)
    ));
    var face = topo.makeFace(plane, 0, 2, 0, 2, 0.01);
    var res = primitives.makeRevol(face, gpCreate.ax1(), false);
    helpers.expectType(res, 'Shape');
  });
});
