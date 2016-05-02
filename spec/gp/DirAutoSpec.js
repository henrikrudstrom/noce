const gp = require('../../lib/gp.js');
const create = require('../create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('gp.Dir', function(){


  it('x', function(){
    var obj = create.gp.Dir();
    var value = 0.5;
    obj.x = value;
    var res = obj.x;
    expect(obj.x).to.equal(value);
    expect(typeof res).to.equal('number');
  });


  it('y', function(){
    var obj = create.gp.Dir();
    var value = 0.5;
    obj.y = value;
    var res = obj.y;
    expect(obj.y).to.equal(value);
    expect(typeof res).to.equal('number');
  });


  it('z', function(){
    var obj = create.gp.Dir();
    var value = 0.5;
    obj.z = value;
    var res = obj.z;
    expect(obj.z).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  // Arguments or return type not wrapped.

  xit('setXyz(gp_XYZ)', function(){
    var obj = create.gp.Dir();
    var res = obj.setXyz(create.gp_XYZ());
  });

  // Arguments or return type not wrapped.

  xit('xyz()', function(){
    var obj = create.gp.Dir();
    var res = obj.xyz();
    helpers.expectType(res, 'gp_XYZ');
  });


  it('isEqual(gp.Dir, Double)', function(){
    var obj = create.gp.Dir();
    var res = obj.isEqual(create.gp.Dir(), 0.5);
    expect(typeof res).to.equal('boolean');
  });


  it('isNormal(gp.Dir, Double)', function(){
    var obj = create.gp.Dir();
    var res = obj.isNormal(create.gp.Dir(), 0.5);
    expect(typeof res).to.equal('boolean');
  });


  it('isOpposite(gp.Dir, Double)', function(){
    var obj = create.gp.Dir();
    var res = obj.isOpposite(create.gp.Dir(), 0.5);
    expect(typeof res).to.equal('boolean');
  });


  it('isParallel(gp.Dir, Double)', function(){
    var obj = create.gp.Dir();
    var res = obj.isParallel(create.gp.Dir(), 0.5);
    expect(typeof res).to.equal('boolean');
  });


  it('angle(gp.Dir)', function(){
    var obj = create.gp.Dir();
    var res = obj.angle(create.gp.Dir());
    expect(typeof res).to.equal('number');
  });


  it('angleWithRef(gp.Dir, gp.Dir)', function(){
    var obj = create.gp.Dir();
    var res = obj.angleWithRef(create.gp.Dir(), create.gp.Dir());
    expect(typeof res).to.equal('number');
  });
  // cross(gp.Dir) Redefined.
  // crossCross(gp.Dir, gp.Dir) Redefined.


  it('dot(gp.Dir)', function(){
    var obj = create.gp.Dir();
    var res = obj.dot(create.gp.Dir());
    expect(typeof res).to.equal('number');
  });


  it('dotCross(gp.Dir, gp.Dir)', function(){
    var obj = create.gp.Dir();
    var res = obj.dotCross(create.gp.Dir(), create.gp.Dir());
    expect(typeof res).to.equal('number');
  });


  it('reverse()', function(){
    var obj = create.gp.Dir();
    var res = obj.reverse();
  });


  it('reversed()', function(){
    var obj = create.gp.Dir();
    var res = obj.reversed();
    helpers.expectType(res, 'Dir');
  });


  it('mirror(gp.Dir)', function(){
    var obj = create.gp.Dir();
    var res = obj.mirror(create.gp.Dir());
    helpers.expectType(res, 'Dir');
  });


  it('mirror(gp.Ax1)', function(){
    var obj = create.gp.Dir();
    var res = obj.mirror(create.gp.Ax1());
    helpers.expectType(res, 'Dir');
  });


  it('mirror(gp.Ax2)', function(){
    var obj = create.gp.Dir();
    var res = obj.mirror(create.gp.Ax2());
    helpers.expectType(res, 'Dir');
  });


  it('rotate(gp.Ax1, Double)', function(){
    var obj = create.gp.Dir();
    var res = obj.rotate(create.gp.Ax1(), 0.5);
    helpers.expectType(res, 'Dir');
  });


  it('transform(gp.Trsf)', function(){
    var obj = create.gp.Dir();
    var res = obj.transform(create.gp.Trsf());
    helpers.expectType(res, 'Dir');
  });


  it('Dir()', function(){
    var res = new gp.Dir();
    helpers.expectType(res, 'Dir');
  });


  it('Dir(gp.Vec)', function(){
    var res = new gp.Dir(create.gp.Vec());
    helpers.expectType(res, 'Dir');
  });

  // Arguments or return type not wrapped.

  xit('Dir(gp_XYZ)', function(){
    var res = new gp.Dir(create.gp_XYZ());
    helpers.expectType(res, 'Dir');
  });


  it('Dir(Double, Double, Double)', function(){
    var res = new gp.Dir(0.5, 1, 1.5);
    helpers.expectType(res, 'Dir');
  });
});
