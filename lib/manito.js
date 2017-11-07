const Dll = require('./doubly-linked-list');

class Manito {
  constructor(arr = []) {
    this.list = new Dll();
    arr.forEach((elem) => this.list.add(elem));
  }

  forEach(fn) {
    let currentNode = this.list.head;
    let length = this.list.length;
    let cnt = 0;
    while(cnt < length) {
      const hasNext = currentNode.next !== null;
      const hasPrev = currentNode.prev !== null;
      const data = {
        me: currentNode.value,
        manitoFrom: hasPrev ? currentNode.prev.value : this.list.tail.value,
        targetTo: hasNext ? currentNode.next.value : this.list.head.value
      };
      fn(data, cnt, currentNode);
      cnt++;
      currentNode = currentNode.next;
    }
  }

  map(fn) {
    const mapped = [];
    this.forEach((data, cnt, currentNode) => {
      mapped.push(fn(data, cnt, currentNode));
    });
    return mapped;
  }

  mapListToArray() {
    return this.map((data) => data);
  }
}

module.exports = Manito;