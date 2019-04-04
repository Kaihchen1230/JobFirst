import React from 'react';
import {generate} from 'randomstring';
import { Card, Col, Row } from 'antd';

class JobList extends React.Component{

    state = {
        jobList: [
            {
                id: generate(10),
                campanyName: 'Alibaba',
                description: 'looking for software intern'
            }, 
            {
                id: generate(10),
                campanyName: 'Alibaba',
                description: 'looking for software intern'
            },
            {
                id: generate(10),
                campanyName: 'Tencent',
                description: 'looking for software intern'
            },
            {
                id: generate(10),
                campanyName: 'Baidu',
                description: 'looking for software intern'
            },
            {
                id: generate(10),
                campanyName: 'Ant Fnancial',
                description: 'looking for software intern'
            },
            {
                id: generate(10),
                campanyName: 'Xiaomi',
                description: 'looking for software intern'
            }
            

        ]
    }

    

    render(){
        return(
            <div style={{ background: '#ECECEC', padding: '30px' }}>
    
            <Col span={8}>
                <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
     
            </div>
        );
    }
}

export default JobList;