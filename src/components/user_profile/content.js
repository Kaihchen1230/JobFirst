import React from 'react';
import { Tabs } from 'antd';
import { getUser } from '../../services/auth';

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

const Information = (props) => {
    // should get all the user information from props
    const user = props.user;
    return (

        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="General Info" key="1">
                <div>
                    First Name: {user.firstName}
                    <br/>
                    Last Name: {user.lastName}
                    <br/>
                    Age: {user.age}
                    <br/>
                </div>
            
            </TabPane>

            <TabPane tab="Education and Award" key="2">Content of Tab Pane 2</TabPane>

            <TabPane tab="Experience and Skills" key="3">Content of Tab Pane 3</TabPane>
            {(getUser().sub === user.id) ?
                <TabPane tab="Jobs Applied" key="4">Content of Tab Pane 3</TabPane>:
                null}
        </Tabs>
    );
}

export default Information;