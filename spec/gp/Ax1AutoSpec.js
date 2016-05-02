const gp = require('../../lib/gp.js');
const create = require('../create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('gp.Ax1', function(){


  it('setDirection(gp.Dir)', function(){
    var obj = create.gp.Ax1();
    var res = obj.setDirection(create.gp.Dir());
  });


  it('setLocation(gp.Pnt)', function(){
    var obj = create.gp.Ax1();
    var res = obj.setLocation(create.gp.Pnt());
  });


  it('direction()', function(){
    var obj = create.gp.Ax1();
    var res = obj.direction();
    helpers.expectType(res, 'Dir');
  });


  it('location()', function(){
    var obj = create.gp.Ax1();
    var res = obj.location();
    helpers.expectType(res, 'Pnt');
  });


  it('isCoaxial(gp.Ax1, Double, Double)', function(){
    var obj = create.gp.Ax1();
    var res = obj.isCoaxial(create.gp.Ax1(), 0.5, 1);
    expect(typeof res).to.equal('boolean');
  });


  it('isNormal(gp.Ax1, Double)', function(){
    var obj = create.gp.Ax1();
    var res = obj.isNormal(create.gp.Ax1(), 0.5);
    expect(typeof res).to.equal('boolean');
  });


  it('isOpposite(gp.Ax1, Double)', function(){
    var obj = create.gp.Ax1();
    var res = obj.isOpposite(create.gp.Ax1(), 0.5);
    expect(typeof res).to.equal('boolean');
  });


  it('isParallel(gp.Ax1, Double)', function(){
    var obj = create.gp.Ax1();
    var res = obj.isParallel(create.gp.Ax1(), 0.5);
    expect(typeof res).to.equal('boolean');
  });


  it('angle(gp.Ax1)', function(){
    var obj = create.gp.Ax1();
    var res = obj.angle(create.gp.Ax1());
    expect(typeof res).to.equal('number');
  });


  it('reverse()', function(){
    var obj = create.gp.Ax1();
    var res = obj.reverse();
  });


  it('reversed()', function(){
    var obj = create.gp.Ax1();
    var res = obj.reversed();
    helpers.expectType(res, 'Ax1');
  });


  it('mirror(gp.Pnt)', function(){
    var obj = create.gp.Ax1();
    var res = obj.mirror(create.gp.Pnt());
    helpers.expectType(res, 'Ax1');
  });


  it('mirror(gp.Ax1)', function(){
    var obj = create.gp.Ax1();
    var res = obj.mirror(create.gp.Ax1());
    helpers.expectType(res, 'Ax1');
  });


  it('mirror(gp.Ax2)', function(){
    var obj = create.gp.Ax1();
    var res = obj.mirror(create.gp.Ax2());
    helpers.expectType(res, 'Ax1');
  });


  it('rotate(gp.Ax1, Double)', function(){
    var obj = create.gp.Ax1();
    var res = obj.rotate(create.gp.Ax1(), 0.5);
    helpers.expectType(res, 'Ax1');
  });


  it('scale(gp.Pnt, Double)', function(){
    var obj = create.gp.Ax1();
    var res = obj.scale(create.gp.Pnt(), 0.5);
    helpers.expectType(res, 'Ax1');
  });


  it('transform(gp.Trsf)', function(){
    var obj = create.gp.Ax1();
    var res = obj.transform(create.gp.Trsf());
    helpers.expectType(res, 'Ax1');
  });


  it('translate(gp.Vec)', function(){
    var obj = create.gp.Ax1();
    var res = obj.translate(create.gp.Vec());
    helpers.expectType(res, 'Ax1');
  });


  it('translate(gp.Pnt, gp.Pnt)', function(){
    var obj = create.gp.Ax1();
    var res = obj.translate(create.gp.Pnt(), create.gp.Pnt());
    helpers.expectType(res, 'Ax1');
  });


  it('Ax1()', function(){
    var res = new gp.Ax1();
    helpers.expectType(res, 'Ax1');
  });


  it('Ax1(gp.Pnt, gp.Dir)', function(){
    var res = new gp.Ax1(create.gp.Pnt(), create.gp.Dir());
    helpers.expectType(res, 'Ax1');
  });
});
