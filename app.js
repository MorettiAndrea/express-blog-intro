const express = require("express");
const Posts = require("./posts");
const app = express();
const port = 3000;
const localHost = `http://localhost:${port}`;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "Benvenuti sul mio blog" });
});

app.get("/Bacheca", (req, res) => {
  res.json(Posts);
});

app.listen(port, () => {
  console.log(`Server in ascolto su ${localHost}`);
});
