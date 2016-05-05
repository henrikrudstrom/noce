const topo = require('../../lib/topo.js');
const geom = require('../../lib/geom.js');
const gp = require('../../lib/gp.js');
const mesh = require('../../lib/mesh.js');

const expect = require('chai').expect;

function checkMesh(meshData) {
  expect(meshData.triangles.constructor.name).to.equal('Int32Array');
  expect(meshData.vertices.constructor.name).to.equal('Float32Array');
  expect(meshData.normals.constructor.name).to.equal('Float32Array');
  expect(meshData.triangles.length).to.be.above(0);
  expect(meshData.vertices.length).to.equal(meshData.normals.length);
  var maxIndex = Math.max.apply(null, Array.prototype.slice.call(meshData.vertices));
  expect(maxIndex).to.be.below(meshData.vertices.length / 3);
}


describe('mesh', function() {
  it('can tesselate a plane', function() {
    var plane = new geom.Plane(new gp.Ax3(new gp.Pnt(), new gp.Dir(0, 0, 1), new gp.Dir(1, 0, 0)));
    var face = topo.makeFace(plane, 0, 1, 0, 1, 0.01);
    var res = mesh(face, 5, 20, false);

    checkMesh(res);
    expect(res.vertices.length).to.equal(12);
    expect(res.normals.length).to.equal(12);
    expect(res.triangles.length).to.equal(6);
  });

  it('can tesselate a Sphere', function() {
    var sphere = new geom.SphericalSurface(
      new gp.Ax3(new gp.Pnt(), new gp.Dir(0, 0, 1), new gp.Dir(1, 0, 0)), 2
    );

    var face = topo.makeFace(sphere, 0, 3.14, 0, 3.14, 0.01);
    var res = mesh(face, 0.005, 20, false);

    checkMesh(res);
  });

  it('can tesselate a cylinder', function() {
    var cylinder = new geom.CylindricalSurface(
      new gp.Ax3(new gp.Pnt(), new gp.Dir(0, 0, 1), new gp.Dir(1, 0, 0)), 2
    );

    var face = topo.makeFace(cylinder, 0, 3.14, 0, 3.14, 0.01);
    var res = mesh(face, 0.005, 20, false);

    checkMesh(res);
  });
});
