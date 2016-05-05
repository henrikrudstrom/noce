const gp = require('../../lib/gp.js');
var gpCreate = require('../gp/create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('gp.Ax2d', function(){

  it('setLocation(gp.Pnt2d)', function() {
    var obj = gpCreate.ax2d();
    var res = obj.setLocation(gpCreate.pnt2d());
  });

  it('setDirection(gp.Dir2d)', function() {
    var obj = gpCreate.ax2d();
    var res = obj.setDirection(gpCreate.dir2d());
  });

  it('location()', function() {
    var obj = gpCreate.ax2d();
    var res = obj.location();
    helpers.expectType(res, 'Pnt2d');
  });

  it('direction()', function() {
    var obj = gpCreate.ax2d();
    var res = obj.direction();
    helpers.expectType(res, 'Dir2d');
  });

  it('isCoaxial(gp.Ax2d, Double, Double)', function() {
    var obj = gpCreate.ax2d();
    var res = obj.isCoaxial(gpCreate.ax2d(), 0.5, 1);
    expect(typeof res).to.equal('boolean');
  });

  it('isNormal(gp.Ax2d, Double)', function() {
    var obj = gpCreate.ax2d();
    var res = obj.isNormal(gpCreate.ax2d(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('isOpposite(gp.Ax2d, Double)', function() {
    var obj = gpCreate.ax2d();
    var res = obj.isOpposite(gpCreate.ax2d(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('isParallel(gp.Ax2d, Double)', function() {
    var obj = gpCreate.ax2d();
    var res = obj.isParallel(gpCreate.ax2d(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('angle(gp.Ax2d)', function() {
    var obj = gpCreate.ax2d();
    var res = obj.angle(gpCreate.ax2d());
    expect(typeof res).to.equal('number');
  });

  it('reverse()', function() {
    var obj = gpCreate.ax2d();
    var res = obj.reverse();
  });

  it('reversed()', function() {
    var obj = gpCreate.ax2d();
    var res = obj.reversed();
    helpers.expectType(res, 'Ax2d');
  });

  it('mirror(gp.Pnt2d)', function() {
    var obj = gpCreate.ax2d();
    var res = obj.mirror(gpCreate.pnt2d());
    helpers.expectType(res, 'Ax2d');
  });

  it('mirror(gp.Ax2d)', function() {
    var obj = gpCreate.ax2d();
    var res = obj.mirror(gpCreate.ax2d());
    helpers.expectType(res, 'Ax2d');
  });

  it('rotate(gp.Pnt2d, Double)', function() {
    var obj = gpCreate.ax2d();
    var res = obj.rotate(gpCreate.pnt2d(), 0.5);
    helpers.expectType(res, 'Ax2d');
  });

  it('scale(gp.Pnt2d, Double)', function() {
    var obj = gpCreate.ax2d();
    var res = obj.scale(gpCreate.pnt2d(), 0.5);
    helpers.expectType(res, 'Ax2d');
  });

  it('transform(gp.Trsf2d)', function() {
    var obj = gpCreate.ax2d();
    var res = obj.transform(gpCreate.trsf2d());
    helpers.expectType(res, 'Ax2d');
  });

  it('translate(gp.Vec2d)', function() {
    var obj = gpCreate.ax2d();
    var res = obj.translate(gpCreate.vec2d());
    helpers.expectType(res, 'Ax2d');
  });

  it('translate(gp.Pnt2d, gp.Pnt2d)', function() {
    var obj = gpCreate.ax2d();
    var res = obj.translate(gpCreate.pnt2d(), gpCreate.pnt2d());
    helpers.expectType(res, 'Ax2d');
  });

  it('Ax2d()', function() {
    var res = new gp.Ax2d();
    helpers.expectType(res, 'Ax2d');
  });

  it('Ax2d(gp.Pnt2d, gp.Dir2d)', function() {
    var res = new gp.Ax2d(gpCreate.pnt2d(), gpCreate.dir2d());
    helpers.expectType(res, 'Ax2d');
  });
});
