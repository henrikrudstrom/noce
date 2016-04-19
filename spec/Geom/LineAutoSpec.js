var Geom = require('../../lib/Geom.js');
var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('Geom.Line', function(){


  it('Line(gp.Ax1)', function(){
    var res = new Geom.Line(create.gp.Ax1());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Line');
  });



    // arguments or return type not wrapped
  xit('lin()', function(){
    var obj = create.Geom.Line();
    var res = obj.lin();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('gp_Lin');
  });


  it('position()', function(){
    var obj = create.Geom.Line();
    var res = obj.position();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('reverse()', function(){
    var obj = create.Geom.Line();
    var res = obj.reverse();
  });


  it('firstParameter()', function(){
    var obj = create.Geom.Line();
    var res = obj.firstParameter();
    expect(typeof res).toBe('number');
  });


  it('lastParameter()', function(){
    var obj = create.Geom.Line();
    var res = obj.lastParameter();
    expect(typeof res).toBe('number');
  });


  it('isClosed()', function(){
    var obj = create.Geom.Line();
    var res = obj.isClosed();
    expect(typeof res).toBe('boolean');
  });


  it('isPeriodic()', function(){
    var obj = create.Geom.Line();
    var res = obj.isPeriodic();
    expect(typeof res).toBe('boolean');
  });


    // arguments or return type not wrapped
  xit('continuity()', function(){
    var obj = create.Geom.Line();
    var res = obj.continuity();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('GeomAbs_Shape');
  });


  it('copy()', function(){
    var obj = create.Geom.Line();
    var res = obj.copy();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Line');
  });


    // arguments or return type not wrapped
  xit('dynamicType()', function(){
    var obj = create.Geom.Line();
    var res = obj.dynamicType();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_Standard_Type');
  });


  it('reversed()', function(){
    var obj = create.Geom.Line();
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Line');
  });


    // TODO: not working
  xit('period()', function(){
    var obj = create.Geom.Line();
    var res = obj.period();
    expect(typeof res).toBe('number');
  });

});
