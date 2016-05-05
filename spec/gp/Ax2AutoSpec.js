const gp = require('../../lib/gp.js');
var gpCreate = require('../gp/create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('gp.Ax2', function(){

  it('setAxis(gp.Ax1)', function() {
    var obj = gpCreate.ax2();
    var res = obj.setAxis(gpCreate.ax1());
  });

  it('setDirection(gp.Dir)', function() {
    var obj = gpCreate.ax2();
    var res = obj.setDirection(gpCreate.dir());
  });

  it('setLocation(gp.Pnt)', function() {
    var obj = gpCreate.ax2();
    var res = obj.setLocation(gpCreate.pnt());
  });

  it('setXdirection(gp.Dir)', function() {
    var obj = gpCreate.ax2();
    var res = obj.setXdirection(gpCreate.dir());
  });

  it('setYdirection(gp.Dir)', function() {
    var obj = gpCreate.ax2();
    var res = obj.setYdirection(gpCreate.dir());
  });

  it('angle(gp.Ax2)', function() {
    var obj = gpCreate.ax2();
    var res = obj.angle(gpCreate.ax2());
    expect(typeof res).to.equal('number');
  });

  it('axis()', function() {
    var obj = gpCreate.ax2();
    var res = obj.axis();
    helpers.expectType(res, 'Ax1');
  });

  it('direction()', function() {
    var obj = gpCreate.ax2();
    var res = obj.direction();
    helpers.expectType(res, 'Dir');
  });

  it('location()', function() {
    var obj = gpCreate.ax2();
    var res = obj.location();
    helpers.expectType(res, 'Pnt');
  });

  it('xdirection()', function() {
    var obj = gpCreate.ax2();
    var res = obj.xdirection();
    helpers.expectType(res, 'Dir');
  });

  it('ydirection()', function() {
    var obj = gpCreate.ax2();
    var res = obj.ydirection();
    helpers.expectType(res, 'Dir');
  });

  it('isCoplanar(gp.Ax2, Double, Double)', function() {
    var obj = gpCreate.ax2();
    var res = obj.isCoplanar(gpCreate.ax2(), 0.5, 1);
    expect(typeof res).to.equal('boolean');
  });

  it('isCoplanar(gp.Ax1, Double, Double)', function() {
    var obj = gpCreate.ax2();
    var res = obj.isCoplanar(gpCreate.ax1(), 0.5, 1);
    expect(typeof res).to.equal('boolean');
  });

  it('mirror(gp.Pnt)', function() {
    var obj = gpCreate.ax2();
    var res = obj.mirror(gpCreate.pnt());
    helpers.expectType(res, 'Ax2');
  });

  it('mirror(gp.Ax1)', function() {
    var obj = gpCreate.ax2();
    var res = obj.mirror(gpCreate.ax1());
    helpers.expectType(res, 'Ax2');
  });

  it('mirror(gp.Ax2)', function() {
    var obj = gpCreate.ax2();
    var res = obj.mirror(gpCreate.ax2());
    helpers.expectType(res, 'Ax2');
  });

  it('rotate(gp.Ax1, Double)', function() {
    var obj = gpCreate.ax2();
    var res = obj.rotate(gpCreate.ax1(), 0.5);
    helpers.expectType(res, 'Ax2');
  });

  it('scale(gp.Pnt, Double)', function() {
    var obj = gpCreate.ax2();
    var res = obj.scale(gpCreate.pnt(), 0.5);
    helpers.expectType(res, 'Ax2');
  });

  it('transform(gp.Trsf)', function() {
    var obj = gpCreate.ax2();
    var res = obj.transform(gpCreate.trsf());
    helpers.expectType(res, 'Ax2');
  });

  it('translate(gp.Vec)', function() {
    var obj = gpCreate.ax2();
    var res = obj.translate(gpCreate.vec());
    helpers.expectType(res, 'Ax2');
  });

  it('translate(gp.Pnt, gp.Pnt)', function() {
    var obj = gpCreate.ax2();
    var res = obj.translate(gpCreate.pnt(), gpCreate.pnt());
    helpers.expectType(res, 'Ax2');
  });

  it('Ax2()', function() {
    var res = new gp.Ax2();
    helpers.expectType(res, 'Ax2');
  });
// ${excludedReason}

  it('Ax2(gp.Pnt, gp.Dir)', function() {
    var res = new gp.Ax2(gpCreate.pnt(), gpCreate.dir());
    helpers.expectType(res, 'Ax2');
  });
});
