import React from "react";
import {
  IconUser,
  IconLogout,
  IconFlag,
  IconBox,
  IconInfoCircle,
} from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";

const Menu = ({ menuOpen, menuClose }) => {
  const navigate = useNavigate();
  if (!menuOpen) return null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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
              <IconUser stroke={1.5} />
              PERFIL
            </Link>
          </li>
          <li>
            <Link className="w-full flex gap-2 items-center" to="/addresses">
              <IconFlag stroke={1.5} />
              DIRECCIONES
            </Link>
          </li>
          <li>
            <Link className="w-full flex gap-2 items-center" to="/orders">
              <IconBox stroke={1.5} />
              PEDIDOS
            </Link>
          </li>
          <li>
            <Link className="w-full flex gap-2 items-center" to="/info">
              <IconInfoCircle stroke={1.5} />
              INFORMACIÓN
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-300 w-full flex gap-2 items-center"
            >
              <IconLogout stroke={1.5} />
              CERRAR SESIÓN
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
