import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/trip.svg";
import "./style.css";

function Header() {
  const reserveSize = useSelector(state => state.reserve.length)
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
          <span>{reserveSize} Reservas</span>
        </div>
      </Link>
    </header>
  );
}

export default Header;
