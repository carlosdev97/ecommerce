import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Products from "./pages/products";
import Modal from "./components/Modal/Modal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <Toaster />
      <Header onOpenModal={openModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </Router>
  );
}

export default App;
