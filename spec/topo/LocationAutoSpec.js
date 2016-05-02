const topo = require('../../lib/topo.js');
const create = require('../create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('topo.Location', function(){


  it('isIdentity()', function(){
    var obj = create.topo.Location();
    var res = obj.isIdentity();
    expect(typeof res).to.equal('boolean');
  });


  it('identity()', function(){
    var obj = create.topo.Location();
    var res = obj.identity();
  });

  // Arguments or return type not wrapped.

  xit('firstDatum()', function(){
    var obj = create.topo.Location();
    var res = obj.firstDatum();
    helpers.expectType(res, 'Handle_TopLoc_Datum3D');
  });


  it('firstPower()', function(){
    var obj = create.topo.Location();
    var res = obj.firstPower();
    expect(typeof res).to.equal('number');
  });


  it('nextLocation()', function(){
    var obj = create.topo.Location();
    var res = obj.nextLocation();
    helpers.expectType(res, 'Location');
  });


  it('transformation()', function(){
    var obj = create.topo.Location();
    var res = obj.transformation();
    helpers.expectType(res, 'Trsf');
  });


  it('inverted()', function(){
    var obj = create.topo.Location();
    var res = obj.inverted();
    helpers.expectType(res, 'Location');
  });


  it('multiplied(topo.Location)', function(){
    var obj = create.topo.Location();
    var res = obj.multiplied(create.topo.Location());
    helpers.expectType(res, 'Location');
  });


  it('divided(topo.Location)', function(){
    var obj = create.topo.Location();
    var res = obj.divided(create.topo.Location());
    helpers.expectType(res, 'Location');
  });


  it('predivided(topo.Location)', function(){
    var obj = create.topo.Location();
    var res = obj.predivided(create.topo.Location());
    helpers.expectType(res, 'Location');
  });


  it('powered(Integer)', function(){
    var obj = create.topo.Location();
    var res = obj.powered(1);
    helpers.expectType(res, 'Location');
  });


  it('hashCode(Integer)', function(){
    var obj = create.topo.Location();
    var res = obj.hashCode(1);
    expect(typeof res).to.equal('number');
  });


  it('isEqual(topo.Location)', function(){
    var obj = create.topo.Location();
    var res = obj.isEqual(create.topo.Location());
    expect(typeof res).to.equal('boolean');
  });


  it('isDifferent(topo.Location)', function(){
    var obj = create.topo.Location();
    var res = obj.isDifferent(create.topo.Location());
    expect(typeof res).to.equal('boolean');
  });


  it('Location()', function(){
    var res = new topo.Location();
    helpers.expectType(res, 'Location');
  });


  it('Location(gp.Trsf)', function(){
    var res = new topo.Location(create.gp.Trsf());
    helpers.expectType(res, 'Location');
  });

  // Arguments or return type not wrapped.

  xit('Location(Handle_TopLoc_Datum3D)', function(){
    var res = new topo.Location(create.Handle_TopLoc_Datum3D());
    helpers.expectType(res, 'Location');
  });
});