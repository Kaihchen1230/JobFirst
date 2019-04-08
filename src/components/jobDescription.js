import React from 'react';
import { Link } from "@reach/router"
import { Tabs, Button } from 'antd';
import JobDetails from './job_description/jobDetails';
import Location from './job_description/location';
import CompanyDetail from './job_description/companyDetail';
const TabPane = Tabs.TabPane;

class JobDescription extends React.Component{

    state = {
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
        ]
    }
            
    render(){

        
        
        return(
            <div>
                <h2 style = {{margin: '10px 0'}}>{this.state.jobDetail[0].title}</h2>
                <h4>{this.state['company'][0].name}</h4>
                <Button type="primary" ghost >
                            <Link to="/app/application">
                                Apply No
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
                        <Location locationInfo = {this.state.location}></Location>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default JobDescription;