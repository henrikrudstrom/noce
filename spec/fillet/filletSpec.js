var primitives = require('../../lib/primitives.js');
var fillet = require('../../lib/fillet.js');
var helpers = require('../testHelpers.js');
var expect = require('chai').expect;
describe('fillet', function() {
  it('works', function() {
    var box = primitives.makeBox(1, 2, 3);
    var edges = box.edges();
    console.log(edges)
    var res = new fillet.MakeFillet(box, 0);

    res.add(0.2, edges[2]);
    res.add(0.2, edges[3]);
    res.build();
    res.check();
    expect(res.isDone()).to.equal(true);
    console.log("hmm");

    helpers.expectType(res.shape(), 'Compound');
  });
});
