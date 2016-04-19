var brep = require('../../lib/brep.js');
var Geom = require('../../lib/Geom.js');
var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('brep.Location', function(){


  it('Location()', function(){
    console.log('Location()')
    var res = new brep.Location();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Location');
  });



  it('isIdentity()', function(){
    console.log('isIdentity()')
    var obj = create.brep.Location();
    var res = obj.isIdentity();
    expect(typeof res).toBe('boolean');
  });


  it('identity()', function(){
    console.log('identity()')
    var obj = create.brep.Location();
    var res = obj.identity();
  });


    // arguments or return type not wrapped
  xit('firstDatum()', function(){
    console.log('firstDatum()')
    var obj = create.brep.Location();
    var res = obj.firstDatum();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_TopLoc_Datum3D');
  });


  it('firstPower()', function(){
    console.log('firstPower()')
    var obj = create.brep.Location();
    var res = obj.firstPower();
    expect(typeof res).toBe('number');
  });


  it('nextLocation()', function(){
    console.log('nextLocation()')
    var obj = create.brep.Location();
    var res = obj.nextLocation();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Location');
  });


  it('transformation()', function(){
    console.log('transformation()')
    var obj = create.brep.Location();
    var res = obj.transformation();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Trsf');
  });


  it('inverted()', function(){
    console.log('inverted()')
    var obj = create.brep.Location();
    var res = obj.inverted();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Location');
  });

});
