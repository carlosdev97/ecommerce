import axios from "axios";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");

  // const navigate = useNavigate();

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        { name, email, password, address, telephone }
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      toast.success("¡Usuario registrado con éxito!");
      setName("");
      setEmail("");
      setPassword("");
      setAddress("");
      setTelephone("");
    } catch (error) {
      console.error(error.message);
      toast.error("Hubo un error al registrar el usuario.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Create your account</h2>
        <form className="mt-8 space-y-4" onSubmit={signIn}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mt-3"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:!ring-blue-500 focus:!border-blue-500"
              name="name"
              type="text"
              required
              placeholder="Type your name"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
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
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mt-3"
            >
              Address
            </label>
            <input
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
              name="address"
              type="text"
              required
              placeholder="Type your address"
              onChange={(event) => setAddress(event.target.value)}
              value={address}
            />
            <label
              htmlFor="telephone"
              className="block text-sm font-medium text-gray-700 mt-3"
            >
              Telephone
            </label>
            <input
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
              name="telephone"
              type="text"
              required
              placeholder="Type your telephone"
              onChange={(event) => setTelephone(event.target.value)}
              value={telephone}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
