const gp = require('../../lib/gp.js');
const create = require('../create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('gp.Trsf', function(){


  it('setMirror(gp.Pnt)', function(){
    var obj = create.gp.Trsf();
    var res = obj.setMirror(create.gp.Pnt());
  });


  it('setMirror(gp.Ax1)', function(){
    var obj = create.gp.Trsf();
    var res = obj.setMirror(create.gp.Ax1());
  });


  it('setMirror(gp.Ax2)', function(){
    var obj = create.gp.Trsf();
    var res = obj.setMirror(create.gp.Ax2());
  });


  it('setRotation(gp.Ax1, Double)', function(){
    var obj = create.gp.Trsf();
    var res = obj.setRotation(create.gp.Ax1(), 0.5);
  });

  // Arguments or return type not wrapped.

  xit('setRotation(gp_Quaternion)', function(){
    var obj = create.gp.Trsf();
    var res = obj.setRotation(create.gp_Quaternion());
  });


  it('setScale(gp.Pnt, Double)', function(){
    var obj = create.gp.Trsf();
    var res = obj.setScale(create.gp.Pnt(), 0.5);
  });


  it('setDisplacement(gp.Ax3, gp.Ax3)', function(){
    var obj = create.gp.Trsf();
    var res = obj.setDisplacement(create.gp.Ax3(), create.gp.Ax3());
  });


  it('setTransformation(gp.Ax3, gp.Ax3)', function(){
    var obj = create.gp.Trsf();
    var res = obj.setTransformation(create.gp.Ax3(), create.gp.Ax3());
  });


  it('setTransformation(gp.Ax3)', function(){
    var obj = create.gp.Trsf();
    var res = obj.setTransformation(create.gp.Ax3());
  });

  // Arguments or return type not wrapped.

  xit('setTransformation(gp_Quaternion, gp.Vec)', function(){
    var obj = create.gp.Trsf();
    var res = obj.setTransformation(create.gp_Quaternion(), create.gp.Vec());
  });


  it('setTranslation(gp.Vec)', function(){
    var obj = create.gp.Trsf();
    var res = obj.setTranslation(create.gp.Vec());
  });


  it('setTranslation(gp.Pnt, gp.Pnt)', function(){
    var obj = create.gp.Trsf();
    var res = obj.setTranslation(create.gp.Pnt(), create.gp.Pnt());
  });


  it('setTranslationPart(gp.Vec)', function(){
    var obj = create.gp.Trsf();
    var res = obj.setTranslationPart(create.gp.Vec());
  });


  it('setScaleFactor(Double)', function(){
    var obj = create.gp.Trsf();
    var res = obj.setScaleFactor(0.5);
  });
  // setValues(Double, Double, Double, Double, Double, Double, Double, Double, Double, Double, Double, Double) Redefined.


  it('isNegative()', function(){
    var obj = create.gp.Trsf();
    var res = obj.isNegative();
    expect(typeof res).to.equal('boolean');
  });

  // Arguments or return type not wrapped.

  xit('form()', function(){
    var obj = create.gp.Trsf();
    var res = obj.form();
    helpers.expectType(res, 'gp_TrsfForm');
  });


  it('scaleFactor()', function(){
    var obj = create.gp.Trsf();
    var res = obj.scaleFactor();
    expect(typeof res).to.equal('number');
  });

  // Arguments or return type not wrapped.

  xit('translationPart()', function(){
    var obj = create.gp.Trsf();
    var res = obj.translationPart();
    helpers.expectType(res, 'gp_XYZ');
  });

  // Arguments or return type not wrapped.

  xit('getAxisAngle(gp_XYZ, Double)', function(){
    var obj = create.gp.Trsf();
    var res = obj.getAxisAngle();
    helpers.expectType(res, 'Object');
    helpers.expectType(res.axis, 'gp_XYZ');
    helpers.expectType(res.angle, 'Double');
  });

  // Arguments or return type not wrapped.

  xit('getRotation()', function(){
    var obj = create.gp.Trsf();
    var res = obj.getRotation();
    helpers.expectType(res, 'gp_Quaternion');
  });

  // Arguments or return type not wrapped.

  xit('vectorialPart()', function(){
    var obj = create.gp.Trsf();
    var res = obj.vectorialPart();
    helpers.expectType(res, 'gp_Mat');
  });

  // Arguments or return type not wrapped.

  xit('hvectorialPart()', function(){
    var obj = create.gp.Trsf();
    var res = obj.hvectorialPart();
    helpers.expectType(res, 'gp_Mat');
  });


  it('value(Integer, Integer)', function(){
    var obj = create.gp.Trsf();
    var res = obj.value(1, 2);
    expect(typeof res).to.equal('number');
  });


  it('invert()', function(){
    var obj = create.gp.Trsf();
    var res = obj.invert();
  });


  it('inverted()', function(){
    var obj = create.gp.Trsf();
    var res = obj.inverted();
    helpers.expectType(res, 'Trsf');
  });


  it('multiplied(gp.Trsf)', function(){
    var obj = create.gp.Trsf();
    var res = obj.multiplied(create.gp.Trsf());
    helpers.expectType(res, 'Trsf');
  });


  it('multiply(gp.Trsf)', function(){
    var obj = create.gp.Trsf();
    var res = obj.multiply(create.gp.Trsf());
  });


  it('preMultiply(gp.Trsf)', function(){
    var obj = create.gp.Trsf();
    var res = obj.preMultiply(create.gp.Trsf());
  });


  it('power(Integer)', function(){
    var obj = create.gp.Trsf();
    var res = obj.power(1);
  });


  it('powered(Integer)', function(){
    var obj = create.gp.Trsf();
    var res = obj.powered(1);
    helpers.expectType(res, 'Trsf');
  });


  it('transforms(Double, Double, Double)', function(){
    var obj = create.gp.Trsf();
    var res = obj.transforms();
    helpers.expectType(res, 'Object');
    helpers.expectType(res.x, 'Double');
    helpers.expectType(res.y, 'Double');
    helpers.expectType(res.z, 'Double');
  });

  // Arguments or return type not wrapped.

  xit('transforms(gp_XYZ)', function(){
    var obj = create.gp.Trsf();
    var res = obj.transforms();
    helpers.expectType(res, 'gp_XYZ');
  });


  it('Trsf()', function(){
    var res = new gp.Trsf();
    helpers.expectType(res, 'Trsf');
  });

  // Arguments or return type not wrapped.

  xit('Trsf(gp_Trsf2d)', function(){
    var res = new gp.Trsf(create.gp_Trsf2d());
    helpers.expectType(res, 'Trsf');
  });
});
