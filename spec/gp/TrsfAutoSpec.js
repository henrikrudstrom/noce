const gp = require('../../lib/gp.js');
var gpCreate = require('../gp/create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('gp.Trsf', function(){

  it('setMirror(gp.Pnt)', function() {
    var obj = gpCreate.trsf();
    var res = obj.setMirror(gpCreate.pnt());
  });

  it('setMirror(gp.Ax1)', function() {
    var obj = gpCreate.trsf();
    var res = obj.setMirror(gpCreate.ax1());
  });

  it('setMirror(gp.Ax2)', function() {
    var obj = gpCreate.trsf();
    var res = obj.setMirror(gpCreate.ax2());
  });

  it('setRotation(gp.Ax1, Double)', function() {
    var obj = gpCreate.trsf();
    var res = obj.setRotation(gpCreate.ax1(), 0.5);
  });

  // Arguments or return type not wrapped.
  xit('setRotation(gp_Quaternion)', function() { });

  it('setScale(gp.Pnt, Double)', function() {
    var obj = gpCreate.trsf();
    var res = obj.setScale(gpCreate.pnt(), 0.5);
  });

  it('setDisplacement(gp.Ax3, gp.Ax3)', function() {
    var obj = gpCreate.trsf();
    var res = obj.setDisplacement(gpCreate.ax3(), gpCreate.ax3());
  });

  it('setTransformation(gp.Ax3, gp.Ax3)', function() {
    var obj = gpCreate.trsf();
    var res = obj.setTransformation(gpCreate.ax3(), gpCreate.ax3());
  });

  it('setTransformation(gp.Ax3)', function() {
    var obj = gpCreate.trsf();
    var res = obj.setTransformation(gpCreate.ax3());
  });

  // Arguments or return type not wrapped.
  xit('setTransformation(gp_Quaternion, gp.Vec)', function() { });

  it('setTranslation(gp.Vec)', function() {
    var obj = gpCreate.trsf();
    var res = obj.setTranslation(gpCreate.vec());
  });

  it('setTranslation(gp.Pnt, gp.Pnt)', function() {
    var obj = gpCreate.trsf();
    var res = obj.setTranslation(gpCreate.pnt(), gpCreate.pnt());
  });

  it('setTranslationPart(gp.Vec)', function() {
    var obj = gpCreate.trsf();
    var res = obj.setTranslationPart(gpCreate.vec());
  });

  it('setScaleFactor(Double)', function() {
    var obj = gpCreate.trsf();
    var res = obj.setScaleFactor(0.5);
  });
// ${excludedReason}

  it('isNegative()', function() {
    var obj = gpCreate.trsf();
    var res = obj.isNegative();
    expect(typeof res).to.equal('boolean');
  });

  // Arguments or return type not wrapped.
  xit('form()', function() { });

  it('scaleFactor()', function() {
    var obj = gpCreate.trsf();
    var res = obj.scaleFactor();
    expect(typeof res).to.equal('number');
  });

  // Arguments or return type not wrapped.
  xit('translationPart()', function() { });

  // Arguments or return type not wrapped.
  xit('getAxisAngle(gp_XYZ, Double)', function() { });

  // Arguments or return type not wrapped.
  xit('getRotation()', function() { });

  // Arguments or return type not wrapped.
  xit('vectorialPart()', function() { });

  // Arguments or return type not wrapped.
  xit('hvectorialPart()', function() { });

  it('value(Integer, Integer)', function() {
    var obj = gpCreate.trsf();
    var res = obj.value(1, 2);
    expect(typeof res).to.equal('number');
  });

  it('invert()', function() {
    var obj = gpCreate.trsf();
    var res = obj.invert();
  });

  it('inverted()', function() {
    var obj = gpCreate.trsf();
    var res = obj.inverted();
    helpers.expectType(res, 'Trsf');
  });

  it('multiplied(gp.Trsf)', function() {
    var obj = gpCreate.trsf();
    var res = obj.multiplied(gpCreate.trsf());
    helpers.expectType(res, 'Trsf');
  });

  it('multiply(gp.Trsf)', function() {
    var obj = gpCreate.trsf();
    var res = obj.multiply(gpCreate.trsf());
  });

  it('preMultiply(gp.Trsf)', function() {
    var obj = gpCreate.trsf();
    var res = obj.preMultiply(gpCreate.trsf());
  });

  it('power(Integer)', function() {
    var obj = gpCreate.trsf();
    var res = obj.power(1);
  });

  it('powered(Integer)', function() {
    var obj = gpCreate.trsf();
    var res = obj.powered(1);
    helpers.expectType(res, 'Trsf');
  });

  it('transforms(Double, Double, Double)', function() {
    var obj = gpCreate.trsf();
    var res = obj.transforms();
    helpers.expectType(res, 'Object');
    helpers.expectType(res.x, 'Double');
    helpers.expectType(res.y, 'Double');
    helpers.expectType(res.z, 'Double');
  });

  // Arguments or return type not wrapped.
  xit('transforms(gp_XYZ)', function() { });

  it('Trsf()', function() {
    var res = new gp.Trsf();
    helpers.expectType(res, 'Trsf');
  });

  it('Trsf(gp.Trsf2d)', function() {
    var res = new gp.Trsf(gpCreate.trsf2d());
    helpers.expectType(res, 'Trsf');
  });
});
