const gp = require('../../lib/gp.js');
var gpCreate = require('../gp/create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('gp.Ax22d', function(){

  it('setAxis(gp.Ax22d)', function() {
    var obj = gpCreate.ax22d();
    var res = obj.setAxis(gpCreate.ax22d());
  });

  it('setXaxis(gp.Ax2d)', function() {
    var obj = gpCreate.ax22d();
    var res = obj.setXaxis(gpCreate.ax2d());
  });

  it('setYaxis(gp.Ax2d)', function() {
    var obj = gpCreate.ax22d();
    var res = obj.setYaxis(gpCreate.ax2d());
  });

  it('setLocation(gp.Pnt2d)', function() {
    var obj = gpCreate.ax22d();
    var res = obj.setLocation(gpCreate.pnt2d());
  });

  it('setXdirection(gp.Dir2d)', function() {
    var obj = gpCreate.ax22d();
    var res = obj.setXdirection(gpCreate.dir2d());
  });

  it('setYdirection(gp.Dir2d)', function() {
    var obj = gpCreate.ax22d();
    var res = obj.setYdirection(gpCreate.dir2d());
  });

  it('xaxis()', function() {
    var obj = gpCreate.ax22d();
    var res = obj.xaxis();
    helpers.expectType(res, 'Ax2d');
  });

  it('yaxis()', function() {
    var obj = gpCreate.ax22d();
    var res = obj.yaxis();
    helpers.expectType(res, 'Ax2d');
  });

  it('location()', function() {
    var obj = gpCreate.ax22d();
    var res = obj.location();
    helpers.expectType(res, 'Pnt2d');
  });

  it('xdirection()', function() {
    var obj = gpCreate.ax22d();
    var res = obj.xdirection();
    helpers.expectType(res, 'Dir2d');
  });

  it('ydirection()', function() {
    var obj = gpCreate.ax22d();
    var res = obj.ydirection();
    helpers.expectType(res, 'Dir2d');
  });

  it('mirror(gp.Pnt2d)', function() {
    var obj = gpCreate.ax22d();
    var res = obj.mirror(gpCreate.pnt2d());
    helpers.expectType(res, 'Ax22d');
  });

  it('mirror(gp.Ax2d)', function() {
    var obj = gpCreate.ax22d();
    var res = obj.mirror(gpCreate.ax2d());
    helpers.expectType(res, 'Ax22d');
  });

  it('rotate(gp.Pnt2d, Double)', function() {
    var obj = gpCreate.ax22d();
    var res = obj.rotate(gpCreate.pnt2d(), 0.5);
    helpers.expectType(res, 'Ax22d');
  });

  it('scale(gp.Pnt2d, Double)', function() {
    var obj = gpCreate.ax22d();
    var res = obj.scale(gpCreate.pnt2d(), 0.5);
    helpers.expectType(res, 'Ax22d');
  });

  it('transform(gp.Trsf2d)', function() {
    var obj = gpCreate.ax22d();
    var res = obj.transform(gpCreate.trsf2d());
    helpers.expectType(res, 'Ax22d');
  });

  it('translate(gp.Vec2d)', function() {
    var obj = gpCreate.ax22d();
    var res = obj.translate(gpCreate.vec2d());
    helpers.expectType(res, 'Ax22d');
  });

  it('translate(gp.Pnt2d, gp.Pnt2d)', function() {
    var obj = gpCreate.ax22d();
    var res = obj.translate(gpCreate.pnt2d(), gpCreate.pnt2d());
    helpers.expectType(res, 'Ax22d');
  });

  it('Ax22d()', function() {
    var res = new gp.Ax22d();
    helpers.expectType(res, 'Ax22d');
  });

  it('Ax22d(gp.Pnt2d, gp.Dir2d, gp.Dir2d)', function() {
    var res = new gp.Ax22d(gpCreate.pnt2d(), gpCreate.dir2d(), gpCreate.dir2d());
    helpers.expectType(res, 'Ax22d');
  });

  it('Ax22d(gp.Pnt2d, gp.Dir2d, Boolean)', function() {
    var res = new gp.Ax22d(gpCreate.pnt2d(), gpCreate.dir2d(), false);
    helpers.expectType(res, 'Ax22d');
  });

  it('Ax22d(gp.Ax2d, Boolean)', function() {
    var res = new gp.Ax22d(gpCreate.ax2d(), false);
    helpers.expectType(res, 'Ax22d');
  });
});
