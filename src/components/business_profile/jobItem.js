import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { Link, navigate } from "gatsby"
const jobItem = (props) => {
    let jobItem = props.jobs.map((item, index) =>
        <Col span={8} style={{ margin: '10px 0' }}>
            <Card title={item.campanyName} bordered={true}>
                <p>{item.description}</p>
                <div align="center">
                    <Button type="primary" ghost>
                        <Link to="/app/job-detail">Learn More</Link>
                    </Button>
                </div>
            </Card>
        </Col>
    );
    return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
                {jobItem}
            </Row>
        </div>
    );
}
export default jobItem;