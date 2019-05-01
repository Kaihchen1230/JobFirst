import React from 'react';
import { Tabs, Table, Button } from 'antd';
import { getUser } from '../../services/auth';
import { I18n } from 'aws-amplify';

const TabPane = Tabs.TabPane;

const columns = [{
    title: I18n.get('Job'),
    dataIndex: 'Job',
    key: 'Job',
}, {
    title: I18n.get('Date Applied'),
    dataIndex: 'dateApplied',
    key: 'dateApplied',
}, {
    title: I18n.get('Status'),
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
                <TabPane tab={I18n.get("General Info")} key="1">
                    <div>
                        First Name: {user.name}
                        <br />
                        Last Name: {user.lastName}
                        <br />
                        Age: {user.age}
                        <br />
                    </div>

                </TabPane>

                <TabPane tab={I18n.get("Education and Awards")} key="2">Content of Tab Pane 2</TabPane>

                <TabPane tab={I18n.get("Experience and Skills")} key="3">Content of Tab Pane 3</TabPane>

                <TabPane tab={I18n.get("Applied Jobs")} key="4">
                    <h1 align="center">{I18n.get("Applied Jobs")}</h1>
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