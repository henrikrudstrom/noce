var gp = require('../../lib/gp.node');
var create = require('../create.js')
describe('gp.Trsf', function(){


  it('Trsf()', function(){
    console.log('Trsf()')
    var res = new gp.Trsf();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Trsf');
  });


  // arguments or return type not wrapped
  xit('Trsf(gp_Trsf2d)', function(){
    console.log('Trsf(gp_Trsf2d)')
    var res = new gp.Trsf(create.gp_Trsf2d());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Trsf');
  });



  it('setMirror(gp.Pnt)', function(){
    console.log('setMirror(gp.Pnt)')
    var obj = create.gp.Trsf();
    var res = obj.setMirror(create.gp.Pnt());
  });


  it('setMirror(gp.Ax1)', function(){
    console.log('setMirror(gp.Ax1)')
    var obj = create.gp.Trsf();
    var res = obj.setMirror(create.gp.Ax1());
  });


  it('setMirror(gp.Ax2)', function(){
    console.log('setMirror(gp.Ax2)')
    var obj = create.gp.Trsf();
    var res = obj.setMirror(create.gp.Ax2());
  });


  it('setRotation(gp.Ax1, gp.double)', function(){
    console.log('setRotation(gp.Ax1, gp.double)')
    var obj = create.gp.Trsf();
    var res = obj.setRotation(create.gp.Ax1(), 76.5);
  });


  // arguments or return type not wrapped
  xit('setRotation(gp_Quaternion)', function(){
    console.log('setRotation(gp_Quaternion)')
    var obj = create.gp.Trsf();
    var res = obj.setRotation(create.gp_Quaternion());
  });


  it('setScale(gp.Pnt, gp.double)', function(){
    console.log('setScale(gp.Pnt, gp.double)')
    var obj = create.gp.Trsf();
    var res = obj.setScale(create.gp.Pnt(), 77);
  });


  it('setDisplacement(gp.Ax3, gp.Ax3)', function(){
    console.log('setDisplacement(gp.Ax3, gp.Ax3)')
    var obj = create.gp.Trsf();
    var res = obj.setDisplacement(create.gp.Ax3(), create.gp.Ax3());
  });


  it('setTransformation(gp.Ax3, gp.Ax3)', function(){
    console.log('setTransformation(gp.Ax3, gp.Ax3)')
    var obj = create.gp.Trsf();
    var res = obj.setTransformation(create.gp.Ax3(), create.gp.Ax3());
  });


  it('setTransformation(gp.Ax3)', function(){
    console.log('setTransformation(gp.Ax3)')
    var obj = create.gp.Trsf();
    var res = obj.setTransformation(create.gp.Ax3());
  });


  // arguments or return type not wrapped
  xit('setTransformation(gp_Quaternion, gp.Vec)', function(){
    console.log('setTransformation(gp_Quaternion, gp.Vec)')
    var obj = create.gp.Trsf();
    var res = obj.setTransformation(create.gp_Quaternion(), create.gp.Vec());
  });


  it('setTranslation(gp.Vec)', function(){
    console.log('setTranslation(gp.Vec)')
    var obj = create.gp.Trsf();
    var res = obj.setTranslation(create.gp.Vec());
  });


  it('setTranslation(gp.Pnt, gp.Pnt)', function(){
    console.log('setTranslation(gp.Pnt, gp.Pnt)')
    var obj = create.gp.Trsf();
    var res = obj.setTranslation(create.gp.Pnt(), create.gp.Pnt());
  });


  it('setTranslationPart(gp.Vec)', function(){
    console.log('setTranslationPart(gp.Vec)')
    var obj = create.gp.Trsf();
    var res = obj.setTranslationPart(create.gp.Vec());
  });


  it('setScaleFactor(gp.double)', function(){
    console.log('setScaleFactor(gp.double)')
    var obj = create.gp.Trsf();
    var res = obj.setScaleFactor(77.5);
  });


  // TODO: not working
  xit('setValues(gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double)', function(){
    console.log('setValues(gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double)')
    var obj = create.gp.Trsf();
    var res = obj.setValues(78, 78.5, 79, 79.5, 80, 80.5, 81, 81.5, 82, 82.5, 83, 83.5, 84, 84.5);
  });


  it('isNegative()', function(){
    console.log('isNegative()')
    var obj = create.gp.Trsf();
    var res = obj.isNegative();
    expect(typeof res).toBe('boolean');
  });


  // arguments or return type not wrapped
  xit('form()', function(){
    console.log('form()')
    var obj = create.gp.Trsf();
    var res = obj.form();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('gp_TrsfForm');
  });


  it('scaleFactor()', function(){
    console.log('scaleFactor()')
    var obj = create.gp.Trsf();
    var res = obj.scaleFactor();
    expect(typeof res).toBe('number');
  });


  it('translationPart()', function(){
    console.log('translationPart()')
    var obj = create.gp.Trsf();
    var res = obj.translationPart();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('getRotation()', function(){
    console.log('getRotation()')
    var obj = create.gp.Trsf();
    var res = obj.getRotation();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Array');
  });


  // arguments or return type not wrapped
  xit('vectorialPart()', function(){
    console.log('vectorialPart()')
    var obj = create.gp.Trsf();
    var res = obj.vectorialPart();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('gp_Mat');
  });


  // arguments or return type not wrapped
  xit('hvectorialPart()', function(){
    console.log('hvectorialPart()')
    var obj = create.gp.Trsf();
    var res = obj.hvectorialPart();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('gp_Mat');
  });


  it('value(gp.int, gp.int)', function(){
    console.log('value(gp.int, gp.int)')
    var obj = create.gp.Trsf();
    var res = obj.value(1, 1);
    expect(typeof res).toBe('number');
  });


  it('invert()', function(){
    console.log('invert()')
    var obj = create.gp.Trsf();
    var res = obj.invert();
  });


  it('inverted()', function(){
    console.log('inverted()')
    var obj = create.gp.Trsf();
    var res = obj.inverted();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Trsf');
  });


  it('multiplied(gp.Trsf)', function(){
    console.log('multiplied(gp.Trsf)')
    var obj = create.gp.Trsf();
    var res = obj.multiplied(create.gp.Trsf());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Trsf');
  });


  it('multiply(gp.Trsf)', function(){
    console.log('multiply(gp.Trsf)')
    var obj = create.gp.Trsf();
    var res = obj.multiply(create.gp.Trsf());
  });


  it('preMultiply(gp.Trsf)', function(){
    console.log('preMultiply(gp.Trsf)')
    var obj = create.gp.Trsf();
    var res = obj.preMultiply(create.gp.Trsf());
  });


  it('power(gp.int)', function(){
    console.log('power(gp.int)')
    var obj = create.gp.Trsf();
    var res = obj.power(1);
  });


  it('powered(gp.int)', function(){
    console.log('powered(gp.int)')
    var obj = create.gp.Trsf();
    var res = obj.powered(1);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Trsf');
  });


  // TODO: not working
  xit('transforms(gp.double, gp.double, gp.double)', function(){
    console.log('transforms(gp.double, gp.double, gp.double)')
    var obj = create.gp.Trsf();
    var res = obj.transforms(85, 85.5, 86);
  });


  it('transforms(gp.Vec)', function(){
    console.log('transforms(gp.Vec)')
    var obj = create.gp.Trsf();
    var res = obj.transforms(create.gp.Vec());
  });

});
