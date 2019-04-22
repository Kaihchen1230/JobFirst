import React from "react"
import {Modal, Button, Tabs } from 'antd';
import BusinessPicture from '../components/business_profile/businessPicture';
import Timeline from '../components/business_profile/Timeline';
import EditProfileForm from '../components/business_profile/EditProfileForm';
import { I18n } from 'aws-amplify';
import PostJob from '../components/business_profile/postJob';
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
    companyName:"Aplibaba",
    companyAddress: "New York, NY, US",
    companyWebsite: "alibaba.com",
    companyType:"Internet Service",
    headquarter: "New York, NY, US",
    ceoPic:"https://smallbiztrends.com/wp-content/uploads/2018/03/shutterstock_705804559.jpg",
    ceo:"Jacky Ma",
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
                        <h1>About us</h1>
                        {this.state.description}
                    </div>

                    <div className="briefInfo">
                        <BriefInfo
                          companyWebsite={this.state.companyWebsite}
                          size={this.state.size}
                          revenue={this.state.revenue}
                          jobAmount = {this.state.jobAmount}
                          companyType={this.state.companyType}
                          headquarter={this.state.headquarter}
                        />
                    </div>
                  </div>

                  <h2>TimeLine</h2>
                  <Timeline />
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
