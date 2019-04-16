import { Card,Button, Col, Row,Layout, } from 'antd';

import React from 'react';
import JobItem from './jobItem';

const {Content} = Layout; 
const postJob = (props) => {
    return (
        
        <Layout>
            <Content>
                <JobItem jobs={props.jobList} />
            </Content>
        </Layout>

   
    )
}
export default postJob;

