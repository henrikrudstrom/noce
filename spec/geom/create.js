const extend = require('extend');

var gp = require('../../lib/gp.js');
var geom = require('../../lib/geom.js');

var currentDouble = 0;

function nextDouble() {
  currentDouble += 1;
  return currentDouble;
}

var create = extend({}, require('../gp/create.js'), {
  geom: {
    sphericalSurface() {
      return new geom.SphericalSurface(create.gp.ax3(), nextDouble());
    },
    cylindricalSurface() {
      return new geom.CylindricalSurface(create.gp.ax3(), nextDouble());
    },
    plane() {
      return new geom.Plane(create.gp.ax3());
    },

    axis1Placement() {
      return new geom.Axis1Placement(create.gp.ax1());
    },
    axisPlacement() {
      return create.geom.axis1Placement();
    },
    geometry() {
      return create.geom.cylindricalSurface();
    },
    surface() {
      return create.geom.cylindricalSurface();
    },
    elementarySurface() {
      return create.geom.cylindricalSurface();
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
      return new geom.Circle(create.gp.ax2(), 2);
    },
    trimmedCurve() {
      return new geom.TrimmedCurve(create.geom.circle(), 0, 1.5, true);
    },
    curve() {
      return create.geom.circle();
    },
    line() {
      return new geom.Line(create.gp.pnt(), create.gp.dir());
    }
  }
});
module.exports = create;
