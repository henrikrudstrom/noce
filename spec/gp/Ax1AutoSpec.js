const gp = require('../../lib/gp.js');
var gpCreate = require('../gp/create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('gp.Ax1', function(){

  it('setDirection(gp.Dir)', function() {
    var obj = gpCreate.ax1();
    var res = obj.setDirection(gpCreate.dir());
  });

  it('setLocation(gp.Pnt)', function() {
    var obj = gpCreate.ax1();
    var res = obj.setLocation(gpCreate.pnt());
  });

  it('direction()', function() {
    var obj = gpCreate.ax1();
    var res = obj.direction();
    helpers.expectType(res, 'Dir');
  });

  it('location()', function() {
    var obj = gpCreate.ax1();
    var res = obj.location();
    helpers.expectType(res, 'Pnt');
  });

  it('isCoaxial(gp.Ax1, Double, Double)', function() {
    var obj = gpCreate.ax1();
    var res = obj.isCoaxial(gpCreate.ax1(), 0.5, 1);
    expect(typeof res).to.equal('boolean');
  });

  it('isNormal(gp.Ax1, Double)', function() {
    var obj = gpCreate.ax1();
    var res = obj.isNormal(gpCreate.ax1(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('isOpposite(gp.Ax1, Double)', function() {
    var obj = gpCreate.ax1();
    var res = obj.isOpposite(gpCreate.ax1(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('isParallel(gp.Ax1, Double)', function() {
    var obj = gpCreate.ax1();
    var res = obj.isParallel(gpCreate.ax1(), 0.5);
    expect(typeof res).to.equal('boolean');
  });

  it('angle(gp.Ax1)', function() {
    var obj = gpCreate.ax1();
    var res = obj.angle(gpCreate.ax1());
    expect(typeof res).to.equal('number');
  });

  it('reverse()', function() {
    var obj = gpCreate.ax1();
    var res = obj.reverse();
  });

  it('reversed()', function() {
    var obj = gpCreate.ax1();
    var res = obj.reversed();
    helpers.expectType(res, 'Ax1');
  });

  it('mirror(gp.Pnt)', function() {
    var obj = gpCreate.ax1();
    var res = obj.mirror(gpCreate.pnt());
    helpers.expectType(res, 'Ax1');
  });

  it('mirror(gp.Ax1)', function() {
    var obj = gpCreate.ax1();
    var res = obj.mirror(gpCreate.ax1());
    helpers.expectType(res, 'Ax1');
  });

  it('mirror(gp.Ax2)', function() {
    var obj = gpCreate.ax1();
    var res = obj.mirror(gpCreate.ax2());
    helpers.expectType(res, 'Ax1');
  });

  it('rotate(gp.Ax1, Double)', function() {
    var obj = gpCreate.ax1();
    var res = obj.rotate(gpCreate.ax1(), 0.5);
    helpers.expectType(res, 'Ax1');
  });

  it('scale(gp.Pnt, Double)', function() {
    var obj = gpCreate.ax1();
    var res = obj.scale(gpCreate.pnt(), 0.5);
    helpers.expectType(res, 'Ax1');
  });

  it('transform(gp.Trsf)', function() {
    var obj = gpCreate.ax1();
    var res = obj.transform(gpCreate.trsf());
    helpers.expectType(res, 'Ax1');
  });

  it('translate(gp.Vec)', function() {
    var obj = gpCreate.ax1();
    var res = obj.translate(gpCreate.vec());
    helpers.expectType(res, 'Ax1');
  });

  it('translate(gp.Pnt, gp.Pnt)', function() {
    var obj = gpCreate.ax1();
    var res = obj.translate(gpCreate.pnt(), gpCreate.pnt());
    helpers.expectType(res, 'Ax1');
  });

  it('Ax1()', function() {
    var res = new gp.Ax1();
    helpers.expectType(res, 'Ax1');
  });

  it('Ax1(gp.Pnt, gp.Dir)', function() {
    var res = new gp.Ax1(gpCreate.pnt(), gpCreate.dir());
    helpers.expectType(res, 'Ax1');
  });
});
