const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL, // Variable de entorno de Render
  ssl: {
    rejectUnauthorized: false, // Necesario para conexiones en la nube
  },
});

const connectDBPostgres = async () => {
  try {
    await pool.connect();
    console.log("Successful connection to PostgreSQL.");
  } catch (error) {
    console.error("Error al conectar a PostgreSQL:", error.message);
  }
};

module.exports = { connectDBPostgres, pool };
