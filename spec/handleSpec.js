var Geom = require('../lib/Geom.node');
var gp = require('../lib/gp.node');

describe('a handle', function() {
  it('returns handles as objects', function() {
    var ap1 = new Geom.Axis1Placement(new gp.Pnt(1, 1, 1), new gp.Dir(0, 0, 1));
    var ap3 = ap1.translated(new gp.Vec(2, 3, 4));
    expect(ap3.constructor.name).toBe('_exports_Axis1Placement');
    ap3.angle(ap1);
  });

  it('accepts objects as handles', function() {
    var ap1 = new Geom.Axis1Placement(new gp.Pnt(1, 1, 1), new gp.Dir(0, 0, 1));
    var ap2 = new Geom.Axis1Placement(new gp.Pnt(1, 1, 1), new gp.Dir(0, 1, 0));
    ap1.translated(new gp.Vec(2, 3, 4));
    ap2.angle(ap1);
  });

  xit('it plays well with garbage collectors', function() {
    process.stdout.write('GarbageCollector');
    for (var i = 0; i < 250000; i++) { // 52631 pr second
      var ap1 = new Geom.Axis1Placement(new gp.Pnt(1, 1, 1), new gp.Dir(0, 0, 1));
      var ap2 = new Geom.Axis1Placement(new gp.Pnt(1, 1, 1), new gp.Dir(0, 1, 0));

      if (i % 25000 === 0)
        process.stdout.write('!');

      ap1.translated(new gp.Vec(2, 3, 4));
      ap1.angle(ap2);
    }
    expect(true).toBe(true);
  });


  function withGeom() {
    var ap1 = new Geom.Axis1Placement(new gp.Pnt(1, 1, 1), new gp.Dir(0, 0, 1));
    var ap2 = new Geom.Axis1Placement(new gp.Pnt(1, 1, 1), new gp.Dir(0, 1, 0));
    var ap3 = ap1.translated(new gp.Vec(2, 3, 4));
    var angle = ap1.angle(ap2._handle);
  }

  function withgp() {
    var ap1 = new gp.Ax1(new gp.Pnt(1, 1, 1), new gp.Dir(0, 0, 1));
    var ap2 = new gp.Ax1(new gp.Pnt(1, 1, 1), new gp.Dir(0, 1, 0));
    var ap3 = ap1.translate(new gp.Vec(2, 3, 4));
    var angle = ap1.angle(ap2);
  }

  function withjs() {
    //todo
  }

  function testPerformance(n, func) {
    console.time('cgp');
    for (var i = 0; i < n; i++) { // 52631 pr second
      func();
      if (i % 2500 === 0)
        console.log("handle" + i, ap1._handle);
    }
    return console.timeEnd('cgp');
  }

  xit('compare gp performance of, Geom and js', function() {
    testPerformance(25000, withGeom)
    testPerformance(25000, withgp)
    testPerformance(25000, withjs)
  });
});
