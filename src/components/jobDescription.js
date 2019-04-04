import React from 'react';
import { Link } from "@reach/router"
import { Tabs, Button } from 'antd';
const TabPane = Tabs.TabPane;

class JobDescription extends React.Component{

    state = {
        jobDetail: [
            {
                title: 'Software Engineer Intern',
                description: 'Proident culpa ex commodo enim dolore sint. Aute nulla amet anim consectetur proident amet laboris quis. Incididunt proident commodo fugiat nulla aliquip incididunt dolor. Aliquip ipsum laborum anim laboris cupidatat incididunt mollit velit pariatur in.Proident culpa ex commodo enim dolore sint. Aute nulla amet anim consectetur proident amet laboris quis. Incididunt proident commodo fugiat nulla aliquip incididunt dolor. Aliquip ipsum laborum anim laboris cupidatat incididunt mollit velit pariatur in.Proident culpa ex commodo enim dolore sint. Aute nulla amet anim consectetur proident amet laboris quis. Incididunt proident commodo fugiat nulla aliquip incididunt dolor. Aliquip ipsum laborum anim laboris cupidatat incididunt mollit velit pariatur in.',
                responsibilities: [
                    'Proficient in Python and SQL',
                    'Familiarity with working using Machine Learning techniques.',
                    'Naturally curious, detail oriented, passionate about data quality and statistical methods, ability to drive a project to completion.',
                    'Availability full-time June - August 2019 in NYC'
                ]
            }
            
        ]
    }

    render(){

        const listItems = this.state.jobDetail[0].responsibilities.map((item) => 
            <li>{item}</li>
        );
        return(
            <div>
                <h2 style = {{margin: '10px 0'}}>{this.state.jobDetail[0].title}</h2>
                <Button type="primary" ghost >
                            <Link to="/app/job-detail">
                                apply
                            </Link>
                </Button>
                <Tabs defaultActiveKey="1" stlye = {{display: 'flex !important', width: '30%'}}> 
                    <TabPane tab="Job" key="1" >
                        <div>
                            <h2>{this.state.jobDetail[0].title}, New York</h2>
                            <h3>Description: 
                                <p> 
                                    {this.state.jobDetail[0].description}
                                </p>
                            </h3>
                            <h3>
                                Responsibilities:
                                <ul>
                                   {listItems}
                                </ul>
                            </h3>
                        </div>
                        

                    </TabPane>
                    <TabPane tab="Company" key="2">
                    <div>
                            <h2>OverView</h2>
                            <h3>Description: 
                                <p> 
                                    {this.state.jobDetail[0].description}
                                </p>
                            </h3>
                            <h3>
                                Responsibilities:
                                <ul>
                                   {listItems}
                                </ul>
                            </h3>
                        </div>
                    </TabPane>
                    <TabPane tab="Location" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        )
    }
}

export default JobDescription;