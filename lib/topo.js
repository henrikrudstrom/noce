const arrify = require('arrify');
const geom = require('./geom.js');
const gp = require('./gp.js');
const topo = require('./topo.node');


function addMethod(name, types, fn) {
  arrify(types)
    .map(type => Object.getPrototypeOf(type.prototype))
    .forEach(proto => {
      proto[name] = fn;
    });
}


addMethod('vertices', [
  topo.Edge, topo.Wire, topo.Face, topo.Shell,
  topo.Solid, topo.CompSolid, topo.Compound
], function vertices() {
  return topo.TopExp.mapShapes(this, 7);
});

addMethod('edges', [
  topo.Edge, topo.Wire, topo.Face, topo.Shell,
  topo.Solid, topo.CompSolid, topo.Compound
], function edges() {
  return topo.TopExp.mapShapes(this, 6);
});

addMethod('wires', [
  topo.Face, topo.Shell, topo.Solid, topo.CompSolid, topo.Compound
], function wires() {
  return topo.TopExp.mapShapes(this, 5);
});

addMethod('faces', [
  topo.Shell, topo.Solid, topo.CompSolid, topo.Compound
], function faces() {
  return topo.TopExp.mapShapes(this, 4);
});

addMethod('shells', [
  topo.Solid, topo.CompSolid, topo.Compound
], function shells() {
  return topo.TopExp.mapShapes(this, 3);
});

addMethod('solids', [topo.CompSolid, topo.Compound], function solids() {
  return topo.TopExp.mapShapes(this, 2);
});

addMethod('compSolids', [topo.Compound], function compSolids() {
  return topo.TopExp.mapShapes(this, 1);
});

addMethod('geom', [topo.Edge], function() {
  return topo.Tool.curve(this);
});
addMethod('geom', [topo.Face], function() {
  return topo.Tool.surface(this);
});


module.exports = topo;
