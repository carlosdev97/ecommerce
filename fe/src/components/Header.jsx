import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import apiClient from "../API/axiosConfig";

const Header = () => {
  const [user, setUser] = useState(null);
  // const [cart, setCart] = useState("")
  const navigate = useNavigate();
  const location = useLocation();

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
      console.log(response.data);
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
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/">
          <h1 className="text-lg font-bold">Aesthetic Arc</h1>
        </a>
        <div className="flex space-x-4 items-center">
          {location.pathname === "/products" && user ? (
            <>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faUser} className="text-gray-300" />
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className="text-gray-300 cursor-pointer"
                  onClick={getCart}
                />
                <span className="text-gray-300">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-300 ml-4"
              >
                Log out
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-gray-300">
              Log in
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
