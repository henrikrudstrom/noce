const topo = require('../../lib/topo.js');
var topoCreate = require('../topo/create.js');
const geom = require('../../lib/geom.js');
var geomCreate = require('../geom/create.js');
const gp = require('../../lib/gp.js');
var gpCreate = require('../gp/create.js');
const helpers = require('../testHelpers.js');
const expect = require('chai').expect;
describe('topo.Shape', function(){

  it('free', function() {
    var obj = topoCreate.shape();
    var value = false;
    obj.free = value;
    var res = obj.free;
    expect(obj.free).to.equal(value);
    expect(typeof res).to.equal('boolean');
  });

  it('locked', function() {
    var obj = topoCreate.shape();
    var value = false;
    obj.locked = value;
    var res = obj.locked;
    expect(obj.locked).to.equal(value);
    expect(typeof res).to.equal('boolean');
  });

  it('modified', function() {
    var obj = topoCreate.shape();
    var value = false;
    obj.modified = value;
    var res = obj.modified;
    expect(obj.modified).to.equal(value);
    expect(typeof res).to.equal('boolean');
  });

  it('checked', function() {
    var obj = topoCreate.shape();
    var value = false;
    obj.checked = value;
    var res = obj.checked;
    expect(obj.checked).to.equal(value);
    expect(typeof res).to.equal('boolean');
  });

  it('orientable', function() {
    var obj = topoCreate.shape();
    var value = false;
    obj.orientable = value;
    var res = obj.orientable;
    expect(obj.orientable).to.equal(value);
    expect(typeof res).to.equal('boolean');
  });

  it('closed', function() {
    var obj = topoCreate.shape();
    var value = false;
    obj.closed = value;
    var res = obj.closed;
    expect(obj.closed).to.equal(value);
    expect(typeof res).to.equal('boolean');
  });

  it('infinite', function() {
    var obj = topoCreate.shape();
    var value = false;
    obj.infinite = value;
    var res = obj.infinite;
    expect(obj.infinite).to.equal(value);
    expect(typeof res).to.equal('boolean');
  });

  it('convex', function() {
    var obj = topoCreate.shape();
    var value = false;
    obj.convex = value;
    var res = obj.convex;
    expect(obj.convex).to.equal(value);
    expect(typeof res).to.equal('boolean');
  });

  it('orientation', function() {
    var obj = topoCreate.shape();
    var value = topoCreate.orientation();
    obj.orientation = value;
    var res = obj.orientation;
    expect(obj.orientation).to.equal(value);
    expect(typeof res).to.equal('number');
  });

  it('location', function() {
    var obj = topoCreate.shape();
    var value = topoCreate.location();
    obj.location = value;
    var res = obj.location;
    expect(obj.location).to.equal(value);
    helpers.expectType(res, 'Location');
  });

  it('isNull()', function() {
    var obj = topoCreate.shape();
    var res = obj.isNull();
    expect(typeof res).to.equal('boolean');
  });

  it('nullify()', function() {
    var obj = topoCreate.shape();
    var res = obj.nullify();
  });

  it('located(topo.Location)', function() {
    var obj = topoCreate.shape();
    var res = obj.located(topoCreate.location());
    helpers.expectType(res, 'Shape');
  });

  it('oriented(topo.Orientation)', function() {
    var obj = topoCreate.shape();
    var res = obj.oriented(topoCreate.orientation());
    helpers.expectType(res, 'Shape');
  });

  // Arguments or return type not wrapped.
  xit('tshape()', function() { });

  it('shapeType()', function() {
    var obj = topoCreate.shape();
    var res = obj.shapeType();
    expect(typeof res).to.equal('number');
  });

  it('move(topo.Location)', function() {
    var obj = topoCreate.shape();
    var res = obj.move(topoCreate.location());
  });

  it('moved(topo.Location)', function() {
    var obj = topoCreate.shape();
    var res = obj.moved(topoCreate.location());
    helpers.expectType(res, 'Shape');
  });

  it('reverse()', function() {
    var obj = topoCreate.shape();
    var res = obj.reverse();
  });

  it('reversed()', function() {
    var obj = topoCreate.shape();
    var res = obj.reversed();
    helpers.expectType(res, 'Shape');
  });

  it('complement()', function() {
    var obj = topoCreate.shape();
    var res = obj.complement();
  });

  it('complemented()', function() {
    var obj = topoCreate.shape();
    var res = obj.complemented();
    helpers.expectType(res, 'Shape');
  });

  it('compose(topo.Orientation)', function() {
    var obj = topoCreate.shape();
    var res = obj.compose(topoCreate.orientation());
  });

  it('composed(topo.Orientation)', function() {
    var obj = topoCreate.shape();
    var res = obj.composed(topoCreate.orientation());
    helpers.expectType(res, 'Shape');
  });

  it('isPartner(topo.Shape)', function() {
    var obj = topoCreate.shape();
    var res = obj.isPartner(topoCreate.shape());
    expect(typeof res).to.equal('boolean');
  });

  it('isSame(topo.Shape)', function() {
    var obj = topoCreate.shape();
    var res = obj.isSame(topoCreate.shape());
    expect(typeof res).to.equal('boolean');
  });

  it('isEqual(topo.Shape)', function() {
    var obj = topoCreate.shape();
    var res = obj.isEqual(topoCreate.shape());
    expect(typeof res).to.equal('boolean');
  });

  it('isNotEqual(topo.Shape)', function() {
    var obj = topoCreate.shape();
    var res = obj.isNotEqual(topoCreate.shape());
    expect(typeof res).to.equal('boolean');
  });

  it('hashCode(Integer)', function() {
    var obj = topoCreate.shape();
    var res = obj.hashCode(1);
    expect(typeof res).to.equal('number');
  });

  it('emptyCopy()', function() {
    var obj = topoCreate.shape();
    var res = obj.emptyCopy();
  });

  it('emptyCopied()', function() {
    var obj = topoCreate.shape();
    var res = obj.emptyCopied();
    helpers.expectType(res, 'Shape');
  });

  // Arguments or return type not wrapped.
  xit('tshape(Handle_TopoDS_TShape)', function() { });
});
