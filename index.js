const express = require("express");
const app = express();
const port = 3000;
const localHost = "http://localhost:3000";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "Benvenuti sul mio blog" });
});

app.get("/I Miei Post", (req, res) => {
  const iMieiPost = [
    {
      id: 1,
      titolo: "Il ciambellone",
      contenuto: "Ricetta del ciambellone",
      immagine: "ciambellone.jpeg",
      tags: ["colazione", "ricette"],
    },
    {
      id: 2,
      titolo: "Cracker Barbabietola",
      contenuto: "Ricetta del Cracker Barbabietola ",
      immagine: "barbabietola.jpeg",
      tags: ["snack", "ricette"],
    },
    {
      id: 3,
      titolo: "Pane fritto dolce",
      contenuto: "Ricetta del Pane fritto dolce",
      immagine: "fritto_dolce.jpeg",
      tags: ["pane fritto", "ricette"],
    },
    {
      id: 4,
      titolo: "Pasta barbabietola",
      contenuto: "Ricetta della Pasta barbabietola",
      immagine: "barbabietola.jpeg",
      tags: ["pasta", "ricette"],
    },
    {
      id: 5,
      titolo: "Torta paesana",
      contenuto: "Ricetta della Torta paesana",
      immagine: "torta_paesana.jpeg",
      tags: ["torte", "ricette"],
    },
  ];
  res.json(iMieiPost);
});
