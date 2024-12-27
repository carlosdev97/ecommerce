import Cart from "../Cart";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IconShoppingCart, IconUser } from "@tabler/icons-react";
import { useCart } from "../../contexts/CartContext";

const Header = ({ onOpenModal, onOpenMenu }) => {
  const [user, setUser] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { products, getCart } = useCart();

  const location = useLocation();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const userObj = JSON.parse(savedUser);
      setUser(userObj);
    }
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-gray-400 bg-opacity-20 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/">
          <h1 className="font-homemade">Aesthetic Arc</h1>
        </a>
        <div className="flex space-x-4 items-center text-gray-800">
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
                <IconShoppingCart
                  stroke={1.5}
                  className="cursor-pointer"
                  onClick={() => {
                    getCart(user.id);
                    toggleCart();
                  }}
                />
              </div>
              <Cart
                open={isCartOpen}
                setOpen={setIsCartOpen}
                items={products}
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
