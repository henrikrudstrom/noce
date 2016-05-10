const geom = require('./geom.js');
const gp = require('./gp.js');
const topo = require('./topo.node');


Object.getPrototypeOf(topo.Edge.prototype).vertices = function vertices() {
  return topo.TopExp.mapShapes(this, 7);
};

Object.getPrototypeOf(topo.Wire.prototype).vertices = function vertices() {
  return topo.TopExp.mapShapes(this, 7);
};

Object.getPrototypeOf(topo.Face.prototype).vertices = function vertices() {
  return topo.TopExp.mapShapes(this, 7);
};

Object.getPrototypeOf(topo.Shell.prototype).vertices = function vertices() {
  return topo.TopExp.mapShapes(this, 7);
};

Object.getPrototypeOf(topo.Solid.prototype).vertices = function vertices() {
  return topo.TopExp.mapShapes(this, 7);
};

Object.getPrototypeOf(topo.CompSolid.prototype).vertices = function vertices() {
  return topo.TopExp.mapShapes(this, 7);
};

Object.getPrototypeOf(topo.Compound.prototype).vertices = function vertices() {
  return topo.TopExp.mapShapes(this, 7);
};

Object.getPrototypeOf(topo.Wire.prototype).edges = function edges() {
  return topo.TopExp.mapShapes(this, 6);
};

Object.getPrototypeOf(topo.Face.prototype).edges = function edges() {
  return topo.TopExp.mapShapes(this, 6);
};
Object.getPrototypeOf(topo.Shell.prototype).edges = function edges() {
  return topo.TopExp.mapShapes(this, 6);
};
Object.getPrototypeOf(topo.Solid.prototype).edges = function edges() {
  return topo.TopExp.mapShapes(this, 6);
};
Object.getPrototypeOf(topo.CompSolid.prototype).edges = function edges() {
  return topo.TopExp.mapShapes(this, 6);
};
Object.getPrototypeOf(topo.Compound.prototype).edges = function edges() {
  return topo.TopExp.mapShapes(this, 6);
};

Object.getPrototypeOf(topo.Face.prototype).wires = function wires() {
  return topo.TopExp.mapShapes(this, 5);
};
Object.getPrototypeOf(topo.Shell.prototype).wires = function wires() {
  return topo.TopExp.mapShapes(this, 5);
};
Object.getPrototypeOf(topo.Solid.prototype).wires = function wires() {
  return topo.TopExp.mapShapes(this, 5);
};
Object.getPrototypeOf(topo.CompSolid.prototype).wires = function wires() {
  return topo.TopExp.mapShapes(this, 5);
};
Object.getPrototypeOf(topo.Compound.prototype).wires = function wires() {
  return topo.TopExp.mapShapes(this, 5);
};

Object.getPrototypeOf(topo.Shell.prototype).faces = function faces() {
  return topo.TopExp.mapShapes(this, 4);
};

Object.getPrototypeOf(topo.Solid.prototype).faces = function faces() {
  return topo.TopExp.mapShapes(this, 4);
};

Object.getPrototypeOf(topo.CompSolid.prototype).faces = function faces() {
  return topo.TopExp.mapShapes(this, 4);
};

Object.getPrototypeOf(topo.Compound.prototype).faces = function faces() {
  return topo.TopExp.mapShapes(this, 4);
};

Object.getPrototypeOf(topo.Solid.prototype).shells = function shells() {
  return topo.TopExp.mapShapes(this, 3);
};
Object.getPrototypeOf(topo.CompSolid.prototype).shells = function shells() {
  return topo.TopExp.mapShapes(this, 3);
};
Object.getPrototypeOf(topo.Compound.prototype).shells = function shells() {
  return topo.TopExp.mapShapes(this, 3);
};
Object.getPrototypeOf(topo.CompSolid.prototype).solids = function shells() {
  return topo.TopExp.mapShapes(this, 2);
};
Object.getPrototypeOf(topo.Compound.prototype).solids = function shells() {
  return topo.TopExp.mapShapes(this, 2);
};
Object.getPrototypeOf(topo.Compound.prototype).compSolids = function shells() {
  return topo.TopExp.mapShapes(this, 1);
};


module.exports = topo;
