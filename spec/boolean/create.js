const extend = require('extend');
module.exports = extend({},
  require('../gp/create.js'),
  require('../geom/create.js'),
  require('../geom2d/create.js'),
  require('../topo/create.js')
);
var counter = 0;
var primitives = require('./../../lib/primitives.js');
var gp = require('./../../lib/gp.js');

// create overlapping boxes for boolean tests
module.exports.topo.shape = function() {
  console.log("create shape");
  var offset = (counter % 2) * 2;
  counter += 1;
  return primitives.makeBox(
    new gp.Pnt(offset, offset, offset),
    new gp.Pnt(offset + 1, offset + 1, offset + 1)
  );
};
