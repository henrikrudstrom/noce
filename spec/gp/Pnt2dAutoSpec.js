const gp = require('../../lib/gp.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('gp.Pnt2d', function(){

  it('x', function() {
    var obj = create.gp.pnt2d();
    var value = 0.5;
    obj.x = value;
    var res = obj.x;
    expect(obj.x).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  it('y', function() {
    var obj = create.gp.pnt2d();
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

  it('isEqual(gp.Pnt2d, Double)', function() {
    var obj = create.gp.pnt2d();
    var res = obj.isEqual(create.gp.pnt2d(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('distance(gp.Pnt2d)', function() {
    var obj = create.gp.pnt2d();
    var res = obj.distance(create.gp.pnt2d());
    expect(typeof res).to.equal('number');
  });

  it('squareDistance(gp.Pnt2d)', function() {
    var obj = create.gp.pnt2d();
    var res = obj.squareDistance(create.gp.pnt2d());
    expect(typeof res).to.equal('number');
  });

  it('mirror(gp.Pnt2d)', function() {
    var obj = create.gp.pnt2d();
    var res = obj.mirror(create.gp.pnt2d());
    helpers.expectType(res, 'Pnt2d');
  });

  it('mirror(gp.Ax2d)', function() {
    var obj = create.gp.pnt2d();
    var res = obj.mirror(create.gp.ax2d());
    helpers.expectType(res, 'Pnt2d');
  });

  it('rotate(gp.Pnt2d, Double)', function() {
    var obj = create.gp.pnt2d();
    var res = obj.rotate(create.gp.pnt2d(), 0.5);
    helpers.expectType(res, 'Pnt2d');
  });

  it('scale(gp.Pnt2d, Double)', function() {
    var obj = create.gp.pnt2d();
    var res = obj.scale(create.gp.pnt2d(), 0.5);
    helpers.expectType(res, 'Pnt2d');
  });

  it('transform(gp.Trsf2d)', function() {
    var obj = create.gp.pnt2d();
    var res = obj.transform(create.gp.trsf2d());
    helpers.expectType(res, 'Pnt2d');
  });

  it('translate(gp.Vec2d)', function() {
    var obj = create.gp.pnt2d();
    var res = obj.translate(create.gp.vec2d());
    helpers.expectType(res, 'Pnt2d');
  });

  it('translate(gp.Pnt2d, gp.Pnt2d)', function() {
    var obj = create.gp.pnt2d();
    var res = obj.translate(create.gp.pnt2d(), create.gp.pnt2d());
    helpers.expectType(res, 'Pnt2d');
  });

  it('Pnt2d()', function() {
    var res = new gp.Pnt2d();
    helpers.expectType(res, 'Pnt2d');
  });

  // Arguments or return type not wrapped.
  xit('Pnt2d(gp_XY)', function() { });

  it('Pnt2d(Double, Double)', function() {
    var res = new gp.Pnt2d(0.5, 1);
    helpers.expectType(res, 'Pnt2d');
  });
});
