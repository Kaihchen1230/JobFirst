import React from "react"
import { Button, Tabs } from 'antd';
import BusinessPicture from '../components/business_profile/businessPicture';
import Timeline from '../components/business_profile/Timeline';
import EditProfileForm from '../components/business_profile/EditProfileForm';
import PostJob from '../components/business_profile/postJob';
import About from '../components/business_profile/aboutCompany';
import CeoPic from '../components/business_profile/ceoPic'
import BriefInfo from "../components/business_profile/briefInfo";
import CompanyVideo from "../components/business_profile/video";
import * as queries from '../graphql/queries';
import { API, graphqlOperation, Auth, I18n } from "aws-amplify";
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
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      jobList: [],
      companyID: "",
      companyName: "Alibaba",
      companyWebsite: "alibaba.com",
      companyType: "Intenet",
      headquarter: "New York. NY",
      videoURL:"https://www.youtube.com/embed/9Kx8Jlz4oAY",
      companyAddress: {
        addressLine1: "2968 Avenue S",
        addressLine2: "",
        city: "New York",
        state: "NY",
        postalCode: "12345"
      },
      ceoPic: "https://res.cloudinary.com/allamerican/image/fetch/t_face_s270/https://speakerdata2.s3.amazonaws.com/photo/image/10173/100911_mayun_20da3.jpg",
      ceo: "Ma Yun",
      size: "2000",
      revenue: "500M",
      timeline: [],
      jobAmount: 0,
      description: "Alibaba Group Holding Limited (Chinese: 阿里巴巴集团控股有限公司; pinyin: Ālǐbābā Jítuán Kònggǔ Yǒuxiàn Gōngsī) is a Chinese multinational conglomerate specializing in e-commerce, retail, Internet and technology. Founded 4 April 1999, the company provides consumer-to-consumer (C2C), business-to-consumer (B2C), and business-to-business (B2B) sales services via web portals, as well as electronic payment services, shopping search engines and cloud computing services. It owns and operates a diverse array of businesses around the world in numerous sectors, and is named as one of the world's most admired companies by Fortune.[3][4]",
      companyPic: "https://i2.wp.com/nigerianfinder.com/wp-content/uploads/2015/02/Alibaba-logo.png?resize=225%2C225",
      value: 0,
      allowEdit: false
    }
  }


  //Download businessProfile data from AWS
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
    let employerData = await API.graphql(graphqlOperation(queries.getEmployer, { id: companyID }));
    this.setState({ companyID: companyID });

    //set up other employer info
    employerData = employerData.data.getEmployer;
    for (let item in employerData) {
      if (employerData[item] && item != "timeline" && item != "companyAddress" && item != "job" && item != "id") {
        this.setState({ [item]: employerData[item] });
      }
    }

    //set up other employer info within nested object
    if(employerData.timeline.items.length >= 1)
      this.setState({ timeline: employerData.timeline.items });
    if(employerData.job.items.length >= 1){
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
    return (
      <div >
        <div className="banner">
        </div>
        <div style={bodyStyle}>
          <div className="secBanner">
            <BusinessPicture companyPic={this.state.companyPic} />
            <div className="companyHeader">
              <h1 style={{ fontSize: "4em" }}>{this.state.companyName}</h1>
              <h2 className="companyLocation">{this.state.companyAddress.city}</h2>
            </div>
            {this.state.allowEdit ?
              <Button className="editButton" type="primary" onClick={this.showModal}>
                {I18n.get('Edit Profile')}
              </Button> : null
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
                      <CompanyVideo videoURL ={this.state.videoURL} videoPic = {this.state.videoPic}/>

                    </div>

                  </div>
                </div>

              </TabPane>
              <TabPane tab={I18n.get('Jobs') + "(" + this.state.jobAmount + ")"} key="2">
                <div>
                  <PostJob
                    jobList={this.state.jobList}
                    companyPic={this.state.companyPic} />
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
