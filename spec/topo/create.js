const extend = require('extend');
var gp = require('../../lib/gp.js');
var geom = require('../../lib/geom.js');
var topo = require('../../lib/topo.js');

var create = extend({},
  require('../geom/create.js'),
  require('../geom2d/create.js'),
  require('../gp/create.js'), {
    topo: {
      vertex() {
        return topo.makeVertex(create.gp.pnt());
      },
      edge() {
        return topo.makeEdge(create.geom.line());
      },
      shape() {
        console.log("create shape nope");
        return create.topo.edge();
      },
      orientation() {
        return 1;
      },
      shapeEnum() {
        return 7;
      },
      location() {
        return new topo.Location(create.gp.trsf());
      },
      wire() {
        var pt1 = new gp.Pnt(0, 0, 0);
        var pt2 = new gp.Pnt(1, 4, 6);
        var pt3 = new gp.Pnt(4, 5, 0);
        var l1 = geom.TrimmedCurve.makeSegment(pt1, pt2);
        var e1 = topo.makeEdge(l1);
        var l2 = geom.TrimmedCurve.makeSegment(pt2, pt3);
        var e2 = topo.makeEdge(l2);

        return topo.makeWire(e1, e2);
      },
      face() {
        var surf = create.geom.surface();
        return topo.makeFace(surf, 0.01);
      },
      shell() {
        var sphere = create.geom.sphericalSurface();
        return topo.makeShell(sphere, false);
      },
      solid() {
        var shell = create.topo.shell();
        return topo.makeSolid(shell);
      }
    }
  });
module.exports = create;
