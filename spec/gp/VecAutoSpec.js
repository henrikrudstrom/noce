const gp = require('../../lib/gp.js');
var gpCreate = require('../gp/create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('gp.Vec', function(){

  it('x', function() {
    var obj = gpCreate.vec();
    var value = 0.5;
    obj.x = value;
    var res = obj.x;
    expect(obj.x).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  it('y', function() {
    var obj = gpCreate.vec();
    var value = 0.5;
    obj.y = value;
    var res = obj.y;
    expect(obj.y).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  it('z', function() {
    var obj = gpCreate.vec();
    var value = 0.5;
    obj.z = value;
    var res = obj.z;
    expect(obj.z).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  // Arguments or return type not wrapped.
  xit('setXyz(gp_XYZ)', function() { });

  // Arguments or return type not wrapped.
  xit('xyz()', function() { });

  it('isEqual(gp.Vec, Double, Double)', function() {
    var obj = gpCreate.vec();
    var res = obj.isEqual(gpCreate.vec(), 0.5, 1);
    expect(typeof res).to.equal('boolean');
  });

  it('isNormal(gp.Vec, Double)', function() {
    var obj = gpCreate.vec();
    var res = obj.isNormal(gpCreate.vec(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('isOpposite(gp.Vec, Double)', function() {
    var obj = gpCreate.vec();
    var res = obj.isOpposite(gpCreate.vec(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('isParallel(gp.Vec, Double)', function() {
    var obj = gpCreate.vec();
    var res = obj.isParallel(gpCreate.vec(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('angle(gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.angle(gpCreate.vec());
    expect(typeof res).to.equal('number');
  });

  it('angleWithRef(gp.Vec, gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.angleWithRef(gpCreate.vec(), gpCreate.vec());
    expect(typeof res).to.equal('number');
  });

  it('magnitude()', function() {
    var obj = gpCreate.vec();
    var res = obj.magnitude();
    expect(typeof res).to.equal('number');
  });

  it('squareMagnitude()', function() {
    var obj = gpCreate.vec();
    var res = obj.squareMagnitude();
    expect(typeof res).to.equal('number');
  });

  it('add(gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.add(gpCreate.vec());
  });

  it('added(gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.added(gpCreate.vec());
    helpers.expectType(res, 'Vec');
  });

  it('subtract(gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.subtract(gpCreate.vec());
  });

  it('subtracted(gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.subtracted(gpCreate.vec());
    helpers.expectType(res, 'Vec');
  });

  it('multiply(Double)', function() {
    var obj = gpCreate.vec();
    var res = obj.multiply(0.5);
  });

  it('multiplied(Double)', function() {
    var obj = gpCreate.vec();
    var res = obj.multiplied(0.5);
    helpers.expectType(res, 'Vec');
  });

  it('divide(Double)', function() {
    var obj = gpCreate.vec();
    var res = obj.divide(0.5);
  });

  it('divided(Double)', function() {
    var obj = gpCreate.vec();
    var res = obj.divided(0.5);
    helpers.expectType(res, 'Vec');
  });

  it('cross(gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.cross(gpCreate.vec());
    helpers.expectType(res, 'Vec');
  });

  it('crossMagnitude(gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.crossMagnitude(gpCreate.vec());
    expect(typeof res).to.equal('number');
  });

  it('crossSquareMagnitude(gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.crossSquareMagnitude(gpCreate.vec());
    expect(typeof res).to.equal('number');
  });

  it('crossCross(gp.Vec, gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.crossCross(gpCreate.vec(), gpCreate.vec());
    helpers.expectType(res, 'Vec');
  });

  it('dot(gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.dot(gpCreate.vec());
    expect(typeof res).to.equal('number');
  });

  it('dotCross(gp.Vec, gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.dotCross(gpCreate.vec(), gpCreate.vec());
    expect(typeof res).to.equal('number');
  });

  it('normalize()', function() {
    var obj = gpCreate.vec();
    var res = obj.normalize();
  });

  it('normalized()', function() {
    var obj = gpCreate.vec();
    var res = obj.normalized();
    helpers.expectType(res, 'Vec');
  });

  it('reverse()', function() {
    var obj = gpCreate.vec();
    var res = obj.reverse();
  });

  it('reversed()', function() {
    var obj = gpCreate.vec();
    var res = obj.reversed();
    helpers.expectType(res, 'Vec');
  });

  it('setLinearForm(Double, gp.Vec, Double, gp.Vec, Double, gp.Vec, gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.setLinearForm(0.5, gpCreate.vec(), 1, gpCreate.vec(), 1.5, gpCreate.vec(), gpCreate.vec());
  });

  it('setLinearForm(Double, gp.Vec, Double, gp.Vec, Double, gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.setLinearForm(0.5, gpCreate.vec(), 1, gpCreate.vec(), 1.5, gpCreate.vec());
  });

  it('setLinearForm(Double, gp.Vec, Double, gp.Vec, gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.setLinearForm(0.5, gpCreate.vec(), 1, gpCreate.vec(), gpCreate.vec());
  });

  it('setLinearForm(Double, gp.Vec, Double, gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.setLinearForm(0.5, gpCreate.vec(), 1, gpCreate.vec());
  });

  it('setLinearForm(Double, gp.Vec, gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.setLinearForm(0.5, gpCreate.vec(), gpCreate.vec());
  });

  it('setLinearForm(gp.Vec, gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.setLinearForm(gpCreate.vec(), gpCreate.vec());
  });

  it('mirror(gp.Vec)', function() {
    var obj = gpCreate.vec();
    var res = obj.mirror(gpCreate.vec());
    helpers.expectType(res, 'Vec');
  });

  it('mirror(gp.Ax1)', function() {
    var obj = gpCreate.vec();
    var res = obj.mirror(gpCreate.ax1());
    helpers.expectType(res, 'Vec');
  });

  it('mirror(gp.Ax2)', function() {
    var obj = gpCreate.vec();
    var res = obj.mirror(gpCreate.ax2());
    helpers.expectType(res, 'Vec');
  });

  it('rotate(gp.Ax1, Double)', function() {
    var obj = gpCreate.vec();
    var res = obj.rotate(gpCreate.ax1(), 0.5);
    helpers.expectType(res, 'Vec');
  });

  it('scale(Double)', function() {
    var obj = gpCreate.vec();
    var res = obj.scale(0.5);
    helpers.expectType(res, 'Vec');
  });

  it('transform(gp.Trsf)', function() {
    var obj = gpCreate.vec();
    var res = obj.transform(gpCreate.trsf());
    helpers.expectType(res, 'Vec');
  });

  it('Vec()', function() {
    var res = new gp.Vec();
    helpers.expectType(res, 'Vec');
  });

  it('Vec(gp.Dir)', function() {
    var res = new gp.Vec(gpCreate.dir());
    helpers.expectType(res, 'Vec');
  });

  // Arguments or return type not wrapped.
  xit('Vec(gp_XYZ)', function() { });

  it('Vec(Double, Double, Double)', function() {
    var res = new gp.Vec(0.5, 1, 1.5);
    helpers.expectType(res, 'Vec');
  });

  it('Vec(gp.Pnt, gp.Pnt)', function() {
    var res = new gp.Vec(gpCreate.pnt(), gpCreate.pnt());
    helpers.expectType(res, 'Vec');
  });
});
