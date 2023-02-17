const Node = require('../models/node');

function getNeighbors(maze, node) {
    const [x, y] = [node.x, node.y];
    const directions = [
      [-1, 0], // up
      [0, 1], // right
      [1, 0], // down
      [0, -1], // left
    ];
    const neighbors = [];
  
    for (const [dx, dy] of directions) {
      const [nx, ny] = [x + dx, y + dy];
      if (nx >= 0 && ny >= 0 && nx < maze.length && ny < maze[0].length && maze[nx][ny] === 0) {
        neighbors.push(new Node(nx, ny));
      }
    }
  
    return neighbors;
  }
  
  module.exports = { getNeighbors };