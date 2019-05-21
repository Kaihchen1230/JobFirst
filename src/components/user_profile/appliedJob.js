import React from 'react';
import { Tabs, Table, Button, Progress } from 'antd';
import { getUser } from '../../services/auth';
import { I18n } from 'aws-amplify';

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

/**
 * The component AppliedJob will display a table of the user's history of applied jobs
 */
const AppliedJob = (props) => {
    const jobs = props.jobs.map(item => {
        const {jobTitle, dateApplied, status } = item;
        const temp = {
            key: item.id,
            jobTitle: jobTitle,
            dateApplied: dateApplied,
            status: status,
        }
        return temp;
    })
    return (
        <Table dataSource={jobs} columns={columns} pagination={{ pageSize: 15 }} scroll={{ y: 240 }} />
    )
}

export default AppliedJob;