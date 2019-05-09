import React from 'react';
import Geocode from "react-geocode";
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
// the google map api key is inside of env.local
function Map(){
    return <GoogleMap 
    defaultZoom={10} 
    // this default location is NYC
    defaultCenter={{ lat: 40.7127837, lng:-74.0059413 }}>
    </GoogleMap>
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
console.log('this is the api key: ', process.env.REACT_APP_WEATHER_API_KEY);
const location = (props) => {
    let locationInfo = {...props.locationInfo};


    console.log('this is the locationInfo: ', locationInfo);

    // Get latidude & longitude from address.

    // const geocode = () => {
    //     const location = '22 Main st Boston MA';
    //     axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
    //         params:{
    //             address: location,
    //             key: "AIzaSyDwwatP0n-x2nZF2wW48D8UvRMQpJaDA4E"
    //         }
    //     })
    //     .then((response) => {
    //         console.log('this is the response: ', response);
    //     })
    //     .catch((err) => {
    //         console.log('there is an error: ', err);
    //     })
    // }
    
    let locationInfoPiece = ( 
        <h3>{locationInfo.line1} {locationInfo.line2} {locationInfo.city} {locationInfo.state} {locationInfo.postalCode}</h3>
    )

    return(
        <div>
            {locationInfoPiece}
            <div style={{width: "100vw", height:"100vh"}}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
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