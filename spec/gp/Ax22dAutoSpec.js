const gp = require('../../lib/gp.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('gp.Ax22d', function(){

  it('setAxis(gp.Ax22d)', function() {
    var obj = create.gp.ax22d();
    var res = obj.setAxis(create.gp.ax22d());
  });

  it('setXaxis(gp.Ax2d)', function() {
    var obj = create.gp.ax22d();
    var res = obj.setXaxis(create.gp.ax2d());
  });

  it('setYaxis(gp.Ax2d)', function() {
    var obj = create.gp.ax22d();
    var res = obj.setYaxis(create.gp.ax2d());
  });

  it('setLocation(gp.Pnt2d)', function() {
    var obj = create.gp.ax22d();
    var res = obj.setLocation(create.gp.pnt2d());
  });

  it('setXdirection(gp.Dir2d)', function() {
    var obj = create.gp.ax22d();
    var res = obj.setXdirection(create.gp.dir2d());
  });

  it('setYdirection(gp.Dir2d)', function() {
    var obj = create.gp.ax22d();
    var res = obj.setYdirection(create.gp.dir2d());
  });

  it('xaxis()', function() {
    var obj = create.gp.ax22d();
    var res = obj.xaxis();
    helpers.expectType(res, 'Ax2d');
  });

  it('yaxis()', function() {
    var obj = create.gp.ax22d();
    var res = obj.yaxis();
    helpers.expectType(res, 'Ax2d');
  });

  it('location()', function() {
    var obj = create.gp.ax22d();
    var res = obj.location();
    helpers.expectType(res, 'Pnt2d');
  });

  it('xdirection()', function() {
    var obj = create.gp.ax22d();
    var res = obj.xdirection();
    helpers.expectType(res, 'Dir2d');
  });

  it('ydirection()', function() {
    var obj = create.gp.ax22d();
    var res = obj.ydirection();
    helpers.expectType(res, 'Dir2d');
  });

  it('mirror(gp.Pnt2d)', function() {
    var obj = create.gp.ax22d();
    var res = obj.mirror(create.gp.pnt2d());
    helpers.expectType(res, 'Ax22d');
  });

  it('mirror(gp.Ax2d)', function() {
    var obj = create.gp.ax22d();
    var res = obj.mirror(create.gp.ax2d());
    helpers.expectType(res, 'Ax22d');
  });

  it('rotate(gp.Pnt2d, Double)', function() {
    var obj = create.gp.ax22d();
    var res = obj.rotate(create.gp.pnt2d(), 0.5);
    helpers.expectType(res, 'Ax22d');
  });

  it('scale(gp.Pnt2d, Double)', function() {
    var obj = create.gp.ax22d();
    var res = obj.scale(create.gp.pnt2d(), 0.5);
    helpers.expectType(res, 'Ax22d');
  });

  it('transform(gp.Trsf2d)', function() {
    var obj = create.gp.ax22d();
    var res = obj.transform(create.gp.trsf2d());
    helpers.expectType(res, 'Ax22d');
  });

  it('translate(gp.Vec2d)', function() {
    var obj = create.gp.ax22d();
    var res = obj.translate(create.gp.vec2d());
    helpers.expectType(res, 'Ax22d');
  });

  it('translate(gp.Pnt2d, gp.Pnt2d)', function() {
    var obj = create.gp.ax22d();
    var res = obj.translate(create.gp.pnt2d(), create.gp.pnt2d());
    helpers.expectType(res, 'Ax22d');
  });

  it('Ax22d()', function() {
    var res = new gp.Ax22d();
    helpers.expectType(res, 'Ax22d');
  });

  it('Ax22d(gp.Pnt2d, gp.Dir2d, gp.Dir2d)', function() {
    var res = new gp.Ax22d(create.gp.pnt2d(), create.gp.dir2d(), create.gp.dir2d());
    helpers.expectType(res, 'Ax22d');
  });

  it('Ax22d(gp.Pnt2d, gp.Dir2d, Boolean)', function() {
    var res = new gp.Ax22d(create.gp.pnt2d(), create.gp.dir2d(), false);
    helpers.expectType(res, 'Ax22d');
  });

  it('Ax22d(gp.Ax2d, Boolean)', function() {
    var res = new gp.Ax22d(create.gp.ax2d(), false);
    helpers.expectType(res, 'Ax22d');
  });
});
