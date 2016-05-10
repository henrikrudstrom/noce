const fillet = require('../../lib/fillet.js');
const gp = require('../../lib/gp.js');
const geom = require('../../lib/geom.js');
const geom2d = require('../../lib/geom2d.js');
const topo = require('../../lib/topo.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('fillet.MakeShape', function(){

  it('delete()', function() {
    var obj = create.fillet.makeShape();
    var res = obj.delete();
  });

  it('build()', function() {
    var obj = create.fillet.makeShape();
    var res = obj.build();
  });

  it('shape()', function() {
    var obj = create.fillet.makeShape();
    var res = obj.shape();
    helpers.expectType(res, 'Shape');
  });

  it('generated(topo.Shape)', function() {
    var obj = create.fillet.makeShape();
    var res = obj.generated(create.topo.shape());
    helpers.expectType(res, 'Array');
  });

  it('modified(topo.Shape)', function() {
    var obj = create.fillet.makeShape();
    var res = obj.modified(create.topo.shape());
    helpers.expectType(res, 'Array');
  });

  it('isDeleted(topo.Shape)', function() {
    var obj = create.fillet.makeShape();
    var res = obj.isDeleted(create.topo.shape());
    expect(typeof res).to.equal('boolean');
  });
});
