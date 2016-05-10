const gp = require('../../lib/gp.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('gp.Vec2d', function(){

  it('x', function() {
    var obj = create.gp.vec2d();
    var value = 0.5;
    obj.x = value;
    var res = obj.x;
    expect(obj.x).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  it('y', function() {
    var obj = create.gp.vec2d();
    var value = 0.5;
    obj.y = value;
    var res = obj.y;
    expect(obj.y).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  // Arguments or return type not wrapped.
  xit('setXy(gp_XY)', function() { });

  // Arguments or return type not wrapped.
  xit('xy()', function() { });

  it('isEqual(gp.Vec2d, Double, Double)', function() {
    var obj = create.gp.vec2d();
    var res = obj.isEqual(create.gp.vec2d(), 0.5, 1);
    expect(typeof res).to.equal('boolean');
  });

  it('isNormal(gp.Vec2d, Double)', function() {
    var obj = create.gp.vec2d();
    var res = obj.isNormal(create.gp.vec2d(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('isOpposite(gp.Vec2d, Double)', function() {
    var obj = create.gp.vec2d();
    var res = obj.isOpposite(create.gp.vec2d(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('isParallel(gp.Vec2d, Double)', function() {
    var obj = create.gp.vec2d();
    var res = obj.isParallel(create.gp.vec2d(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('angle(gp.Vec2d)', function() {
    var obj = create.gp.vec2d();
    var res = obj.angle(create.gp.vec2d());
    expect(typeof res).to.equal('number');
  });

  it('magnitude()', function() {
    var obj = create.gp.vec2d();
    var res = obj.magnitude();
    expect(typeof res).to.equal('number');
  });

  it('squareMagnitude()', function() {
    var obj = create.gp.vec2d();
    var res = obj.squareMagnitude();
    expect(typeof res).to.equal('number');
  });

  it('add(gp.Vec2d)', function() {
    var obj = create.gp.vec2d();
    var res = obj.add(create.gp.vec2d());
  });

  it('added(gp.Vec2d)', function() {
    var obj = create.gp.vec2d();
    var res = obj.added(create.gp.vec2d());
    helpers.expectType(res, 'Vec2d');
  });

  it('cross(gp.Vec2d)', function() {
    var obj = create.gp.vec2d();
    var res = obj.cross(create.gp.vec2d());
    expect(typeof res).to.equal('number');
  });

  it('crossMagnitude(gp.Vec2d)', function() {
    var obj = create.gp.vec2d();
    var res = obj.crossMagnitude(create.gp.vec2d());
    expect(typeof res).to.equal('number');
  });

  it('crossSquareMagnitude(gp.Vec2d)', function() {
    var obj = create.gp.vec2d();
    var res = obj.crossSquareMagnitude(create.gp.vec2d());
    expect(typeof res).to.equal('number');
  });

  it('divide(Double)', function() {
    var obj = create.gp.vec2d();
    var res = obj.divide(0.5);
  });

  it('divided(Double)', function() {
    var obj = create.gp.vec2d();
    var res = obj.divided(0.5);
    helpers.expectType(res, 'Vec2d');
  });

  it('dot(gp.Vec2d)', function() {
    var obj = create.gp.vec2d();
    var res = obj.dot(create.gp.vec2d());
    expect(typeof res).to.equal('number');
  });

  it('getNormal()', function() {
    var obj = create.gp.vec2d();
    var res = obj.getNormal();
    helpers.expectType(res, 'Vec2d');
  });

  it('multiply(Double)', function() {
    var obj = create.gp.vec2d();
    var res = obj.multiply(0.5);
  });

  it('multiplied(Double)', function() {
    var obj = create.gp.vec2d();
    var res = obj.multiplied(0.5);
    helpers.expectType(res, 'Vec2d');
  });

  it('normalize()', function() {
    var obj = create.gp.vec2d();
    var res = obj.normalize();
  });

  it('normalized()', function() {
    var obj = create.gp.vec2d();
    var res = obj.normalized();
    helpers.expectType(res, 'Vec2d');
  });

  it('reverse()', function() {
    var obj = create.gp.vec2d();
    var res = obj.reverse();
  });

  it('reversed()', function() {
    var obj = create.gp.vec2d();
    var res = obj.reversed();
    helpers.expectType(res, 'Vec2d');
  });

  it('subtract(gp.Vec2d)', function() {
    var obj = create.gp.vec2d();
    var res = obj.subtract(create.gp.vec2d());
  });

  it('subtracted(gp.Vec2d)', function() {
    var obj = create.gp.vec2d();
    var res = obj.subtracted(create.gp.vec2d());
    helpers.expectType(res, 'Vec2d');
  });

  it('setLinearForm(Double, gp.Vec2d, Double, gp.Vec2d, gp.Vec2d)', function() {
    var obj = create.gp.vec2d();
    var res = obj.setLinearForm(0.5, create.gp.vec2d(), 1, create.gp.vec2d(), create.gp.vec2d());
  });

  it('setLinearForm(Double, gp.Vec2d, Double, gp.Vec2d)', function() {
    var obj = create.gp.vec2d();
    var res = obj.setLinearForm(0.5, create.gp.vec2d(), 1, create.gp.vec2d());
  });

  it('setLinearForm(Double, gp.Vec2d, gp.Vec2d)', function() {
    var obj = create.gp.vec2d();
    var res = obj.setLinearForm(0.5, create.gp.vec2d(), create.gp.vec2d());
  });

  it('setLinearForm(gp.Vec2d, gp.Vec2d)', function() {
    var obj = create.gp.vec2d();
    var res = obj.setLinearForm(create.gp.vec2d(), create.gp.vec2d());
  });

  it('mirror(gp.Vec2d)', function() {
    var obj = create.gp.vec2d();
    var res = obj.mirror(create.gp.vec2d());
    helpers.expectType(res, 'Vec2d');
  });

  it('mirror(gp.Ax2d)', function() {
    var obj = create.gp.vec2d();
    var res = obj.mirror(create.gp.ax2d());
    helpers.expectType(res, 'Vec2d');
  });

  it('rotate(Double)', function() {
    var obj = create.gp.vec2d();
    var res = obj.rotate(0.5);
    helpers.expectType(res, 'Vec2d');
  });

  it('scale(Double)', function() {
    var obj = create.gp.vec2d();
    var res = obj.scale(0.5);
    helpers.expectType(res, 'Vec2d');
  });

  it('transform(gp.Trsf2d)', function() {
    var obj = create.gp.vec2d();
    var res = obj.transform(create.gp.trsf2d());
    helpers.expectType(res, 'Vec2d');
  });

  it('Vec2d()', function() {
    var res = new gp.Vec2d();
    helpers.expectType(res, 'Vec2d');
  });

  it('Vec2d(gp.Dir2d)', function() {
    var res = new gp.Vec2d(create.gp.dir2d());
    helpers.expectType(res, 'Vec2d');
  });

  // Arguments or return type not wrapped.
  xit('Vec2d(gp_XY)', function() { });

  it('Vec2d(Double, Double)', function() {
    var res = new gp.Vec2d(0.5, 1);
    helpers.expectType(res, 'Vec2d');
  });

  it('Vec2d(gp.Pnt2d, gp.Pnt2d)', function() {
    var res = new gp.Vec2d(create.gp.pnt2d(), create.gp.pnt2d());
    helpers.expectType(res, 'Vec2d');
  });
});
