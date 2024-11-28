const { pool } = require("../configuration/postgresqlDataBase");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password, address, telephone, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (name, email, password, address, telephone, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, email, hashedPassword, address, telephone, role || "cliente"]
    );
    return res
      .status(201)
      .json({ message: "Usuario registrado", user: result.rows[0] });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al crear el usuario", error: error.message });
  }
};

// Iniciar sesión
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res
      .status(200)
      .json({ message: "Inicio de sesión exitoso", token, name: user.name, id: user.id });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al iniciar sesión", error: error.message });
  }
};

exports.getUserProfile = async (req, res) => {
  const userId = req.user.id;
  try {
    const result = await pool.query(
      "SELECT id, name, email, address, telephone, role, registrationDate FROM users WHERE id = $1",
      [userId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.status(200).json({ user: result.rows[0] });
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener el perfil del usuario",
      error: error.message,
    });
  }
};

exports.updateUserProfile = async (req, res) => {
  const userId = req.user.id;
  const { name, email, address, telephone, role } = req.body;
  try {
    const result = await pool.query(
      "UPDATE users SET name = $1, email = $2, address = $3, telephone = $4, role = $5 WHERE id = $6 RETURNING *",
      [name, email, address, telephone, role, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res
      .status(200)
      .json({ message: "Perfil actualizado", user: result.rows[0] });
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: "Error al actualizar el perfil", error: error.message });
  }
};
