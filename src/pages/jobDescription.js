import React from 'react';
import { Link } from "@reach/router"
import { Tabs, Button } from 'antd';
import JobDetails from '../components/job_description/jobDetails';
import Location from '../components/job_description/location';
import CompanyDetail from '../components/job_description/companyDetail';
import ApplicantList from '../components/job_description/applicantList';
const TabPane = Tabs.TabPane;

class JobDescription extends React.Component{


    state = {
        jobId: "",
        jobDetail:[
            {
                title: 'Software Engineer Intern',
                description: 'Proident culpa ex commodo enim dolore sint. Aute nulla amet anim consectetur proident amet laboris quis. Incididunt proident commodo fugiat nulla aliquip incididunt dolor. Aliquip ipsum laborum anim laboris cupidatat incididunt mollit velit pariatur in.Proident culpa ex commodo enim dolore sint. Aute nulla amet anim consectetur proident amet laboris quis. Incididunt proident commodo fugiat nulla aliquip incididunt dolor. Aliquip ipsum laborum anim laboris cupidatat incididunt mollit velit pariatur in.Proident culpa ex commodo enim dolore sint. Aute nulla amet anim consectetur proident amet laboris quis. Incididunt proident commodo fugiat nulla aliquip incididunt dolor. Aliquip ipsum laborum anim laboris cupidatat incididunt mollit velit pariatur in.',
                responsibilities: [
                    'Proficient in Python and SQL',
                    'Familiarity with working using Machine Learning techniques.',
                    'Naturally curious, detail oriented, passionate about data quality and statistical methods, ability to drive a project to completion.',
                    'Availability full-time June - August 2019 in NYC'
                ],
                location: 'New York'
            }
                
        ], 
        'company':[
            {
                name: 'Alibaba',
                headquarter: 'Hanzhou, China',
                founded: '1923',
                industry: 'Enterprise Software & Network',
                revenue: '$5 to $10 billion(USD)',
                size: '10000+ Employees'
            }
        ],
        'location': [
            {
                street1: '85 Broad Street',
                city: 'New York',
                state: 'NY',
                zipCode: 11225
            }
        ],
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
        ]
        
    }
    componentDidMount(){
      let id = window.history.state.id;
      this.setState({
        jobId: id
      });
      
    }
    
    render(){
      
        return(
            
            <div>
                <h2 style = {{margin: '10px 0'}}>{this.state.jobDetail[0].title}</h2>
                <h4>Job id: {this.state.jobId}</h4>
                <h4>{this.state['company'][0].name}</h4>
                <Button type="primary" ghost >
                            <Link to="/app/application">
                                Apply Now
                            </Link>
                </Button>
                <Tabs defaultActiveKey="1" > 
                    <TabPane tab="Job" key="1" >
                        <div>
                            <JobDetails jobInfo = {this.state.jobDetail}></JobDetails>
                        </div>
            
                    </TabPane>
                    <TabPane tab="Company" key="2">
                        <div>
                        <CompanyDetail companyInfo = {this.state['company']}></CompanyDetail>
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