/** Class representing a point. */
import React from "react"
import { Button, Tabs,Spin } from 'antd';
import BusinessPicture from '../components/business_profile/businessPicture';
import Timeline from '../components/business_profile/Timeline';
import EditProfileForm from '../components/business_profile/EditProfileForm';
import PostJob from '../components/business_profile/postJob';
import About from '../components/business_profile/aboutCompany';
import CeoPic from '../components/business_profile/ceoPic'
import BriefInfo from "../components/business_profile/briefInfo";
import CompanyVideo from "../components/business_profile/video";
import PhotoUpload from "../components/user_profile/photoUploader";
import * as queries from '../graphql/queries';
import { API, graphqlOperation, Auth, I18n, Storage } from "aws-amplify";
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

/**
 *  Business Profile to show or edit the company information
 */
class businessProfile extends React.Component {
  /**
 * @param {object} props - props no need to pass any arguments
 */
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      jobList: [],
      companyName: null,
      companyWebsite: null,
      companyPhone:null,
      companyEmail:null,
      companyType: null,
      headquarter: null,
      videoURL: null,
      companyAddress: {
        addressLine1: "2968 Avenue S",
        addressLine2: "",
        city: "New York",
        state: "NY",
        postalCode: "12345"
        
      },
      ceoPic: null,
      ceo: null,
      size: null,
      revenue: null,
      timeline: [],
      jobAmount: 0,
      description: null,
      companyLogo: null,
      companyPic: "no",
      value: 0,
      allowEdit: false
    }
  }

  /**
   * fetch all data from AWS by companyID, if the companyID is matching 
   * the login userid, it will render edit buttons
   */
  componentWillMount = async () => {

    //check if the visitor is the page owner
    let companyID = this.props.userID;
    let currentUser = await Auth.currentAuthenticatedUser();
    const { attributes } = currentUser;
    if (companyID === attributes.sub)
      this.setState({ allowEdit: true });
    else
      this.setState({ allowEdit: false });

    //set up companyID
    let employerData;
    try {
      employerData = await API.graphql(graphqlOperation(queries.getEmployer, { id: companyID }));
      this.setState({ companyID: companyID });
      //set up other employer info
      employerData = employerData.data.getEmployer;
      for (let item in employerData) {
        if (employerData[item] && item != "timeline" && item != "companyAddress" && item != "job" && item != "id") {
          this.setState({ [item]: employerData[item] });
        }
      }

       /**
       * set up other employer info within nested object
       *  */
      console.log("employer", employerData);
      if (employerData.timeline.items.length >= 1)
        this.setState({ timeline: employerData.timeline.items });

      if (employerData.job.items.length >= 1) {
        this.setState({ jobList: employerData.job.items });
        this.setState({ jobAmount: employerData.job.items.length })
      }

      //set up the address data
      if (employerData.companyAddress) {
        let addressLine1 = employerData.companyAddress.line1;
        let addressLine2 = employerData.companyAddress.line2;
        let city = employerData.companyAddress.city;
        let postalCode = employerData.companyAddress.postalCode;
        let state = employerData.companyAddress.state;
        let id = employerData.companyAddress.id;
        let companyAddress = {
          id,
          addressLine1,
          addressLine2,
          city,
          postalCode,
          state
        }
        this.setState({ companyAddress });
      }

      //fetch company logo pic
      if (this.state.companyPic === 'yes') {
        Storage.get('profilePic', {
          level: 'protected',
          identityId: this.state.userID// the identityId of that user
        })
          .then(result => {
            
            this.setState({ companyLogo: result,memory:true });
            console.log("set up",this.state);
          })
          .catch(err => console.log(err));
      }
      else
        this.setState({memory:true})
      
    } catch (err) {
      console.log("couldn't get employer data: ", err);
    }
    
  }

  /**
   * set show modal to true
   */
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  /**
   * set visible to false for the modal component, when click ok
   */
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }

  /**
   * set visible to false for the modal component,when click cancel
   */
  handleCancel = (e) => {

    this.setState({
      visible: false,
    });
  }

  render() {
    if(!this.state.memory){
      // Just wait for the memory to be available
      return <Spin style={{position:"absolute",left:"45%",top:"30%"}} tip="Please wait for a moment"/> ;
    }
    return (
      <div >
        
        <div className="bannerOne">
        </div>
        <div style={bodyStyle}>
          <div className="secBanner">
            <BusinessPicture companyLogo={this.state.companyLogo} />
            <div className="companyHeader">
              <h1 style={{ fontSize: "4em" }}>{this.state.companyName}</h1>
              <h2 className="companyLocation">{this.state.companyAddress.city + 
                  " " + this.state.companyAddress.state}</h2>
            </div>
            {this.state.allowEdit ?
              <div className= "busButtonGroup">
                <Button className ="busEditButton"  onClick={this.showModal}>
                  {I18n.get('Edit Profile')}
                </Button>
                <PhotoUpload isBusiness={true} />
              </div>
              : null
            }
          </div>

          <div style={{ padding: "0px 60px" }}>
            <Tabs defaultActiveKey="1" >
              <TabPane tab={I18n.get('Profile')} key="1" >
                <div>
                  <div >
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
                    <div style={{ width: "50%" }}>
                      <CeoPic
                        ceo={this.state.ceo}
                        ceoPic={this.state.ceoPic}
                      />
                      <CompanyVideo videoURL={this.state.videoURL} videoPic={this.state.videoPic} />
                    </div>
                  </div>
                </div>

              </TabPane>
              <TabPane tab={I18n.get('Jobs') + "(" + this.state.jobAmount + ")"} key="2">
                <div > 
                  <PostJob
                    jobList={this.state.jobList}
                    companyLogo={this.state.companyLogo} />
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
