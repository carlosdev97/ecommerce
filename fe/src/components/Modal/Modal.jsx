import React from "react";
import "./Modal.css"; // Estilos para el modal

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container w-full max-w-3xl">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Ingresar con email y contraseña</h2>
        <form className="max-w-sm m-auto h-96 display-flex">
          <div className="form-group">
            <label className="text-left" htmlFor="email">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@mail.com"
              required
            />
          </div>
          <div className="form-group">
            <label className="text-left" htmlFor="password">
              CONTRASEÑA
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="**********"
              required
            />
          </div>
          <button type="submit" className="btn display-block w-full">
            INGRESAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
