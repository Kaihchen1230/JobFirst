import React from 'react';
import { Tabs, Table, Button, Progress } from 'antd';
import { getUser } from '../../services/auth';
import { I18n } from 'aws-amplify';
import AppliedJob from "./appliedJob";
import Education from "./education";

const TabPane = Tabs.TabPane;

const callback = (key) => {
    console.log(key);
}

const Information = (props) => {

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

                <TabPane tab={I18n.get("Education and Awards")} key="2">
                    <h1 align="center"><b>{I18n.get("Education")}</b></h1>
                    {props.education.length > 0 ? (
                        <Education education={props.education} />
                    ) : <h1 align="center">You haven't added your past education yet.</h1>
                    }
                </TabPane>

                <TabPane tab={I18n.get("Experience and Skills")} key="3">Content of Tab Pane 3</TabPane>

                <TabPane tab={I18n.get("Applied Jobs")} key="4">
                    <h1 align="center"><b>{I18n.get("Applied Jobs")}</b></h1>
                    {props.jobs.length > 0 ? (
                        <AppliedJob jobs={props.jobs} />
                    ) : <h1 align="center">You haven't applied to any jobs yet.</h1>
                    }
                </TabPane>
            </Tabs>
        </div>
    );
}

export default Information;