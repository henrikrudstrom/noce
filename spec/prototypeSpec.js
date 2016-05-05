const expect = require('chai').expect;

const gp = require('../lib/gp');

describe('js prototype', function() {
  it('can attach methods to an wrapped class prototype', function() {
    Object.getPrototypeOf(gp.Vec.prototype).hello = function() {
      return 'Hi';
    };
    var pnt1 = new gp.Vec(1, 2, 3);
    expect(pnt1.hello()).to.equal('Hi');
    var pnt2 = pnt1.added(new gp.Vec(1, 2, 3));
    expect(pnt2.hello()).to.equal('Hi');
  });
});
