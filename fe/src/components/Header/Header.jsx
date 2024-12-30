import Cart from "../Cart";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconUser, IconShoppingBag, IconSearch } from "@tabler/icons-react";
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
    <header
      className={`fixed top-0 left-0 w-full py-4 ${
        location.pathname === "/products"
          ? "bg-gainsboro"
          : "backdrop-blur-md bg-gray-400 bg-opacity-20"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex-1">
          <ul className="flex gap-4">
            <li>
              <Link className="font-medium hover:underline">HOMBRE</Link>
            </li>
            <li>
              <Link className="font-medium hover:underline">MUJER</Link>
            </li>
            <li>
              <Link className="font-medium hover:underline">COSAS</Link>
            </li>
            <li>
              <Link className="font-medium hover:underline">TIENDAS</Link>
            </li>
            <li>
              <Link className="text-limeGreen font-medium hover:underline">
                SALE!
              </Link>
            </li>
          </ul>
        </div>
        <a href="/" className="flex-1 text-center">
          <h1 className="font-homemade">Aesthetic Arc</h1>
        </a>
        <div className="flex space-x-4 flex-1 justify-end">
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
              <div className="flex gap-5">
                <IconUser
                  stroke={2}
                  className="cursor-pointer"
                  onClick={onOpenModal}
                />
                <IconSearch stroke={2} className="cursor-pointer" />
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
