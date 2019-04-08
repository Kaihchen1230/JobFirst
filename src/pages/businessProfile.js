import React from "react"
import {Select } from 'antd';
import Card from '../components/business_profile/card';
import Timeline from '../components/business_profile/timeline'; 
  const { Option } = Select;



  let bodyStyle={
    justifyContent: 'center', alignItems: 'center',margin:'auto', width:'60%'

  }
  const { Meta } = Card;
  class businessProfile extends React.Component {

    render() {

      return (
        <div style={bodyStyle}>
        <h1>Company: aplipapa</h1>
        <Card/>
        <h2>Location:NY USA</h2>
        <h1>About us</h1>
        <div>At AWS, we believe nothing should stand in a builder’s way, and dreams never have to turn off. 
            We’re a company of builders, innovators and creators. Our employees experience unparalleled ownership and impact
            on our products, and are empowered to innovate and deliver. If you want to build the future with AWS, we’d love
            to hear from you.
        </div>
        <h2>TimeLine</h2>
        <Timeline/>  
      </div>
      );
    }
  }
  

export default businessProfile;
