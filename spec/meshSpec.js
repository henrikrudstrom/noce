var brep = require('../lib/brep.js');
var Geom = require('../lib/Geom.js');
var gp = require('../lib/gp.js');
var mesh = require('../lib/mesh.js');

describe('mesh', function() {
  it('can tesselate a plane', function() {
    var geom = new Geom.Plane(new gp.Ax3(new gp.Pnt(), new gp.Dir(0, 0, 1), new gp.Dir(1, 0, 0)));
    var face = brep.makeFace(geom, 0, 1, 0, 1, 0.01);
    var res = mesh(face, 5, 20, false);
    expect(res.vertices.length).toBe(12);
    expect(res.normals.length).toBe(12);
    expect(res.triangles.length).toBe(6);
  });
  it('can tesselate a Sphere', function() {
    var geom = new Geom.SphericalSurface(
      new gp.Ax3(new gp.Pnt(), new gp.Dir(0, 0, 1), new gp.Dir(1, 0, 0)), 2
    );
    var face = brep.makeFace(geom, 0, 3.14, 0, 3.14, 0.01);
    mesh(face, 5, 20, false);
  });
  it('can tesselate a cylinder', function() {
    var geom = new Geom.CylindricalSurface(
      new gp.Ax3(new gp.Pnt(), new gp.Dir(0, 0, 1), new gp.Dir(1, 0, 0)), 2
    );
    var face = brep.makeFace(geom, 0, 3.14, 0, 3.14, 0.01);
    mesh(face, 5, 20, false);
  });
});
