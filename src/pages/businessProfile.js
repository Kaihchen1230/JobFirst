import React from "react"
import {Select,Modal, Button } from 'antd';
import BusinessPicture from '../components/business_profile/businessPicture';
import Timeline from '../components/business_profile/Timeline'; 
import EditProfileForm from '../components/business_profile/EditProfileForm'; 
import { I18n } from 'aws-amplify';
import PostJob from '../components/business_profile/postJob'; 
import { generate } from 'randomstring';
// import { API, graphqlOperation } from 'aws-amplify';
// import * as queries from '../graphql/queries'


I18n.setLanguage(localStorage.getItem('lan'));

let bodyStyle={
  justifyContent: 'center', alignItems: 'center',margin:'auto', width:'60%'

}

class businessProfile extends React.Component {
  state = { 
    visible: false,
    postJob:[{jobID:"1234",jobTitle:"programmer","date":"2019-10-20"},
              {jobID:"1234",jobTitle:"programmer","date":"2019-10-20"},
              {jobID:"1234",jobTitle:"programmer","date":"2019-10-20"},
              {jobID:"1234",jobTitle:"programmer","date":"2019-10-20"},
            ],
    applicant:[{applicantID:"1234",jobTitle:"programmer","date":"2019-10-20"},
                {applicantID:"1234",jobTitle:"programmer","date":"2019-10-20"},
                {applicantID:"1234",jobTitle:"programmer","date":"2019-10-20"},
                {applicantID:"1234",jobTitle:"programmer","date":"2019-10-20"},],
    jobList: [
              {
                  id: generate(10),
                  campanyName: 'Front-end developer',
                  description: 'Requirement:Know CSS and HTML.'
              },
              {
                  id: generate(10),
                  campanyName: 'Front-end developer',
                  description: 'Requirement:Know CSS and HTML.'
              },
              {
                  id: generate(10),
                  campanyName: 'Front-end developer',
                  description: 'Requirement:Know CSS and HTML.'
              },
              {
                  id: generate(10),
                  campanyName: 'Front-end developer',
                  description: 'Requirement:Know CSS and HTML.'
              },
              {
                  id: generate(10),
                  campanyName: 'Front-end developer',
                  description: 'Requirement:Know CSS and HTML.'
              },
              {
                  id: generate(10),
                  campanyName: 'Front-end developer',
                  description: 'Requirement:Know CSS and HTML.'
              }
          
          ]
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
            {I18n.get('Edit Profile')}
          </Button>
          <Modal
            title="Edit Company Information"
            okText={"Save"}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <EditProfileForm/>
          </Modal>
        </div>
        <h1>Company: aplipapa</h1>
        <BusinessPicture/>
        <h2>Location:NY USA</h2>
        <h1>About us</h1>
        <div>At AWS, we believe nothing should stand in a builder’s way, and dreams never have to turn off. 
            We’re a company of builders, innovators and creators. Our employees experience unparalleled ownership and impact
            on our products, and are empowered to innovate and deliver. If you want to build the future with AWS, we’d love
            to hear from you.
        </div>
        <h2>TimeLine</h2>
        <Timeline/>  
        <PostJob jobList={this.state.jobList}/>
    </div>
    );
  }
}


export default businessProfile;
