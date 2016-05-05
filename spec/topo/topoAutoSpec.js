var topo = require('../../lib/topo.js');
var topoCreate = require('../topo/create.js');
var geom = require('../../lib/geom.js');
var geomCreate = require('../geom/create.js');
var gp = require('../../lib/gp.js');
var gpCreate = require('../gp/create.js');
var helpers = require('../testHelpers.js');

describe('topo', function(){
// ${excludedReason}
// ${excludedReason}
// ${excludedReason}
// ${excludedReason}
// ${excludedReason}
// ${excludedReason}

  it('makeVertex(gp.Pnt)', function() {
    var res = topo.makeVertex(gpCreate.pnt());
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
    var res = topo.makeFace(geomCreate.surface(), 0.5);
    helpers.expectType(res, 'Face');
  });

  it('makeFace(geom.Surface, Double, Double, Double, Double, Double)', function() {
    var res = topo.makeFace(geomCreate.surface(), 0.5, 1, 1.5, 2, 2.5);
    helpers.expectType(res, 'Face');
  });

  it('makeFace(geom.Surface, topo.Wire, Boolean)', function() {
    var res = topo.makeFace(geomCreate.surface(), topoCreate.wire(), false);
    helpers.expectType(res, 'Face');
  });
// ${excludedReason}
// ${excludedReason}

  it('makeFace(topo.Face, topo.Wire)', function() {
    var res = topo.makeFace(topoCreate.face(), topoCreate.wire());
    helpers.expectType(res, 'Face');
  });
// ${excludedReason}
// ${excludedReason}

  // Arguments or return type not wrapped.
  xit('makeSolid(TopoDS_CompSolid)', function() { });

  it('makeSolid(topo.Shell)', function() {
    var res = topo.makeSolid(topoCreate.shell());
    helpers.expectType(res, 'Solid');
  });

  it('makeSolid(topo.Shell, topo.Shell)', function() {
    var res = topo.makeSolid(topoCreate.shell(), topoCreate.shell());
    helpers.expectType(res, 'Solid');
  });

  it('makeSolid(topo.Shell, topo.Shell, topo.Shell)', function() {
    var res = topo.makeSolid(topoCreate.shell(), topoCreate.shell(), topoCreate.shell());
    helpers.expectType(res, 'Solid');
  });

  it('makeSolid(topo.Solid)', function() {
    var res = topo.makeSolid(topoCreate.solid());
    helpers.expectType(res, 'Solid');
  });

  it('makeSolid(topo.Solid, topo.Shell)', function() {
    var res = topo.makeSolid(topoCreate.solid(), topoCreate.shell());
    helpers.expectType(res, 'Solid');
  });

  it('transform(topo.Shape, gp.Trsf, Boolean)', function() {
    var res = topo.transform(topoCreate.shape(), gpCreate.trsf(), false);
    helpers.expectType(res, 'Shape');
  });
});
