import React from 'react';
import { Tabs, Table, Button, Progress, Card, Icon } from 'antd';
import { getUser } from '../../services/auth';
import { I18n } from 'aws-amplify';
import AppliedJob from "./appliedJob";
import Education from "./education";
import Experiences from "./experiences";

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
                    <div align="center">
                        <h1>{I18n.get('Profile Completion')}:</h1>
                        <Progress type="circle" percent={60} format={percent => (percent == 100) ? "Complete" : `${percent} %`} />
                        <br /><br />
                        <Card
                            size="default"
                            title={I18n.get('User Information')}
                            style={{ width: "80%" }}
                        >
                            <p className="description" align="left" style={{ fontSize: 18 }}><Icon type="book" /><b> {I18n.get('Full Name')}: </b> {user.name + " " + user.middleName + " " + user.lastName}</p>
                            <p className="description" align="left" style={{ fontSize: 18 }}><Icon type="home" /><b> {I18n.get('Age')}: </b>{user.age}</p>
                            <p className="description" align="left" style={{ fontSize: 18 }}><Icon type="home" /><b> {I18n.get('English Level')}: </b>{user.englishLevel}</p>
                            <p className="description" align="left" style={{ fontSize: 18 }}><Icon type="home" /><b> {I18n.get('Spoken Language')}: </b>{user.language}</p>
                            <p className="description" align="left" style={{ fontSize: 18 }}><Icon type="home" /><b> {I18n.get('Email')}: </b>{user.email}</p>
                            <p className="description" align="left" style={{ fontSize: 18 }}><Icon type="home" /><b> {I18n.get('Phone')}: </b>{user.phone}</p>
                        </Card>
                    </div>

                </TabPane>

                <TabPane tab={I18n.get("Education and Awards")} key="2">
                    <h1 align="center"><b>{I18n.get("Education")}</b></h1>
                    {props.education.length > 0 ? (
                        <Education education={props.education} />
                    ) : <h1 align="center">You haven't added your past education yet.</h1>
                    }
                </TabPane>

                <TabPane tab={I18n.get("Experiences and Skills")} key="3">
                    <h1 align="center"><b>{I18n.get("Experiences")}</b></h1>
                    {props.experiences.length > 0 ? (
                        <Experiences experiences={props.experiences} />
                    ) : <h1 align="center">You haven't added your past experiences yet.</h1>
                    }
                </TabPane>

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