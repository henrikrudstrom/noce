  Object.getPrototypeOf(undefined.prototype).mapShapes = function mapShapes() {
    return topo.TopExp.mapShapes.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).mapShapes = function mapShapes() {
    return topo.TopExp.mapShapes.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    