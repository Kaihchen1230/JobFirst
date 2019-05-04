import React from 'react';
import { Link, navigate } from "gatsby";
import { Tabs, Button, Popover, Modal, Spin } from 'antd';
import JobDetails from '../components/job_description/jobDetails';
import Location from '../components/job_description/locationDetail';
import CompanyDetail from '../components/job_description/companyDetail';
import ApplicantList from '../components/job_description/applicantList';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { isLoggedIn, setUser, getUser, logout } from "../services/auth";
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
const TabPane = Tabs.TabPane;

class JobDescription extends React.Component{


    state = {
        userId: "",
        jobId: "",
        isEmployer: false,
        postJobInfo: {},
        jobInfo: {
          title: "",
          type: "",
          description: "",
          requirements: [],
          clickedCount: 0
        },
        companyInfo: {},
        location: {},
        alreadyAppliedvisible: false,
        newUserAppliedVisible: false,
        applied: false,
        loading: false,
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
      let currentId = window.history.state.id;
      let user = await Auth.currentAuthenticatedUser();
      console.log("this is the user: ", user);
      const { attributes } = user;
      console.log("this is attribute: ", {attributes});
      let currentUserId = attributes.sub;
      
      // get the current job info
      try{
        const currentJobInfo = await API.graphql(graphqlOperation (queries.getPostedJob, {id: currentId}));
        console.log('this is currentJobInfo: ', currentJobInfo);
        let incomingJobInfo = {...this.state.jobInfo};
        incomingJobInfo.title = currentJobInfo.data.getPostedJob.jobTitle;
        incomingJobInfo.type = currentJobInfo.data.getPostedJob.jobType;
        incomingJobInfo.description = currentJobInfo.data.getPostedJob.description;
        incomingJobInfo.requirements = currentJobInfo.data.getPostedJob.requirements;
        incomingJobInfo.clickedCount = currentJobInfo.data.getPostedJob.clickedCounts;
        this.setState({
          userId: currentUserId,
          jobId: currentId,
          postJobInfo: currentJobInfo,
          jobInfo: incomingJobInfo,
          companyInfo: currentJobInfo.data.getPostedJob.company,
          location: currentJobInfo.data.getPostedJob.location
        });
        // console.log('this is the clickcount: ', this.state.jobInfo.clickedCount);
      }catch(err){
        console.log('there is an error fetching data...', err);
      }

      // update posted job click count
      try{
        let currentJobClickedCounts = this.state.jobInfo.clickedCount;
        // console.log('this is !!!clickcount: ', currentJobClickedCounts);
        // console.log('this is !!!!!! current id: ', currentId);
        const updatePostedJobInput = {
          id: currentId,
          clickedCounts: currentJobClickedCounts + 1
        };
        await API.graphql(graphqlOperation(mutations.updatePostedJob, {input: updatePostedJobInput}));
        // const newUpdatePostJob = await API.graphql(graphqlOperation(mutations.updatePostedJob, {input: updatePostedJobInput}));
        // console.log(' this is the newUpdatePostJob: ', newUpdatePostJob);

      }catch(err){
        console.log('there is an error updating click count: ', err);
      }

      getUser()["custom:isEmployer"] === "yes" ? this.setState({isEmployer: true}) : this.setState({isEmployer: false});
      console.log('this is geUser: ', this.state.isEmployer);      
      // console.log('this is attribute: ', currentUserId);
      // console.log('this is attr: ', {attributes});
    }

    applyJob = async () => {
      // event.preventDefault();
      // console.log('this is word: ', word);

      // make sure the employee hasn't applied to the job yet
      try{
        const currentJobInfo = await API.graphql(graphqlOperation(queries.getPostedJob,{id: this.state.jobId}));
        // console.log('this is the currentJobInfo: ', currentJobInfo);
        const {applied} = currentJobInfo.data.getPostedJob;
        // console.log('this is applied: ',{applied});
        // console.log('this is the item: ', applied.items);
        // console.log('this is the type of applied.items: ', typeof(applied.items));
        // console.log('this is the size: ', applied.items.length);
        this.setState({
          loading: true
        })
        for(let i = 0; i < applied.items.length; i++){
          let getAppliedJob = await API.graphql(graphqlOperation(queries.getAppliedJob,{id: applied.items[i].id}));
          console.log('this is the getAppliedJob: ', getAppliedJob);
          let appliedEmployeeId = getAppliedJob.data.getAppliedJob.Employee.id;
          if(appliedEmployeeId === this.state.userId){
              this.setState({
                applied: true
              })
          }
        }
        if(!this.state.applied){
          const newDate = new Date()
          const date = newDate.getDate();
          const month = newDate.getMonth() + 1;
          const year = newDate.getFullYear();
          const currentDate = month + '/' + date + '/' + year;
          const userId = this.state.userId;
          const jobId = this.state.jobId;
          // console.log('this is the date: ', this.state.userId);
          // console.log('this is the userId: ', userId);
          // console.log('this is jobId: ', jobId);
          try{
            const createAppliedJobInput = {
              dateApplied : currentDate,
              status: "Pending",
              appliedJobEmployeeId: userId,
              appliedJobJobId: jobId
            }
            const newAppliedJob = await API.graphql(graphqlOperation(mutations.createAppliedJob, {input: createAppliedJobInput}));
            console.log(' this is the newAppliedJob: ', newAppliedJob);
            this.setState({
              newUserAppliedVisible: true
            })

          }catch(err){
            console.log('there is an eeror updating the applied job table: ', err);
          }
        }else{
          this.setState({alreadyAppliedvisible: true});
        }

        

      }catch(err){
        console.log('there is an error to fetch the data for applied job: ', err);
      }

      
    }    
    render(){
        // console.log("this is the job id: ", this.state.jobId);
        // console.log('this is the postjob info: ', this.state.postJobInfo);
        // console.log('this is the job info: ', this.state.jobInfo);        
        // console.log('this is the company: ', this.state.companyInfo);
        // console.log('this is the location: ', this.state.location);
        // console.log('this is the city: ', this.state.location.city);

        let viewCompanyInfo;
        if(this.state.companyInfo != null){
          let content = this.state.companyInfo.description;
          viewCompanyInfo = (<Popover content={content}>
                  <div>
                  {this.state.companyInfo.companyName} - {this.state.companyInfo.headquarter}
                  </div>
            </Popover>)
        }else{
          console.log('it is null');
          viewCompanyInfo = (
            <div>
              The company is not provided...
            </div>
          )
        }

        
        return(
            
            <div>
              <Spin spinning={this.state.loading} tip="Please wait for a moment"> 
                <h2 style = {{margin: '10px 0'}}>{this.state.jobInfo.title}</h2>
                {viewCompanyInfo}
                <Popover content={"We will use your default information to apply to the job"} >
                
                <Button type="primary" onClick={this.applyJob} loading={this.state.loading}>Apply Now</Button>
              </Popover>
              
              <div>
                <Modal
                  title="Modal"
                  visible={this.state.alreadyAppliedvisible}
                  onOk={() => {
                    this.setState({
                      alreadyAppliedvisible: false,
                      loading: false
                    });
                    navigate("/app/user-profile/"+this.state.userId)
                  }}
                  onCancel={() => {
                    this.setState({
                      alreadyAppliedvisible: false,
                      loading: false
                    })
                  }}
                  okText="Go to profile page"
                  cancelText="Stay here"
                >
                 <p>
                   You Already Applied...
                 </p>
                </Modal>
               </div>
               <div>
                <Modal
                  title="Modal"
                  visible={this.state.newUserAppliedVisible}
                  onOk={() => {
                    this.setState({
                      newUserAppliedVisible: false,
                      loading: false
                    });
                    navigate("/app/user-profile/"+this.state.userId)
                  }}
                  onCancel={() => {
                    this.setState({
                      newUserAppliedVisible: false,
                      loading: false
                    })
                  }}
                  okText="Go to profile page"
                  cancelText="Stay here"
                >
                 <p>
                   Thanks for applied to xxxx, Employer will contact you in shortly
                 </p>
                </Modal>
              </div>
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

                    {this.state.isEmployer? <TabPane tab="Applicant List" key="4">
                        <div>
                             <ApplicantList applicant={this.state.applicant}></ApplicantList>
                        </div>
                    </TabPane>: null}
                </Tabs>
                </Spin>
            </div>
        )
    }
}

export default JobDescription;