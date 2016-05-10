// const topo = require('../../lib/topo.js');
// const geom = require('../../lib/geom.js');
// const geom2d = require('../../lib/geom2d.js');
// const gp = require('../../lib/gp.js');
// const helpers = require('../testHelpers.js');
// const create = require('./create.js');
// const expect = require('chai').expect;
// describe('topo.Tool', function(){
//
//   it('isClosed(topo.Shape)', function() {
//     var res = topo.Tool.isClosed(create.topo.shape());
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('surface(topo.Face, topo.Location)', function() {
//     var res = topo.Tool.surface(create.topo.face());
//     helpers.expectType(res, 'Location');
//   });
//
//   it('surface(topo.Face)', function() {
//     var res = topo.Tool.surface(create.topo.face());
//     helpers.expectType(res, 'Surface');
//   });
//
//   it('triangulation(topo.Face, topo.Location)', function() {
//     var res = topo.Tool.triangulation(create.topo.face());
//     helpers.expectType(res, 'Location');
//   });
//
//   it('tolerance(topo.Face)', function() {
//     var res = topo.Tool.tolerance(create.topo.face());
//     expect(typeof res).to.equal('number');
//   });
//
//   it('naturalRestriction(topo.Face)', function() {
//     var res = topo.Tool.naturalRestriction(create.topo.face());
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('isGeometric(topo.Edge)', function() {
//     var res = topo.Tool.isGeometric(create.topo.edge());
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('curve(topo.Edge, topo.Location, Double, Double)', function() {
//     var res = topo.Tool.curve(create.topo.edge());
//     helpers.expectType(res, 'Object');
//     helpers.expectType(res.l, 'topo.Location');
//     helpers.expectType(res.first, 'Double');
//     helpers.expectType(res.last, 'Double');
//   });
//
//   it('curve(topo.Edge, Double, Double)', function() {
//     var res = topo.Tool.curve(create.topo.edge());
//     helpers.expectType(res, 'Object');
//     helpers.expectType(res.first, 'Double');
//     helpers.expectType(res.last, 'Double');
//   });
//
//   it('polygon3D(topo.Edge, topo.Location)', function() {
//     var res = topo.Tool.polygon3D(create.topo.edge());
//     helpers.expectType(res, 'Location');
//   });
//
//   it('curveOnSurface(topo.Edge, topo.Face, Double, Double)', function() {
//     var res = topo.Tool.curveOnSurface(create.topo.edge(), create.topo.face());
//     helpers.expectType(res, 'Object');
//     helpers.expectType(res.first, 'Double');
//     helpers.expectType(res.last, 'Double');
//   });
//
//   it('curveOnSurface(topo.Edge, geom.Surface, topo.Location, Double, Double)', function() {
//     var res = topo.Tool.curveOnSurface(create.topo.edge(), create.geom.surface(), create.topo.location());
//     helpers.expectType(res, 'Object');
//     helpers.expectType(res.first, 'Double');
//     helpers.expectType(res.last, 'Double');
//   });
//
//   it('curveOnSurface(topo.Edge, geom2d.Curve, geom.Surface, topo.Location, Double, Double)', function() {
//     var res = topo.Tool.curveOnSurface(create.topo.edge());
//     helpers.expectType(res, 'Object');
//     helpers.expectType(res.c, 'geom2d.Curve');
//     helpers.expectType(res.s, 'geom.Surface');
//     helpers.expectType(res.l, 'topo.Location');
//     helpers.expectType(res.first, 'Double');
//     helpers.expectType(res.last, 'Double');
//   });
//
//   it('curveOnSurface(topo.Edge, geom2d.Curve, geom.Surface, topo.Location, Double, Double, Integer)', function() {
//     var res = topo.Tool.curveOnSurface(create.topo.edge(), 1);
//     helpers.expectType(res, 'Object');
//     helpers.expectType(res.c, 'geom2d.Curve');
//     helpers.expectType(res.s, 'geom.Surface');
//     helpers.expectType(res.l, 'topo.Location');
//     helpers.expectType(res.first, 'Double');
//     helpers.expectType(res.last, 'Double');
//   });
//
//   // Arguments or return type not wrapped.
//   xit('polygonOnSurface(topo.Edge, topo.Face)', function() { });
//
//   // Arguments or return type not wrapped.
//   xit('polygonOnSurface(topo.Edge, geom.Surface, topo.Location)', function() { });
//
//   // Arguments or return type not wrapped.
//   xit('polygonOnSurface(topo.Edge, Handle_Poly_Polygon2D, geom.Surface, topo.Location)', function() { });
//
//   // Arguments or return type not wrapped.
//   xit('polygonOnSurface(topo.Edge, Handle_Poly_Polygon2D, geom.Surface, topo.Location, Integer)', function() { });
//
//   // Arguments or return type not wrapped.
//   xit('polygonOnTriangulation(topo.Edge, Handle_Poly_Triangulation, topo.Location)', function() { });
//
//   // Arguments or return type not wrapped.
//   xit('polygonOnTriangulation(topo.Edge, Handle_Poly_PolygonOnTriangulation, Handle_Poly_Triangulation, topo.Location)', function() { });
//
//   // Arguments or return type not wrapped.
//   xit('polygonOnTriangulation(topo.Edge, Handle_Poly_PolygonOnTriangulation, Handle_Poly_Triangulation, topo.Location, Integer)', function() { });
//
//   it('isClosed(topo.Edge, topo.Face)', function() {
//     var res = topo.Tool.isClosed(create.topo.edge(), create.topo.face());
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('isClosed(topo.Edge, geom.Surface, topo.Location)', function() {
//     var res = topo.Tool.isClosed(create.topo.edge(), create.geom.surface(), create.topo.location());
//     expect(typeof res).to.equal('boolean');
//   });
//
//   // Arguments or return type not wrapped.
//   xit('isClosed(topo.Edge, Handle_Poly_Triangulation)', function() { });
//
//   it('tolerance(topo.Edge)', function() {
//     var res = topo.Tool.tolerance(create.topo.edge());
//     expect(typeof res).to.equal('number');
//   });
//
//   it('sameParameter(topo.Edge)', function() {
//     var res = topo.Tool.sameParameter(create.topo.edge());
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('sameRange(topo.Edge)', function() {
//     var res = topo.Tool.sameRange(create.topo.edge());
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('degenerated(topo.Edge)', function() {
//     var res = topo.Tool.degenerated(create.topo.edge());
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('range(topo.Edge, Double, Double)', function() {
//     var res = topo.Tool.range(create.topo.edge());
//     helpers.expectType(res, 'Object');
//     helpers.expectType(res.first, 'Double');
//     helpers.expectType(res.last, 'Double');
//   });
//
//   it('range(topo.Edge, geom.Surface, topo.Location, Double, Double)', function() {
//     var res = topo.Tool.range(create.topo.edge(), create.geom.surface(), create.topo.location());
//     helpers.expectType(res, 'Object');
//     helpers.expectType(res.first, 'Double');
//     helpers.expectType(res.last, 'Double');
//   });
//
//   it('range(topo.Edge, topo.Face, Double, Double)', function() {
//     var res = topo.Tool.range(create.topo.edge(), create.topo.face());
//     helpers.expectType(res, 'Object');
//     helpers.expectType(res.first, 'Double');
//     helpers.expectType(res.last, 'Double');
//   });
//
//   it('uvpoints(topo.Edge, geom.Surface, topo.Location, gp.Pnt2d, gp.Pnt2d)', function() {
//     var res = topo.Tool.uvpoints(create.topo.edge(), create.geom.surface(), create.topo.location());
//     helpers.expectType(res, 'Object');
//     helpers.expectType(res.pfirst, 'gp.Pnt2d');
//     helpers.expectType(res.plast, 'gp.Pnt2d');
//   });
//
//   it('uvpoints(topo.Edge, topo.Face, gp.Pnt2d, gp.Pnt2d)', function() {
//     var res = topo.Tool.uvpoints(create.topo.edge(), create.topo.face());
//     helpers.expectType(res, 'Object');
//     helpers.expectType(res.pfirst, 'gp.Pnt2d');
//     helpers.expectType(res.plast, 'gp.Pnt2d');
//   });
//
//   it('setUvpoints(topo.Edge, geom.Surface, topo.Location, gp.Pnt2d, gp.Pnt2d)', function() {
//     var res = topo.Tool.setUvpoints(create.topo.edge(), create.geom.surface(), create.topo.location(), create.gp.pnt2d(), create.gp.pnt2d());
//   });
//
//   it('setUvpoints(topo.Edge, topo.Face, gp.Pnt2d, gp.Pnt2d)', function() {
//     var res = topo.Tool.setUvpoints(create.topo.edge(), create.topo.face(), create.gp.pnt2d(), create.gp.pnt2d());
//   });
//
//   it('hasContinuity(topo.Edge, topo.Face, topo.Face)', function() {
//     var res = topo.Tool.hasContinuity(create.topo.edge(), create.topo.face(), create.topo.face());
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('continuity(topo.Edge, topo.Face, topo.Face)', function() {
//     var res = topo.Tool.continuity(create.topo.edge(), create.topo.face(), create.topo.face());
//     expect(typeof res).to.equal('number');
//   });
//
//   it('hasContinuity(topo.Edge, geom.Surface, geom.Surface, topo.Location, topo.Location)', function() {
//     var res = topo.Tool.hasContinuity(create.topo.edge(), create.geom.surface(), create.geom.surface(), create.topo.location(), create.topo.location());
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('continuity(topo.Edge, geom.Surface, geom.Surface, topo.Location, topo.Location)', function() {
//     var res = topo.Tool.continuity(create.topo.edge(), create.geom.surface(), create.geom.surface(), create.topo.location(), create.topo.location());
//     expect(typeof res).to.equal('number');
//   });
//
//   it('hasContinuity(topo.Edge)', function() {
//     var res = topo.Tool.hasContinuity(create.topo.edge());
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('pnt(topo.Vertex)', function() {
//     var res = topo.Tool.pnt(create.topo.vertex());
//     helpers.expectType(res, 'Pnt');
//   });
//
//   it('tolerance(topo.Vertex)', function() {
//     var res = topo.Tool.tolerance(create.topo.vertex());
//     expect(typeof res).to.equal('number');
//   });
//
//   it('parameter(topo.Vertex, topo.Edge)', function() {
//     var res = topo.Tool.parameter(create.topo.vertex(), create.topo.edge());
//     expect(typeof res).to.equal('number');
//   });
//
//   it('parameter(topo.Vertex, topo.Edge, topo.Face)', function() {
//     var res = topo.Tool.parameter(create.topo.vertex(), create.topo.edge(), create.topo.face());
//     expect(typeof res).to.equal('number');
//   });
//
//   it('parameter(topo.Vertex, topo.Edge, geom.Surface, topo.Location)', function() {
//     var res = topo.Tool.parameter(create.topo.vertex(), create.topo.edge(), create.geom.surface(), create.topo.location());
//     expect(typeof res).to.equal('number');
//   });
//
//   it('parameters(topo.Vertex, topo.Face)', function() {
//     var res = topo.Tool.parameters(create.topo.vertex(), create.topo.face());
//     helpers.expectType(res, 'Pnt2d');
//   });
//
//   it('Tool()', function() {
//     var res = new topo.Tool();
//     helpers.expectType(res, 'Tool');
//   });
// });
