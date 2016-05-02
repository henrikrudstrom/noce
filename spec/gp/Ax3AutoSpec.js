const gp = require('../../lib/gp.js');
const create = require('../create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('gp.Ax3', function(){


  it('xreverse()', function(){
    var obj = create.gp.Ax3();
    var res = obj.xreverse();
  });


  it('yreverse()', function(){
    var obj = create.gp.Ax3();
    var res = obj.yreverse();
  });


  it('zreverse()', function(){
    var obj = create.gp.Ax3();
    var res = obj.zreverse();
  });


  it('setAxis(gp.Ax1)', function(){
    var obj = create.gp.Ax3();
    var res = obj.setAxis(create.gp.Ax1());
  });


  it('setDirection(gp.Dir)', function(){
    var obj = create.gp.Ax3();
    var res = obj.setDirection(create.gp.Dir());
  });


  it('setLocation(gp.Pnt)', function(){
    var obj = create.gp.Ax3();
    var res = obj.setLocation(create.gp.Pnt());
  });


  it('setXdirection(gp.Dir)', function(){
    var obj = create.gp.Ax3();
    var res = obj.setXdirection(create.gp.Dir());
  });


  it('setYdirection(gp.Dir)', function(){
    var obj = create.gp.Ax3();
    var res = obj.setYdirection(create.gp.Dir());
  });


  it('angle(gp.Ax3)', function(){
    var obj = create.gp.Ax3();
    var res = obj.angle(create.gp.Ax3());
    expect(typeof res).to.equal('number');
  });


  it('axis()', function(){
    var obj = create.gp.Ax3();
    var res = obj.axis();
    helpers.expectType(res, 'Ax1');
  });


  it('ax2()', function(){
    var obj = create.gp.Ax3();
    var res = obj.ax2();
    helpers.expectType(res, 'Ax2');
  });


  it('direction()', function(){
    var obj = create.gp.Ax3();
    var res = obj.direction();
    helpers.expectType(res, 'Dir');
  });


  it('location()', function(){
    var obj = create.gp.Ax3();
    var res = obj.location();
    helpers.expectType(res, 'Pnt');
  });


  it('xdirection()', function(){
    var obj = create.gp.Ax3();
    var res = obj.xdirection();
    helpers.expectType(res, 'Dir');
  });


  it('ydirection()', function(){
    var obj = create.gp.Ax3();
    var res = obj.ydirection();
    helpers.expectType(res, 'Dir');
  });


  it('direct()', function(){
    var obj = create.gp.Ax3();
    var res = obj.direct();
    expect(typeof res).to.equal('boolean');
  });


  it('isCoplanar(gp.Ax3, Double, Double)', function(){
    var obj = create.gp.Ax3();
    var res = obj.isCoplanar(create.gp.Ax3(), 0.5, 1);
    expect(typeof res).to.equal('boolean');
  });


  it('isCoplanar(gp.Ax1, Double, Double)', function(){
    var obj = create.gp.Ax3();
    var res = obj.isCoplanar(create.gp.Ax1(), 0.5, 1);
    expect(typeof res).to.equal('boolean');
  });


  it('mirror(gp.Pnt)', function(){
    var obj = create.gp.Ax3();
    var res = obj.mirror(create.gp.Pnt());
    helpers.expectType(res, 'Ax3');
  });


  it('mirror(gp.Ax1)', function(){
    var obj = create.gp.Ax3();
    var res = obj.mirror(create.gp.Ax1());
    helpers.expectType(res, 'Ax3');
  });


  it('mirror(gp.Ax2)', function(){
    var obj = create.gp.Ax3();
    var res = obj.mirror(create.gp.Ax2());
    helpers.expectType(res, 'Ax3');
  });


  it('rotate(gp.Ax1, Double)', function(){
    var obj = create.gp.Ax3();
    var res = obj.rotate(create.gp.Ax1(), 0.5);
    helpers.expectType(res, 'Ax3');
  });


  it('scale(gp.Pnt, Double)', function(){
    var obj = create.gp.Ax3();
    var res = obj.scale(create.gp.Pnt(), 0.5);
    helpers.expectType(res, 'Ax3');
  });


  it('transform(gp.Trsf)', function(){
    var obj = create.gp.Ax3();
    var res = obj.transform(create.gp.Trsf());
    helpers.expectType(res, 'Ax3');
  });


  it('translate(gp.Vec)', function(){
    var obj = create.gp.Ax3();
    var res = obj.translate(create.gp.Vec());
    helpers.expectType(res, 'Ax3');
  });


  it('translate(gp.Pnt, gp.Pnt)', function(){
    var obj = create.gp.Ax3();
    var res = obj.translate(create.gp.Pnt(), create.gp.Pnt());
    helpers.expectType(res, 'Ax3');
  });


  it('Ax3()', function(){
    var res = new gp.Ax3();
    helpers.expectType(res, 'Ax3');
  });


  it('Ax3(gp.Ax2)', function(){
    var res = new gp.Ax3(create.gp.Ax2());
    helpers.expectType(res, 'Ax3');
  });
  // Ax3(gp.Pnt, gp.Dir, gp.Dir) Redefined.


  it('Ax3(gp.Pnt, gp.Dir)', function(){
    var res = new gp.Ax3(create.gp.Pnt(), create.gp.Dir());
    helpers.expectType(res, 'Ax3');
  });
});
