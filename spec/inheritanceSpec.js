const gp = require('../lib/gp.node');
const Geom = require('../lib/Geom.node');


describe('class inheritance', function() {
  it('inherits from base class', function() {
    var ax2 = new gp.Ax2(new gp.Pnt(1, 2, 3), new gp.Dir(0, 0, 1));
    var circle = new Geom.Circle(ax2, 1);
    expect(typeof circle.location).toBe('function');
    expect(typeof circle.position).toBe('function');
    expect(typeof circle.continuity).toBe('function');
    expect(typeof circle.isCn).toBe('function');
  });

  it('inherits from all ancestors', function() {
    var ax2 = new gp.Ax2(new gp.Pnt(1, 2, 3), new gp.Dir(0, 0, 1));
    var ax3 = new gp.Ax3(new gp.Pnt(1, 2, 3), new gp.Dir(0, 0, 1), new gp.Dir(1, 0, 0));
    var circle = new Geom.Circle(ax2, 1);
    var trimmed = new Geom.TrimmedCurve(circle, 0, 1.5, true);
    var sphere = new Geom.SphericalSurface(ax3, 10);
    expect(typeof trimmed.translate).toBe('function');
    expect(typeof trimmed.value).toBe('function');
    expect(typeof sphere.rotate).toBe('function');
    expect(typeof sphere.isCnu).toBe('function');
  });
});
