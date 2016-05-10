  Object.getPrototypeOf(undefined.prototype).setAxis = function setAxis() {
    return geom.AxisPlacement.setAxis.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).setDirection = function setDirection() {
    return geom.AxisPlacement.setDirection.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).setLocation = function setLocation() {
    return geom.AxisPlacement.setLocation.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).angle = function angle() {
    return geom.AxisPlacement.angle.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).axis = function axis() {
    return geom.AxisPlacement.axis.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).direction = function direction() {
    return geom.AxisPlacement.direction.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).location = function location() {
    return geom.AxisPlacement.location.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    