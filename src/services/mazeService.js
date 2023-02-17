const { getNeighbors } = require('../utils/mazeUtils');
const Node = require('../models/node');

function shortestPath(maze, startX, startY, endX, endY) {
  const startNode = new Node(startX, startY);
  const endNode = new Node(endX, endY);
  const queue = [startNode];
  const visited = new Set([`${startX},${startY}`]);

  while (queue.length > 0) {
    //Shift (remove) the first element of the array:
    const currentNode = queue.shift();

    //verifica si currentNode es el nodo final
    if (currentNode.isSame(endNode)) {
      // reconstruccion de la ruta mas corta

      const path = [];
      let current = currentNode;

      while (current !== null) {
        path.unshift([current.x, current.y]);
        current = current.parent;
      }
      return path;
    }
    //currentNode is not the endNode
    const neighbors = getNeighbors(maze, currentNode);
    for (const neighbor of neighbors) {
      //has()	Returns true if a value exists
      if (!visited.has(`${neighbor.x},${neighbor.y}`)) {
        visited.add(`${neighbor.x},${neighbor.y}`);
        neighbor.parent = currentNode;
        queue.push(neighbor);
      }
    }
  }

  return null; // no path found
}

module.exports = { shortestPath };
