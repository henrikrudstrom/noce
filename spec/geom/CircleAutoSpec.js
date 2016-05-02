const geom = require('../../lib/geom.js');
const create = require('../create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('geom.Circle', function(){

  // Arguments or return type not wrapped.

  xit('setCirc(gp_Circ)', function(){
    var obj = create.geom.Circle();
    var res = obj.setCirc(create.gp_Circ());
  });


  it('setRadius(Double)', function(){
    var obj = create.geom.Circle();
    var res = obj.setRadius(0.5);
  });

  // Arguments or return type not wrapped.

  xit('circ()', function(){
    var obj = create.geom.Circle();
    var res = obj.circ();
    helpers.expectType(res, 'gp_Circ');
  });


  it('radius()', function(){
    var obj = create.geom.Circle();
    var res = obj.radius();
    expect(typeof res).to.equal('number');
  });


  it('reversedParameter(Double)', function(){
    var obj = create.geom.Circle();
    var res = obj.reversedParameter(0.5);
    expect(typeof res).to.equal('number');
  });


  it('eccentricity()', function(){
    var obj = create.geom.Circle();
    var res = obj.eccentricity();
    expect(typeof res).to.equal('number');
  });


  it('firstParameter()', function(){
    var obj = create.geom.Circle();
    var res = obj.firstParameter();
    expect(typeof res).to.equal('number');
  });


  it('lastParameter()', function(){
    var obj = create.geom.Circle();
    var res = obj.lastParameter();
    expect(typeof res).to.equal('number');
  });


  it('isClosed()', function(){
    var obj = create.geom.Circle();
    var res = obj.isClosed();
    expect(typeof res).to.equal('boolean');
  });


  it('isPeriodic()', function(){
    var obj = create.geom.Circle();
    var res = obj.isPeriodic();
    expect(typeof res).to.equal('boolean');
  });


  it('d0(Double, gp.Pnt)', function(){
    var obj = create.geom.Circle();
    var res = obj.d0(0.5);
    helpers.expectType(res, 'Pnt');
  });


  it('d1(Double, gp.Pnt, gp.Vec)', function(){
    var obj = create.geom.Circle();
    var res = obj.d1(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.v1, 'gp.Vec');
  });


  it('d2(Double, gp.Pnt, gp.Vec, gp.Vec)', function(){
    var obj = create.geom.Circle();
    var res = obj.d2(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.v1, 'gp.Vec');
    helpers.expectType(res.v2, 'gp.Vec');
  });


  it('d3(Double, gp.Pnt, gp.Vec, gp.Vec, gp.Vec)', function(){
    var obj = create.geom.Circle();
    var res = obj.d3(0.5);
    helpers.expectType(res, 'Object');
    helpers.expectType(res.p, 'gp.Pnt');
    helpers.expectType(res.v1, 'gp.Vec');
    helpers.expectType(res.v2, 'gp.Vec');
    helpers.expectType(res.v3, 'gp.Vec');
  });


  it('dn(Double, Integer)', function(){
    var obj = create.geom.Circle();
    var res = obj.dn(0.5, 2);
    helpers.expectType(res, 'Vec');
  });


  it('transform(gp.Trsf)', function(){
    var obj = create.geom.Circle();
    var res = obj.transform(create.gp.Trsf());
  });


  it('copy()', function(){
    var obj = create.geom.Circle();
    var res = obj.copy();
    helpers.expectType(res, 'Circle');
  });

  // Arguments or return type not wrapped.

  xit('makeCircle(gp_Circ)', function(){
    var res = geom.Circle.makeCircle(create.gp_Circ());
    helpers.expectType(res, 'Circle');
  });


  it('makeCircle(gp.Ax2, Double)', function(){
    var res = geom.Circle.makeCircle(create.gp.Ax2(), 0.5);
    helpers.expectType(res, 'Circle');
  });

  // Arguments or return type not wrapped.

  xit('makeCircle(gp_Circ, Double)', function(){
    var res = geom.Circle.makeCircle(create.gp_Circ(), 0.5);
    helpers.expectType(res, 'Circle');
  });

  // Arguments or return type not wrapped.

  xit('makeCircle(gp_Circ, gp.Pnt)', function(){
    var res = geom.Circle.makeCircle(create.gp_Circ(), create.gp.Pnt());
    helpers.expectType(res, 'Circle');
  });

  // TODO: makeCircle(gp.Pnt, gp.Pnt, gp.Pnt)not working.

  xit('makeCircle(gp.Pnt, gp.Pnt, gp.Pnt)', function(){
    var res = geom.Circle.makeCircle(create.gp.Pnt(), create.gp.Pnt(), create.gp.Pnt());
    helpers.expectType(res, 'Circle');
  });


  it('makeCircle(gp.Pnt, gp.Dir, Double)', function(){
    var res = geom.Circle.makeCircle(create.gp.Pnt(), create.gp.Dir(), 0.5);
    helpers.expectType(res, 'Circle');
  });


  it('makeCircle(gp.Pnt, gp.Pnt, Double)', function(){
    var res = geom.Circle.makeCircle(create.gp.Pnt(), create.gp.Pnt(), 0.5);
    helpers.expectType(res, 'Circle');
  });


  it('makeCircle(gp.Ax1, Double)', function(){
    var res = geom.Circle.makeCircle(create.gp.Ax1(), 0.5);
    helpers.expectType(res, 'Circle');
  });

  // Arguments or return type not wrapped.

  xit('Circle(gp_Circ)', function(){
    var res = new geom.Circle(create.gp_Circ());
    helpers.expectType(res, 'Circle');
  });


  it('Circle(gp.Ax2, Double)', function(){
    var res = new geom.Circle(create.gp.Ax2(), 0.5);
    helpers.expectType(res, 'Circle');
  });
});
