var geom = require('../../lib/geom.js');
var gp = require('../../lib/gp.js');
var create = require('./create.js');
var helpers = require('../testHelpers.js');
const expect = require('chai').expect;

describe('geom.TrimmedCurve', function() {
  it('TrimmedCurve(geom.Curve, Double, Double, Boolean)', function() {
    const circle = create.geom.curve();
    const res = new geom.TrimmedCurve(circle, 0, 0.5, true);
    helpers.expectType(res, 'TrimmedCurve');
  });
});

describe('geom.BezierCurve', function() {
  it('BezierCurve(Array)', function() {
    var points = [
      new gp.Pnt(1, 2, 3), new gp.Pnt(2, 3, 4),
      new gp.Pnt(3, 4, 5), new gp.Pnt(4, 5, 6)
    ];
    var res = new geom.BezierCurve(points);
    helpers.expectType(res, 'BezierCurve');
    expect(res.nbPoles()).to.equal(4);
  });

  it('BezierCurve(Array, Array)', function() {
    var points = [
      new gp.Pnt(1, 2, 3), new gp.Pnt(2, 3, 4),
      new gp.Pnt(3, 4, 5), new gp.Pnt(4, 5, 6)
    ];
    var weights = [0.1, 0.2, 0.2, 0.1];
    var res = new geom.BezierCurve(points, weights);
    helpers.expectType(res, 'BezierCurve');
    expect(res.nbPoles()).to.equal(4);
  });
});
