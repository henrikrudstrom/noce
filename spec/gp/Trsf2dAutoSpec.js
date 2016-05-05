const gp = require('../../lib/gp.js');
var gpCreate = require('../gp/create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('gp.Trsf2d', function(){

  it('setMirror(gp.Pnt2d)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.setMirror(gpCreate.pnt2d());
  });

  it('setMirror(gp.Ax2d)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.setMirror(gpCreate.ax2d());
  });

  it('setRotation(gp.Pnt2d, Double)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.setRotation(gpCreate.pnt2d(), 0.5);
  });

  it('setScale(gp.Pnt2d, Double)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.setScale(gpCreate.pnt2d(), 0.5);
  });

  it('setTransformation(gp.Ax2d, gp.Ax2d)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.setTransformation(gpCreate.ax2d(), gpCreate.ax2d());
  });

  it('setTransformation(gp.Ax2d)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.setTransformation(gpCreate.ax2d());
  });

  it('setTranslation(gp.Vec2d)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.setTranslation(gpCreate.vec2d());
  });

  it('setTranslation(gp.Pnt2d, gp.Pnt2d)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.setTranslation(gpCreate.pnt2d(), gpCreate.pnt2d());
  });

  it('setTranslationPart(gp.Vec2d)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.setTranslationPart(gpCreate.vec2d());
  });

  it('setScaleFactor(Double)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.setScaleFactor(0.5);
  });

  it('isNegative()', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.isNegative();
    expect(typeof res).to.equal('boolean');
  });

  // Arguments or return type not wrapped.
  xit('form()', function() { });

  it('scaleFactor()', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.scaleFactor();
    expect(typeof res).to.equal('number');
  });

  // Arguments or return type not wrapped.
  xit('translationPart()', function() { });

  // Arguments or return type not wrapped.
  xit('vectorialPart()', function() { });

  // Arguments or return type not wrapped.
  xit('hvectorialPart()', function() { });

  it('rotationPart()', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.rotationPart();
    expect(typeof res).to.equal('number');
  });

  it('value(Integer, Integer)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.value(1, 2);
    expect(typeof res).to.equal('number');
  });

  it('invert()', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.invert();
  });

  it('inverted()', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.inverted();
    helpers.expectType(res, 'Trsf2d');
  });

  it('multiplied(gp.Trsf2d)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.multiplied(gpCreate.trsf2d());
    helpers.expectType(res, 'Trsf2d');
  });

  it('multiply(gp.Trsf2d)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.multiply(gpCreate.trsf2d());
  });

  it('preMultiply(gp.Trsf2d)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.preMultiply(gpCreate.trsf2d());
  });

  it('power(Integer)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.power(1);
  });

  it('powered(Integer)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.powered(1);
    helpers.expectType(res, 'Trsf2d');
  });

  it('transforms(Double, Double)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.transforms();
    helpers.expectType(res, 'Object');
    helpers.expectType(res.x, 'Double');
    helpers.expectType(res.y, 'Double');
  });

  // Arguments or return type not wrapped.
  xit('transforms(gp_XY)', function() { });

  it('setValues(Double, Double, Double, Double, Double, Double)', function() {
    var obj = gpCreate.trsf2d();
    var res = obj.setValues(0.5, 1, 1.5, 2, 2.5, 3);
  });

  it('Trsf2d()', function() {
    var res = new gp.Trsf2d();
    helpers.expectType(res, 'Trsf2d');
  });

  it('Trsf2d(gp.Trsf)', function() {
    var res = new gp.Trsf2d(gpCreate.trsf());
    helpers.expectType(res, 'Trsf2d');
  });
});
