import Cart from "../Cart";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IconShoppingBag, IconUser } from "@tabler/icons-react";
import apiClient from "../../API/axiosConfig";

const Header = ({ onOpenModal, onOpenMenu }) => {
  const [user, setUser] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const location = useLocation();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Alterna entre abrir y cerrar el carrito
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const userObj = JSON.parse(savedUser);
      setUser(userObj);
    }
  }, [location]);

  const getCart = async () => {
    try {
      const response = await apiClient.get(
        `http://localhost:5000/api/cart/${user.id}`
      );
      setCartItems(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-gray-400 bg-opacity-20 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/">
          <h1 className="font-homemade">Aesthetic Arc</h1>
        </a>
        <div className="flex space-x-4 items-center text-white">
          {location.pathname === "/products" && user ? (
            <>
              <div className="flex items-center space-x-2">
                <div
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={onOpenMenu}
                >
                  <IconUser stroke={1.5} />
                  <span>{`Hola, ${user.name.split(" ")[0]}`}</span>
                </div>
                <IconShoppingBag
                  stroke={1.5}
                  className="cursor-pointer"
                  onClick={() => {
                    getCart();
                    toggleCart();
                  }}
                />
              </div>
              <Cart
                open={isCartOpen}
                setOpen={setIsCartOpen}
                items={cartItems}
                user={user}
              />
            </>
          ) : (
            <>
              <IconUser
                stroke={1.5}
                className="cursor-pointer"
                onClick={onOpenModal}
              />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
