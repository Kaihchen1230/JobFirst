import React from 'react';
import { Tabs, Table, Button, Progress } from 'antd';
import { getUser } from '../../services/auth';
import { I18n } from 'aws-amplify';

const Education = (props) => {

    const columns = [{
        title: I18n.get('Job'),
        dataIndex: 'jobTitle',
        key: 'jobTitle',
    }, {
        title: I18n.get('Date Applied'),
        dataIndex: 'dateApplied',
        key: 'dateApplied',
    }, {
        title: I18n.get('Status'),
        dataIndex: 'status',
        key: 'status'
    }];

    
    return (
        <Table dataSource={jobs} columns={columns} pagination={{ pageSize: 15 }} scroll={{ y: 240 }} />
    )

}


export default Education;