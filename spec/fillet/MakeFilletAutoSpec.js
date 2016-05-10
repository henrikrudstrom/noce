const fillet = require('../../lib/fillet.js');
const gp = require('../../lib/gp.js');
const geom = require('../../lib/geom.js');
const geom2d = require('../../lib/geom2d.js');
const topo = require('../../lib/topo.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('fillet.MakeFillet', function(){

  it('setParams(Double, Double, Double, Double, Double, Double)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.setParams(2.5, 3, 3.5, 4, 4.5, 5);
  });

  it('setContinuity(geom2d.Shape, Double)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.setContinuity(create.geom2d.shape(), 0.5);
  });

  it('add(topo.Edge)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.add(create.topo.edge());
  });

  it('add(Double, topo.Edge)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.add(0.5, create.topo.edge());
  });

  it('add(Double, Double, topo.Edge)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.add(0.5, 1, create.topo.edge());
  });

  // Arguments or return type not wrapped.
  xit('add(Handle_Law_Function, topo.Edge)', function() { });

  it('add(Array, topo.Edge)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.add(create.Array.array(), create.topo.edge());
  });

  it('setRadius(Double, Integer, Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.setRadius(0.5, 2, 3);
  });

  it('setRadius(Double, Double, Integer, Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.setRadius(0.5, 1, 2, 3);
  });

  // Arguments or return type not wrapped.
  xit('setRadius(Handle_Law_Function, Integer, Integer)', function() { });

  it('setRadius(Array, Integer, Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.setRadius(create.Array.array(), 3, 4);
  });

  it('resetContour(Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.resetContour(1);
  });

  it('isConstant(Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.isConstant(1);
    expect(typeof res).to.equal('boolean');
  });

  it('radius(Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.radius(1);
    expect(typeof res).to.equal('number');
  });

  it('isConstant(Integer, topo.Edge)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.isConstant(1, create.topo.edge());
    expect(typeof res).to.equal('boolean');
  });

  it('radius(Integer, topo.Edge)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.radius(1, create.topo.edge());
    expect(typeof res).to.equal('number');
  });

  it('setRadius(Double, Integer, topo.Edge)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.setRadius(0.5, 2, create.topo.edge());
  });

  it('setRadius(Double, Integer, topo.Vertex)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.setRadius(0.5, 2, create.topo.vertex());
  });

  it('getBounds(Integer, topo.Edge, Double, Double)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.getBounds(1, create.topo.edge());
    helpers.expectType(res, 'Object');
    helpers.expectType(res.f, 'Double');
    helpers.expectType(res.l, 'Double');
  });

  // Arguments or return type not wrapped.
  xit('getLaw(Integer, topo.Edge)', function() { });

  // Arguments or return type not wrapped.
  xit('setLaw(Integer, topo.Edge, Handle_Law_Function)', function() { });

  it('setFilletShape(fillet.FilletShape)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.setFilletShape(create.fillet.filletShape());
  });

  it('getFilletShape()', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.getFilletShape();
    expect(typeof res).to.equal('number');
  });

  it('nbContours()', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.nbContours();
    expect(typeof res).to.equal('number');
  });

  it('contour(topo.Edge)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.contour(create.topo.edge());
    expect(typeof res).to.equal('number');
  });

  it('nbEdges(Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.nbEdges(1);
    expect(typeof res).to.equal('number');
  });

  it('edge(Integer, Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.edge(1, 2);
    helpers.expectType(res, 'Edge');
  });

  it('remove(topo.Edge)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.remove(create.topo.edge());
  });

  it('length(Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.length(1);
    expect(typeof res).to.equal('number');
  });

  it('firstVertex(Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.firstVertex(1);
    helpers.expectType(res, 'Vertex');
  });

  it('lastVertex(Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.lastVertex(1);
    helpers.expectType(res, 'Vertex');
  });

  it('abscissa(Integer, topo.Vertex)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.abscissa(1, create.topo.vertex());
    expect(typeof res).to.equal('number');
  });

  it('relativeAbscissa(Integer, topo.Vertex)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.relativeAbscissa(1, create.topo.vertex());
    expect(typeof res).to.equal('number');
  });

  it('closedAndTangent(Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.closedAndTangent(1);
    expect(typeof res).to.equal('boolean');
  });

  it('closed(Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.closed(1);
    expect(typeof res).to.equal('boolean');
  });

  it('build()', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.build();
  });

  it('reset()', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.reset();
  });

  // Arguments or return type not wrapped.
  xit('builder()', function() { });

  it('generated(topo.Shape)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.generated(create.topo.shape());
    helpers.expectType(res, 'Array');
  });

  it('modified(topo.Shape)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.modified(create.topo.shape());
    helpers.expectType(res, 'Array');
  });

  it('isDeleted(topo.Shape)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.isDeleted(create.topo.shape());
    expect(typeof res).to.equal('boolean');
  });

  it('nbSurfaces()', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.nbSurfaces();
    expect(typeof res).to.equal('number');
  });

  it('newFaces(Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.newFaces(1);
    helpers.expectType(res, 'Array');
  });

  it('simulate(Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.simulate(1);
  });

  it('nbSurf(Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.nbSurf(1);
    expect(typeof res).to.equal('number');
  });

  // Arguments or return type not wrapped.
  xit('sect(Integer, Integer)', function() { });

  it('nbFaultyContours()', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.nbFaultyContours();
    expect(typeof res).to.equal('number');
  });

  it('faultyContour(Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.faultyContour(1);
    expect(typeof res).to.equal('number');
  });

  it('nbComputedSurfaces(Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.nbComputedSurfaces(1);
    expect(typeof res).to.equal('number');
  });

  it('computedSurface(Integer, Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.computedSurface(1, 2);
    helpers.expectType(res, 'Surface');
  });

  it('nbFaultyVertices()', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.nbFaultyVertices();
    expect(typeof res).to.equal('number');
  });

  it('faultyVertex(Integer)', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.faultyVertex(1);
    helpers.expectType(res, 'Vertex');
  });

  it('hasResult()', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.hasResult();
    expect(typeof res).to.equal('boolean');
  });

  it('badShape()', function() {
    var obj = create.fillet.makeFillet();
    var res = obj.badShape();
    helpers.expectType(res, 'Shape');
  });

  // Arguments or return type not wrapped.
  xit('stripeStatus(Integer)', function() { });

  it('MakeFillet(topo.Shape, fillet.FilletShape)', function() {
    var res = new fillet.MakeFillet(create.topo.shape(), create.fillet.filletShape());
    helpers.expectType(res, 'MakeFillet');
  });
});
