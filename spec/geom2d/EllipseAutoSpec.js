const geom2d = require('../../lib/geom2d.js');
const gp = require('../../lib/gp.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('geom2d.Ellipse', function(){

  // Arguments or return type not wrapped.
  xit('setElips2D(gp_Elips2d)', function() { });

  it('setMajorRadius(Double)', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.setMajorRadius(0.5);
  });

  it('setMinorRadius(Double)', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.setMinorRadius(0.5);
  });

  // Arguments or return type not wrapped.
  xit('elips2D()', function() { });

  it('reversedParameter(Double)', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.reversedParameter(0.5);
    expect(typeof res).to.equal('number');
  });

  it('directrix1()', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.directrix1();
    helpers.expectType(res, 'Ax2d');
  });

  it('directrix2()', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.directrix2();
    helpers.expectType(res, 'Ax2d');
  });

  it('eccentricity()', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.eccentricity();
    expect(typeof res).to.equal('number');
  });

  it('focal()', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.focal();
    expect(typeof res).to.equal('number');
  });

  it('focus1()', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.focus1();
    helpers.expectType(res, 'Pnt2d');
  });

  it('focus2()', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.focus2();
    helpers.expectType(res, 'Pnt2d');
  });

  it('majorRadius()', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.majorRadius();
    expect(typeof res).to.equal('number');
  });

  it('minorRadius()', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.minorRadius();
    expect(typeof res).to.equal('number');
  });

  it('parameter()', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.parameter();
    expect(typeof res).to.equal('number');
  });

  it('firstParameter()', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.firstParameter();
    expect(typeof res).to.equal('number');
  });

  it('lastParameter()', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.lastParameter();
    expect(typeof res).to.equal('number');
  });

  it('isClosed()', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.isClosed();
    expect(typeof res).to.equal('boolean');
  });

  it('isPeriodic()', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.isPeriodic();
    expect(typeof res).to.equal('boolean');
  });

  it('d0(Double, gp.Pnt2d)', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.d0(0.5);
    helpers.expectType(res, 'Pnt2d');
  });

  it('d1(Double, gp.Pnt2d, gp.Vec2d)', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.d1(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt2d');
    helpers.expectType(res.v1, 'gp.Vec2d');
  });

  it('d2(Double, gp.Pnt2d, gp.Vec2d, gp.Vec2d)', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.d2(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt2d');
    helpers.expectType(res.v1, 'gp.Vec2d');
    helpers.expectType(res.v2, 'gp.Vec2d');
  });

  it('d3(Double, gp.Pnt2d, gp.Vec2d, gp.Vec2d, gp.Vec2d)', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.d3(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt2d');
    helpers.expectType(res.v1, 'gp.Vec2d');
    helpers.expectType(res.v2, 'gp.Vec2d');
    helpers.expectType(res.v3, 'gp.Vec2d');
  });

  it('dn(Double, Integer)', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.dn(0.5, 2);
    helpers.expectType(res, 'Vec2d');
  });

  it('transform(gp.Trsf2d)', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.transform(create.gp.trsf2d());
  });

  it('copy()', function() {
    var obj = create.geom2d.ellipse();
    var res = obj.copy();
    helpers.expectType(res, 'Ellipse');
  });

  // Arguments or return type not wrapped.
  xit('Ellipse(gp_Elips2d)', function() { });

  it('Ellipse(gp.Ax2d, Double, Double, Boolean)', function() {
    var res = new geom2d.Ellipse(create.gp.ax2d(), 0.5, 1, false);
    helpers.expectType(res, 'Ellipse');
  });

  it('Ellipse(gp.Ax22d, Double, Double)', function() {
    var res = new geom2d.Ellipse(create.gp.ax22d(), 0.5, 1);
    helpers.expectType(res, 'Ellipse');
  });
});
