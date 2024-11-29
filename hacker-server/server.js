const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs'); // Importa il modulo fs
const cors = require('cors');

const app = express();
const PORT = 4000;

// Abilita CORS
var corsOptions = {
  origin: 'http://127.0.0.1:5501',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

// Middleware per gestire JSON
app.use(bodyParser.json({ limit: '10mb' }));

// Endpoint per ricevere l'immagine
app.post('/upload', (req, res) => {
  const imageData = req.body.image;

  // Decodifica l'immagine in base64 e salva come file
  const base64Data = imageData.replace(/^data:image\/png;base64,/, '');
  const filePath = `uploads/image_${Date.now()}.png`;

  // Crea la directory uploads se non esiste
  fs.mkdirSync('uploads', { recursive: true });

  // Salva l'immagine
  fs.writeFile(filePath, base64Data, 'base64', (err) => {
    if (err) {
      console.error("Errore nel salvataggio dell'immagine:", err);
      res.status(500).send("Errore nel salvataggio dell'immagine.");
    } else {
      console.log(`Immagine salvata: ${filePath}`);
      res.send("Immagine ricevuta con successo.");
    }
  });
});

// Avvia il server
app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
