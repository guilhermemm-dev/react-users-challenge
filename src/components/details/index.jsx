import { Link, useSearchParams } from 'react-router-dom';
import React from 'react';
import Maps from '../maps';
import { Container } from './styles';

export default function Details() {
  const [searchParams] = useSearchParams();
  const user = Object.fromEntries([...searchParams]);

  const gpsPosition = {
    lat: parseFloat(user.lat),
    lng: parseFloat(user.lng),
  };

  return (
    <>
      <Container className="Details">
        <Link to="/">
          <button>Voltar</button>
        </Link>
        <Maps gpsPosition={gpsPosition} />
        <div className="user-infos">
          <img src={user.picture} />
          <p>{user.name}</p>
          <p>{user.location}</p>
        </div>
      </Container>
    </>
  );
}
