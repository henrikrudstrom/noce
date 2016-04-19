var notWorking = {
  'gp.Trsf': [
    'transforms(Double, Double, Double)',
    'setValues(Double, Double, Double, Double, Double, Double, Double, Double, Double, Double, Double, Double, Double, Double)'
  ],
  'Geom.CylindricalSurface': [
    'vperiod()',
    'uiso(Double)' // Works on spherical... segmentation fault
  ],
  'Geom.SphericalSurface': [
    'vperiod()'
  ],
  'Geom.Circle': [
    'makeCircle(gp.Pnt, gp.Pnt, gp.Pnt)'
  ],
  'Geom.TrimmedCurve': [
    'makeArcOfCircle(gp.Pnt, gp.Pnt, gp.Pnt)'
  ],
  'Geom.Line': [
    'period()'
  ],
  'Geom.Plane': [
    'uperiod()', 'vperiod()'
  ],
  'brep': [

  ]
};

module.exports.notWorking = function(clsName, memberSig) {
  if (clsName in notWorking)
    return notWorking[clsName].find(s => s === memberSig);
  return false;
};

var returnType = {
  'Geom.TrimmedCurve': {
    'basisCurve()': 'Circle',

  },
  'Geom.SphericalSurface': {
    'vperiod()': 'Circle',
    'viso(Double)': 'Circle',
    'uiso(Double)': 'TrimmedCurve'
  },
  'Geom.CylindricalSurface': {
    'viso(Double)': 'Circle'
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
