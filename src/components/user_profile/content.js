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
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    job: 'hello'
}, {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    job: 'hello'
}, {
    key: '3',
    name: 'Sally',
    age: 25,
    address: '10 Downing Street',
    job: 'hello'
}];

const columns = [{
    title: 'Employee',
    dataIndex: 'employee',
    key: 'employee',
}, {
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
                    <TabPane tab="Jobs Applied" key="4">Content of Tab Pane 4
                        <h1>Applied Jobs</h1>
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