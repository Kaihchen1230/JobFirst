import { Card, Button, Col, Row, Layout, Icon, Avatar } from 'antd';
import React from 'react';
import { Link } from "gatsby"
import image0 from '../../../static/2.jpg';
import image1 from '../../../static/3.jpg';
import image2 from '../../../static/4.jpg';
import image3 from '../../../static/businessImages/business0.jpg';
import image4 from '../../../static/businessImages/business1.jpg';
import nodataImg from '../../../static/nodata.png';

const { Meta } = Card;

const JobItem = (props) => {
    let imgArray = [
        image0, image1, image2, image3, image4
    ];
    let jobItem = props.jobs.map((item, index) => {
        let jobLink = "/app/job-detail/" + item.id;
        return (
            <Col key={index} span={8} style={{ margin: '10px 0' }}>
                <Card title={item.campanyName} bordered={true}
                    style={{ width: 300, margin: "auto" }}
                    cover={<img alt="example" src={imgArray[index % 4]} />}
                >
                    <Meta
                        avatar={<Avatar src={props.companyLogo} />}
                        title={item.jobTitle}
                        description={item.description && item.description.substring(0,100)}
                    />
                    <p></p>
                    <div align="center">
                        <Button  style={{color:"#1BB28b", border:"1px solid #1BB28b"} }ghost>
                            <Link 
                                to={jobLink}
                                state={{ id: item.id}}>
                                Learn More
                            </Link>
                        </Button>
                    </div>
                </Card>
            </Col>)
    }

    );
    return (
        <div style={{ background: '#ECECEC', padding: '30px', marginBottom:"5%" }}>
            <Row gutter={16}>
                {jobItem}
            </Row>
        </div>
    );
}

const { Content } = Layout;
const postJob = (props) => {
    return (
        <Layout>
            <Content>
                {props.jobList.length >=1 ?                 
                <JobItem
                    jobs={props.jobList}
                    companyLogo={props.companyLogo}
                />:
                <img style={{marginLeft:"38%", width:"20%"}} src={nodataImg}/>}
            </Content>
        </Layout>
    )
}
export default postJob;

