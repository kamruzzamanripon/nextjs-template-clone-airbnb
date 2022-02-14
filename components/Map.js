import getCenter from 'geolib/es/getCenter';
import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = ({searchResults}) => {
    
    const coordinates = searchResults.map((result)=>({
        longitude: result.long,
        latitude: result.lat,
    }))

    //the latitude and longitude of the center of locations cordinate
    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

    //console.log("map",viewport )

    //console.log("map",process.env.mapbox_key )
    return (
        <div>
            <ReactMapGL
                style={{width: 600, height: 400}}
                mapStyle="mapbox://styles/kamruzzamanripon/ckzmjxctc003f16ot8k15qsr7"
                mapboxAccessToken={process.env.mapbox_key}
                {...viewport}
                onViewportChange={(nextViewport)=> setViewport(nextViewport)}
            >
            
        </ReactMapGL>
        </div>
    );
};

export default Map;
