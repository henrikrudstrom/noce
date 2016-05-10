  Object.getPrototypeOf(undefined.prototype).endPoint = function endPoint() {
    return geom2d.BoundedCurve.endPoint.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).startPoint = function startPoint() {
    return geom2d.BoundedCurve.startPoint.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    