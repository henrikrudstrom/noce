const gp = require('../../lib/gp.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('gp.Vec', function(){

  it('x', function() {
    var obj = create.gp.vec();
    var value = 0.5;
    obj.x = value;
    var res = obj.x;
    expect(obj.x).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  it('y', function() {
    var obj = create.gp.vec();
    var value = 0.5;
    obj.y = value;
    var res = obj.y;
    expect(obj.y).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  it('z', function() {
    var obj = create.gp.vec();
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
    var obj = create.gp.vec();
    var res = obj.isEqual(create.gp.vec(), 0.5, 1);
    expect(typeof res).to.equal('boolean');
  });

  it('isNormal(gp.Vec, Double)', function() {
    var obj = create.gp.vec();
    var res = obj.isNormal(create.gp.vec(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('isOpposite(gp.Vec, Double)', function() {
    var obj = create.gp.vec();
    var res = obj.isOpposite(create.gp.vec(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('isParallel(gp.Vec, Double)', function() {
    var obj = create.gp.vec();
    var res = obj.isParallel(create.gp.vec(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('angle(gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.angle(create.gp.vec());
    expect(typeof res).to.equal('number');
  });

  it('angleWithRef(gp.Vec, gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.angleWithRef(create.gp.vec(), create.gp.vec());
    expect(typeof res).to.equal('number');
  });

  it('magnitude()', function() {
    var obj = create.gp.vec();
    var res = obj.magnitude();
    expect(typeof res).to.equal('number');
  });

  it('squareMagnitude()', function() {
    var obj = create.gp.vec();
    var res = obj.squareMagnitude();
    expect(typeof res).to.equal('number');
  });

  it('add(gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.add(create.gp.vec());
  });

  it('added(gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.added(create.gp.vec());
    helpers.expectType(res, 'Vec');
  });

  it('subtract(gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.subtract(create.gp.vec());
  });

  it('subtracted(gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.subtracted(create.gp.vec());
    helpers.expectType(res, 'Vec');
  });

  it('multiply(Double)', function() {
    var obj = create.gp.vec();
    var res = obj.multiply(0.5);
  });

  it('multiplied(Double)', function() {
    var obj = create.gp.vec();
    var res = obj.multiplied(0.5);
    helpers.expectType(res, 'Vec');
  });

  it('divide(Double)', function() {
    var obj = create.gp.vec();
    var res = obj.divide(0.5);
  });

  it('divided(Double)', function() {
    var obj = create.gp.vec();
    var res = obj.divided(0.5);
    helpers.expectType(res, 'Vec');
  });

  it('cross(gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.cross(create.gp.vec());
    helpers.expectType(res, 'Vec');
  });

  it('crossMagnitude(gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.crossMagnitude(create.gp.vec());
    expect(typeof res).to.equal('number');
  });

  it('crossSquareMagnitude(gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.crossSquareMagnitude(create.gp.vec());
    expect(typeof res).to.equal('number');
  });

  it('crossCross(gp.Vec, gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.crossCross(create.gp.vec(), create.gp.vec());
    helpers.expectType(res, 'Vec');
  });

  it('dot(gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.dot(create.gp.vec());
    expect(typeof res).to.equal('number');
  });

  it('dotCross(gp.Vec, gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.dotCross(create.gp.vec(), create.gp.vec());
    expect(typeof res).to.equal('number');
  });

  it('normalize()', function() {
    var obj = create.gp.vec();
    var res = obj.normalize();
  });

  it('normalized()', function() {
    var obj = create.gp.vec();
    var res = obj.normalized();
    helpers.expectType(res, 'Vec');
  });

  it('reverse()', function() {
    var obj = create.gp.vec();
    var res = obj.reverse();
  });

  it('reversed()', function() {
    var obj = create.gp.vec();
    var res = obj.reversed();
    helpers.expectType(res, 'Vec');
  });

  it('setLinearForm(Double, gp.Vec, Double, gp.Vec, Double, gp.Vec, gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.setLinearForm(0.5, create.gp.vec(), 1, create.gp.vec(), 1.5, create.gp.vec(), create.gp.vec());
  });

  it('setLinearForm(Double, gp.Vec, Double, gp.Vec, Double, gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.setLinearForm(0.5, create.gp.vec(), 1, create.gp.vec(), 1.5, create.gp.vec());
  });

  it('setLinearForm(Double, gp.Vec, Double, gp.Vec, gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.setLinearForm(0.5, create.gp.vec(), 1, create.gp.vec(), create.gp.vec());
  });

  it('setLinearForm(Double, gp.Vec, Double, gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.setLinearForm(0.5, create.gp.vec(), 1, create.gp.vec());
  });

  it('setLinearForm(Double, gp.Vec, gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.setLinearForm(0.5, create.gp.vec(), create.gp.vec());
  });

  it('setLinearForm(gp.Vec, gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.setLinearForm(create.gp.vec(), create.gp.vec());
  });

  it('mirror(gp.Vec)', function() {
    var obj = create.gp.vec();
    var res = obj.mirror(create.gp.vec());
    helpers.expectType(res, 'Vec');
  });

  it('mirror(gp.Ax1)', function() {
    var obj = create.gp.vec();
    var res = obj.mirror(create.gp.ax1());
    helpers.expectType(res, 'Vec');
  });

  it('mirror(gp.Ax2)', function() {
    var obj = create.gp.vec();
    var res = obj.mirror(create.gp.ax2());
    helpers.expectType(res, 'Vec');
  });

  it('rotate(gp.Ax1, Double)', function() {
    var obj = create.gp.vec();
    var res = obj.rotate(create.gp.ax1(), 0.5);
    helpers.expectType(res, 'Vec');
  });

  it('scale(Double)', function() {
    var obj = create.gp.vec();
    var res = obj.scale(0.5);
    helpers.expectType(res, 'Vec');
  });

  it('transform(gp.Trsf)', function() {
    var obj = create.gp.vec();
    var res = obj.transform(create.gp.trsf());
    helpers.expectType(res, 'Vec');
  });

  it('Vec()', function() {
    var res = new gp.Vec();
    helpers.expectType(res, 'Vec');
  });

  it('Vec(gp.Dir)', function() {
    var res = new gp.Vec(create.gp.dir());
    helpers.expectType(res, 'Vec');
  });

  // Arguments or return type not wrapped.
  xit('Vec(gp_XYZ)', function() { });

  it('Vec(Double, Double, Double)', function() {
    var res = new gp.Vec(0.5, 1, 1.5);
    helpers.expectType(res, 'Vec');
  });

  it('Vec(gp.Pnt, gp.Pnt)', function() {
    var res = new gp.Vec(create.gp.pnt(), create.gp.pnt());
    helpers.expectType(res, 'Vec');
  });
});
