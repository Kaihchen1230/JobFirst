import React from "react"
import { Button, Tabs } from 'antd';
import BusinessPicture from '../components/business_profile/businessPicture';
import Timeline from '../components/business_profile/Timeline';
import EditProfileForm from '../components/business_profile/EditProfileForm';
import PostJob from '../components/business_profile/postJob';
import About from '../components/business_profile/aboutCompany';
import CeoPic from '../components/business_profile/ceoPic'
import BriefInfo from "../components/business_profile/briefInfo";
import * as queries from '../graphql/queries';
import { API, graphqlOperation, Auth, I18n } from "aws-amplify";
import HorizontalTimeline from "react-horizontal-timeline";
import '../style/businessProfile.css';


const TabPane = Tabs.TabPane;

let bodyStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  width: '90%',
  position: "relative",
  top: "-20px",
  backgroundColor: "white"

}

class businessProfile extends React.Component {
  state = {
//     lan: window.localStorage.getItem('lan'), 
    visible: false,
    jobList: [],
    companyID: "",
    companyName: "",
    companyWebsite: "",
    companyType: "",
    headquarter: "",
    companyAddress: {
      addressLine1: "",
      addressLine2: "",
      state: "",
      postalCode: ""
    },
    ceoPic: "",
    ceo: "",
    size: "",
    revenue: "",
    timeline: [{info:"3"}],
    jobAmount: 0,
    description: "",
    companyPic: "",
    value:0
  }

  //Download businessProfile data from AWS
  componentWillMount = async () => {

    //set up companyID
    let user = await Auth.currentAuthenticatedUser();
    const { attributes } = user;
    let employerData = await API.graphql(graphqlOperation(queries.getEmployer,{id:attributes.sub}));
    this.setState({companyID:attributes.sub});
    console.log("this is employerdata: " + employerData);
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
    for (let item in employerData) {
      if (employerData[item] && item != "timeline" && item != "companyAddress" && item != "job" && item != "id") {
        this.setState({ [item]: employerData[item] });
      }
    }

    //set up other employer info with nested object
    this.setState({ timeline: employerData.timeline.items });
    this.setState({ jobList: employerData.job.items });
    this.setState({ jobAmount: employerData.job.items.length })

    //set up the address data
    if (employerData.companyAddress) {
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
      this.setState({ companyAddress });
    }

    console.log("employer", employerData);
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
    let states = { value: 2, previous: 1 };
    let VALUES = ["2019-09-20", "2019-09-20", "2019-09-20","2019-09-20", "2019-09-20", "2019-09-20"];
    return (
      <div >
        <div className="banner">
          <BusinessPicture companyPic={this.state.companyPic} />
          <div className="companyHeader">
            <h1 style={{ fontSize: "4em" }}>{this.state.companyName}</h1>
            <h2 className="companyLocation">{this.state.companyAddress.addressLine1}</h2>
          </div>
        </div>
        <div style={bodyStyle}>
          <div style={{ padding: "20px 60px" }}>
            <Tabs defaultActiveKey="1" >
              <TabPane tab={I18n.get('Profile')} key="1" >
                <div>
                  <div >
                    <Button type="primary" onClick={this.showModal}>
                      {I18n.get('Edit Profile')}
                    </Button>

                    <EditProfileForm
                      data={this.state}
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                    />
                  </div>
                  <div className="row1">
                    <div style={{ width: "65%" }}>
                      <About
                        description={this.state.description}
                      />
                    </div>
                    <BriefInfo
                      companyWebsite={this.state.companyWebsite}
                      size={this.state.size}
                      revenue={this.state.revenue}
                      jobAmount={this.state.jobAmount}
                      companyType={this.state.companyType}
                      headquarter={this.state.headquarter}
                    />
                  </div>
                  <div className="row2">
                    <Timeline timeline={this.state.timeline} />
                    <CeoPic
                      ceo={this.state.ceo}
                      ceoPic={this.state.ceoPic}
                    />
                  </div>
                </div>

              </TabPane>
              <TabPane tab={I18n.get('Jobs') + "(" + this.state.jobAmount + ")"} key="2">
                <div>
                  <PostJob 
                  jobList={this.state.jobList} 
                  companyPic={this.state.companyPic}/>
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
