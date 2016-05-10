const extend = require('extend');
const primitives = require('../../lib/primitives.js');
const fillet = require('../../lib/fillet.js');

var currentShape;
var edgeIndex = 2;

function makeTestFillet() {
  currentShape = primitives.makeBox(10, 20, 30);

  var res = new fillet.MakeFillet(currentShape, 0);
  res.add(currentShape.edges()[0]);
  res.add(currentShape.edges()[1]);
  res.build();
  return res;
}

module.exports = extend({},
  require('../gp/create.js'),
  require('../geom/create.js'),
  require('../geom2d/create.js'),
  require('../topo/create.js'), {
    fillet: {
      makeFillet() {
        return makeTestFillet();
      },
      makeShape() {
        return makeTestFillet();
      },
      command() {
        return makeTestFillet();
      }
    }
  }
);

module.exports.topo.shape = function() {
  //currentShape = primitives.makeBox(10, 20, 30);
  return currentShape;
};
module.exports.topo.edge = function() {
  var res = currentShape.edges()[edgeIndex];
  edgeIndex += 1;
  return res;
};
