import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { MdDelete } from "react-icons/md";

function Reservas() {
  const reserves = useSelector((state) => state.reserve); //variavel que armazena o numero de reservas feitas

  console.log("MINHAS RESERVAS: ", reserves);
  return (
    <div>
      <h1 className="title">Você Solicitou {reserves.length}</h1>

      {reserves.map((reserve) => (
        <div className="reservas" key={reserve.id}>
          <img
            src={reserve.image}
            alt={reserve.title}
          />

          <strong>{reserve.title}</strong>
          <span>Quantidade: 2</span>

          <button type="button" onClick={() => {}}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}

      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
}

export default Reservas;
