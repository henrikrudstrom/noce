const gp = require('../../lib/gp.js');
const create = require('../create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('gp.Ax2', function(){


  it('setAxis(gp.Ax1)', function(){
    var obj = create.gp.Ax2();
    var res = obj.setAxis(create.gp.Ax1());
  });


  it('setDirection(gp.Dir)', function(){
    var obj = create.gp.Ax2();
    var res = obj.setDirection(create.gp.Dir());
  });


  it('setLocation(gp.Pnt)', function(){
    var obj = create.gp.Ax2();
    var res = obj.setLocation(create.gp.Pnt());
  });


  it('setXdirection(gp.Dir)', function(){
    var obj = create.gp.Ax2();
    var res = obj.setXdirection(create.gp.Dir());
  });


  it('setYdirection(gp.Dir)', function(){
    var obj = create.gp.Ax2();
    var res = obj.setYdirection(create.gp.Dir());
  });


  it('angle(gp.Ax2)', function(){
    var obj = create.gp.Ax2();
    var res = obj.angle(create.gp.Ax2());
    expect(typeof res).to.equal('number');
  });


  it('axis()', function(){
    var obj = create.gp.Ax2();
    var res = obj.axis();
    helpers.expectType(res, 'Ax1');
  });


  it('direction()', function(){
    var obj = create.gp.Ax2();
    var res = obj.direction();
    helpers.expectType(res, 'Dir');
  });


  it('location()', function(){
    var obj = create.gp.Ax2();
    var res = obj.location();
    helpers.expectType(res, 'Pnt');
  });


  it('xdirection()', function(){
    var obj = create.gp.Ax2();
    var res = obj.xdirection();
    helpers.expectType(res, 'Dir');
  });


  it('ydirection()', function(){
    var obj = create.gp.Ax2();
    var res = obj.ydirection();
    helpers.expectType(res, 'Dir');
  });


  it('isCoplanar(gp.Ax2, Double, Double)', function(){
    var obj = create.gp.Ax2();
    var res = obj.isCoplanar(create.gp.Ax2(), 0.5, 1);
    expect(typeof res).to.equal('boolean');
  });


  it('isCoplanar(gp.Ax1, Double, Double)', function(){
    var obj = create.gp.Ax2();
    var res = obj.isCoplanar(create.gp.Ax1(), 0.5, 1);
    expect(typeof res).to.equal('boolean');
  });


  it('mirror(gp.Pnt)', function(){
    var obj = create.gp.Ax2();
    var res = obj.mirror(create.gp.Pnt());
    helpers.expectType(res, 'Ax2');
  });


  it('mirror(gp.Ax1)', function(){
    var obj = create.gp.Ax2();
    var res = obj.mirror(create.gp.Ax1());
    helpers.expectType(res, 'Ax2');
  });


  it('mirror(gp.Ax2)', function(){
    var obj = create.gp.Ax2();
    var res = obj.mirror(create.gp.Ax2());
    helpers.expectType(res, 'Ax2');
  });


  it('rotate(gp.Ax1, Double)', function(){
    var obj = create.gp.Ax2();
    var res = obj.rotate(create.gp.Ax1(), 0.5);
    helpers.expectType(res, 'Ax2');
  });


  it('scale(gp.Pnt, Double)', function(){
    var obj = create.gp.Ax2();
    var res = obj.scale(create.gp.Pnt(), 0.5);
    helpers.expectType(res, 'Ax2');
  });


  it('transform(gp.Trsf)', function(){
    var obj = create.gp.Ax2();
    var res = obj.transform(create.gp.Trsf());
    helpers.expectType(res, 'Ax2');
  });


  it('translate(gp.Vec)', function(){
    var obj = create.gp.Ax2();
    var res = obj.translate(create.gp.Vec());
    helpers.expectType(res, 'Ax2');
  });


  it('translate(gp.Pnt, gp.Pnt)', function(){
    var obj = create.gp.Ax2();
    var res = obj.translate(create.gp.Pnt(), create.gp.Pnt());
    helpers.expectType(res, 'Ax2');
  });


  it('Ax2()', function(){
    var res = new gp.Ax2();
    helpers.expectType(res, 'Ax2');
  });
  // Ax2(gp.Pnt, gp.Dir, gp.Dir) Redefined.


  it('Ax2(gp.Pnt, gp.Dir)', function(){
    var res = new gp.Ax2(create.gp.Pnt(), create.gp.Dir());
    helpers.expectType(res, 'Ax2');
  });
});
