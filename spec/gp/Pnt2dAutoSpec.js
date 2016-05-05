const gp = require('../../lib/gp.js');
var gpCreate = require('../gp/create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('gp.Pnt2d', function(){

  it('x', function() {
    var obj = gpCreate.pnt2d();
    var value = 0.5;
    obj.x = value;
    var res = obj.x;
    expect(obj.x).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  it('y', function() {
    var obj = gpCreate.pnt2d();
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
    var obj = gpCreate.pnt2d();
    var res = obj.isEqual(gpCreate.pnt2d(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('distance(gp.Pnt2d)', function() {
    var obj = gpCreate.pnt2d();
    var res = obj.distance(gpCreate.pnt2d());
    expect(typeof res).to.equal('number');
  });

  it('squareDistance(gp.Pnt2d)', function() {
    var obj = gpCreate.pnt2d();
    var res = obj.squareDistance(gpCreate.pnt2d());
    expect(typeof res).to.equal('number');
  });

  it('mirror(gp.Pnt2d)', function() {
    var obj = gpCreate.pnt2d();
    var res = obj.mirror(gpCreate.pnt2d());
    helpers.expectType(res, 'Pnt2d');
  });

  it('mirror(gp.Ax2d)', function() {
    var obj = gpCreate.pnt2d();
    var res = obj.mirror(gpCreate.ax2d());
    helpers.expectType(res, 'Pnt2d');
  });

  it('rotate(gp.Pnt2d, Double)', function() {
    var obj = gpCreate.pnt2d();
    var res = obj.rotate(gpCreate.pnt2d(), 0.5);
    helpers.expectType(res, 'Pnt2d');
  });

  it('scale(gp.Pnt2d, Double)', function() {
    var obj = gpCreate.pnt2d();
    var res = obj.scale(gpCreate.pnt2d(), 0.5);
    helpers.expectType(res, 'Pnt2d');
  });

  it('transform(gp.Trsf2d)', function() {
    var obj = gpCreate.pnt2d();
    var res = obj.transform(gpCreate.trsf2d());
    helpers.expectType(res, 'Pnt2d');
  });

  it('translate(gp.Vec2d)', function() {
    var obj = gpCreate.pnt2d();
    var res = obj.translate(gpCreate.vec2d());
    helpers.expectType(res, 'Pnt2d');
  });

  it('translate(gp.Pnt2d, gp.Pnt2d)', function() {
    var obj = gpCreate.pnt2d();
    var res = obj.translate(gpCreate.pnt2d(), gpCreate.pnt2d());
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
