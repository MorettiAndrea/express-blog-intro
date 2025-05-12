const express = require("express");
const app = express();
const port = 3000;
const localHost = `http://localhost:${port}`;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "Benvenuti sul mio blog" });
});

app.get("/Bacheca", (req, res) => {
  const iMieiPost = [
    {
      id: 1,
      titolo: "Il ciambellone",
      contenuto: "Ricetta del ciambellone",
      immagine: `${localHost}/img/ciambellone.jpeg`,
      tags: ["colazione", "ricette"],
    },
    {
      id: 2,
      titolo: "Cracker Barbabietola",
      contenuto: "Ricetta del Cracker Barbabietola ",
      immagine: `${localHost}/img/cracker_barbabietola.jpeg`,
      tags: ["snack", "ricette"],
    },
    {
      id: 3,
      titolo: "Pane fritto dolce",
      contenuto: "Ricetta del Pane fritto dolce",
      immagine: `${localHost}/img/pane_fritto_dolce.jpeg`,
      tags: ["pane fritto", "ricette"],
    },
    {
      id: 4,
      titolo: "Pasta barbabietola",
      contenuto: "Ricetta della Pasta barbabietola",
      immagine: `${localHost}/img/pasta_barbabietola.jpeg`,
      tags: ["pasta", "ricette"],
    },
    {
      id: 5,
      titolo: "Torta paesana",
      contenuto: "Ricetta della Torta paesana",
      immagine: `${localHost}/img/torta_paesana.jpeg`,
      tags: ["torte", "ricette"],
    },
  ];

  res.json(iMieiPost);
});

app.listen(port, () => {
  console.log(`Server in ascolto su ${localHost}`);
});
