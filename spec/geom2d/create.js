var gp = require('../../lib/gp.js');
var geom2d = require('../../lib/geom2d.js');
var createGp = require('../gp/create.js');

var currentDouble = 0;

function nextDouble() {
  currentDouble += 1;
  return currentDouble;
}

var create = {
  line() {
    return new geom2d.Line(createGp.pnt2d(), createGp.dir2d());
  },

  bezierCurve() {
    var points = [
      new gp.Pnt2d(1, 2), new gp.Pnt2d(2, 3),
      new gp.Pnt2d(3, 4), new gp.Pnt2d(4, 5)
    ];
    // var arr = new geom.Array1OfPnt(0, 4);
    // points.forEach(points);
    return new geom2d.BezierCurve(points);
  },
  circle() {
    return new geom2d.Circle(createGp.ax2d(), 2, false);
  },
  ellipse() {
    return new geom2d.Ellipse(createGp.ax2d(), 2, 1, false);
  },
  trimmedCurve() {
    return new geom2d.TrimmedCurve(create.circle(), 0, 1.5, true);
  },
  curve() {
    return create.circle();
  },
  geometry() {
    return create.cylindricalSurface();
  }
};

module.exports = create;
