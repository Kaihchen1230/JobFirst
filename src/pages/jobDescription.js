import React from 'react';
import { Link } from "@reach/router"
import { Tabs, Button, Popover } from 'antd';
import JobDetails from '../components/job_description/jobDetails';
import Location from '../components/job_description/location';
import CompanyDetail from '../components/job_description/companyDetail';
import ApplicantList from '../components/job_description/applicantList';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import * as queries from '../graphql/queries';
const TabPane = Tabs.TabPane;

class JobDescription extends React.Component{


    state = {
        userId: "",
        jobId: "",
        postJobInfo: {},
        jobInfo: {
          title: "",
          type: "",
          description: "",
          requirements: [],
        },
        companyInfo: {},
        location: {},
        'applicant': [{
            key: '1',
            name: 'John Brown',
            degree: "Associate degree in computer science",
            address: 'New York No. 1 Lake Park',
          }, {
            key: '2',
            name: 'Joe Black',
            degree: "Associate degree in computer science",
            address: 'London No. 2 Lake Park',
          }, {
            key: '3',
            name: 'Jim Green',
            degree: "Associate degree in computer information system",
            address: 'Sidney No. 3 Lake Park',
          }, {
            key: '4',
            name: 'Jim Red',
            degree: "Associate degree in computer information system",
            address: 'London No. 4 Lake Park',
          },
          {
            key: '1',
            name: 'John Brown',
            degree: "Associate degree in computer information system",
            address: 'New York No. 5 Lake Park',
          }, {
            key: '2',
            name: 'Joe Black',
            degree: "Associate degree in computer information system",
            address: 'London No. 6 Lake Park',
          }, {
            key: '3',
            name: 'Jim Green',
            degree: "Associate degree in computer information system",
            address: 'Sidney No. 7 Lake Park',
          }, {
            key: '4',
            name: 'Jim Red',
            degree: "Associate degree in computer information system",
            address: 'London No. 8 Lake Park',
          },
          {
            key: '1',
            name: 'John Brown',
            degree: "Associate degree in computer information system",
            address: 'New York No. 9 Lake Park',
          }, {
            key: '2',
            name: 'Joe Black',
            degree: "Associate degree in math education",
            address: 'London No. 10 Lake Park',
          }, {
            key: '3',
            name: 'Jim Green',
            degree: "Associate degree in math",
            address: 'Sidney No. 11 Lake Park',
          }, {
            key: '4',
            name: 'Jim Red',
            degree: "Associate degree in computer information system",
            address: 'London No. 12 Lake Park',
          }
        ],

    }
    componentDidMount = async () => {
      const currentId = window.history.state.id;
      const user = await Auth.currentAuthenticatedUser();
      const { attributes } = user;
      const currentUserId = attributes.sub;
      console.log('this is currentUserId: ', currentUserId);
      try{
        const currentJobInfo = await API.graphql(graphqlOperation (queries.getPostedJob, {id: currentId}));
        let incomingJobInfo = {...this.state.jobInfo};
        incomingJobInfo.title = currentJobInfo.data.getPostedJob.jobTitle;
        incomingJobInfo.type = currentJobInfo.data.getPostedJob.jobType;
        incomingJobInfo.description = currentJobInfo.data.getPostedJob.description;
        incomingJobInfo.requirements = currentJobInfo.data.getPostedJob.requirements;
        this.setState({
          jobId: currentId,
          postJobInfo: currentJobInfo,
          jobInfo: incomingJobInfo,
          companyInfo: currentJobInfo.data.getPostedJob.company,
          location: currentJobInfo.data.getPostedJob.location,
          userId: currentUserId
        });

      }catch(err){
        console.log('there is an error fetching data...', err);
      }

      
    }
    
    render(){
        // console.log("this is the job id: ", this.state.jobId);
        console.log('this is the postjob info: ', this.state.postJobInfo);
        // console.log('this is the job info: ', this.state.jobInfo);        
        // console.log('this is the company: ', this.state.companyInfo);
        // console.log('this is the location: ', this.state.location);
        // console.log('this is the city: ', this.state.location.city);
        // console.log('this is user id: ', this.state.userId);
        console.log('this is the state of userId: ', this.state.userId);
        let content = "";
        let displayCompanyInfo;
        console.log(this.state.companyInfo);
        if(this.state.companyInfo){
          content = this.state.companyInfo.description;
          displayCompanyInfo = (<Popover content={content}>
                  <div>
                  {this.state.companyInfo.companyName} - {this.state.companyInfo.headquarter}
                  </div>
            </Popover>)
        }else{
          console.log('it is null');
          displayCompanyInfo = (
            <div>
              The company is not provided...
            </div>
          )
        }
        return(
            
            <div>
                <h2 style = {{margin: '10px 0'}}>{this.state.jobInfo.title}</h2>
                {displayCompanyInfo}
                
                <Popover 
                  content={"We will use your profile information to fill out the application"}>
                  <Button type="primary" ghost>
                      Apply Now
                  </Button>
                </Popover>
                
                <Tabs defaultActiveKey="1" > 
                    <TabPane tab="Job" key="1" >
                        <div>
                            <JobDetails jobInfo = {this.state.jobInfo}></JobDetails>
                        </div>
            
                    </TabPane>
                    <TabPane tab="Company" key="2">
                        <div>
                        <CompanyDetail companyInfo = {this.state.companyInfo}></CompanyDetail>
                        </div>
                    </TabPane>

                    <TabPane tab="Location" key="3">
                         <div><Location locationInfo = {this.state.location}></Location></div>
                        
                    </TabPane>

                    <TabPane tab="Applicant List" key="4">
                        <div>
                             <ApplicantList applicant={this.state.applicant}></ApplicantList>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default JobDescription;