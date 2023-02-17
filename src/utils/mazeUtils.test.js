const { getNeighbors } = require('./mazeUtils');
const Node = require('../models/node');

describe('getNeighbors', () => {
  test('should return an array of neighboring nodes for a given node in the maze', () => {
    const maze = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    const node = new Node(1, 1);
    const neighbors = getNeighbors(maze, node);
    const expectedNeighbors = [
      new Node(0, 1),
      new Node(1, 2),
      new Node(2, 1),
      new Node(1, 0),
    ];
    expect(neighbors).toEqual(expectedNeighbors);
  });

  test('should return an empty array if there are no neighboring nodes for a given node in the maze', () => {
    const maze = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    const node = new Node(0, 0);
    const neighbors = getNeighbors(maze, node);
    expect(neighbors).toEqual([]);
  });

  test('should return an empty array if the node is outside the bounds of the maze', () => {
    const maze = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    const node = new Node(-1, -1);
    const neighbors = getNeighbors(maze, node);
    expect(neighbors).toEqual([]);
  });
});

