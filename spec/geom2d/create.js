const extend = require('extend');
var gp = require('../../lib/gp.js');
var geom2d = require('../../lib/geom2d.js');

var create = extend({}, require('../gp/create.js'), {
  geom2d: {
    line() {
      return new geom2d.Line(create.gp.pnt2d(), create.gp.dir2d());
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
      return new geom2d.Circle(create.gp.ax2d(), 2, false);
    },
    ellipse() {
      return new geom2d.Ellipse(create.gp.ax2d(), 2, 1, false);
    },
    trimmedCurve() {
      return new geom2d.TrimmedCurve(create.geom2d.circle(), 0, 1.5, true);
    },
    curve() {
      return create.geom2d.circle();
    },
    geometry() {
      return create.geom2d.cylindricalSurface();
    }
  }
});

module.exports = create;
