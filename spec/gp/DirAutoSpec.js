const gp = require('../../lib/gp.js');
var gpCreate = require('../gp/create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('gp.Dir', function(){

  it('x', function() {
    var obj = gpCreate.dir();
    var value = 0.5;
    obj.x = value;
    var res = obj.x;
    expect(obj.x).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  it('y', function() {
    var obj = gpCreate.dir();
    var value = 0.5;
    obj.y = value;
    var res = obj.y;
    expect(obj.y).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  it('z', function() {
    var obj = gpCreate.dir();
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

  it('isEqual(gp.Dir, Double)', function() {
    var obj = gpCreate.dir();
    var res = obj.isEqual(gpCreate.dir(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('isNormal(gp.Dir, Double)', function() {
    var obj = gpCreate.dir();
    var res = obj.isNormal(gpCreate.dir(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('isOpposite(gp.Dir, Double)', function() {
    var obj = gpCreate.dir();
    var res = obj.isOpposite(gpCreate.dir(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('isParallel(gp.Dir, Double)', function() {
    var obj = gpCreate.dir();
    var res = obj.isParallel(gpCreate.dir(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('angle(gp.Dir)', function() {
    var obj = gpCreate.dir();
    var res = obj.angle(gpCreate.dir());
    expect(typeof res).to.equal('number');
  });

  it('angleWithRef(gp.Dir, gp.Dir)', function() {
    var obj = gpCreate.dir();
    var res = obj.angleWithRef(gpCreate.dir(), gpCreate.dir());
    expect(typeof res).to.equal('number');
  });
// ${excludedReason}
// ${excludedReason}

  it('dot(gp.Dir)', function() {
    var obj = gpCreate.dir();
    var res = obj.dot(gpCreate.dir());
    expect(typeof res).to.equal('number');
  });

  it('dotCross(gp.Dir, gp.Dir)', function() {
    var obj = gpCreate.dir();
    var res = obj.dotCross(gpCreate.dir(), gpCreate.dir());
    expect(typeof res).to.equal('number');
  });

  it('reverse()', function() {
    var obj = gpCreate.dir();
    var res = obj.reverse();
  });

  it('reversed()', function() {
    var obj = gpCreate.dir();
    var res = obj.reversed();
    helpers.expectType(res, 'Dir');
  });

  it('mirror(gp.Dir)', function() {
    var obj = gpCreate.dir();
    var res = obj.mirror(gpCreate.dir());
    helpers.expectType(res, 'Dir');
  });

  it('mirror(gp.Ax1)', function() {
    var obj = gpCreate.dir();
    var res = obj.mirror(gpCreate.ax1());
    helpers.expectType(res, 'Dir');
  });

  it('mirror(gp.Ax2)', function() {
    var obj = gpCreate.dir();
    var res = obj.mirror(gpCreate.ax2());
    helpers.expectType(res, 'Dir');
  });

  it('rotate(gp.Ax1, Double)', function() {
    var obj = gpCreate.dir();
    var res = obj.rotate(gpCreate.ax1(), 0.5);
    helpers.expectType(res, 'Dir');
  });

  it('transform(gp.Trsf)', function() {
    var obj = gpCreate.dir();
    var res = obj.transform(gpCreate.trsf());
    helpers.expectType(res, 'Dir');
  });

  it('Dir()', function() {
    var res = new gp.Dir();
    helpers.expectType(res, 'Dir');
  });

  it('Dir(gp.Vec)', function() {
    var res = new gp.Dir(gpCreate.vec());
    helpers.expectType(res, 'Dir');
  });

  // Arguments or return type not wrapped.
  xit('Dir(gp_XYZ)', function() { });

  it('Dir(Double, Double, Double)', function() {
    var res = new gp.Dir(0.5, 1, 1.5);
    helpers.expectType(res, 'Dir');
  });
});
