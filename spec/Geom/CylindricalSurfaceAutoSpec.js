var Geom = require('../../lib/Geom.js');
var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('Geom.CylindricalSurface', function(){


  it('CylindricalSurface(gp.Ax3, Double)', function(){
    var res = new Geom.CylindricalSurface(create.gp.Ax3(), 7);
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });



    // arguments or return type not wrapped
  xit('cylinder()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.cylinder();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('gp_Cylinder');
  });


    // arguments or return type not wrapped
  xit('transformParameters()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.transformParameters();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Array');
  });


    // arguments or return type not wrapped
  xit('bounds()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.bounds();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Array');
  });


    // arguments or return type not wrapped
  xit('coefficients()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.coefficients();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Array');
  });


  it('radius()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.radius();
    expect(typeof res).toBe('number');
  });


  it('isUclosed()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.isUclosed();
    expect(typeof res).toBe('boolean');
  });


  it('isVclosed()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.isVclosed();
    expect(typeof res).toBe('boolean');
  });


  it('isUperiodic()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.isUperiodic();
    expect(typeof res).toBe('boolean');
  });


  it('isVperiodic()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.isVperiodic();
    expect(typeof res).toBe('boolean');
  });


  it('copy()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.copy();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });


    // arguments or return type not wrapped
  xit('dynamicType()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.dynamicType();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_Standard_Type');
  });


  it('axis()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.axis();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('location()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.location();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('position()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.position();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax3');
  });


  it('ureverse()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.ureverse();
  });


  it('vreverse()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.vreverse();
  });


    // arguments or return type not wrapped
  xit('continuity()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.continuity();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('GeomAbs_Shape');
  });


  it('ureversed()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.ureversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });


  it('vreversed()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.vreversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });


  it('uperiod()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.uperiod();
    expect(typeof res).toBe('number');
  });


    // TODO: not working
  xit('vperiod()', function(){
    var obj = create.Geom.CylindricalSurface();
    var res = obj.vperiod();
    expect(typeof res).toBe('number');
  });

});
