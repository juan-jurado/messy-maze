const express = require('express');
const mazeRoutes = require('./routes/mazeRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(mazeRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});