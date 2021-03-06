const geom = require('../../lib/geom.js');
const gp = require('../../lib/gp.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('geom.Plane', function(){

  // Arguments or return type not wrapped.
  xit('setPln(gp_Pln)', function() { });

  // Arguments or return type not wrapped.
  xit('pln()', function() { });

  it('ureverse()', function() {
    var obj = create.geom.plane();
    var res = obj.ureverse();
  });

  it('ureversedParameter(Double)', function() {
    var obj = create.geom.plane();
    var res = obj.ureversedParameter(0.5);
    expect(typeof res).to.equal('number');
  });

  it('vreverse()', function() {
    var obj = create.geom.plane();
    var res = obj.vreverse();
  });

  it('vreversedParameter(Double)', function() {
    var obj = create.geom.plane();
    var res = obj.vreversedParameter(0.5);
    expect(typeof res).to.equal('number');
  });

  // TODO: transformParameters(Double, Double, gp.Trsf)not working.
  xit('transformParameters(Double, Double, gp.Trsf)', function() { });

  // Arguments or return type not wrapped.
  xit('parametricTransformation(gp.Trsf)', function() { });

  it('bounds(Double, Double, Double, Double)', function() {
    var obj = create.geom.plane();
    var res = obj.bounds();
    helpers.expectType(res, 'Object');
    helpers.expectType(res.u1, 'Double');
    helpers.expectType(res.u2, 'Double');
    helpers.expectType(res.v1, 'Double');
    helpers.expectType(res.v2, 'Double');
  });

  it('coefficients(Double, Double, Double, Double)', function() {
    var obj = create.geom.plane();
    var res = obj.coefficients();
    helpers.expectType(res, 'Object');
    helpers.expectType(res.a, 'Double');
    helpers.expectType(res.b, 'Double');
    helpers.expectType(res.c, 'Double');
    helpers.expectType(res.d, 'Double');
  });

  it('isUclosed()', function() {
    var obj = create.geom.plane();
    var res = obj.isUclosed();
    expect(typeof res).to.equal('boolean');
  });

  it('isVclosed()', function() {
    var obj = create.geom.plane();
    var res = obj.isVclosed();
    expect(typeof res).to.equal('boolean');
  });

  it('isUperiodic()', function() {
    var obj = create.geom.plane();
    var res = obj.isUperiodic();
    expect(typeof res).to.equal('boolean');
  });

  it('isVperiodic()', function() {
    var obj = create.geom.plane();
    var res = obj.isVperiodic();
    expect(typeof res).to.equal('boolean');
  });

  it('uiso(Double)', function() {
    var obj = create.geom.plane();
    var res = obj.uiso(0.5);
    helpers.expectType(res, 'Line');
  });

  it('viso(Double)', function() {
    var obj = create.geom.plane();
    var res = obj.viso(0.5);
    helpers.expectType(res, 'Line');
  });

  it('d0(Double, Double, gp.Pnt)', function() {
    var obj = create.geom.plane();
    var res = obj.d0(0.5, 1);
    helpers.expectType(res, 'Pnt');
  });

  it('d1(Double, Double, gp.Pnt, gp.Vec, gp.Vec)', function() {
    var obj = create.geom.plane();
    var res = obj.d1(0.5, 1);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.d1U, 'gp.Vec');
    helpers.expectType(res.d1V, 'gp.Vec');
  });

  it('d2(Double, Double, gp.Pnt, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec)', function() {
    var obj = create.geom.plane();
    var res = obj.d2(0.5, 1);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.d1U, 'gp.Vec');
    helpers.expectType(res.d1V, 'gp.Vec');
    helpers.expectType(res.d2U, 'gp.Vec');
    helpers.expectType(res.d2V, 'gp.Vec');
    helpers.expectType(res.d2Uv, 'gp.Vec');
  });

  it('d3(Double, Double, gp.Pnt, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec)', function() {
    var obj = create.geom.plane();
    var res = obj.d3(0.5, 1);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.d1U, 'gp.Vec');
    helpers.expectType(res.d1V, 'gp.Vec');
    helpers.expectType(res.d2U, 'gp.Vec');
    helpers.expectType(res.d2V, 'gp.Vec');
    helpers.expectType(res.d2Uv, 'gp.Vec');
    helpers.expectType(res.d3U, 'gp.Vec');
    helpers.expectType(res.d3V, 'gp.Vec');
    helpers.expectType(res.d3Uuv, 'gp.Vec');
    helpers.expectType(res.d3Uvv, 'gp.Vec');
  });

  it('dn(Double, Double, Integer, Integer)', function() {
    var obj = create.geom.plane();
    var res = obj.dn(0.5, 1, 2, 3);
    helpers.expectType(res, 'Vec');
  });

  it('transform(gp.Trsf)', function() {
    var obj = create.geom.plane();
    var res = obj.transform(create.gp.trsf());
  });

  it('copy()', function() {
    var obj = create.geom.plane();
    var res = obj.copy();
    helpers.expectType(res, 'Plane');
  });

  it('Plane(gp.Ax3)', function() {
    var res = new geom.Plane(create.gp.ax3());
    helpers.expectType(res, 'Plane');
  });

  // Arguments or return type not wrapped.
  xit('Plane(gp_Pln)', function() { });

  it('Plane(gp.Pnt, gp.Dir)', function() {
    var res = new geom.Plane(create.gp.pnt(), create.gp.dir());
    helpers.expectType(res, 'Plane');
  });

  it('Plane(Double, Double, Double, Double)', function() {
    var res = new geom.Plane(0.5, 1, 1.5, 2);
    helpers.expectType(res, 'Plane');
  });
});
