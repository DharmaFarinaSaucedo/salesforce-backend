const express = require("express");
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Endpoint para la ejecución
app.post("/execute", (req, res) => {
  console.log("Datos recibidos en /execute:", req.body);

  // Lógica para manejar la ejecución (puedes modificar según sea necesario)
  const receivedData = req.body;

  // Respuesta con los datos recibidos para verificar
  const response = {
    success: true,
    message: "Ejecución completada",
    receivedData: receivedData, // Devolvemos los datos recibidos en la respuesta
  };

  // Enviar respuesta a Journey Builder
  res.status(200).json(response);
});

// Endpoint para guardar la configuración
app.post("/save", (req, res) => {
  console.log("Datos recibidos en /save:", req.body);

  // Lógica para manejar el guardado
  res.status(200).send("Configuración guardada exitosamente");
});

// Endpoint para publicar la actividad
app.post("/publish", (req, res) => {
  console.log("Datos recibidos en /publish:", req.body);

  // Lógica para manejar la publicación
  res.status(200).send("Actividad publicada");
});

// Endpoint para validar la actividad
app.post("/validate", (req, res) => {
  console.log("Datos recibidos en /validate:", req.body);

  // Lógica para validar
  res.status(200).send("Validación exitosa");
});

// Endpoint para detener la actividad
app.post("/stop", (req, res) => {
  console.log("Datos recibidos en /stop:", req.body);

  // Lógica para detener
  res.status(200).send("Actividad detenida");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
