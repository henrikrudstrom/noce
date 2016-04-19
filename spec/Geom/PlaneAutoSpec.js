var Geom = require('../../lib/Geom.js');
var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('Geom.Plane', function(){


  it('Plane(gp.Ax3)', function(){
    var res = new Geom.Plane(create.gp.Ax3());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Plane');
  });



    // arguments or return type not wrapped
  xit('pln()', function(){
    var obj = create.Geom.Plane();
    var res = obj.pln();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('gp_Pln');
  });


  it('ureverse()', function(){
    var obj = create.Geom.Plane();
    var res = obj.ureverse();
  });


  it('vreverse()', function(){
    var obj = create.Geom.Plane();
    var res = obj.vreverse();
  });


    // arguments or return type not wrapped
  xit('transformParameters()', function(){
    var obj = create.Geom.Plane();
    var res = obj.transformParameters();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Array');
  });


    // arguments or return type not wrapped
  xit('bounds()', function(){
    var obj = create.Geom.Plane();
    var res = obj.bounds();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Array');
  });


    // arguments or return type not wrapped
  xit('coefficients()', function(){
    var obj = create.Geom.Plane();
    var res = obj.coefficients();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Array');
  });


  it('isUclosed()', function(){
    var obj = create.Geom.Plane();
    var res = obj.isUclosed();
    expect(typeof res).toBe('boolean');
  });


  it('isVclosed()', function(){
    var obj = create.Geom.Plane();
    var res = obj.isVclosed();
    expect(typeof res).toBe('boolean');
  });


  it('isUperiodic()', function(){
    var obj = create.Geom.Plane();
    var res = obj.isUperiodic();
    expect(typeof res).toBe('boolean');
  });


  it('isVperiodic()', function(){
    var obj = create.Geom.Plane();
    var res = obj.isVperiodic();
    expect(typeof res).toBe('boolean');
  });


  it('copy()', function(){
    var obj = create.Geom.Plane();
    var res = obj.copy();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Plane');
  });


    // arguments or return type not wrapped
  xit('dynamicType()', function(){
    var obj = create.Geom.Plane();
    var res = obj.dynamicType();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_Standard_Type');
  });


  it('axis()', function(){
    var obj = create.Geom.Plane();
    var res = obj.axis();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('location()', function(){
    var obj = create.Geom.Plane();
    var res = obj.location();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('position()', function(){
    var obj = create.Geom.Plane();
    var res = obj.position();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax3');
  });


    // arguments or return type not wrapped
  xit('continuity()', function(){
    var obj = create.Geom.Plane();
    var res = obj.continuity();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('GeomAbs_Shape');
  });


  it('ureversed()', function(){
    var obj = create.Geom.Plane();
    var res = obj.ureversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Plane');
  });


  it('vreversed()', function(){
    var obj = create.Geom.Plane();
    var res = obj.vreversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Plane');
  });


    // TODO: not working
  xit('uperiod()', function(){
    var obj = create.Geom.Plane();
    var res = obj.uperiod();
    expect(typeof res).toBe('number');
  });


    // TODO: not working
  xit('vperiod()', function(){
    var obj = create.Geom.Plane();
    var res = obj.vperiod();
    expect(typeof res).toBe('number');
  });

});
