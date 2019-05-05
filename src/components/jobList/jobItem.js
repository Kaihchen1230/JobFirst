import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { Link } from "gatsby";
import * as mutations from "../../graphql/mutations";
import { async } from 'q';



const jobItem = (props) => {
    let jobItem = props.jobs.map((item, index) =>
        <Col span={8} style={{ margin: '10px 0' }}>
            <Card title={item.jobTitle} bordered={true}>
                <p>{item.description}</p>
                <p>Location: {item.location.line1}</p>
                <p>Post Date: {item.datePosted}</p>
                <p>Deadline: {item.deadline}</p>
                <div align="center">
                    <Button type="primary" ghost >
                        <Link 
                            to={'/app/job-detail/'+item.id}
                            state={{ id: item.id}}
                        >Learn More</Link>
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