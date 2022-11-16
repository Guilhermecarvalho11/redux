import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./style.css";

function Header() {
  return (
    <header className="container">
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="Logo Projeto" />
        </Link>
      </div>

      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas Reservas</strong>
          <span>0 Reservas</span>
        </div>
      </Link>
    </header>
  );
}

export default Header;
