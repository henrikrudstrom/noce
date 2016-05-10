const extend = require('extend');
module.exports = extend({},
  require('../gp/create.js'),
  require('../geom/create.js'),
  require('../geom2d/create.js'),
  require('../topo/create.js')
);
