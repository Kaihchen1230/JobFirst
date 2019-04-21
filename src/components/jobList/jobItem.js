import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { Link } from "gatsby"
const jobItem = (props) => {
    let jobItem = props.jobs.map((item, index) =>
        <Col span={8} style={{ margin: '10px 0' }}>
            <Card title={item.jobTitle} bordered={true}>
                <p>{item.company.companyName}</p>
                <p>{item.datePosted}</p>
                <div align="center">
                    <Button type="primary" ghost>
                        <Link to="/app/job-detail">Learn More</Link>
                    </Button>
                </div>
            </Card>
        </Col>
    );
    return (
        <div style={{ background: '#ECECEC', padding: '30px', height: '1000px' }}>
            <h1 align="center">Welcome to Our Job Pool</h1>
            <Row gutter={16}>
                {jobItem}
            </Row>
        </div>
    );
}
export default jobItem;