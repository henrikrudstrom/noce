var topo = require('../../lib/topo.js');
var geom = require('../../lib/geom.js');
var geom2d = require('../../lib/geom2d.js');
var gp = require('../../lib/gp.js');
var helpers = require('../testHelpers.js');
var create = require('./create.js');

describe('topo', function(){
// ${excludedReason}
// ${excludedReason}
// ${excludedReason}
// ${excludedReason}
// ${excludedReason}
// ${excludedReason}

  it('makeVertex(gp.Pnt)', function() {
    var res = topo.makeVertex(create.gp.pnt());
    helpers.expectType(res, 'Vertex');
  });
// ${excludedReason}

  // TODO: makeWire(topo.Edge)not working.
  xit('makeWire(topo.Edge)', function() { });
// ${excludedReason}
// ${excludedReason}
// ${excludedReason}

  // TODO: makeWire(topo.Wire)not working.
  xit('makeWire(topo.Wire)', function() { });
// ${excludedReason}

  it('makeFace(geom.Surface, Double)', function() {
    var res = topo.makeFace(create.geom.surface(), 0.5);
    helpers.expectType(res, 'Face');
  });

  it('makeFace(geom.Surface, Double, Double, Double, Double, Double)', function() {
    var res = topo.makeFace(create.geom.surface(), 0.5, 1, 1.5, 2, 2.5);
    helpers.expectType(res, 'Face');
  });

  it('makeFace(geom.Surface, topo.Wire, Boolean)', function() {
    var res = topo.makeFace(create.geom.surface(), create.topo.wire(), false);
    helpers.expectType(res, 'Face');
  });
// ${excludedReason}
// ${excludedReason}

  it('makeFace(topo.Face, topo.Wire)', function() {
    var res = topo.makeFace(create.topo.face(), create.topo.wire());
    helpers.expectType(res, 'Face');
  });
// ${excludedReason}
// ${excludedReason}

  it('makeSolid(topo.CompSolid)', function() {
    var res = topo.makeSolid(create.topo.compSolid());
    helpers.expectType(res, 'Solid');
  });

  it('makeSolid(topo.Shell)', function() {
    var res = topo.makeSolid(create.topo.shell());
    helpers.expectType(res, 'Solid');
  });

  it('makeSolid(topo.Shell, topo.Shell)', function() {
    var res = topo.makeSolid(create.topo.shell(), create.topo.shell());
    helpers.expectType(res, 'Solid');
  });

  it('makeSolid(topo.Shell, topo.Shell, topo.Shell)', function() {
    var res = topo.makeSolid(create.topo.shell(), create.topo.shell(), create.topo.shell());
    helpers.expectType(res, 'Solid');
  });

  it('makeSolid(topo.Solid)', function() {
    var res = topo.makeSolid(create.topo.solid());
    helpers.expectType(res, 'Solid');
  });

  it('makeSolid(topo.Solid, topo.Shell)', function() {
    var res = topo.makeSolid(create.topo.solid(), create.topo.shell());
    helpers.expectType(res, 'Solid');
  });

  it('transform(topo.Shape, gp.Trsf, Boolean)', function() {
    var res = topo.transform(create.topo.shape(), create.gp.trsf(), false);
    helpers.expectType(res, 'Shape');
  });
});
