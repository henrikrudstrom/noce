var primitives = require('../../lib/primitives.js');
var gp = require('../../lib/gp.js');
var geom = require('../../lib/geom.js');
var topo = require('../../lib/topo.js');
var helpers = require('../testHelpers.js');
var create = require('../create.js');

describe('primitives', function(){


  it('makeBox(Double, Double, Double)', function(){
    var res = primitives.makeBox(0.5, 1, 1.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeBox(gp.Pnt, Double, Double, Double)', function(){
    var res = primitives.makeBox(create.gp.Pnt(), 0.5, 1, 1.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeBox(gp.Pnt, gp.Pnt)', function(){
    var res = primitives.makeBox(create.gp.Pnt(), create.gp.Pnt());
    helpers.expectType(res, 'Shape');
  });


  it('makeBox(gp.Ax2, Double, Double, Double)', function(){
    var res = primitives.makeBox(create.gp.Ax2(), 0.5, 1, 1.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeCone(Double, Double, Double)', function(){
    var res = primitives.makeCone(0.5, 1, 1.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeCone(Double, Double, Double, Double)', function(){
    var res = primitives.makeCone(0.5, 1, 1.5, 2);
    helpers.expectType(res, 'Shape');
  });


  it('makeCone(gp.Ax2, Double, Double, Double)', function(){
    var res = primitives.makeCone(create.gp.Ax2(), 0.5, 1, 1.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeCone(gp.Ax2, Double, Double, Double, Double)', function(){
    var res = primitives.makeCone(create.gp.Ax2(), 0.5, 1, 1.5, 2);
    helpers.expectType(res, 'Shape');
  });


  it('makeCylinder(Double, Double)', function(){
    var res = primitives.makeCylinder(0.5, 1);
    helpers.expectType(res, 'Shape');
  });


  it('makeCylinder(Double, Double, Double)', function(){
    var res = primitives.makeCylinder(0.5, 1, 1.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeCylinder(gp.Ax2, Double, Double)', function(){
    var res = primitives.makeCylinder(create.gp.Ax2(), 0.5, 1);
    helpers.expectType(res, 'Shape');
  });


  it('makeCylinder(gp.Ax2, Double, Double, Double)', function(){
    var res = primitives.makeCylinder(create.gp.Ax2(), 0.5, 1, 1.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeHalfSpace(topo.Face, gp.Pnt)', function(){
    var res = primitives.makeHalfSpace(create.topo.Face(), create.gp.Pnt());
    helpers.expectType(res, 'Shape');
  });


  it('makeHalfSpace(topo.Shell, gp.Pnt)', function(){
    var res = primitives.makeHalfSpace(create.topo.Shell(), create.gp.Pnt());
    helpers.expectType(res, 'Shape');
  });
  // makePrism(topo.Shape, gp.Vec, Boolean, Boolean) Redefined.
  // makePrism(topo.Shape, gp.Dir, Boolean, Boolean, Boolean) Redefined.
  // makeRevol(topo.Shape, gp.Ax1, Double, Boolean) Redefined.
  // makeRevol(topo.Shape, gp.Ax1, Boolean) Redefined.


  it('makeSphere(Double)', function(){
    var res = primitives.makeSphere(8);
    helpers.expectType(res, 'Shape');
  });


  it('makeSphere(Double, Double)', function(){
    var res = primitives.makeSphere(0.5, 1);
    helpers.expectType(res, 'Shape');
  });


  it('makeSphere(Double, Double, Double)', function(){
    var res = primitives.makeSphere(0.5, 1, 1.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeSphere(Double, Double, Double, Double)', function(){
    var res = primitives.makeSphere(0.5, 1, 1.5, 2);
    helpers.expectType(res, 'Shape');
  });


  it('makeSphere(gp.Pnt, Double)', function(){
    var res = primitives.makeSphere(create.gp.Pnt(), 0.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeSphere(gp.Pnt, Double, Double)', function(){
    var res = primitives.makeSphere(create.gp.Pnt(), 0.5, 1);
    helpers.expectType(res, 'Shape');
  });


  it('makeSphere(gp.Pnt, Double, Double, Double)', function(){
    var res = primitives.makeSphere(create.gp.Pnt(), 0.5, 1, 1.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeSphere(gp.Pnt, Double, Double, Double, Double)', function(){
    var res = primitives.makeSphere(create.gp.Pnt(), 0.5, 1, 1.5, 2);
    helpers.expectType(res, 'Shape');
  });


  it('makeSphere(gp.Ax2, Double)', function(){
    var res = primitives.makeSphere(create.gp.Ax2(), 0.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeSphere(gp.Ax2, Double, Double)', function(){
    var res = primitives.makeSphere(create.gp.Ax2(), 0.5, 1);
    helpers.expectType(res, 'Shape');
  });


  it('makeSphere(gp.Ax2, Double, Double, Double)', function(){
    var res = primitives.makeSphere(create.gp.Ax2(), 0.5, 1, 1.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeSphere(gp.Ax2, Double, Double, Double, Double)', function(){
    var res = primitives.makeSphere(create.gp.Ax2(), 0.5, 1, 1.5, 2);
    helpers.expectType(res, 'Shape');
  });


  it('makeTorus(Double, Double)', function(){
    var res = primitives.makeTorus(0.5, 1);
    helpers.expectType(res, 'Shape');
  });


  it('makeTorus(Double, Double, Double)', function(){
    var res = primitives.makeTorus(0.5, 1, 1.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeTorus(Double, Double, Double, Double)', function(){
    var res = primitives.makeTorus(0.5, 1, 1.5, 2);
    helpers.expectType(res, 'Shape');
  });


  it('makeTorus(Double, Double, Double, Double, Double)', function(){
    var res = primitives.makeTorus(0.5, 1, 1.5, 2, 2.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeTorus(gp.Ax2, Double, Double)', function(){
    var res = primitives.makeTorus(create.gp.Ax2(), 0.5, 1);
    helpers.expectType(res, 'Shape');
  });


  it('makeTorus(gp.Ax2, Double, Double, Double)', function(){
    var res = primitives.makeTorus(create.gp.Ax2(), 0.5, 1, 1.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeTorus(gp.Ax2, Double, Double, Double, Double)', function(){
    var res = primitives.makeTorus(create.gp.Ax2(), 0.5, 1, 1.5, 2);
    helpers.expectType(res, 'Shape');
  });


  it('makeTorus(gp.Ax2, Double, Double, Double, Double, Double)', function(){
    var res = primitives.makeTorus(create.gp.Ax2(), 0.5, 1, 1.5, 2, 2.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeWedge(Double, Double, Double, Double)', function(){
    var res = primitives.makeWedge(0.5, 1, 1.5, 2);
    helpers.expectType(res, 'Shape');
  });


  it('makeWedge(gp.Ax2, Double, Double, Double, Double)', function(){
    var res = primitives.makeWedge(create.gp.Ax2(), 0.5, 1, 1.5, 2);
    helpers.expectType(res, 'Shape');
  });


  it('makeWedge(Double, Double, Double, Double, Double, Double, Double)', function(){
    var res = primitives.makeWedge(0.5, 1, 1.5, 2, 2.5, 3, 3.5);
    helpers.expectType(res, 'Shape');
  });


  it('makeWedge(gp.Ax2, Double, Double, Double, Double, Double, Double, Double)', function(){
    var res = primitives.makeWedge(create.gp.Ax2(), 0.5, 1, 1.5, 2, 2.5, 3, 3.5);
    helpers.expectType(res, 'Shape');
  });
});
