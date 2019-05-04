import React from 'react';
import { Link, navigate } from "gatsby";
import { Row, Col, Button } from 'antd';

const companyDetail = (props) => {
    let companyInfo = {...props.companyInfo};
    console.log(companyInfo);
    let companyInfoPiece = (
        <div>
            <h2>Overview: </h2>
            <Button>
                <Link to="/app/business-profile/ba65f328-b89a-43be-beb8-aa30b39dc313">
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

            <h2>Contact:</h2>
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