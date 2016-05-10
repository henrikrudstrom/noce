// const topo = require('../../lib/topo.js');
// const geom = require('../../lib/geom.js');
// const geom2d = require('../../lib/geom2d.js');
// const gp = require('../../lib/gp.js');
// const helpers = require('../testHelpers.js');
// const create = require('./create.js');
// const expect = require('chai').expect;
// describe('topo.Shape', function(){
//
//   it('free', function() {
//     var obj = create.topo.shape();
//     var value = false;
//     obj.free = value;
//     var res = obj.free;
//     expect(obj.free).to.equal(value);
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('locked', function() {
//     var obj = create.topo.shape();
//     var value = false;
//     obj.locked = value;
//     var res = obj.locked;
//     expect(obj.locked).to.equal(value);
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('modified', function() {
//     var obj = create.topo.shape();
//     var value = false;
//     obj.modified = value;
//     var res = obj.modified;
//     expect(obj.modified).to.equal(value);
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('checked', function() {
//     var obj = create.topo.shape();
//     var value = false;
//     obj.checked = value;
//     var res = obj.checked;
//     expect(obj.checked).to.equal(value);
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('orientable', function() {
//     var obj = create.topo.shape();
//     var value = false;
//     obj.orientable = value;
//     var res = obj.orientable;
//     expect(obj.orientable).to.equal(value);
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('closed', function() {
//     var obj = create.topo.shape();
//     var value = false;
//     obj.closed = value;
//     var res = obj.closed;
//     expect(obj.closed).to.equal(value);
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('infinite', function() {
//     var obj = create.topo.shape();
//     var value = false;
//     obj.infinite = value;
//     var res = obj.infinite;
//     expect(obj.infinite).to.equal(value);
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('convex', function() {
//     var obj = create.topo.shape();
//     var value = false;
//     obj.convex = value;
//     var res = obj.convex;
//     expect(obj.convex).to.equal(value);
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('orientation', function() {
//     var obj = create.topo.shape();
//     var value = create.topo.orientation();
//     obj.orientation = value;
//     var res = obj.orientation;
//     expect(obj.orientation).to.equal(value);
//     expect(typeof res).to.equal('number');
//   });
//
//   it('location', function() {
//     var obj = create.topo.shape();
//     var value = create.topo.location();
//     obj.location = value;
//     var res = obj.location;
//     expect(obj.location).to.equal(value);
//     helpers.expectType(res, 'Location');
//   });
//
//   it('isNull()', function() {
//     var obj = create.topo.shape();
//     var res = obj.isNull();
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('nullify()', function() {
//     var obj = create.topo.shape();
//     var res = obj.nullify();
//   });
//
//   xit('located(topo.Location)', function() {
//     var obj = create.topo.shape();
//     var res = obj.located(create.topo.location());
//     helpers.expectType(res, 'Shape');
//   });
//
//   xit('oriented(topo.Orientation)', function() {
//     var obj = create.topo.shape();
//     var res = obj.oriented(create.topo.orientation());
//     helpers.expectType(res, 'Shape');
//   });
//
//   // Arguments or return type not wrapped.
//   xit('tshape()', function() { });
//
//   xit('shapeType()', function() {
//     var obj = create.topo.shape();
//     var res = obj.shapeType();
//     expect(typeof res).to.equal('number');
//   });
//
//   xit('move(topo.Location)', function() {
//     var obj = create.topo.shape();
//     var res = obj.move(create.topo.location());
//   });
//
//   xit('moved(topo.Location)', function() {
//     var obj = create.topo.shape();
//     var res = obj.moved(create.topo.location());
//     helpers.expectType(res, 'Shape');
//   });
//
//   xit('reverse()', function() {
//     var obj = create.topo.shape();
//     var res = obj.reverse();
//   });
//
//   xit('reversed()', function() {
//     var obj = create.topo.shape();
//     var res = obj.reversed();
//     helpers.expectType(res, 'Shape');
//   });
//
//   it('complement()', function() {
//     var obj = create.topo.shape();
//     var res = obj.complement();
//   });
//
//   it('complemented()', function() {
//     var obj = create.topo.shape();
//     var res = obj.complemented();
//     helpers.expectType(res, 'Shape');
//   });
//
//   xit('compose(topo.Orientation)', function() {
//     var obj = create.topo.shape();
//     var res = obj.compose(create.topo.orientation());
//   });
//
//   xit('composed(topo.Orientation)', function() {
//     var obj = create.topo.shape();
//     var res = obj.composed(create.topo.orientation());
//     helpers.expectType(res, 'Shape');
//   });
//
//   it('isPartner(topo.Shape)', function() {
//     var obj = create.topo.shape();
//     var res = obj.isPartner(create.topo.shape());
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('isSame(topo.Shape)', function() {
//     var obj = create.topo.shape();
//     var res = obj.isSame(create.topo.shape());
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('isEqual(topo.Shape)', function() {
//     var obj = create.topo.shape();
//     var res = obj.isEqual(create.topo.shape());
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('isNotEqual(topo.Shape)', function() {
//     var obj = create.topo.shape();
//     var res = obj.isNotEqual(create.topo.shape());
//     expect(typeof res).to.equal('boolean');
//   });
//
//   it('hashCode(Integer)', function() {
//     var obj = create.topo.shape();
//     var res = obj.hashCode(1);
//     expect(typeof res).to.equal('number');
//   });
//
//   it('emptyCopy()', function() {
//     var obj = create.topo.shape();
//     var res = obj.emptyCopy();
//   });
//
//   it('emptyCopied()', function() {
//     var obj = create.topo.shape();
//     var res = obj.emptyCopied();
//     helpers.expectType(res, 'Shape');
//   });
//
//   // Arguments or return type not wrapped.
//   xit('tshape(Handle_TopoDS_TShape)', function() { });
// });
