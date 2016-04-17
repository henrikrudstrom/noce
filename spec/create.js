var gp = require('../lib/gp.node');
var Geom = require('../lib/Geom.node');
var creategp = {
  XYZ() {
    return new gp.XYZ(5, 5, 5);
  },
  Vec() {
    return new gp.Vec(10, 20, 40);
  },
  Pnt() {
    return new gp.Pnt(40, 20, 10);
  },
  Dir() {
    return new gp.Dir(1, 2, 3);
  },
  Ax1() {
    return new gp.Ax1(
      new gp.Pnt(1, 1, 1), new gp.Dir(0, 0, 1)
    );
  },
  Ax2() {
    return new gp.Ax2(
      new gp.Pnt(1, 1, 1), new gp.Dir(0, 0, 1), new gp.Dir(1, 0, 0)
    );
  },
  Ax3() {
    return new gp.Ax3(
      new gp.Pnt(1, 1, 1), new gp.Dir(0, 0, 1), new gp.Dir(1, 0, 0)
    );
  },
  Trsf() {
    return new gp.Trsf();
  },
  Sphere() {
    return new gp.Sphere(new gp.Ax3(
      new gp.Pnt(1, 1, 1), new gp.Dir(0, 0, 1), new gp.Dir(1, 0, 0)
    ), 5);
  },
  Cylinder() {
    return new gp.Cylinder(new gp.Ax3(
      new gp.Pnt(1, 1, 1), new gp.Dir(0, 0, 1), new gp.Dir(1, 0, 0)
    ), 5);
  }
};
var createGeom = {
  SphericalSurface() {
    return new Geom.SphericalSurface(creategp.Ax3(), 10);
  },
  CylindricalSurface() {
    return new Geom.CylindricalSurface(creategp.Ax3(), 10);
  },

  Axis1Placement() {
    return new Geom.Axis1Placement(creategp.Ax1());
  },
  AxisPlacement() {
    return createGeom.Axis1Placement();
  },
  Geometry() {
    return createGeom.CylindricalSurface();
  },
  Surface() {
    return createGeom.CylindricalSurface();
  },
  ElementarySurface() {
    return createGeom.CylindricalSurface();
  },
  BezierCurve() {
    var points = [
      new gp.Pnt(1, 2, 3), new gp.Pnt(2, 3, 4),
      new gp.Pnt(3, 4, 5), new gp.Pnt(4, 5, 6)
    ];
    var arr = new Geom.Array1OfPnt(0, 4);
    points.forEach((pnt, index) => arr.setValue(index, pnt));
    //return new Geom.BezierCurve(arr);
  },
  Circle() {
    return new Geom.Circle(creategp.Ax2(), 2);
  },
  TrimmedCurve() {
    return new Geom.TrimmedCurve(createGeom.Circle(),0, 1.5, true);
  },
  Curve() {
    return createGeom.Circle();
  }
};
module.exports = {
  gp: creategp,
  Geom: createGeom
};
