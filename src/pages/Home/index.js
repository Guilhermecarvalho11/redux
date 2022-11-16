import React, {useEffect, useState} from 'react'
import api from '../../services/api';

function Home() {
  const [trips, setTrips] = useState([]);

  useEffect(() =>{
    async function loadApi(){
      const response = await api.get('trips')
      setTrips(response.data)

      console.log(response.data)
    }
    loadApi();
  }, [])

  return (
    <div>
      <div className='box'>
        {trips.map(trip => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? 'Disponivel' : 'Indisponivel'}</span>
          </li>
        ))}

      </div>
    </div>
  )
}

export default Home