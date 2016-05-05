const expect = require('chai').expect;

var inheritance = {
  Shape: [
    'Vertex', 'Edge', 'Wire', 'Face',
    'Shell', 'Solid', 'CompSolid', 'Compound'
  ]
};

module.exports.expectType = function(res, type) {
  if (type === 'Integer' || type === 'Double')
    return expect(res).to.be.a('number');

  if (type === 'Boolean')
    return expect(res).to.be.a('boolean');

  if (type.indexOf('.') !== -1)
    type = type.split('.')[1];
  expect(typeof res).to.equal('object');

  var className = res.constructor.name.replace('_exports_', '');

  var types = [type];
  if (inheritance[type]) {
    types = inheritance[type];
  }
  expect(types).to.include(className);
  return true;
};
