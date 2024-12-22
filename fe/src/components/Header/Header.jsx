import Example from "../Cart";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import apiClient from "../../API/axiosConfig";

const Header = ({ onOpenModal }) => {
  const [user, setUser] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
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
  }, []);

  const getCart = async () => {
    try {
      const response = await apiClient.get(
        `http://localhost:5000/api/cart/${user.id}`
      );
      setCartItems(response.data.products);
      console.log(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md text-black py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/">
          <h1 className="font-homemade">Aesthetic Arc</h1>
        </a>
        <div className="flex space-x-4 items-center">
          {location.pathname === "/products" && user ? (
            <>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faUser} className="text-gray-300" />
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className="text-gray-300 cursor-pointer"
                  onClick={() => {
                    getCart();
                    toggleCart();
                  }}
                />
                <span className="text-gray-300">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-300 ml-4"
              >
                Cerrar Sesión
              </button>
              <Example
                open={isCartOpen}
                setOpen={setIsCartOpen}
                items={cartItems}
              />
            </>
          ) : (
            <>
              <FontAwesomeIcon
                className="cursor-pointer"
                onClick={onOpenModal}
                icon={faUser}
              />
              {/* <Link to="/login" className="hover:text-gray-300 hover:underline">
                
              </Link> */}
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
