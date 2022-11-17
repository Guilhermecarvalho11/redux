import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeReserve, updateAmountReserve } from "../../store/modules/reserve/actions";
import "./style.css";
import { MdAddCircle, MdRemoveCircle, MdDelete } from "react-icons/md";

function Reservas() {
  const reserves = useSelector((state) => state.reserve); //variavel que armazena o numero de reservas feitas
  const dispatch = useDispatch();
  
  function handleRemove(id){
    dispatch(removeReserve(id))

  }

  function decrementAmount(trip){
    dispatch(updateAmountReserve(trip.id, trip.amount - 1))

  }

  function incrementAmont(trip){
    dispatch(updateAmountReserve(trip.id, trip.amount + 1))

  }
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

          <div id='amount'>
            <button type="button" onClick={() => decrementAmount(reserve)}>
              <MdRemoveCircle size={25} color='#191919' />
            </button>

          <input type='text' readOnly value={reserve.amount} />

          <button type="button" onClick={() =>incrementAmont(reserve)}>
              <MdAddCircle size={25} color='#191919' />
            </button>

          </div>


          <button type="button" onClick={() => handleRemove(reserve.id)}>
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
