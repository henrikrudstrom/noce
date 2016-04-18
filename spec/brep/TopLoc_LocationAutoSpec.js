var brep = require('../../lib/brep.node');
var Geom = require('../../lib/Geom.node');
var gp = require('../../lib/gp.node');
var create = require('../create.js')
describe('brep.TopLoc_Location', function(){


  it('TopLoc_Location()', function(){
    console.log('TopLoc_Location()')
    var res = new brep.TopLoc_Location();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TopLoc_Location');
  });


  it('TopLoc_Location(gp.Trsf)', function(){
    console.log('TopLoc_Location(gp.Trsf)')
    var res = new brep.TopLoc_Location(create.gp.Trsf());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TopLoc_Location');
  });


  // arguments or return type not wrapped
  xit('TopLoc_Location(Handle_TopLoc_Datum3D)', function(){
    console.log('TopLoc_Location(Handle_TopLoc_Datum3D)')
    var res = new brep.TopLoc_Location(create.Handle_TopLoc_Datum3D());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TopLoc_Location');
  });



  it('isIdentity()', function(){
    console.log('isIdentity()')
    var obj = create.brep.TopLoc_Location();
    var res = obj.isIdentity();
    expect(typeof res).toBe('boolean');
  });


  it('identity()', function(){
    console.log('identity()')
    var obj = create.brep.TopLoc_Location();
    var res = obj.identity();
  });


  // arguments or return type not wrapped
  xit('firstDatum()', function(){
    console.log('firstDatum()')
    var obj = create.brep.TopLoc_Location();
    var res = obj.firstDatum();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_TopLoc_Datum3D');
  });


  it('firstPower()', function(){
    console.log('firstPower()')
    var obj = create.brep.TopLoc_Location();
    var res = obj.firstPower();
    expect(typeof res).toBe('number');
  });


  it('nextLocation()', function(){
    console.log('nextLocation()')
    var obj = create.brep.TopLoc_Location();
    var res = obj.nextLocation();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TopLoc_Location');
  });


  it('transformation()', function(){
    console.log('transformation()')
    var obj = create.brep.TopLoc_Location();
    var res = obj.transformation();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Trsf');
  });


  it('inverted()', function(){
    console.log('inverted()')
    var obj = create.brep.TopLoc_Location();
    var res = obj.inverted();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TopLoc_Location');
  });


  it('multiplied(brep.TopLoc_Location)', function(){
    console.log('multiplied(brep.TopLoc_Location)')
    var obj = create.brep.TopLoc_Location();
    var res = obj.multiplied(create.brep.TopLoc_Location());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TopLoc_Location');
  });


  it('divided(brep.TopLoc_Location)', function(){
    console.log('divided(brep.TopLoc_Location)')
    var obj = create.brep.TopLoc_Location();
    var res = obj.divided(create.brep.TopLoc_Location());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TopLoc_Location');
  });


  it('predivided(brep.TopLoc_Location)', function(){
    console.log('predivided(brep.TopLoc_Location)')
    var obj = create.brep.TopLoc_Location();
    var res = obj.predivided(create.brep.TopLoc_Location());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TopLoc_Location');
  });


  it('powered(gp.int)', function(){
    console.log('powered(gp.int)')
    var obj = create.brep.TopLoc_Location();
    var res = obj.powered(1);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TopLoc_Location');
  });


  it('hashCode(gp.int)', function(){
    console.log('hashCode(gp.int)')
    var obj = create.brep.TopLoc_Location();
    var res = obj.hashCode(1);
    expect(typeof res).toBe('number');
  });


  it('isEqual(brep.TopLoc_Location)', function(){
    console.log('isEqual(brep.TopLoc_Location)')
    var obj = create.brep.TopLoc_Location();
    var res = obj.isEqual(create.brep.TopLoc_Location());
    expect(typeof res).toBe('boolean');
  });


  it('isDifferent(brep.TopLoc_Location)', function(){
    console.log('isDifferent(brep.TopLoc_Location)')
    var obj = create.brep.TopLoc_Location();
    var res = obj.isDifferent(create.brep.TopLoc_Location());
    expect(typeof res).toBe('boolean');
  });


  // arguments or return type not wrapped
  xit('shallowDump(Standard_OStream)', function(){
    console.log('shallowDump(Standard_OStream)')
    var obj = create.brep.TopLoc_Location();
    var res = obj.shallowDump(create.Standard_OStream());
  });

});
