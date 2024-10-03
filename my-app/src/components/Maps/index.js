import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import './style.css'

function Maps() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC22-QkqFwcKDIzjULHYoECpg5Izix3rOk"
    })


    const containerStyle = {
        with:'100%',
        height:'100%',
        maxWidth:' 100%',
        maxHeight:' 100%',// 60% da altura da viewport
      };
      
    const position = {
        lat: -7.998398,
        lng: -34.884426


    };

  

    return isLoaded ? (
        <div className='teste-map'>
        <GoogleMap className='teste-mapa-2'
        mapContainerStyle={containerStyle}
            center={position}
            zoom={15}
           
           

        >

            <Marker position={position} options={{
                label: {
                    text: " SYSTEC-TELECOM",
                    className: 'map-pointer'
                }
            }} />
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
        </div>
    ) : <></>

}

export default Maps