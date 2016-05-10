var boolean = require('../../lib/boolean.js');
var gp = require('../../lib/gp.js');
var geom = require('../../lib/geom.js');
var topo = require('../../lib/topo.js');
var helpers = require('../testHelpers.js');
var create = require('./create.js');

describe('boolean', function(){

  it('common(topo.Shape, topo.Shape)', function() {
    var res = boolean.common(create.topo.shape(), create.topo.shape());
    helpers.expectType(res, 'Shape');
  });

  // Arguments or return type not wrapped.
  xit('common(topo.Shape, topo.Shape, BOPAlgo_PaveFiller)', function() { });

  it('cut(topo.Shape, topo.Shape)', function() {
    var res = boolean.cut(create.topo.shape(), create.topo.shape());
    helpers.expectType(res, 'Shape');
  });

  // Arguments or return type not wrapped.
  xit('cut(topo.Shape, topo.Shape, BOPAlgo_PaveFiller, Boolean)', function() { });

  it('fuse(topo.Shape, topo.Shape)', function() {
    var res = boolean.fuse(create.topo.shape(), create.topo.shape());
    helpers.expectType(res, 'Shape');
  });

  // Arguments or return type not wrapped.
  xit('fuse(topo.Shape, topo.Shape, BOPAlgo_PaveFiller)', function() { });

  // Arguments or return type not wrapped.
  xit('section(topo.Shape, topo.Shape, BOPAlgo_PaveFiller, Boolean)', function() { });

  it('section(topo.Shape, topo.Shape, Boolean)', function() {
    var res = boolean.section(create.topo.shape(), create.topo.shape(), false);
    helpers.expectType(res, 'Shape');
  });

  // Arguments or return type not wrapped.
  xit('section(topo.Shape, gp_Pln, Boolean)', function() { });

  it('section(topo.Shape, geom.Surface, Boolean)', function() {
    var res = boolean.section(create.topo.shape(), create.geom.surface(), false);
    helpers.expectType(res, 'Shape');
  });

  it('section(geom.Surface, topo.Shape, Boolean)', function() {
    var res = boolean.section(create.geom.surface(), create.topo.shape(), false);
    helpers.expectType(res, 'Shape');
  });

  it('section(geom.Surface, geom.Surface, Boolean)', function() {
    var res = boolean.section(create.geom.surface(), create.geom.surface(), false);
    helpers.expectType(res, 'Shape');
  });
});
