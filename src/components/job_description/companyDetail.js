import React from 'react';
import { Link, navigate } from "gatsby";
import { Row, Col, Button } from 'antd';

const companyDetail = (props) => {
    let companyInfo = {...props.companyInfo};
    console.log(companyInfo);
    let companyInfoPiece = (
        <div style={{fontSize:"1.2em"}}>
            <h3>Overview: </h3>
            <Button style ={{color:"white", backgroundColor:"#1BB28B"}}>
                <Link to={"/app/business-profile/"+companyInfo.id}>
                    Learn more
                </Link>
            </Button>
            <Row gutter={12}>
            <Col span={2}>
                <div className="gutter-box">Headquarters</div>
            </Col>
            <Col span={4}>
                <div className="gutter-box">
                    {companyInfo.headquarter}
                </div>
            </Col>
            <Col  span={1}>
                <div className="gutter-box">Size</div>
            </Col>
            <Col span={6}>
                <div className="gutter-box">
                    {companyInfo.size}
                </div>
            </Col>

            </Row>
            <Row gutter={12}>
            <Col  span={2}>
                <div className="gutter-box">Revenue</div>
            </Col>
            <Col span={4}>
                <div className="gutter-box">
                    {companyInfo.revenue}
                </div>
            </Col>
            <Col span={1}>
                <div className="gutter-box">Type</div>
            </Col>
            <Col span={6}>
                <div className="gutter-box">
                    {companyInfo.companyType}
                </div>
            </Col>
            </Row>

            <h3>Contact:</h3>
            <Row gutter={12}>
            <Col span={2}>
                    <div>Telephone</div>
                </Col>
                <Col span={4}>
                    <div>
                        {companyInfo.companyPhone}
                    </div>
                </Col>
                <Col span={1}>
                    <div>Email</div>
                </Col>
                <Col span={4}>
                    <div>
                        {companyInfo.companyEmail}
                    </div>
                </Col>

            </Row>
    </div>
    )
    
    
    return(
        <div>
            {companyInfoPiece}
        </div>
    )
}

export default companyDetail;