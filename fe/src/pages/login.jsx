import React, { useState } from "react";
import apiClient from "../API/axiosConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await apiClient.post(
        "https://ecommerce-jwpe.onrender.com/api/users/login",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({ name: response.data.name, id: response.data.id })
      );
      navigate("/products");
      toast.success("¡Sesión iniciada con éxito!");
      setEmail("");
      setPassword("");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.mensaje || "Error al iniciar sesión");
      } else {
        setError("Error al conectar con el servidor");
      }
      toast.error("Hubo un error al iniciar sesión.");
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="mt-8 space-y-4" onSubmit={login}>
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
            <input
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
              name="password"
              type="password"
              required
              placeholder="Type your password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
