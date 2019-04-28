import React from 'react';
import { Tabs, Table, Button } from 'antd';
import { getUser } from '../../services/auth';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

const TabPane = Tabs.TabPane;

const columns = [{
    title: 'Job',
    dataIndex: 'job',
    key: 'job',
}, {
    title: 'Date Applied',
    dataIndex: 'dateApplied',
    key: 'dateApplied',
}, {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
}];

const callback = (key) => {
    console.log(key);
}

const Information = (props) => {
    //{console.log(props.jobs)}
    //{console.log(props.user)}
    const user = getUser();
    return (
        <div>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="General Info" key="1">
                    <div>
                        First Name: {user.name}
                        <br />
                        Last Name: {user.lastName}
                        <br />
                        Age: {user.age}
                        <br />
                    </div>

                </TabPane>

                <TabPane tab="Education and Awards" key="2">Content of Tab Pane 2</TabPane>

                <TabPane tab="Experience and Skills" key="3">Content of Tab Pane 3</TabPane>

                <TabPane tab="Applied Jobs" key="4">Content of Tab Pane 4
                    <h1 align="center">Applied Jobs</h1>
                    {props.jobs.length > 0 ? (
                        <Table dataSource={props.jobs} columns={columns} />
                    ) : <h1 align="center">You haven't applied to any jobs yet.</h1>
                    }
                </TabPane>
            </Tabs>
        </div>
    );
}

export default Information;