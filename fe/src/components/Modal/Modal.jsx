import React, { useState } from "react";
import apiClient from "../../API/axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { useCart } from "../../contexts/CartContext";

const Modal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { getCart } = useCart();

  if (!isOpen) return null;

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await apiClient.post(
        "https://ecommerce-jwpe.onrender.com/api/users/login",
        { email, password }
      );

      // Guardar el token y la información del usuario

      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({ name: response.data.name, id: response.data.id })
      );

      await getCart(response.data.id);

      // Cerrar el modal y redirigir

      onClose();
      navigate("/products");
      toast.success("¡Sesión iniciada con éxito!");

      // Limpiar campos del formulario

      setEmail("");
      setPassword("");
    } catch (err) {
      let errorMessage = "Error desconocido.";

      // Verificar si hay una respuesta del servidor

      if (err.response) {
        switch (err.response.status) {
          case 401:
            errorMessage = "Credenciales incorrectas.";
            break;
          case 404:
            errorMessage = "Usuario no encontrado.";
            break;
          case 500:
            errorMessage = "Error en el servidor.";
            break;
          default:
            errorMessage = err.response.data.mensaje || "Ocurrió un error";
        }
      } else if (err.request) {
        // Sin respuesta del servidor
        errorMessage = "No se pudo conectar con el servidor";
      } else {
        // Error desconocido
        errorMessage = err.message;
      }
      // Actualizar estado del error y mostrar mensaje
      toast.error(errorMessage);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-transparent backdrop-blur-lg flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <div className="flex flex-row-reverse justify-between">
          <button
            className="bg-none border-none text-2xl cursor-pointer"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold text-center mt-0">Login</h2>
        </div>
        <form className="space-y-4" onSubmit={login}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mt-3"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
              name="email"
              type="email"
              required
              placeholder="Type your email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mt-3"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <input
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500 pr-10"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Type your password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <IconEye stroke={1.5} />
                ) : (
                  <IconEyeClosed stroke={1.5} />
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Log In
          </button>
        </form>
        <div className="text-center">
          <Link
            className="text-gray-700 hover:underline"
            to="/register"
            onClick={onClose}
          >
            ¿No tienes una cuenta? REGÍSTRATE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
