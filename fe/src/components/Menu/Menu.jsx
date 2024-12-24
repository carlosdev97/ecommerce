import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faArrowRightFromBracket,
  faFlag,
  faBox,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
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
    <div className="fixed top-14 flex flex-row-reverse justify-between right-0 w-1/5 h-auto p-5 bg-customGray">
      <div className="flex flex-row-reverse justify-between items-start">
        <button
          className="bg-none border-none text-2xl cursor-pointer"
          onClick={menuClose}
        >
          &times;
        </button>
      </div>
      <div>
        <ul className="space-y-2">
          <li>
            <Link className="w-full flex gap-2 items-center" to="/profile">
              <FontAwesomeIcon icon={faUser} />
              PERFIL
            </Link>
          </li>
          <li>
            <Link className="w-full flex gap-2 items-center" to="/addresses">
              <FontAwesomeIcon icon={faFlag} />
              DIRECCIONES
            </Link>
          </li>
          <li>
            <Link className="w-full flex gap-2 items-center" to="/orders">
              <FontAwesomeIcon icon={faBox} />
              PEDIDOS
            </Link>
          </li>
          <li>
            <Link className="w-full flex gap-2 items-center" to="/info">
              <FontAwesomeIcon icon={faCircleInfo} />
              INFORMACIÓN
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-300 w-full flex gap-2 items-center"
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              CERRAR SESIÓN
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
