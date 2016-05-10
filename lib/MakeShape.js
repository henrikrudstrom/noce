  Object.getPrototypeOf(undefined.prototype).delete = function delete() {
    return fillet.MakeShape.delete.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).build = function build() {
    return fillet.MakeShape.build.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).shape = function shape() {
    return fillet.MakeShape.shape.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).generated = function generated() {
    return fillet.MakeShape.generated.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).modified = function modified() {
    return fillet.MakeShape.modified.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    
  Object.getPrototypeOf(undefined.prototype).isDeleted = function isDeleted() {
    return fillet.MakeShape.isDeleted.apply(
      this, arguments, Array.prototype.shift.apply(arguments));
  }
    