# Messy-Maze

> Messy Maze is a Restful service that allows you to find the shortest path to solve a route from point A to point B.

[![NPM Version][npm-image]][npm-url]
[![NODEJS Version][nodejs-image]][nodejs-url]
[![EXPRESS Version][express-image]][express-url]

Maze Solver is a Node.js module that provides a function for finding the shortest path from a starting point to an ending point in a maze represented as a two-dimensional array of numbers. To solve this problem, the breadth-first search (BFS) algorithm can be used, which works well for finding the shortest path in a maze, as long as the cost of moving from one node to another is uniform.
In this implementation, the maze is represented as a matrix of numbers, where a value of 1 represents a wall and a value of 0 represents an open space.

<img src="imgs/Group 1.png" alt="maze" style="height: 450px; width:450px;"/>
<img src="imgs/Group 2.png" alt="maze" style="height: 450px; width:450px;"/>

There are several search algorithms.

Depth-first search (DFS): This algorithm can also be used to find the shortest path in a maze. However, DFS does not guarantee that the shortest path will be found, as it may traverse longer paths before finding the shortest path.

A* algorithm: The A* algorithm is an informed search algorithm that uses a heuristic function to estimate the distance from a given node to the destination. In the case of a maze, the heuristic could be the Euclidean distance or the Manhattan distance from a given node to the exit. The A* algorithm can be faster than BFS if a good heuristic is chosen and the implementation is well optimized.

Dijkstra's algorithm: Dijkstra's algorithm is a classic algorithm for finding the shortest path in a graph with non-negative weights. Although it was not specifically designed for mazes, it can be used to find the shortest path in a maze where each square has a unit cost to move. Dijkstra's algorithm is more efficient than BFS if the maze is large and complex.

Each of these algorithms has its own advantages and disadvantages, and the best algorithm to use depends on the size and complexity of the maze, as well as the non-functional requirements of the problem. Generally, if the maze is small and not very complex, BFS is a good choice. If the maze is large and complex, the A* algorithm or Dijkstra's algorithm can be considered.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

1. Clone the project repository to your local machine.

2. Open a terminal and navigate to the root directory of the project.

3. Run `npm install` to install the dependencies listed in the `package.json` file.

4. Start the server by running `node src/app.js`.

5. Use a tool like Postman or curl to send a POST request to `http://localhost:3000/shortest-path` with the maze data in the request body. For example, the request body would look like this:

```json
{
  "maze": [
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [1, 0, 0, 0]
  ],
  "startX": 0,
  "startY": 0,
  "endX": 3,
  "endY": 3
}
```
- `maze`: a two-dimensional array of numbers representing the maze. 0 represents an open space, and 1 represents a wall.
- `startX`: the x-coordinate of the starting point in the maze.
- `startY`: the y-coordinate of the starting point in the maze.
- `endX`: the x-coordinate of the ending point in the maze.
- `endY`: the y-coordinate of the ending point in the maze.

6. The server will respond with the shortest path from the start to the end of the maze in JSON format, like this:
```json
{
  "path": [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 3]
  ]
}

```
This completes the steps to run the project. You can modify the maze data in the request body to test different mazes and see the shortest path returned by the server.
<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Jest Testing
To run the Jest tests, you can run the following command in your terminal:

```
jest
jest path/to/test/file.test.js
jest --watch
```

This test suite includes tests for the getNeighbors function in the mazeUtils module.
The getNeighbors test suite includes three tests:
- The first test checks that the getNeighbors function returns the correct neighboring nodes for a given node in the maze.
- The second test checks that the getNeighbors function returns an empty array if there are no neighboring nodes for a given node in the maze.
- The third test checks that the getNeighbors function returns an empty array if the given node is outside the bounds of the maze.

## Contributing
1. Fork it
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/badge/npm-9.4.0-brightgreen
[npm-url]: https://npmjs.org/package/datadog-metrics
[nodejs-image]: https://img.shields.io/badge/nodejs-v19.6.1-blue
[nodejs-url]: https://nodejs.org/en/
[express-image]: https://img.shields.io/badge/express-4.18.2-yellowgreen
[express-url]: https://expressjs.com/

<!------------------------------------------------------------->
## Contact
Juan Jurado - juanjuradop@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>