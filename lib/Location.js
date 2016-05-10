  Object.getPrototypeOf(undefined.prototype).isIdentity = function isIdentity() {
    return topo.Location.isIdentity.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).identity = function identity() {
    return topo.Location.identity.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).firstDatum = function firstDatum() {
    return topo.Location.firstDatum.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).firstPower = function firstPower() {
    return topo.Location.firstPower.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).nextLocation = function nextLocation() {
    return topo.Location.nextLocation.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).transformation = function transformation() {
    return topo.Location.transformation.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).inverted = function inverted() {
    return topo.Location.inverted.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).multiplied = function multiplied() {
    return topo.Location.multiplied.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).divided = function divided() {
    return topo.Location.divided.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).predivided = function predivided() {
    return topo.Location.predivided.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).powered = function powered() {
    return topo.Location.powered.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).hashCode = function hashCode() {
    return topo.Location.hashCode.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).isEqual = function isEqual() {
    return topo.Location.isEqual.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).isDifferent = function isDifferent() {
    return topo.Location.isDifferent.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    