const { getNeighbors } = require('../utils/mazeUtils');
const Node = require('../models/node');

function shortestPath(maze, startX, startY, endX, endY) {
  const startNode = new Node(startX, startY);
  const endNode = new Node(endX, endY);
  const queue = [startNode];
  const visited = new Set([`${startX},${startY}`]);

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode.isSame(endNode)) {
      const path = [];
      let current = currentNode;
      while (current !== null) {
        path.unshift([current.x, current.y]);
        current = current.parent;
      }
      return path;
    }

    const neighbors = getNeighbors(maze, currentNode);
    for (const neighbor of neighbors) {
      if (!visited.has(`${neighbor.x},${neighbor.y}`)) {
        visited.add(`${neighbor.x},${neighbor.y}`);
        neighbor.parent = currentNode;
        queue.push(neighbor);
      }
    }
  }

  return null;
}

module.exports = { shortestPath };
