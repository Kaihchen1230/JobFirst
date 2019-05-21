import React, { useState } from 'react';
import axios from 'axios'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 40.730610, lng: -73.935242 }}
    >
      <Marker
        position={{ lat: props.lat, lng: props.lng}}
      />
      
    </GoogleMap>
  ));

  class Location extends React.Component{

    constructor(props){
        super(props);
        let locationValues = Object.values({...props.locationInfo});
        // remove address id from the array
        locationValues.shift();
        let jobAddress = '';
        for(let i in locationValues){
            if(locationValues[i]){
                jobAddress += (locationValues[i] + ' ');
            }else{
                // employer didn't enter some info
                jobAddress += ' ';
            }
        };
        console.log('this is address: ',jobAddress);
        this.state = {
            address: jobAddress,
            lat: '',
            lng: ''
        }
    }

    render(){
        let geometry;
        axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
            address: this.state.address,
            key: process.env.API_KEY
        }
        })
        .then((response) => {
            // log full response
            // console.log('this is the response: ', response);

            // get the geomotry
            // let geometry;
            geometry = response.data.results[0].geometry.location;
            // console.log('this is the geomotry: ', geometry);
            this.setState({
                lat: geometry.lat,
                lng: geometry.lng
            })

        })
        .catch((err) => {
            console.log('there is an error: ', err);
        });
        return(
            <div>
            <h2>
            {this.state.address}
            </h2>
            <div style={{width: "80vw", height:"80vh"}}>
            <MapWithAMarker
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.API_KEY}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                lat= {this.state.lat}
                lng = {this.state.lng}
            />
            </div>
        </div>
           
        )
    }
  }
  export default Location;