import React from "react"
import {Modal, Button, Tabs } from 'antd';
import BusinessPicture from '../components/business_profile/businessPicture';
import Timeline from '../components/business_profile/Timeline';
import EditProfileForm from '../components/business_profile/EditProfileForm';
import { I18n } from 'aws-amplify';
import PostJob from '../components/business_profile/postJob';
import About from '../components/business_profile/about';
import CeoPic from '../components/business_profile/ceoPic'
import { generate } from 'randomstring';
import BriefInfo from "../components/business_profile/briefInfo";
import dict from "../components/dictionary/dictionary"
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import '../style/businessProfile.css';


const TabPane = Tabs.TabPane;

let bodyStyle = {
  justifyContent: 'center', 
  alignItems: 'center', 
  margin: 'auto', 
  width: '90%',
  position:"relative",
  top: "-20px",
  backgroundColor: "white"

}

class businessProfile extends React.Component {
  state = {
    lan: window.localStorage.getItem('lan'),
    visible: false,
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
    ],
    companyName:"按摩中心",
    companyAddress: "New York, NY, US",
    companyWebsite: "alibaba.com",
    companyType:"Internet Service",
    headquarter: "New York, NY, US",
    ceoPic:"data:image/jpeg;base64,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",
    ceo:"Xiao Tiantian",
    size:"545",
    revenue:"100M",
    timeline: "",
    jobAmount:5,
    description: "At AWS, we believe nothing should stand in a builder’s way, and dreams never have to turn off.\
                  We’re a company of builders, innovators and creators. Our employees experience unparalleled ownership and impact\
                  on our products, and are empowered to innovate and deliver. If you want to build the future with AWS, we’d love\
                  to hear from you.At AWS, we believe nothing should stand in a builder’s way, and dreams never have to turn off.\
                  We’re a company of builders, innovators and creators. Our employees experience unparalleled ownership and impact\
                  on our products, and are empowered to innovate and deliver. If you want to build the future with AWS, we’d love\
                  to hear from you.",
    companyPic:"https://www.yellowyoyo.co.uk/wp-content/uploads/2018/05/alibaba-logo.jpg"
  }

  componentDidMount = async () => {
    const employerdata = {
      id: "102",
      companyName: "alibabartrt",
      companyEmail: "lanjie34569@gmail.com",
      companyPhone: "5435345",
      companyWebsite: "qqq.com",
      employerTimelineId: ["100"],

    }
    let timelineData = {
      id: "103",
      timelineCompanyId: "102",
      date: "2019-20-10",
      info: "hgh"
    }

    // let employer = await API.graphql(graphqlOperation(queries.listEmployers,
    //     { filter: (data) => { return data.companyName === "alibabartrt" } }));
    // console.log("new employer is", employer);
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
    // I18n.putVocabularies(dict);
    // I18n.setLanguage(this.state.lan);
    return (
        <div >
          <div className="banner">
            <BusinessPicture  companyPic = {this.state.companyPic}/>
            <div className = "companyHeader">
              <h1 className="companyName">{this.state.companyName}</h1>
              <h2 className="companyLocation">{this.state.companyAddress}</h2>
            </div>
          </div>
        <div style={bodyStyle}>
          <div className = "tabs">
            <Tabs defaultActiveKey="1" >
              <TabPane tab="Profile" key="1" >
                <div>
                  <div >
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
                      <EditProfileForm />
                    </Modal>
                  </div>
                  <div className="row1">
                    <div className="aboutCompany">
                      <About 
                        description={this.state.description}
                      />     
                    </div>
                    <BriefInfo className="briefInfo"
                      companyWebsite={this.state.companyWebsite}
                      size={this.state.size}
                      revenue={this.state.revenue}
                      jobAmount = {this.state.jobAmount}
                      companyType={this.state.companyType}
                      headquarter={this.state.headquarter}
                    />     
                  </div>
                  <div className="row2">  
                    <Timeline />
                    <CeoPic
                      ceo = {this.state.ceo}
                      ceoPic = {this.state.ceoPic}
                    />
        
                  </div>    
                </div>

              </TabPane>
          
              <TabPane tab="Jobs(3)" key="2">
                <div>
                  <PostJob jobList={this.state.jobList} />
                </div>
              </TabPane>
            </Tabs>
          </div>

        </div>
      </div>
    );
  }
}


export default businessProfile;
