import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Menu = ({ menuOpen, menuClose }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  if (!menuOpen) return null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
    menuClose();
  };
  return (
    <div className="fixed top-14 flex flex-row-reverse justify-between right-0 w-1/5 h-auto p-8 bg-slate-600">
      <div className="flex flex-row-reverse justify-between items-start">
        <button
          className="bg-none border-none text-2xl cursor-pointer"
          onClick={menuClose}
        >
          &times;
        </button>
      </div>
      <div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faUser} />
            PERFIL
          </li>
          <li>DIRECCIONES</li>
          <li>PEDIDOS</li>
          <li>INFORMACIÓN</li>
          <button
            onClick={handleLogout}
            className="text-red-500 hover:text-red-300"
          >
            <FontAwesomeIcon icon={faLongArrowAltUp} />
            CERRAR SESIÓN
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
