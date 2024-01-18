import './styles.css';
import '../../global_styles.css';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useState, useCallback } from 'react';


export const Map = ({latitude, longitude, text}) => {

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: latitude,
    lng: longitude
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCMyeAa-1rUJDaEFyaZ21yZqCvHQwDZqZ8"    
  });

  const [map, setMap] = useState(null);

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, []);

  return(
    <div className='Page Page__Container'>
      <div className='cdb-map'> 
        {isLoaded ? 
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
            onUnmount={onUnmount}
          >
      
            <Marker 
              position={{ lat: latitude, lng: longitude }} 
              label= {{color: '#ff2345', 
                      fontWeight: 'bold', 
                      fontSize: '16px', 
                      text: text,
                      className: 'cdb-marker'}} 
            />
          </GoogleMap> : <></>
        }
      </div>
    </div>
  );
} 