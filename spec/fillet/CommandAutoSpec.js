const fillet = require('../../lib/fillet.js');
const gp = require('../../lib/gp.js');
const geom = require('../../lib/geom.js');
const geom2d = require('../../lib/geom2d.js');
const topo = require('../../lib/topo.js');
const helpers = require('../testHelpers.js');
const create = require('./create.js');
const expect = require('chai').expect;
describe('fillet.Command', function(){

  it('delete()', function() {
    var obj = create.fillet.command();
    var res = obj.delete();
  });

  it('isDone()', function() {
    var obj = create.fillet.command();
    var res = obj.isDone();
    expect(typeof res).to.equal('boolean');
  });

  it('check()', function() {
    var obj = create.fillet.command();
    var res = obj.check();
  });
});
