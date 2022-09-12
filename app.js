const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const user_routes = require("./routes");

const app = express();

// Asignamos la configuración del puerto

app.set("port", process.env.PORT || 4000);

// Configuramos middlewares

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

// Cargamos las rutas
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Api user" });
});
app.use("/api/user", user_routes);

module.exports = app;
