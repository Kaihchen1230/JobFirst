import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { Link } from "gatsby"
import { I18n } from 'aws-amplify';
import dict from "../dictionary/dictionary"

const jobItem = (props) => {
    let jobItem = props.jobs.map((item, index) =>
        <Col span={8} style={{ margin: '10px 0' }}>
            <Card title={item.jobTitle} bordered={true}>
                <p>{item.company.companyName}</p>
                <p>{item.datePosted}</p>
                <div align="center">
                    <Button type="primary" ghost>
                        <Link to={'/app/job-detail/'+item.id}>Learn More</Link>
                    </Button>
                </div>
            </Card>
        </Col>
    );
    let lan = window.localStorage.getItem('lan');
    I18n.putVocabularies(dict);
    I18n.setLanguage(lan);
    return (
        <div style={{ background: '#ECECEC', padding: '30px', height: '1000px' }}>
            <h1 align="center">{I18n.get('Welcome to Our Job Pool')}</h1>
            <Row gutter={16}>
                {jobItem}
            </Row>
        </div>
    );
}
export default jobItem;