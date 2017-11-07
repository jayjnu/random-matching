const expect = require('chai').expect;
const Dll = require('../lib/doubly-linked-list');
const test = [1, 2, 3, 4, 5, 6, 7, 8];

const list = new Dll();
test.forEach((num) => list.add(num));

describe('Doubly Linked List', function() {
  describe('#add', function() {
    it(`incremented length of the list to ${test.length}`, function() {
      expect(list.length).to.equals(test.length);
    });
    it(`set the value of the head to ${test[0]}`, function() {
      expect(list.head.value).to.equals(test[0]);
    });
    it(`set the value of the tail to ${test[test.length -1]}`, function() {
      expect(list.tail.value).to.equals(test[test.length -1]);
    })
  });

  describe('#searchNodeAt', function() {
    it(`should return ${test[2]}, given its position: ${3}`, function() {
      expect(list.searchNodeAt(3).value).to.equals(test[2]);
    });
  });

  describe('#searchFirstNodeMatching', function() {
    it(`should return ${test[3]}, given its condition: node.value === ${test[3]}`, function() {
      expect(list.searchFirstNodeMatching((node, count) => node.value === test[3]).value).to.equals(test[3]);
    });

    it('should return null, given its condition: node.value === "hello world"', function() {
      expect(list.searchFirstNodeMatching((node, count) => node.value === 'hello world')).to.equals(null);
    });
  });
  describe('#remove', function() {
    const list = new Dll();
    test.forEach((num) => list.add(num));

    list.remove(1);
    it(`should return ${test[0]} given position 1`, function(done) {
      expect(list.head.value).to.equals(test[1]);
      done();
    });

    list.remove(2);
    it(`should return ${test[5]} given position 4`, function(done) {
      expect(list.searchNodeAt(4).value).to.equals(test[5]);
      done();
    });

    list.remove(list.length);
    it(`should return ${test[test.length - 2]} given position ${list.length}`, function(done) {
      expect(list.tail.value).to.equals(test[test.length - 2]);
      done();
    });
  });
});