import React from 'react';
import { Tabs, Table, Button, Progress } from 'antd';
import { getUser } from '../../services/auth';
import { I18n } from 'aws-amplify';

const Education = (props) => {

    const columns = [{
        title: I18n.get('School Name'),
        dataIndex: 'schoolName',
        key: 'schoolName',
    }, {
        title: I18n.get('Degree'),
        dataIndex: 'degree',
        key: 'degree',
    }, {
        title: I18n.get('City'),
        dataIndex: 'city',
        key: 'city',
    }, {
        title: I18n.get('Country'),
        dataIndex: 'country',
        key: 'country'
    }, {
        title: I18n.get('Start Year'),
        dataIndex: 'startYear',
        key: 'startYear',
    }, {
        title: I18n.get('End Year'),
        dataIndex: 'endYear',
        key: 'endYear'
    }];


    return (
        <Table dataSource={props.education} columns={columns} pagination={{ pageSize: 15 }} scroll={{ y: 240 }} />
    )

}


export default Education;