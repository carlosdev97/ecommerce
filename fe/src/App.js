import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/home";
import Register from "./pages/register";
import Products from "./pages/products";
import Profile from "./pages/profile";
import Modal from "./components/Modal/Modal";
import Menu from "./components/Menu/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "../src/contexts/CartContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <CartProvider>
      <Router>
        <Toaster
          toastOptions={{ duration: 5000 }}
          position="bottom-right"
          reverseOrder={false}
        />
        <Header onOpenModal={openModal} onOpenMenu={openMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        <Menu menuOpen={isMenuOpen} menuClose={closeMenu} />
      </Router>
    </CartProvider>
  );
}

export default App;
