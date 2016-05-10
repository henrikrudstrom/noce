const gp = require('../../lib/gp.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('gp.Pnt', function(){

  it('x', function() {
    var obj = create.gp.pnt();
    var value = 0.5;
    obj.x = value;
    var res = obj.x;
    expect(obj.x).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  it('y', function() {
    var obj = create.gp.pnt();
    var value = 0.5;
    obj.y = value;
    var res = obj.y;
    expect(obj.y).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  it('z', function() {
    var obj = create.gp.pnt();
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

  it('baryCenter(Double, gp.Pnt, Double)', function() {
    var obj = create.gp.pnt();
    var res = obj.baryCenter(0.5, create.gp.pnt(), 1);
  });

  it('isEqual(gp.Pnt, Double)', function() {
    var obj = create.gp.pnt();
    var res = obj.isEqual(create.gp.pnt(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('distance(gp.Pnt)', function() {
    var obj = create.gp.pnt();
    var res = obj.distance(create.gp.pnt());
    expect(typeof res).to.equal('number');
  });

  it('squareDistance(gp.Pnt)', function() {
    var obj = create.gp.pnt();
    var res = obj.squareDistance(create.gp.pnt());
    expect(typeof res).to.equal('number');
  });

  it('mirror(gp.Pnt)', function() {
    var obj = create.gp.pnt();
    var res = obj.mirror(create.gp.pnt());
    helpers.expectType(res, 'Pnt');
  });

  it('mirror(gp.Ax1)', function() {
    var obj = create.gp.pnt();
    var res = obj.mirror(create.gp.ax1());
    helpers.expectType(res, 'Pnt');
  });

  it('mirror(gp.Ax2)', function() {
    var obj = create.gp.pnt();
    var res = obj.mirror(create.gp.ax2());
    helpers.expectType(res, 'Pnt');
  });

  it('rotate(gp.Ax1, Double)', function() {
    var obj = create.gp.pnt();
    var res = obj.rotate(create.gp.ax1(), 0.5);
    helpers.expectType(res, 'Pnt');
  });

  it('scale(gp.Pnt, Double)', function() {
    var obj = create.gp.pnt();
    var res = obj.scale(create.gp.pnt(), 0.5);
    helpers.expectType(res, 'Pnt');
  });

  it('transform(gp.Trsf)', function() {
    var obj = create.gp.pnt();
    var res = obj.transform(create.gp.trsf());
    helpers.expectType(res, 'Pnt');
  });

  it('translate(gp.Vec)', function() {
    var obj = create.gp.pnt();
    var res = obj.translate(create.gp.vec());
    helpers.expectType(res, 'Pnt');
  });

  it('translate(gp.Pnt, gp.Pnt)', function() {
    var obj = create.gp.pnt();
    var res = obj.translate(create.gp.pnt(), create.gp.pnt());
    helpers.expectType(res, 'Pnt');
  });

  it('Pnt()', function() {
    var res = new gp.Pnt();
    helpers.expectType(res, 'Pnt');
  });

  // Arguments or return type not wrapped.
  xit('Pnt(gp_XYZ)', function() { });

  it('Pnt(Double, Double, Double)', function() {
    var res = new gp.Pnt(0.5, 1, 1.5);
    helpers.expectType(res, 'Pnt');
  });
});
