import React from 'react';
import { Tabs, Button, Popover, Spin, Skeleton } from 'antd';
import JobDetails from '../components/job_description/jobDetails';
import Location from '../components/job_description/locationDetail';
import CompanyDetail from '../components/job_description/companyDetail';
import ApplicantList from '../components/job_description/applicantList';
import PopOutWindow from '../components/job_description/popOutWindow';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { getUser } from "../services/auth";
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as customQueries from '../customGraphql/queries';
const TabPane = Tabs.TabPane;

class JobDescription extends React.Component{


    state = {
        userId: "",
        jobId: "",
        employerId: "",
        isEmployer: false,
        isCorrectEmployer: false,
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
        isVisible: false,
        applied: false,
        loading: true,
        display: false,
        count: 0,
        applicants: []

    }
    componentDidMount = async () => {


      console.log('it comes to componentDidMount first');
      // current job id
      let currentId = window.history.state.id;
      let user = await Auth.currentAuthenticatedUser();
      console.log("this is the user: ", user);
      const { attributes } = user;
      console.log("this is attribute: ", {attributes});
      let currentUserId = attributes.sub;
      
      // get the current job info
      try{
        const currentJobInfo = await API.graphql(graphqlOperation (queries.getPostedJob, {id: currentId}));
       
        let incomingJobInfo = {...this.state.jobInfo};
        incomingJobInfo.title = currentJobInfo.data.getPostedJob.jobTitle;
        incomingJobInfo.type = currentJobInfo.data.getPostedJob.jobType;
        incomingJobInfo.description = currentJobInfo.data.getPostedJob.description;
        incomingJobInfo.requirements = currentJobInfo.data.getPostedJob.requirements;
        incomingJobInfo.clickedCount = currentJobInfo.data.getPostedJob.clickedCounts;
        console.log('this is the currentJobInfo: ', currentJobInfo);
        this.setState({
          userId: currentUserId,
          jobId: currentId,
          postJobInfo: currentJobInfo,
          jobInfo: incomingJobInfo,
          companyInfo: currentJobInfo.data.getPostedJob.company,
          location: currentJobInfo.data.getPostedJob.location
        });

      }catch(err){
        console.log('there is an error fetching data...', err);
      }

      // update posted job click count
      try{
        let currentJobClickedCounts = this.state.jobInfo.clickedCount;
        const updatePostedJobInput = {
          id: currentId,
          clickedCounts: currentJobClickedCounts + 1
        };
        await API.graphql(graphqlOperation(mutations.updatePostedJob, {input: updatePostedJobInput}));

      }catch(err){
        console.log('there is an error updating click count: ', err);
      }

      // checking if the current user is an Er or Ee
      getUser()["custom:isEmployer"] === "yes" ? this.setState({isEmployer: true, display: true}) : this.setState({isEmployer: false});

      // check if the current user is the company who posted the job

      if(this.state.userId === this.state.companyInfo.id){
        console.log('this is the current userid: ', this.state.userId, ' and this is the companyId: ', this.state.companyInfo.id);
        this.setState({
          isCorrectEmployer: true
        })
      }

      // get applicants for the current job post
      try{
        const getEmployeeAppliedCurrentJob = await API.graphql(graphqlOperation (customQueries.getEmployeeAppliedSameJob, {id: currentId}));
        // console.log('this is the testing: ', getEmployeeAppliedCurrentJob);
        let getApplicants = getEmployeeAppliedCurrentJob.data.getPostedJob.applied.items;
        // console.log('this is the employeeAppliedCurrentJob: ', employeeAppliedCurrentJob, " and its tpye: is array ", Array.isArray(employeeAppliedCurrentJob));

        let applicantsInfo = [];
        console.log('this is getApplicants: ', getApplicants, ' and this is the length: ', getApplicants.length);
        
        
        for(let i = 0; i < getApplicants.length; i++){

          let tempEnglishLevel = getApplicants[i].Employee.englishLevel;
          console.log('this is getApplicants[i].Employee.englishLevel: ', getApplicants[i].Employee.englishLevel);
          let currentEnglishLevel = '';
          if(tempEnglishLevel === null){
            currentEnglishLevel = 'N/A'
          }else{
            currentEnglishLevel = tempEnglishLevel
          }

          let tempName = getApplicants[i].Employee.firstName;
          console.log('this is getApplicants[i].Employee.name: ', getApplicants[i].Employee.firstName);

          let currentName;
          tempName === null? currentName = 'N/A' : currentName = tempName;

          let tempAddress = getApplicants[i].Employee.address;
          console.log('this is getApplicants[i].Employee.address: ', getApplicants[i].Employee.address);
          
          let currentAddress = '';
          if(tempAddress === null){
            currentAddress = 'N/A'
          }else{
            currentAddress = tempAddress.line1 + ' ' + tempAddress.line2 + ', ' + tempAddress.city + ' ' + tempAddress.state + ', '
            + tempAddress.postalCode
          }

          let tempAppliedJobId = getApplicants[i].id;
          let currentAppliedJobId = '';
          tempAppliedJobId === null? currentAppliedJobId = 'N/A' : currentAppliedJobId = tempAppliedJobId;

          let tempStatus = getApplicants[i].status;
          let currentStatus = '';
          tempStatus === null ? currentStatus = 'N/A' : currentStatus = tempStatus;


          console.log('this is currentEnglishLevel: ', currentEnglishLevel);
          applicantsInfo.push({
            key: getApplicants[i].Employee.id,
            name: currentName,
            englishLevel: currentEnglishLevel,
            address: currentAddress,
            appliedJobId: currentAppliedJobId,
            status: currentStatus
          })
        }
        // console.log('this is applicantInfo: ', applicantsInfo);
        this.setState({
          applicants: applicantsInfo
        });

      }catch(err){
        console.log('there is an error fetching the data for employees who applied the job ', err);
      }

      this.setState({
        loading: false
      })
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
              break;
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
              isVisible: true
              
            });
            console.log('this is isVisible in the if: ', this.state.isVisible);

          }catch(err){
            console.log('there is an eeror updating the applied job table: ', err);
          }
        }else{
          
          this.setState({isVisible: true});
          console.log('this is isVisible in the else: ', this.state.isVisible);
        }

        

      }catch(err){
        console.log('there is an error to fetch the data for applied job: ', err);
      }
    }  
    
    loadingStatus = (status) => {
      this.setState({
        loading: status
      })
    }

    visibleStatus = (status) => {
      this.setState({
        isVisible: status
      })
    }

  
    
    render(){

        if(this.state.loading){
          <Skeleton active />
        }


        console.log('it comes to render first');
        console.log('this is the loading: ', this.state.loading);
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

        // if(this.state.display && !this.state.count == 0){
        //   this.setState({
        //     display : false,
        //     count : 1
        //   })
        // }
        console.log('this is location: ', this.state.location); 

        return(
            
          <div>
            <Spin spinning={this.state.loading} tip="Please wait for a moment"> 
                <h2 style = {{margin: '10px 0'}}>{this.state.jobInfo.title}</h2>
                {viewCompanyInfo}
                <Popover content={"We will use your default information to apply to the job"} >
                
                {!this.state.isEmployer? <Button type="primary" onClick={this.applyJob} loading={this.state.loading}>Apply Now</Button>: null}
                
              </Popover>
              <PopOutWindow
                userId = {this.state.userId}
                show = {this.state.isVisible}
                isVisible = {this.visibleStatus}
                isLoading = {this.loadingStatus}
                okText = "Go to profile page"
                cancelText = "Stay here"
                link = "/app/user-profile/"
                content = {this.state.applied? "You already applied to this job, you can view it in your profile page." :"Thanks for applying to this job, you will be heard back from the employer shortly."}
              />
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

                  {this.state.isEmployer && this.state.isCorrectEmployer ?
                  <TabPane tab="Applicant List" key="4">
                      <div>
                            <ApplicantList applicants={this.state.applicants}
                            ></ApplicantList>
                      </div>
                  </TabPane>: null}
              </Tabs>
            </Spin>
          </div>
        )
    }
}

export default JobDescription;