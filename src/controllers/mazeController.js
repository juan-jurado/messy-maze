const { shortestPath } = require('../services/mazeService');

function mazeController(req, res) {
  const { maze, startX, startY, endX, endY } = req.body;
  const path = shortestPath(maze, startX, startY, endX, endY);
  res.json({ path });
}

module.exports = { mazeController };