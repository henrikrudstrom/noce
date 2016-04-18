var Geom = require('../../lib/Geom.node');
var gp = require('../../lib/gp.node');
var create = require('../create.js')
describe('Geom.CylindricalSurface', function(){


  it('CylindricalSurface(gp.Ax3, gp.double)', function(){
    console.log('CylindricalSurface(gp.Ax3, gp.double)')
    var res = new Geom.CylindricalSurface(create.gp.Ax3(), 11.5);
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });


  // arguments or return type not wrapped
  xit('CylindricalSurface(gp_Cylinder)', function(){
    console.log('CylindricalSurface(gp_Cylinder)')
    var res = new Geom.CylindricalSurface(create.gp_Cylinder());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });



  // arguments or return type not wrapped
  xit('setCylinder(gp_Cylinder)', function(){
    console.log('setCylinder(gp_Cylinder)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.setCylinder(create.gp_Cylinder());
  });


  it('setRadius(gp.double)', function(){
    console.log('setRadius(gp.double)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.setRadius(12);
  });


  // arguments or return type not wrapped
  xit('cylinder()', function(){
    console.log('cylinder()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.cylinder();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('gp_Cylinder');
  });


  it('ureversedParameter(gp.double)', function(){
    console.log('ureversedParameter(gp.double)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.ureversedParameter(12.5);
    expect(typeof res).toBe('number');
  });


  it('vreversedParameter(gp.double)', function(){
    console.log('vreversedParameter(gp.double)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.vreversedParameter(13);
    expect(typeof res).toBe('number');
  });


  it('transformParameters()', function(){
    console.log('transformParameters()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.transformParameters();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Array');
  });


  // arguments or return type not wrapped
  xit('parametricTransformation(gp.Trsf)', function(){
    console.log('parametricTransformation(gp.Trsf)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.parametricTransformation(create.gp.Trsf());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('gp_GTrsf2d');
  });


  it('bounds()', function(){
    console.log('bounds()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.bounds();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Array');
  });


  it('coefficients()', function(){
    console.log('coefficients()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.coefficients();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Array');
  });


  it('radius()', function(){
    console.log('radius()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.radius();
    expect(typeof res).toBe('number');
  });


  it('isUclosed()', function(){
    console.log('isUclosed()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.isUclosed();
    expect(typeof res).toBe('boolean');
  });


  it('isVclosed()', function(){
    console.log('isVclosed()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.isVclosed();
    expect(typeof res).toBe('boolean');
  });


  it('isUperiodic()', function(){
    console.log('isUperiodic()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.isUperiodic();
    expect(typeof res).toBe('boolean');
  });


  it('isVperiodic()', function(){
    console.log('isVperiodic()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.isVperiodic();
    expect(typeof res).toBe('boolean');
  });


  // TODO: not working
  xit('uiso(gp.double)', function(){
    console.log('uiso(gp.double)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.uiso(13.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Curve');
  });


  it('viso(gp.double)', function(){
    console.log('viso(gp.double)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.viso(14);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Circle');
  });


  it('d0(gp.double, gp.double, gp.Pnt)', function(){
    console.log('d0(gp.double, gp.double, gp.Pnt)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.d0(14.5, 15, create.gp.Pnt());
  });


  it('d1(gp.double, gp.double, gp.Pnt, gp.Vec, gp.Vec)', function(){
    console.log('d1(gp.double, gp.double, gp.Pnt, gp.Vec, gp.Vec)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.d1(15.5, 16, create.gp.Pnt(), create.gp.Vec(), create.gp.Vec());
  });


  it('d2(gp.double, gp.double, gp.Pnt, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec)', function(){
    console.log('d2(gp.double, gp.double, gp.Pnt, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.d2(16.5, 17, create.gp.Pnt(), create.gp.Vec(), create.gp.Vec(), create.gp.Vec(), create.gp.Vec(), create.gp.Vec());
  });


  it('d3(gp.double, gp.double, gp.Pnt, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec)', function(){
    console.log('d3(gp.double, gp.double, gp.Pnt, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec, gp.Vec)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.d3(17.5, 18, create.gp.Pnt(), create.gp.Vec(), create.gp.Vec(), create.gp.Vec(), create.gp.Vec(), create.gp.Vec(), create.gp.Vec(), create.gp.Vec(), create.gp.Vec(), create.gp.Vec());
  });


  it('dn(gp.double, gp.double, gp.int, gp.int)', function(){
    console.log('dn(gp.double, gp.double, gp.int, gp.int)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.dn(18.5, 19, 1, 1);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Vec');
  });


  it('transform(gp.Trsf)', function(){
    console.log('transform(gp.Trsf)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.transform(create.gp.Trsf());
  });


  it('copy()', function(){
    console.log('copy()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.copy();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });


  // arguments or return type not wrapped
  xit('dynamicType()', function(){
    console.log('dynamicType()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.dynamicType();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_Standard_Type');
  });


  it('setAxis(gp.Ax1)', function(){
    console.log('setAxis(gp.Ax1)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.setAxis(create.gp.Ax1());
  });


  it('setLocation(gp.Pnt)', function(){
    console.log('setLocation(gp.Pnt)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.setLocation(create.gp.Pnt());
  });


  it('setPosition(gp.Ax3)', function(){
    console.log('setPosition(gp.Ax3)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.setPosition(create.gp.Ax3());
  });


  it('axis()', function(){
    console.log('axis()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.axis();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('location()', function(){
    console.log('location()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.location();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('position()', function(){
    console.log('position()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.position();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax3');
  });


  it('ureverse()', function(){
    console.log('ureverse()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.ureverse();
  });


  it('vreverse()', function(){
    console.log('vreverse()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.vreverse();
  });


  // arguments or return type not wrapped
  xit('continuity()', function(){
    console.log('continuity()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.continuity();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('GeomAbs_Shape');
  });


  it('isCnu(gp.int)', function(){
    console.log('isCnu(gp.int)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.isCnu(1);
    expect(typeof res).toBe('boolean');
  });


  it('isCnv(gp.int)', function(){
    console.log('isCnv(gp.int)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.isCnv(1);
    expect(typeof res).toBe('boolean');
  });


  it('ureversed()', function(){
    console.log('ureversed()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.ureversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });


  it('vreversed()', function(){
    console.log('vreversed()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.vreversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });


  it('uperiod()', function(){
    console.log('uperiod()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.uperiod();
    expect(typeof res).toBe('number');
  });


  // TODO: not working
  xit('vperiod()', function(){
    console.log('vperiod()')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.vperiod();
    expect(typeof res).toBe('number');
  });


  it('value(gp.double, gp.double)', function(){
    console.log('value(gp.double, gp.double)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.value(19.5, 20);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });


  it('mirror(gp.Pnt)', function(){
    console.log('mirror(gp.Pnt)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.mirror(create.gp.Pnt());
  });


  it('mirror(gp.Ax1)', function(){
    console.log('mirror(gp.Ax1)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.mirror(create.gp.Ax1());
  });


  it('mirror(gp.Ax2)', function(){
    console.log('mirror(gp.Ax2)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.mirror(create.gp.Ax2());
  });


  it('rotate(gp.Ax1, gp.double)', function(){
    console.log('rotate(gp.Ax1, gp.double)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.rotate(create.gp.Ax1(), 20.5);
  });


  it('scale(gp.Pnt, gp.double)', function(){
    console.log('scale(gp.Pnt, gp.double)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.scale(create.gp.Pnt(), 21);
  });


  it('translate(gp.Vec)', function(){
    console.log('translate(gp.Vec)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.translate(create.gp.Vec());
  });


  it('translate(gp.Pnt, gp.Pnt)', function(){
    console.log('translate(gp.Pnt, gp.Pnt)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.translate(create.gp.Pnt(), create.gp.Pnt());
  });


  it('mirrored(gp.Pnt)', function(){
    console.log('mirrored(gp.Pnt)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.mirrored(create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });


  it('mirrored(gp.Ax1)', function(){
    console.log('mirrored(gp.Ax1)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.mirrored(create.gp.Ax1());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });


  it('mirrored(gp.Ax2)', function(){
    console.log('mirrored(gp.Ax2)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.mirrored(create.gp.Ax2());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });


  it('rotated(gp.Ax1, gp.double)', function(){
    console.log('rotated(gp.Ax1, gp.double)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.rotated(create.gp.Ax1(), 21.5);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });


  it('scaled(gp.Pnt, gp.double)', function(){
    console.log('scaled(gp.Pnt, gp.double)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.scaled(create.gp.Pnt(), 22);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });


  it('transformed(gp.Trsf)', function(){
    console.log('transformed(gp.Trsf)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.transformed(create.gp.Trsf());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });


  it('translated(gp.Vec)', function(){
    console.log('translated(gp.Vec)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.translated(create.gp.Vec());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });


  it('translated(gp.Pnt, gp.Pnt)', function(){
    console.log('translated(gp.Pnt, gp.Pnt)')
    var obj = create.Geom.CylindricalSurface();
    var res = obj.translated(create.gp.Pnt(), create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('CylindricalSurface');
  });

});
