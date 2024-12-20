import React from "react";
import "./Modal.css"; // Estilos para el modal

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="btn">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
