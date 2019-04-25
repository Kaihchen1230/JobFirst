import React from "react"
import {Modal, Button, Tabs } from 'antd';
import BusinessPicture from '../components/business_profile/businessPicture';
import Timeline from '../components/business_profile/Timeline';
import EditProfileForm from '../components/business_profile/EditProfileForm';
import PostJob from '../components/business_profile/postJob';
import About from '../components/business_profile/aboutCompany';
import CeoPic from '../components/business_profile/ceoPic'
import { generate } from 'randomstring';
import BriefInfo from "../components/business_profile/briefInfo";
import * as queries from '../graphql/queries';
import { API, graphqlOperation,Auth, I18n } from "aws-amplify";
import * as mutations from '../graphql/mutations';
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
//     lan: window.localStorage.getItem('lan'), 
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
    companyID:"",
    companyName:"xiaomi",
    companyWebsite: "xiaomi.com",
    companyType:"Internet Service",
    headquarter: "New York, NY, US",
    companyAddress:{
      addressLine1: "New York, NY, US",
      addressLine2: "New York",
      state: "NY",
      postalCode:"2049"
    },
    ceoPic:"data:image/jpeg;base64,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",
    ceo:"Xiao Tiantian",
    size:"545",
    revenue:"100M",
    timeline: ["Create a services site 2015-09-01","Create a services site 2015-09-01",
               "Create a services site 2015-09-01","Create a services site 2015-09-01"],
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

  //Download businessProfile data from AWS
  componentDidMount = async () => {

    //set up companyID
    let user = await Auth.currentAuthenticatedUser();
    const { attributes } = user;
    let employerData = await API.graphql(graphqlOperation(queries.getEmployer,{id:attributes.sub}));
    this.setState({companyID:attributes.sub});

    //create some timeline data
    // let timelineData = {
    //   id: "105",
    //   timelineCompanyId: attributes.sub,
    //   date:"2019-09-10",
    //   title:"ma yun create alibaba yu 2019 nian",
    //   info: "hgh"
    // }o;;o;;
    // console.log("new timeline",timelineData);
    // let timeline = await API.graphql(graphqlOperation(mutations.createTimeline,{input: timelineData}));
    // console.log("new timeline",timeline);

    //set up other employer info
    employerData = employerData.data.getEmployer;
    for(let item in employerData){
      if(employerData[item] && item != "timeline" && item != "companyAddress" && item != "job" && item !="id"){ 
        this.setState({[item]:employerData[item]});
      }
    }

    //set up other employer info with nested object
    this.setState({timeline:employerData.timeline.items});
    this.setState({jobList:employerData.job.items});
    this.setState({jobAmount:employerData.job.items.length})

    //set up the address data
    if(employerData.companyAddress){
      let addressLine1 = employerData.companyAddress.line1;
      let addressLine2 = employerData.companyAddress.line2;
      let postalCode = employerData.companyAddress.postalCode;
      let state = employerData.companyAddress.state;
      let id = employerData.companyAddress.id;
      let companyAddress = {
        id,
        addressLine1,
        addressLine2,
        postalCode,
        state
      }
      this.setState({companyAddress});
    }

    console.log("employer",employerData);
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {

    this.setState({
      visible: false,
    });
  }

  render() {

    return (
        <div >
          <div className="banner">
            <BusinessPicture  companyPic = {this.state.companyPic}/>
            <div className = "companyHeader">
              <h1 className="companyName">{this.state.companyName}</h1>
              <h2 className="companyLocation">{this.state.companyAddress.addressLine1}</h2>
            </div>
          </div>
        <div style={bodyStyle}>
          <div className = "tabs">
            <Tabs defaultActiveKey="1" >
              <TabPane tab={I18n.get('Profile')} key="1" >
                <div>
                  <div >
                    <Button type="primary" onClick={this.showModal}>
                      {I18n.get('Edit Profile')}
                    </Button>

                    <EditProfileForm
                     data = {this.state}
                     visible={this.state.visible}
                     onOk={this.handleOk}
                     onCancel={this.handleCancel}
                    />
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
                    <Timeline timeline = {this.state.timeline}/>
                    <CeoPic
                      ceo = {this.state.ceo}
                      ceoPic = {this.state.ceoPic}
                    />
        
                  </div>    
                </div>

              </TabPane>
          
              <TabPane tab={I18n.get('Jobs')+"("+this.state.jobAmount+")"} key="2">
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
