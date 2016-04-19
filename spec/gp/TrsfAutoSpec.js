var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('gp.Trsf', function(){


  it('Trsf()', function(){
    var res = new gp.Trsf();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Trsf');
  });



  it('isNegative()', function(){
    var obj = create.gp.Trsf();
    var res = obj.isNegative();
    expect(typeof res).toBe('boolean');
  });


    // arguments or return type not wrapped
  xit('form()', function(){
    var obj = create.gp.Trsf();
    var res = obj.form();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('gp_TrsfForm');
  });


  it('scaleFactor()', function(){
    var obj = create.gp.Trsf();
    var res = obj.scaleFactor();
    expect(typeof res).toBe('number');
  });


  it('translationPart()', function(){
    var obj = create.gp.Trsf();
    var res = obj.translationPart();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


    // arguments or return type not wrapped
  xit('getRotation()', function(){
    var obj = create.gp.Trsf();
    var res = obj.getRotation();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Array');
  });


    // arguments or return type not wrapped
  xit('vectorialPart()', function(){
    var obj = create.gp.Trsf();
    var res = obj.vectorialPart();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('gp_Mat');
  });


    // arguments or return type not wrapped
  xit('hvectorialPart()', function(){
    var obj = create.gp.Trsf();
    var res = obj.hvectorialPart();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('gp_Mat');
  });


  it('invert()', function(){
    var obj = create.gp.Trsf();
    var res = obj.invert();
  });


  it('inverted()', function(){
    var obj = create.gp.Trsf();
    var res = obj.inverted();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Trsf');
  });

});
