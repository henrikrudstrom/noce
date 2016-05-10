var notWorking = {
  'gp.Trsf': [
    'transforms(gp.Vec)' //should not be wrapped
  ],
  'geom.CylindricalSurface': [
    'vperiod()',
    'uiso(Double)', // Works on spherical... segmentation fault
    'transformParameters(Double, Double, gp.Trsf)'
  ],
  'geom.SphericalSurface': [
    'vperiod()'
  ],
  'geom.Circle': [
    'makeCircle(gp.Pnt, gp.Pnt, gp.Pnt)'
  ],
  'geom.TrimmedCurve': [
    'makeArcOfCircle(gp.Pnt, gp.Pnt, gp.Pnt)',
    'setTrim(Double, Double, Boolean)',
    'transformedParameter(Double, gp.Trsf)'
  ],
  'geom.Line': [
    'period()'
  ],
  'geom.Plane': [
    'uperiod()', 'vperiod()',
    'transformParameters(Double, Double, gp.Trsf)'
  ],
  'geom.BezierCurve': [
    'increase(Integer)'
  ],
  'geom2d.BezierCurve': [
    'increase(Integer)',
    'BezierCurve(Array)',
    'BezierCurve(Array, Array)'
  ],
  'primitives.Revolution': [
    'startTopEdge()',
    // TODO: first arg is outarg or 'const &'
    'setMeridianPcurve(topo.Edge, topo.Face)'
  ],
  'topo': [
    'makeWire(topo.Wire)',
    'makeWire(topo.Edge)'
  ],
  'boolean': [
    '*(*)'
  ]
};

module.exports.notWorking = function(clsName, memberSig) {
  if (clsName in notWorking)
    return notWorking[clsName].find(s => s === memberSig);
  return false;
};

var returnType = {
  'geom.TrimmedCurve': {
    'basisCurve()': 'Circle'

  },
  'geom.SphericalSurface': {
    'vperiod()': 'Circle',
    'viso(Double)': 'Circle',
    'uiso(Double)': 'TrimmedCurve'
  },
  'geom.CylindricalSurface': {
    'viso(Double)': 'Circle'
  },
  'geom.Plane': {
    'uiso(Double)': 'Line',
    'viso(Double)': 'Line'
  }
};
module.exports.returnType = function(clsName, memberSig) {
  if (clsName in returnType) {
    var sigs = returnType[clsName];
    if (memberSig in sigs) {
      return sigs[memberSig];
    }
  }
  return false;
};
