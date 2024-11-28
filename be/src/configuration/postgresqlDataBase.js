const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "database_users",
  password: "admin",
  port: 5432,
});

const connectDBPostgres = async () => {
  try {
    await pool.connect();
    console.log(
      `Successful connection to PostgreSQL on port ${pool.options.port}.`
    );
  } catch (error) {
    console.error("Error al conectar a PostgreSQL:", error.message);
  }
};

module.exports = { connectDBPostgres, pool };
