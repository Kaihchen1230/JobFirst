import React, { useState } from 'react';
import axios from 'axios'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

// the google map api key is inside of env.local


const location = (props) => {

    let locationValues = Object.values({...props.locationInfo});

    // remove address id from the array
    locationValues.shift();
    let jobAddress = '';
    for(const i in locationValues){
        if(locationValues[i]){
            jobAddress += (locationValues[i] + ' ');
        }else{
            // employer didn't enter some info
            jobAddress += ' ';
        }
    };
    
    console.log('this is address: ',jobAddress);

    // Get latidude & longitude from address.
    let geometry = {};
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
            address: jobAddress,
            key: process.env.API_KEY
        }
    })
    .then((response) => {
        // log full response
        console.log('this is the response: ', response);

        // get the geomotry
        geometry = response.data.results[0].geometry.location;
        console.log('this is the geomotry: ', geometry);
    })
    .catch((err) => {
        console.log('there is an error: ', err);
    });

    function Map(){
        return <GoogleMap 
        defaultZoom={10} 
        // this default location is NYC
        defaultCenter={{ lat: 40.7127837, lng:-74.0059413 }}>
            <Marker 
                position={{lat: parseFloat(geometry.lat), lng: parseFloat(geometry.lng)}}
                
            />
        </GoogleMap>
        )};
    
    const WrappedMap = withScriptjs(withGoogleMap(Map));    

    return(
        <div>
            <h2>
            {jobAddress}
            </h2>
            <div style={{width: "80vw", height:"80vh"}}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.API_KEY}`}
                loadingElement={<div style={{height: "100%"}} />}
                loadingElement={<div style={{height: "100%"}}/>}
                containerElement={<div style={{height: "100%"}} />}
                mapElement={<div style={{height: "100%"}}/>}
            >
            </WrappedMap>
            </div>
        </div>
    )
}

export default location;