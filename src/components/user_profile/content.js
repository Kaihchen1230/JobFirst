import React from 'react';
import { Tabs, Table, Button } from 'antd';
import { getUser } from '../../services/auth';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

const dataSource = [{
    key: '1',
    job: 'Front-end developer',
    date_applied: 'Today',
    address: '10 Downing Street',
    status: 'Pending'
}, {
    key: '2',
    job: 'Back-end developer',
    date_applied: 'Today',
    address: '10 Downing Street',
    status: 'Pending'
}, {
    key: '3',
    job: 'Full-stack developer',
    date_applied: 'Today',
    address: '10 Downing Street',
    status: 'Pending'
}];

const columns = [{
    title: 'Job',
    dataIndex: 'job',
    key: 'job',
}, {
    title: 'Date Applied',
    dataIndex: 'date_applied',
    key: 'date_applied',
}, {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
}];

const fetchAppliedJobs = async (e) => {
    const userInfo = getUser();
    console.log(userInfo);
    // from here we run the query to fetch the applied jobs for the user
    //let appliedJobs = await API.graphql(graphqlOperation(queries.listAppliedJobs));
}

const Information = (props) => {
    // should get all the user information from props
    const user = props.user;
    return (
        <div>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="General Info" key="1">
                    <div>
                        First Name: {user.firstName}
                        <br />
                        Last Name: {user.lastName}
                        <br />
                        Age: {user.age}
                        <br />
                    </div>

                </TabPane>

                <TabPane tab="Education and Award" key="2">Content of Tab Pane 2</TabPane>

                <TabPane tab="Experience and Skills" key="3">Content of Tab Pane 3</TabPane>
                {(getUser().sub === user.id) ?
                    <TabPane tab="Applied Jobs" key="4">Content of Tab Pane 4
                        <h1 align="center">Applied Jobs</h1>
                        <Table dataSource={dataSource} columns={columns} />
                        <Button onClick={fetchAppliedJobs}>Test</Button>
                    </TabPane> :
                    null
                }
            </Tabs>
        </div>
    );
}

export default Information;