const Geom = require('./Geom.js');
const gp = require('./gp.js');
const mod = require('./brep.node');
mod.Orientation = {
TopAbs_FORWARD: 0,
  TopAbs_REVERSED: 1,
  TopAbs_INTERNAL: 2,
  TopAbs_EXTERNAL: 3
}


module.exports = mod;
