import React from 'react';
import { GoogleMap, useJsApiLoader, Marker,InfoWindow  } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '80vh'
};

const center = {
  lat: 43.6567953,
  
  lng: -79.4297382
};

export default function LocalSustainabilityMap() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDWyewbPNjiSEfOC7hOvtzH50u50mbMSYc',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  if (loadError) return <div>Error loading Google Maps API</div>;
  if (!isLoaded) return <div>Loading Google Maps API</div>;

  return (
    <div style={{width:"80%", margin:"auto"}}>
      <h1>Local Sustainability Map</h1>
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
         <Marker
          position={{ lat: 43.6500719, lng: -79.3916043 }}
          title="Mycircle (by appointment only)"
        >
           <InfoWindow>
            <div>Mycircle (by appointment only)</div>
          </InfoWindow>
          </Marker>
         <Marker
          position={{ lat: 43.6652018, lng: -79.3718076 }}
          title="Omo Bamboo Shop"
          >
           <InfoWindow>
            <div>Omo Bamboo Shop</div>
          </InfoWindow>
          </Marker>
         <Marker
          position={{ lat: 43.678616, lng: -79.4580851 }}
          title="The Green Jar"
          >
           <InfoWindow>
            <div>The Green Jar</div>
          </InfoWindow>
          </Marker>
         <Marker
          position={{ lat: 43.6450361, lng: -79.4483018 }}
          title="Ecotique Toronto"
          >
          <InfoWindow>
           <div>Ecotique Toronto</div>
         </InfoWindow>
         </Marker>
         <Marker
          position={{ lat: 43.6656035, lng: -79.488798 }}
          title="Pretty Clean Shop Toronto"
          >
          <InfoWindow>
           <div>Pretty Clean Shop Toronto</div>
         </InfoWindow>
         </Marker>
         <Marker
          position={{ lat: 43.645343, lng: -79.4519561 }}
          title="Logan & Finley"
          >
          <InfoWindow>
           <div>Logan & Finley</div>
         </InfoWindow>
         </Marker>
      </GoogleMap>
    </div>
  );
}
