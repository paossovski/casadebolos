import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useState, useCallback } from 'react';

export const Map = () => {

  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: 20.5937,
    lng: 78.9629
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "Your Google API Key"   
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, []);

  return(

    <div style={{position:'relative'}}>
    <div style={{position:'absolute',top:10,left:10,backgroundColor:'orange',padding:25,zIndex:999}}>
      <h1>Google Map In react App.</h1>
    </div>
    {isLoaded ? <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={7}
    onLoad={onLoad}
    onUnmount={onUnmount}
  >
    { /* Child components, such as markers, info windows, etc. */ }
    <></>
  </GoogleMap>
  :<></>
    }

  </div>

  );
}
