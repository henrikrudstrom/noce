const gp = require('../lib/gp.node');
const geom = require('../lib/geom.node');
const expect = require('chai').expect;

describe('class inheritance', function() {
  it('inherits from base class', function() {
    var ax2 = new gp.Ax2(new gp.Pnt(1, 2, 3), new gp.Dir(0, 0, 1));
    var circle = new geom.Circle(ax2, 1);
    expect(circle.location).to.be.a('function');
    expect(circle.position).to.be.a('function');
    expect(circle.continuity).to.be.a('function');
    expect(circle.isCn).to.be.a('function');
  });

  it('inherits from all ancestors', function() {
    var ax2 = new gp.Ax2(new gp.Pnt(1, 2, 3), new gp.Dir(0, 0, 1));
    var ax3 = new gp.Ax3(new gp.Pnt(1, 2, 3), new gp.Dir(0, 0, 1), new gp.Dir(1, 0, 0));
    var circle = new geom.Circle(ax2, 1);
    var trimmed = new geom.TrimmedCurve(circle, 0, 1.5, true);
    var sphere = new geom.SphericalSurface(ax3, 10);
    expect(trimmed.translate).to.be.a('function');
    expect(trimmed.value).to.be.a('function');
    expect(sphere.rotate).to.be.a('function');
    expect(sphere.isCnu).to.be.a('function');
  });
});
