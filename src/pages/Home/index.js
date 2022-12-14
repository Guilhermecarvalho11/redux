import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import {MdFlightTakeoff} from 'react-icons/md'
import {addReserveRequest} from '../../store/modules/reserve/actions'
import api from '../../services/api';
import './style.css'

function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() =>{
    async function loadApi(){
      const response = await api.get('trips')
      setTrips(response.data)
    }
    loadApi();
  }, [])

  function handleApp(id) {
    dispatch(addReserveRequest(id));
  }

  return (
    <div>
      <div className='box'>
        {trips.map(trip => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? 'Disponivel' : 'Indisponivel'}</span>

            <button type='button'
            onClick={() => handleApp(trip.id)}>
              <div>
                <MdFlightTakeoff size={16} color='#FFF' />
              </div>

              <span>Solicitar Reserva</span>

            </button>
          </li>
        ))}

      </div>
    </div>
  )
}

export default Home