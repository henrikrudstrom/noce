const geom = require('../../lib/geom.js');
var geomCreate = require('../geom/create.js');
const gp = require('../../lib/gp.js');
var gpCreate = require('../gp/create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('geom.SphericalSurface', function(){

  it('setRadius(Double)', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.setRadius(0.5);
  });

  // Arguments or return type not wrapped.
  xit('setSphere(gp_Sphere)', function() { });

  // Arguments or return type not wrapped.
  xit('sphere()', function() { });

  it('ureversedParameter(Double)', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.ureversedParameter(0.5);
    expect(typeof res).to.equal('number');
  });

  it('vreversedParameter(Double)', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.vreversedParameter(0.5);
    expect(typeof res).to.equal('number');
  });

  it('area()', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.area();
    expect(typeof res).to.equal('number');
  });

  it('bounds(Double, Double, Double, Double)', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.bounds();
    helpers.expectType(res, 'Object');
    helpers.expectType(res.u1, 'Double');
    helpers.expectType(res.u2, 'Double');
    helpers.expectType(res.v1, 'Double');
    helpers.expectType(res.v2, 'Double');
  });

  it('coefficients(Double, Double, Double, Double, Double, Double, Double, Double, Double, Double)', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.coefficients();
    helpers.expectType(res, 'Object');
    helpers.expectType(res.a1, 'Double');
    helpers.expectType(res.a2, 'Double');
    helpers.expectType(res.a3, 'Double');
    helpers.expectType(res.b1, 'Double');
    helpers.expectType(res.b2, 'Double');
    helpers.expectType(res.b3, 'Double');
    helpers.expectType(res.c1, 'Double');
    helpers.expectType(res.c2, 'Double');
    helpers.expectType(res.c3, 'Double');
    helpers.expectType(res.d, 'Double');
  });

  it('radius()', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.radius();
    expect(typeof res).to.equal('number');
  });

  it('volume()', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.volume();
    expect(typeof res).to.equal('number');
  });

  it('isUclosed()', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.isUclosed();
    expect(typeof res).to.equal('boolean');
  });

  it('isVclosed()', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.isVclosed();
    expect(typeof res).to.equal('boolean');
  });

  it('isUperiodic()', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.isUperiodic();
    expect(typeof res).to.equal('boolean');
  });

  it('isVperiodic()', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.isVperiodic();
    expect(typeof res).to.equal('boolean');
  });

  it('uiso(Double)', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.uiso(0.5);
    helpers.expectType(res, 'TrimmedCurve');
  });

  it('viso(Double)', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.viso(0.5);
    helpers.expectType(res, 'Circle');
  });

  it('d0(Double, Double, gp.Pnt)', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.d0(0.5, 1);
    helpers.expectType(res, 'Pnt');
  });

  it('d1(Double, Double, gp.Pnt, gp.Vec, gp.Vec)', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.d1(0.5, 1);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.d1U, 'gp.Vec');
    helpers.expectType(res.d1V, 'gp.Vec');
  });

  it('d2(Double, Double, gp.Pnt, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec)', function() {
    var obj = geomCreate.sphericalSurface();
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
    var obj = geomCreate.sphericalSurface();
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
    var obj = geomCreate.sphericalSurface();
    var res = obj.dn(0.5, 1, 2, 3);
    helpers.expectType(res, 'Vec');
  });

  it('transform(gp.Trsf)', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.transform(gpCreate.trsf());
  });

  it('copy()', function() {
    var obj = geomCreate.sphericalSurface();
    var res = obj.copy();
    helpers.expectType(res, 'SphericalSurface');
  });

  it('SphericalSurface(gp.Ax3, Double)', function() {
    var res = new geom.SphericalSurface(gpCreate.ax3(), 0.5);
    helpers.expectType(res, 'SphericalSurface');
  });

  // Arguments or return type not wrapped.
  xit('SphericalSurface(gp_Sphere)', function() { });
});
