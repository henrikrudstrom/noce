const gp = require('../../lib/gp.js');
const create = require('../create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('gp.Pnt', function(){


  it('x', function(){
    var obj = create.gp.Pnt();
    var value = 0.5;
    obj.x = value;
    var res = obj.x;
    expect(obj.x).to.equal(value);
    expect(typeof res).to.equal('number');
  });


  it('y', function(){
    var obj = create.gp.Pnt();
    var value = 0.5;
    obj.y = value;
    var res = obj.y;
    expect(obj.y).to.equal(value);
    expect(typeof res).to.equal('number');
  });


  it('z', function(){
    var obj = create.gp.Pnt();
    var value = 0.5;
    obj.z = value;
    var res = obj.z;
    expect(obj.z).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  // Arguments or return type not wrapped.

  xit('setXyz(gp_XYZ)', function(){
    var obj = create.gp.Pnt();
    var res = obj.setXyz(create.gp_XYZ());
  });

  // Arguments or return type not wrapped.

  xit('xyz()', function(){
    var obj = create.gp.Pnt();
    var res = obj.xyz();
    helpers.expectType(res, 'gp_XYZ');
  });


  it('baryCenter(Double, gp.Pnt, Double)', function(){
    var obj = create.gp.Pnt();
    var res = obj.baryCenter(0.5, create.gp.Pnt(), 1);
  });


  it('isEqual(gp.Pnt, Double)', function(){
    var obj = create.gp.Pnt();
    var res = obj.isEqual(create.gp.Pnt(), 0.5);
    expect(typeof res).to.equal('boolean');
  });


  it('distance(gp.Pnt)', function(){
    var obj = create.gp.Pnt();
    var res = obj.distance(create.gp.Pnt());
    expect(typeof res).to.equal('number');
  });


  it('squareDistance(gp.Pnt)', function(){
    var obj = create.gp.Pnt();
    var res = obj.squareDistance(create.gp.Pnt());
    expect(typeof res).to.equal('number');
  });


  it('mirror(gp.Pnt)', function(){
    var obj = create.gp.Pnt();
    var res = obj.mirror(create.gp.Pnt());
    helpers.expectType(res, 'Pnt');
  });


  it('mirror(gp.Ax1)', function(){
    var obj = create.gp.Pnt();
    var res = obj.mirror(create.gp.Ax1());
    helpers.expectType(res, 'Pnt');
  });


  it('mirror(gp.Ax2)', function(){
    var obj = create.gp.Pnt();
    var res = obj.mirror(create.gp.Ax2());
    helpers.expectType(res, 'Pnt');
  });


  it('rotate(gp.Ax1, Double)', function(){
    var obj = create.gp.Pnt();
    var res = obj.rotate(create.gp.Ax1(), 0.5);
    helpers.expectType(res, 'Pnt');
  });


  it('scale(gp.Pnt, Double)', function(){
    var obj = create.gp.Pnt();
    var res = obj.scale(create.gp.Pnt(), 0.5);
    helpers.expectType(res, 'Pnt');
  });


  it('transform(gp.Trsf)', function(){
    var obj = create.gp.Pnt();
    var res = obj.transform(create.gp.Trsf());
    helpers.expectType(res, 'Pnt');
  });


  it('translate(gp.Vec)', function(){
    var obj = create.gp.Pnt();
    var res = obj.translate(create.gp.Vec());
    helpers.expectType(res, 'Pnt');
  });


  it('translate(gp.Pnt, gp.Pnt)', function(){
    var obj = create.gp.Pnt();
    var res = obj.translate(create.gp.Pnt(), create.gp.Pnt());
    helpers.expectType(res, 'Pnt');
  });


  it('Pnt()', function(){
    var res = new gp.Pnt();
    helpers.expectType(res, 'Pnt');
  });

  // Arguments or return type not wrapped.

  xit('Pnt(gp_XYZ)', function(){
    var res = new gp.Pnt(create.gp_XYZ());
    helpers.expectType(res, 'Pnt');
  });


  it('Pnt(Double, Double, Double)', function(){
    var res = new gp.Pnt(0.5, 1, 1.5);
    helpers.expectType(res, 'Pnt');
  });
});
