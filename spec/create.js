var gp = require('../lib/gp.node');
var geom = require('../lib/geom.node');
var topo = require('../lib/topo.node');
var primitives = require('../lib/primitives.js');








var currentDouble = 0;
var maxDouble = 29;

function nextDouble() {
  currentDouble += 1;
  return currentDouble;
}

var creategp = {
  XYZ() {
    return new gp.XYZ(nextDouble(), nextDouble(), nextDouble());
  },
  Vec() {
    return new gp.Vec(nextDouble(), nextDouble(), nextDouble());
  },
  Pnt() {
    return new gp.Pnt(nextDouble(), nextDouble(), nextDouble());
  },
  Dir() {
    return new gp.Dir(nextDouble(), nextDouble(), nextDouble());
  },
  Ax1() {
    return new gp.Ax1(
      creategp.Pnt(), creategp.Dir()
    );
  },
  Ax2() {
    return new gp.Ax2(
      creategp.Pnt(), creategp.Dir(), creategp.Dir()
    );
  },
  Ax3() {
    return new gp.Ax3(
      creategp.Pnt(), creategp.Dir(), creategp.Dir()
    );
  },
  Trsf() {
    return new gp.Trsf();
  },
  Sphere() {
    return new gp.Sphere(new gp.Ax3(
      creategp.Pnt(), creategp.Dir(), creategp.Dir()
    ), 5);
  },
  Cylinder() {
    return new gp.Cylinder(new gp.Ax3(
      creategp.Pnt(), creategp.Dir(), creategp.Dir()
    ), 5);
  }
};
var creategeom = {
  SphericalSurface() {
    return new geom.SphericalSurface(creategp.Ax3(), nextDouble());
  },
  CylindricalSurface() {
    return new geom.CylindricalSurface(creategp.Ax3(), nextDouble());
  },
  Plane() {
    return new geom.Plane(creategp.Ax3());
  },

  Axis1Placement() {
    return new geom.Axis1Placement(creategp.Ax1());
  },
  AxisPlacement() {
    return creategeom.Axis1Placement();
  },
  geometry() {
    return creategeom.CylindricalSurface();
  },
  Surface() {
    return creategeom.CylindricalSurface();
  },
  ElementarySurface() {
    return creategeom.CylindricalSurface();
  },
  BezierCurve() {
    var points = [
      new gp.Pnt(1, 2, 3), new gp.Pnt(2, 3, 4),
      new gp.Pnt(3, 4, 5), new gp.Pnt(4, 5, 6)
    ];
    // var arr = new geom.Array1OfPnt(0, 4);
    // points.forEach(points);
    return new geom.BezierCurve(points);
  },
  Circle() {
    return new geom.Circle(creategp.Ax2(), 2);
  },
  TrimmedCurve() {
    return new geom.TrimmedCurve(creategeom.Circle(), 0, 1.5, true);
  },
  Curve() {
    return creategeom.Circle();
  },
  Line() {
    return new geom.Line(creategp.Pnt(), creategp.Dir());
  }
};
var createtopo = {
  Vertex() {
    return topo.makeVertex(creategp.Pnt());
  },
  Edge() {
    return topo.makeEdge(creategeom.Line());
  },
  Shape() {
    return createtopo.Edge();
  },
  Orientation() {
    return 1;
  },
  ShapeEnum() {
    return 7;
  },
  Location() {
    return new topo.Location(creategp.Trsf());
  },
  Wire() {
    var pt1 = new gp.Pnt(0, 0, 0);
    var pt2 = new gp.Pnt(1, 4, 6);
    var pt3 = new gp.Pnt(4, 5, 0);
    var l1 = geom.TrimmedCurve.makeSegment(pt1, pt2);
    var e1 = topo.makeEdge(l1)
    var l2 = geom.TrimmedCurve.makeSegment(pt2, pt3);
    var e2 = topo.makeEdge(l2)
      // console.log("E",e2)
    return topo.makeWire(e1);
  },
  Face() {
    var surf = creategeom.Surface();
    return topo.makeFace(surf, 0.01);
  },
  Shell() {
    var sphere = creategeom.SphericalSurface();
    return topo.makeShell(sphere, false);
  },
  Explorer() {
    var surface = creategeom.Face();
    return topo.Explorer(surface, 5);
  },
  Revolution() {
    return createtopo.Cone()
  },
  Cone() {
    return new topo.Cone(0.3, creategp.Ax2(), 3, 2);
  },
  OneAxis() {
    return createtopo.Revolution();
  }
};

var createPrimitives = {
  Cone() {
    return primitives.makeCone(1, 2, 3);
  },
  Revolution() {
    return primitives.makeCone(1, 2, 3);
  }
};

module.exports = {
  gp: creategp,
  geom: creategeom,
  topo: createtopo,
  primitives: createPrimitives
};
