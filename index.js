const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Hello universe!</h1>");
});

app.get('/api', (req, res) => {
  console.log('i hit');
  res.json({ msg: 'success' });
})

app.listen(port, () => console.log(`app running on port ${port}`));
