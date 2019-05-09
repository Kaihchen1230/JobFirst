import React from 'react';
import { Tabs, Table, Button, Progress, Card, Icon } from 'antd';
import { getUser } from '../../services/auth';
import { I18n } from 'aws-amplify';
import AppliedJob from "./appliedJob";
import Education from "./education";
import Experiences from "./experiences";
import General from "./general";

const TabPane = Tabs.TabPane;

const callback = (key) => {
    console.log(key);
}

const Information = (props) => {

    return (
        <div>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab={I18n.get("General Info")} key="1">
                    <General user={props.user} />
                </TabPane>

                <TabPane tab={I18n.get("Education and Awards")} key="2">
                    <h1 align="center"><b>{I18n.get("Education")}</b></h1>
                    {props.education.length > 0 ? (
                        <Education education={props.education} allowEdit={props.allowEdit} deleteEdu={props.deleteEdu} />
                    ) : <h1 align="center">{I18n.get('You haven\'t added your past education yet.')}</h1>
                    }
                </TabPane>

                <TabPane tab={I18n.get("Experiences and Skills")} key="3">
                    <h1 align="center"><b>{I18n.get("Experiences")}</b></h1>
                    {props.experiences.length > 0 ? (
                        <Experiences experiences={props.experiences} allowEdit={props.allowEdit} deleteExp={props.deleteExp} />
                    ) : <h1 align="center">{I18n.get('You haven\'t added your past experiences yet.')}</h1>
                    }
                </TabPane>

                <TabPane tab={I18n.get("Applied Jobs")} key="4">
                    <h1 align="center"><b>{I18n.get("Applied Jobs")}</b></h1>
                    {props.jobs.length > 0 ? (
                        <AppliedJob jobs={props.jobs} />
                    ) : <h1 align="center">{I18n.get('You haven\'t applied to any jobs yet.')}</h1>
                    }
                </TabPane>
            </Tabs>
        </div>
    );
}

export default Information;