import React from 'react';
import { Tabs, Table, Button, Progress, Card, Icon } from 'antd';
import { getUser } from '../../services/auth';
import { I18n } from 'aws-amplify';
import dict from "../dictionary/dictionary"

const General = (props) => {

    let total = 7;
    let count = 0;
    if (props.user.name) { ++count }
    if (props.user.lastName) { ++count }
    if (props.user.age) { ++count }
    if (props.user.englishLevel) { ++count }
    if (props.user.language) { ++count }
    if (props.user.email) { ++count }
    if (props.user.phone) { ++count }
    let per = Math.ceil(count / total);

    return (
        <div align="center">
            <h1>{I18n.get('Profile Completion')}:</h1>
            <Progress type="circle" percent={per} format={percent => (percent == 100) ? "Complete" : `${percent} %`} />
            <br /><br />
            <Card
                size="default"
                title={I18n.get('User Information')}
                style={{ width: "80%" }}
            >
                <p className="description" align="left" style={{ fontSize: 18 }}><Icon type="book" /><b> {I18n.get('Full Name')}: </b> {props.user.name + " " + props.user.middleName + " " + props.user.lastName}</p>
                <p className="description" align="left" style={{ fontSize: 18 }}><Icon type="home" /><b> {I18n.get('Age')}: </b>{props.user.age}</p>
                <p className="description" align="left" style={{ fontSize: 18 }}><Icon type="home" /><b> {I18n.get('English Level')}: </b>{props.user.englishLevel}</p>
                <p className="description" align="left" style={{ fontSize: 18 }}><Icon type="home" /><b> {I18n.get('Spoken Language')}: </b>{props.user.language}</p>
                <p className="description" align="left" style={{ fontSize: 18 }}><Icon type="home" /><b> {I18n.get('Email')}: </b>{props.user.email}</p>
                <p className="description" align="left" style={{ fontSize: 18 }}><Icon type="home" /><b> {I18n.get('Phone')}: </b>{props.user.phone}</p>
            </Card>
        </div>
    )

}

export default General;