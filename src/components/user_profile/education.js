import React from 'react';
import { Card, Icon } from 'antd';
import { getUser } from '../../services/auth';
import { I18n } from 'aws-amplify';
import dict from "../dictionary/dictionary"

const Education = (props) => {

    let educationList = [...props.education];
    let display = educationList.map(item =>
        <div align="center">
            <Card
                size="default"
                title={item.schoolName}
                style={{ width: "80%" }}
            >
                <p className="description" align="left" style={{fontSize: 18}}><Icon type="book" /><b> {I18n.get('Degree')}: </b> {item.degree}</p>
                <p className="description" align="left" style={{fontSize: 18}}><Icon type="home" /><b> {I18n.get('Location')}: </b>{item.city}, {item.country}</p>
                <p className="description" align="left" style={{fontSize: 18}}><Icon type="clock-circle" /><b> {I18n.get('Years')}: </b>{item.startYear} to {item.endYear}</p>
            </Card>
            <br />
        </div>
    )

    return display;
}

export default Education;