import React from "react";
import "./Navbar.css";

interface NavbarProps {
  onPerfilClick?: () => void;
  onCarritoClick?: () => void;
  onCatalogoClick?: () => void;
  onContactosClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onPerfilClick,
  onCarritoClick,
  onCatalogoClick,
  onContactosClick,
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Mi Tienda</div>

      <div className="navbar-menu">
        <button className="navbar-button" onClick={onCatalogoClick}>
          Catálogo
        </button>

        <button className="navbar-button" onClick={onCarritoClick}>
          Carrito
        </button>

        <button className="navbar-button" onClick={onContactosClick}>
          Contactos
        </button>

        <button className="navbar-profile-button" onClick={onPerfilClick}>
          Perfil
        </button>
      </div>
    </nav>
  );
};

export default Navbar;