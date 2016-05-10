const gp = require('../../lib/gp.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('gp.Trsf2d', function(){

  it('setMirror(gp.Pnt2d)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.setMirror(create.gp.pnt2d());
  });

  it('setMirror(gp.Ax2d)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.setMirror(create.gp.ax2d());
  });

  it('setRotation(gp.Pnt2d, Double)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.setRotation(create.gp.pnt2d(), 0.5);
  });

  it('setScale(gp.Pnt2d, Double)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.setScale(create.gp.pnt2d(), 0.5);
  });

  it('setTransformation(gp.Ax2d, gp.Ax2d)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.setTransformation(create.gp.ax2d(), create.gp.ax2d());
  });

  it('setTransformation(gp.Ax2d)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.setTransformation(create.gp.ax2d());
  });

  it('setTranslation(gp.Vec2d)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.setTranslation(create.gp.vec2d());
  });

  it('setTranslation(gp.Pnt2d, gp.Pnt2d)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.setTranslation(create.gp.pnt2d(), create.gp.pnt2d());
  });

  it('setTranslationPart(gp.Vec2d)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.setTranslationPart(create.gp.vec2d());
  });

  it('setScaleFactor(Double)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.setScaleFactor(0.5);
  });

  it('isNegative()', function() {
    var obj = create.gp.trsf2d();
    var res = obj.isNegative();
    expect(typeof res).to.equal('boolean');
  });

  // Arguments or return type not wrapped.
  xit('form()', function() { });

  it('scaleFactor()', function() {
    var obj = create.gp.trsf2d();
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
    var obj = create.gp.trsf2d();
    var res = obj.rotationPart();
    expect(typeof res).to.equal('number');
  });

  it('value(Integer, Integer)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.value(1, 2);
    expect(typeof res).to.equal('number');
  });

  it('invert()', function() {
    var obj = create.gp.trsf2d();
    var res = obj.invert();
  });

  it('inverted()', function() {
    var obj = create.gp.trsf2d();
    var res = obj.inverted();
    helpers.expectType(res, 'Trsf2d');
  });

  it('multiplied(gp.Trsf2d)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.multiplied(create.gp.trsf2d());
    helpers.expectType(res, 'Trsf2d');
  });

  it('multiply(gp.Trsf2d)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.multiply(create.gp.trsf2d());
  });

  it('preMultiply(gp.Trsf2d)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.preMultiply(create.gp.trsf2d());
  });

  it('power(Integer)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.power(1);
  });

  it('powered(Integer)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.powered(1);
    helpers.expectType(res, 'Trsf2d');
  });

  it('transforms(Double, Double)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.transforms();
    helpers.expectType(res, 'Object');
    helpers.expectType(res.x, 'Double');
    helpers.expectType(res.y, 'Double');
  });

  // Arguments or return type not wrapped.
  xit('transforms(gp_XY)', function() { });

  it('setValues(Double, Double, Double, Double, Double, Double)', function() {
    var obj = create.gp.trsf2d();
    var res = obj.setValues(0.5, 1, 1.5, 2, 2.5, 3);
  });

  it('Trsf2d()', function() {
    var res = new gp.Trsf2d();
    helpers.expectType(res, 'Trsf2d');
  });

  it('Trsf2d(gp.Trsf)', function() {
    var res = new gp.Trsf2d(create.gp.trsf());
    helpers.expectType(res, 'Trsf2d');
  });
});
