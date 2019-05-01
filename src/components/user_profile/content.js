import React from 'react';
import { Tabs, Table, Button, Progress } from 'antd';
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
                    <Progress type="circle" percent={75} format={percent => `${percent} Completed`} />
                    <div>
                        {I18n.get("First Name")}: {user.name}
                        <br />
                        {I18n.get("Last Name")}: {user.lastName}
                        <br />
                        {I18n.get("Middle Name")}: {user.middleName}
                        <br />
                        {I18n.get("Age")}: {user.age}
                        <br />
                        {I18n.get("Email")}: {user.email}
                        <br />
                        {I18n.get("Phone Number")}: {user.phone}
                        <br />
                        {I18n.get("English Level")}: {user.englishLevel}
                        <br />
                        {I18n.get("Spoken Language")}: {user.language}
                        <br />

                    </div>

                </TabPane>

                <TabPane tab={I18n.get("Education and Awards")} key="2">Content of Tab Pane 2</TabPane>

                <TabPane tab={I18n.get("Experience and Skills")} key="3">Content of Tab Pane 3</TabPane>

                <TabPane tab={I18n.get("Applied Jobs")} key="4">
                    <div>
                        <h1 align="center">{I18n.get("Applied Jobs")}</h1>
                        {props.jobs.length > 0 ? (
                            <Table dataSource={props.jobs} columns={columns} />
                        ) : <h1 align="center">You haven't applied to any jobs yet.</h1>
                        }
                    </div>

                </TabPane>
            </Tabs>
        </div>
    );
}

export default Information;