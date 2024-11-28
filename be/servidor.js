const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDBMongo = require("./src/configuration/dataBase");
const { connectDBPostgres } = require("./src/configuration/postgresqlDataBase");
const middlewareAuth = require("./src/middleware/authenticationMiddleware");

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

connectDBMongo();
connectDBPostgres();

// Rutas

app.use("/api/products", require("./src/routes/productRoutes"));
app.use("/api/users", require("./src/routes/userRoutes"));
app.use("/api/orders", require("./src/routes/orderRoutes"));
app.use("/api/cart", require("./src/routes/cartRoutes"));
app.use("/api/categories", require("./src/routes/categoryRoutes"));

// Estados

app.get("/api/users/profile", middlewareAuth, (req, res) => {
  res.status(200).json({ message: "Perfil de usuario", user: req.user });
});

app.use((req, res, next) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ error: "Error en el servidor", error: error.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
