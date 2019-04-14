import React from "react"
import {Select,Modal, Button } from 'antd';
import Card from '../components/business_profile/Card';
import Timeline from '../components/business_profile/Timeline'; 
import EditProfileForm from '../components/business_profile/EditProfileForm'; 
import { I18n } from 'aws-amplify';
import dict from '../components/dictionary/dictionary';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries'

I18n.putVocabularies(dict);
I18n.setLanguage('ch');

let bodyStyle={
  justifyContent: 'center', alignItems: 'center',margin:'auto', width:'60%'

}





class businessProfile extends React.Component {
  state = { visible: false }
  async componentDidMount(){
    // const data =  await API.graphql(graphqlOperation(queries.createBusinessProfile,
    //            { input:{
    //       id: "45",
    //       business_name: "aplipapa",
    //       description: "one of the best company",
    //       business_picture:"no",
    //       business_email : "lanjie3458@gmail.com",
    //       business_phone_number: "dsdsd",
    //       Business_location: "fdf",
    //       timeline:["fdf","gfg"]}}))
    // console.log("load data",data);
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {

    return (
        <div style={bodyStyle}>
              <div>
          <Button type="primary" onClick={this.showModal}>
            Edit Profile
          </Button>
          <Modal
            title="Edit Company Information"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <EditProfileForm/>
          </Modal>
        </div>
        <h1>Company: aplipap</h1>
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
