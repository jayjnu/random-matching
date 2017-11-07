class Node {
  constructor(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
    this.tail = null;
  }
  get length() {
    return this._length;
  }
  add(value) {
    const node = new Node(value);
    if (this._length) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this._length++;

    return node;
  }
  remove(position) {
    switch(position){
      case 1:
        this._removeHead();
        break;
      case this.length:
        this._removeTail();
        break;
      default:
        this._removeMiddle(position);
    }
    this._length = Math.max(this._length - 1, 0);
  }
  _removeHead() {
    this.head = this.head.next;
    if(this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
  }
  _removeTail() {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  _removeMiddle(pos) {
    let nodeToDelete = this.searchNodeAt(pos);
    let beforeNodeToDelete = nodeToDelete.prev;
    let afterNodeToDelete = nodeToDelete.next;
    beforeNodeToDelete.next = afterNodeToDelete;
    afterNodeToDelete.prev = beforeNodeToDelete;
  }

  searchNodeAt(position) {
    let currentNode = this.head;
    let length = this._length;
    let count = 1;
    let errorMessage = 'Reference Error: position does not stay in range';
    
    const isOutOfRange = length === 0 || position < 1 || position > length;

    if (isOutOfRange) {
      throw new Error(errorMessage);
    }

    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }
  searchFirstNodeMatching(condition) {
    let currentNode = this.head;
    let length = this._length;
    let count = 1;    

    while (count < length) {
      const matches = condition(currentNode, count);
      if (matches) {
        return currentNode;
      }
      currentNode = currentNode.next;
      count++;
    }

    return null;
  }
}

module.exports = DoublyLinkedList;