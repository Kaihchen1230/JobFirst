import React from 'react';
import { Tabs, Table } from 'antd';
import { getUser } from '../../services/auth';

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

const dataSource = [{
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  }, {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  }];

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }];

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
                <TabPane tab="Jobs Applied" key="4">Content of Tab Pane 4
                    <h1>Test</h1>
                    <Table dataSource={dataSource} columns={columns} />
                </TabPane>:
                null
            }
        </Tabs>
    );
}

export default Information;