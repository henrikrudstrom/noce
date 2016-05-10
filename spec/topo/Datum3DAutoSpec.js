const topo = require('../../lib/topo.js');
const geom = require('../../lib/geom.js');
const geom2d = require('../../lib/geom2d.js');
const gp = require('../../lib/gp.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('topo.Datum3D', function(){

  it('transformation()', function() {
    var obj = create.topo.datum3D();
    var res = obj.transformation();
    helpers.expectType(res, 'Trsf');
  });

  // Arguments or return type not wrapped.
  xit('dynamicType()', function() { });

  it('Datum3D()', function() {
    var res = new topo.Datum3D();
    helpers.expectType(res, 'Datum3D');
  });

  it('Datum3D(gp.Trsf)', function() {
    var res = new topo.Datum3D(create.gp.trsf());
    helpers.expectType(res, 'Datum3D');
  });
});
