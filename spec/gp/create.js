var gp = require('../../lib/gp.js');

var currentDouble = 0;

function nextDouble() {
  currentDouble += 1;
  return currentDouble;
}

var create = {
  xyz() {
    return new gp.XYZ(nextDouble(), nextDouble(), nextDouble());
  },
  vec() {
    return new gp.Vec(nextDouble(), nextDouble(), nextDouble());
  },
  pnt() {
    return new gp.Pnt(nextDouble(), nextDouble(), nextDouble());
  },
  dir() {
    return new gp.Dir(nextDouble(), nextDouble(), nextDouble());
  },
  ax1() {
    return new gp.Ax1(
      create.pnt(), create.dir()
    );
  },
  ax2() {
    return new gp.Ax2(
      create.pnt(), create.dir(), create.dir()
    );
  },
  ax3() {
    return new gp.Ax3(
      create.pnt(), create.dir(), create.dir()
    );
  },
  trsf() {
    return new gp.Trsf();
  },
  vec2d() {
    return new gp.Vec2d(nextDouble(), nextDouble());
  },
  pnt2d() {
    return new gp.Pnt2d(nextDouble(), nextDouble());
  },
  dir2d() {
    return new gp.Dir2d(nextDouble(), nextDouble());
  },
  ax2d() {
    return new gp.Ax2d(
      create.pnt2d(), create.dir2d()
    );
  },
  ax22d() {
    return new gp.Ax22d(
      create.pnt2d(), new gp.Dir2d(1, 0), new gp.Dir2d(0, 1)
    );
  },

  trsf2d() {
    return new gp.Trsf2d();
  }
};

module.exports = create;
