var gp = require('../lib/gp.node');
var helpers = require('./testHelpers.js');
const expect = require('chai').expect;

describe('gp.Dir', function() {
  it('cross(gp.Dir)', function() {
    var obj = new gp.Dir(1, 0, 0);
    var res = obj.cross(new gp.Dir(0, 1, 0));
  });

  it('crossed(gp.Dir)', function() {
    var obj = new gp.Dir(1, 0, 0);
    var res = obj.cross(new gp.Dir(0, 1, 0));
    helpers.expectType(res, 'Dir');
  });

  it('crossCross(gp.Dir, gp.Dir)', function() {
    var obj = new gp.Dir(1, 0, 0);
    var res = obj.crossCross(new gp.Dir(1, 0, 0), new gp.Dir(0, 0, 1));
    helpers.expectType(res, 'Dir');
  });

  it('crossCrossed(gp.Dir, gp.Dir)', function() {
    var obj = new gp.Dir(1, 0, 0);
    var res = obj.crossCross(new gp.Dir(1, 0, 0), new gp.Dir(0, 0, 1));
    helpers.expectType(res, 'Dir');
  });
});

describe('gp.Ax2', function() {
  it('Ax2(gp.Pnt, gp.Dir, gp.Dir)', function() {
    var res = new gp.Ax2(
      new gp.Pnt(1, 3, 2), new gp.Dir(0, 1, 0), new gp.Dir(0, 0, 1)
    );
    helpers.expectType(res, 'Ax2');
  });
});

describe('gp.Ax3', function() {
  it('Ax3(gp.Pnt, gp.Dir, gp.Dir)', function() {
    var res = new gp.Ax3(
      new gp.Pnt(1, 3, 2), new gp.Dir(0, 1, 0), new gp.Dir(0, 0, 1)
    );
    helpers.expectType(res, 'Ax3');
  });
});

describe('gp.Trsf', function() {
  it('setValues(Double, Double, Double, Double, Double, Double, Double, Double, Double, Double, Double, Double)', function(){
    var obj = new gp.Trsf();
    var res = obj.setValues(1,0,0,0, 0,1,0,0, 0,0,1,0);
  });
})
