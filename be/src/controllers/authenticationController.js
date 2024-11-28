// const user = require("../models/user");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // Clave secreta para confirmar el JWT

// // Rutas para autenticación

// const JWT_SECRET = process.env.JWT_SECRET || "clave_secreta_para_jwt";

// // POST /register

// exports.register = async (req, res) => {
//   try {
//     const { name, email, password, address, telephone } = req.body;

//     // Verificación de existencia de usuario

//     const existingUser = await user.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ message: "El email ya está registrado" });
//     }

//     // Encriptar la constraseña

//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Crear el usuario

//     const newUser = new user({
//       name,
//       email,
//       password: hashedPassword,
//       address,
//       telephone,
//     });

//     await newUser.save();
//     res.status(201).json({ message: "Usuario registrado con exito." });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "Error al registrar el usuario. ", error: error.message });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Verificar si el usuario existe

//     const user = await user.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: "El usuario no existe." });
//     }

//     // Verificar la contraseña

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(401).json({ message: "Contraseña incorrecta." });
//     }

//     // Generar el JWT

//     const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
//       expiresIn: "1h",
//     });
//     res.status(200).json({ message: "Autenticación exitosa.", token });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "Error al iniciar sesión. ", error: error.message });
//   }
// };
