var Geom = require('../lib/Geom.node');
var gp = require('../lib/gp.node');
var create = require('./create.js');
describe('Geom.TrimmedCurve', function() {
  it('TrimmedCurve(Geom.Curve, Double, Double, Boolean)', function() {

    // console.log('TrimmedCurve(Geom.Curve, Double, Double, Boolean)')
    const circle = create.Geom.Curve();
    // console.log('Circ')
    const res = new Geom.TrimmedCurve(circle, 0, 0.5, true);
    // console.log('Trim')
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });
});