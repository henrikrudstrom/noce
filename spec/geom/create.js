var gp = require('../../lib/gp.js');
var geom = require('../../lib/geom.js');
var createGp = require('../gp/create.js');

var currentDouble = 0;
function nextDouble() {
  currentDouble += 1;
  return currentDouble;
}

var create = {
  sphericalSurface() {
    return new geom.SphericalSurface(createGp.ax3(), nextDouble());
  },
  cylindricalSurface() {
    return new geom.CylindricalSurface(createGp.ax3(), nextDouble());
  },
  plane() {
    return new geom.Plane(createGp.ax3());
  },

  axis1Placement() {
    return new geom.Axis1Placement(createGp.ax1());
  },
  axisPlacement() {
    return create.axis1Placement();
  },
  geometry() {
    return create.cylindricalSurface();
  },
  surface() {
    return create.cylindricalSurface();
  },
  elementarySurface() {
    return create.cylindricalSurface();
  },
  bezierCurve() {
    var points = [
      new gp.Pnt(1, 2, 3), new gp.Pnt(2, 3, 4),
      new gp.Pnt(3, 4, 5), new gp.Pnt(4, 5, 6)
    ];
    // var arr = new geom.Array1OfPnt(0, 4);
    // points.forEach(points);
    return new geom.BezierCurve(points);
  },
  circle() {
    return new geom.Circle(createGp.ax2(), 2);
  },
  trimmedCurve() {
    return new geom.TrimmedCurve(create.circle(), 0, 1.5, true);
  },
  curve() {
    return create.circle();
  },
  line() {
    return new geom.Line(createGp.pnt(), createGp.dir());
  }
};

module.exports = create;
