var Geom = require('../../lib/Geom.js');
var gp = require('../../lib/gp.js');
var create = require('../create.js')
describe('Geom.Line', function(){


  it('Line(gp.Ax1)', function(){
    console.log('Line(gp.Ax1)')
    var res = new Geom.Line(create.gp.Ax1());
    var res_h = res._handle;
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Line');
  });



    // arguments or return type not wrapped
  xit('lin()', function(){
    console.log('lin()')
    var obj = create.Geom.Line();
    var res = obj.lin();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('gp_Lin');
  });


  it('position()', function(){
    console.log('position()')
    var obj = create.Geom.Line();
    var res = obj.position();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Ax1');
  });


  it('reverse()', function(){
    console.log('reverse()')
    var obj = create.Geom.Line();
    var res = obj.reverse();
  });


  it('firstParameter()', function(){
    console.log('firstParameter()')
    var obj = create.Geom.Line();
    var res = obj.firstParameter();
    expect(typeof res).toBe('number');
  });


  it('lastParameter()', function(){
    console.log('lastParameter()')
    var obj = create.Geom.Line();
    var res = obj.lastParameter();
    expect(typeof res).toBe('number');
  });


  it('isClosed()', function(){
    console.log('isClosed()')
    var obj = create.Geom.Line();
    var res = obj.isClosed();
    expect(typeof res).toBe('boolean');
  });


  it('isPeriodic()', function(){
    console.log('isPeriodic()')
    var obj = create.Geom.Line();
    var res = obj.isPeriodic();
    expect(typeof res).toBe('boolean');
  });


    // arguments or return type not wrapped
  xit('continuity()', function(){
    console.log('continuity()')
    var obj = create.Geom.Line();
    var res = obj.continuity();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('GeomAbs_Shape');
  });


  it('copy()', function(){
    console.log('copy()')
    var obj = create.Geom.Line();
    var res = obj.copy();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Line');
  });


    // arguments or return type not wrapped
  xit('dynamicType()', function(){
    console.log('dynamicType()')
    var obj = create.Geom.Line();
    var res = obj.dynamicType();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Handle_Standard_Type');
  });


  it('reversed()', function(){
    console.log('reversed()')
    var obj = create.Geom.Line();
    var res = obj.reversed();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Line');
  });


    // TODO: not working
  xit('period()', function(){
    console.log('period()')
    var obj = create.Geom.Line();
    var res = obj.period();
    expect(typeof res).toBe('number');
  });

});
