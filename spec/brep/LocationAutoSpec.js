var brep = require('../../lib/brep.js');
var Geom = require('../../lib/Geom.js');
var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('brep.Location', function(){


  it('Location()', function(){
    var res = new brep.Location();
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Location');
  });



  it('isIdentity()', function(){
    var obj = create.brep.Location();
    var res = obj.isIdentity();
    expect(typeof res).toBe('boolean');
  });


  it('identity()', function(){
    var obj = create.brep.Location();
    var res = obj.identity();
  });


    // arguments or return type not wrapped
  xit('firstDatum()', function(){
    var obj = create.brep.Location();
    var res = obj.firstDatum();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_TopLoc_Datum3D');
  });


  it('firstPower()', function(){
    var obj = create.brep.Location();
    var res = obj.firstPower();
    expect(typeof res).toBe('number');
  });


  it('nextLocation()', function(){
    var obj = create.brep.Location();
    var res = obj.nextLocation();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Location');
  });


  it('transformation()', function(){
    var obj = create.brep.Location();
    var res = obj.transformation();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Trsf');
  });


  it('inverted()', function(){
    var obj = create.brep.Location();
    var res = obj.inverted();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Location');
  });

});
