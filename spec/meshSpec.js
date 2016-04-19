var brep = require('../lib/brep.node');
var Geom = require('../lib/Geom.node');
var gp = require('../lib/gp.node');
var mesh = require('../lib/mesh.node');
var create = require('./create.js')
describe('mesh', function() {
  it('can tesselate a face', function(){
    var geom = new Geom.Plane(new gp.Ax3(new gp.Pnt(), new gp.Dir(0,0,1), new gp.Dir(1,0,0)));
    var face = brep.makeFace(geom, 0, 1, 0, 1, 0.01);
    var res = mesh.tesselate(face, false);
    console.log(res)
    console.log(res[0])
    for(i in res)
      console.log(i)
    
  });
});