import React from 'react';
import { Card, Row, Col, Button, Icon } from 'antd';
import { Link } from "gatsby";
import * as mutations from "../../graphql/mutations";
import { async } from 'q';
import "./jobItem.css";


const jobItem = (props) => {
    console.log("joblist", props.jobs)
    let jobItem = props.jobs.map((item, index) =>
        <Col span={8} style={{ margin: '10px 0' }} key={index}>
            <Card
                title={<div>
                    <span style={{ fontSize: "25px", fontWeight: "600" }}>
                        {item.jobTitle}
                    </span>
                    <div>
                        <p style={{ fontSize: '14px' }} >{item.jobCategory}
                        <br></br>
                        {item.company.companyName}</p>
                    </div>
                </div>}
                bordered={true}
                style={{ height: '450px' }} >

                <p><Icon style={{ fontSize: '18px', color: '#1BB28B', margin: "2%" }} type="home" />{item.location.line1}</p>
                <p><Icon style={{ fontSize: '18px', color: '#1BB28B', margin: "2%" }} type="unordered-list" />{item.description && item.description.substring(0, 100)}</p>

                <Row gutter={16}>
                    <Col span={8}>
                        <p><Icon style={{ fontSize: '18px', color: '#1BB28B', marginRight: "8%" }} type="team" />{item.jobType}</p>
                    </Col>
                    <Col span={8}>
                        <p><Icon style={{ fontSize: '18px', color: '#1BB28B', marginRight: "8%" }} type="dollar" />{item.salary} Per hour</p>
                    </Col>
                    <Col span={8}>
                        <p><Icon style={{ fontSize: '18px', color: '#1BB28B', marginRight: "8%" }} type="eye" />{item.clickedCounts}</p>                       
                    </Col>
                </Row>
                <div align="center" >
                    <Button size="large" className="jobItemButton" style={{ margin: "1%" }} >
                        <Link
                            className="jobItemLink"
                            to={'/app/job-detail/' + item.id}
                            state={{ id: item.id }}
                        >  Learn More </Link>
                    </Button>
                </div>
                <p align="right" verticalAlign="bottom" style={{ marginTop: "5%" }}><Icon style={{ fontSize: '18px', color: '#1BB28B', marginRight: "2%" }} type="clock-circle" />
                    Deadline: {item.deadline}
                </p>
            </Card>
        </Col>
    );
    return (
        <div style={{ background: '#F9F9F9', padding: '2.5% 15%', height: 'auto', width: "100%" }}>
            <h1 align="center">Welcome to Our Job Pool</h1>
            <Row gutter={16}>
                {jobItem}
            </Row>
        </div>
    );
}
export default jobItem;