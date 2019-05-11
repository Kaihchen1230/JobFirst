import React from 'react';
import { Card, Row, Col, Button, Icon } from 'antd';
import { Link } from "gatsby";
import * as mutations from "../../graphql/mutations";
import { async } from 'q';
import "./jobItem.css";


const jobItem = (props) => {
    console.log("joblist",props.jobs)
    let jobItem = props.jobs.map((item, index) =>
        <Col span={8} style={{ margin: '10px 0' }} key = {index}>
            <Card 
                title={<div>
                            <span style={{fontSize:"25px", fontWeight:"600"}}>
                                {item.jobTitle}
                            </span>
                            <div>
                                {item.company.companyType +"/" +item.company.companyName}
                            </div>                     
                       </div>} 
                bordered={true}>
                         
                <p>{item.description && item.description.substring(0,100)}</p>
  
                <p>
                    <Icon style={{ fontSize: '18px', color: '#1BB28B',marginRight:"5px" }}   type="team" /> 
                    {item.jobType}
                    <Icon style={{ fontSize: '18px', color: '#1BB28B',margin:"0 10px 0 50px" }}   type="eye" /> 
                    {item.clickedCounts}
                    <Icon style={{ fontSize: '18px', color: '#1BB28B',margin:"0 10px 0 50px"  }}   type="home" /> 
                    {item.location.line1}
                </p>
                <p><Icon style={{ fontSize: '18px', color: '#1BB28B',marginRight:"5px" }}  type="clock-circle"/> 
                    Deadline: {item.deadline}
                </p>
                <div align="center" >
                    <Button type="primary" size ="large" style={{ backgroundColor:'#1BB28B'}} >
                        <Link 
                            to={'/app/job-detail/'+item.id}
                            state={{ id: item.id}}
                        >  Learn More </Link>
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