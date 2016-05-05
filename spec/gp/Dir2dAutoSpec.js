const gp = require('../../lib/gp.js');
var gpCreate = require('../gp/create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('gp.Dir2d', function(){

  it('x', function() {
    var obj = gpCreate.dir2d();
    var value = 0.5;
    obj.x = value;
    var res = obj.x;
    expect(obj.x).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  it('y', function() {
    var obj = gpCreate.dir2d();
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

  it('isEqual(gp.Dir2d, Double)', function() {
    var obj = gpCreate.dir2d();
    var res = obj.isEqual(gpCreate.dir2d(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('isNormal(gp.Dir2d, Double)', function() {
    var obj = gpCreate.dir2d();
    var res = obj.isNormal(gpCreate.dir2d(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('isOpposite(gp.Dir2d, Double)', function() {
    var obj = gpCreate.dir2d();
    var res = obj.isOpposite(gpCreate.dir2d(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('isParallel(gp.Dir2d, Double)', function() {
    var obj = gpCreate.dir2d();
    var res = obj.isParallel(gpCreate.dir2d(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('angle(gp.Dir2d)', function() {
    var obj = gpCreate.dir2d();
    var res = obj.angle(gpCreate.dir2d());
    expect(typeof res).to.equal('number');
  });

  it('cross(gp.Dir2d)', function() {
    var obj = gpCreate.dir2d();
    var res = obj.cross(gpCreate.dir2d());
    expect(typeof res).to.equal('number');
  });

  it('dot(gp.Dir2d)', function() {
    var obj = gpCreate.dir2d();
    var res = obj.dot(gpCreate.dir2d());
    expect(typeof res).to.equal('number');
  });

  it('reverse()', function() {
    var obj = gpCreate.dir2d();
    var res = obj.reverse();
  });

  it('reversed()', function() {
    var obj = gpCreate.dir2d();
    var res = obj.reversed();
    helpers.expectType(res, 'Dir2d');
  });

  it('mirror(gp.Dir2d)', function() {
    var obj = gpCreate.dir2d();
    var res = obj.mirror(gpCreate.dir2d());
    helpers.expectType(res, 'Dir2d');
  });

  it('mirror(gp.Ax2d)', function() {
    var obj = gpCreate.dir2d();
    var res = obj.mirror(gpCreate.ax2d());
    helpers.expectType(res, 'Dir2d');
  });

  it('rotate(Double)', function() {
    var obj = gpCreate.dir2d();
    var res = obj.rotate(0.5);
    helpers.expectType(res, 'Dir2d');
  });

  it('transform(gp.Trsf2d)', function() {
    var obj = gpCreate.dir2d();
    var res = obj.transform(gpCreate.trsf2d());
    helpers.expectType(res, 'Dir2d');
  });

  it('Dir2d()', function() {
    var res = new gp.Dir2d();
    helpers.expectType(res, 'Dir2d');
  });

  it('Dir2d(gp.Vec2d)', function() {
    var res = new gp.Dir2d(gpCreate.vec2d());
    helpers.expectType(res, 'Dir2d');
  });

  // Arguments or return type not wrapped.
  xit('Dir2d(gp_XY)', function() { });

  it('Dir2d(Double, Double)', function() {
    var res = new gp.Dir2d(0.5, 1);
    helpers.expectType(res, 'Dir2d');
  });
});
