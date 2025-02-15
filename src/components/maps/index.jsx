import React from 'react';

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
} from '@react-google-maps/api';
import { Container } from './styles.js';

export default function Maps({ gpsPosition }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_API_MAPS_KEY,
  });

  return (
    <>
      <Container>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
              height: '100%',
            }}
            center={gpsPosition}
            zoom={2}
          >
            <Marker
              position={gpsPosition}
              options={{
                label: {
                  className: 'map-marker',
                },
              }}
            />
          </GoogleMap>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}
