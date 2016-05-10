  Object.getPrototypeOf(undefined.prototype).delete = function delete() {
    return fillet.Command.delete.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).isDone = function isDone() {
    return fillet.Command.isDone.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).check = function check() {
    return fillet.Command.check.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    