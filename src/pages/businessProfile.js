import React from "react"
import {Select } from 'antd';
import Card from '../components/business_profile/card';
import Timeline from '../components/business_profile/timeline'; 
import { I18n } from 'aws-amplify';
import dict from '../components/dictionary/dictionary'

I18n.putVocabularies(dict);
I18n.setLanguage('ch');

let bodyStyle={
  justifyContent: 'center', alignItems: 'center',margin:'auto', width:'60%'

}

class businessProfile extends React.Component {

  render() {

    return (
      <div style={bodyStyle}>
      <h1>Company: aplipap;</h1>
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
