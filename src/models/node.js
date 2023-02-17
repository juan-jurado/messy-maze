class Node {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.parent = null;
    }
  
    isSame(node) {
      return this.x === node.x && this.y === node.y;
    }
  }
  
  module.exports = Node;
  