  Object.getPrototypeOf(undefined.prototype).transformation = function transformation() {
    return topo.Datum3D.transformation.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).dynamicType = function dynamicType() {
    return topo.Datum3D.dynamicType.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    