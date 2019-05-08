import React from "react";
import { Form, Icon, Input, Button, Tooltip, DatePicker, Select } from 'antd';
import { Auth, I18n } from 'aws-amplify';
import dict from "../dictionary/dictionary";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';

class AddEduForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //lan: window.localStorage.getItem('lan'),
            type: ""
        }
        console.log("The add education form loaded");
    }

    handleSubmit = async () => {
        <div align="cente">
            <br />
            <h1>{I18n.get('Add Education')}</h1>
            <Form onSubmit={this.handleSubmit} style={{ "width": "50%" }} name="experiencePost">
                <Form.Item>
                    <Input placeholder={I18n.get('Enter the School Name')}
                        name="schoolName"
                        suffix={
                            <Tooltip title={I18n.get('Enter the School Name')}>
                                <Icon type="info-circle" />
                            </Tooltip>}
                    />
                    <Input placeholder={I18n.get('Enter the Name of the Degree')}
                        name="degreeName"
                        suffix={
                            <Tooltip title={I18n.get('Enter the Name of the Degree')}>
                                <Icon type="info-circle" />
                            </Tooltip>}
                    />
                    <Input placeholder={I18n.get('Enter the City of the School')}
                        name="schoolCity"
                        suffix={
                            <Tooltip title={I18n.get('Enter the City of the School')}>
                                <Icon type="info-circle" />
                            </Tooltip>}
                    />
                    <Input placeholder={I18n.get('Enter the Country of the School')}
                        name="schoolCountry"
                        suffix={
                            <Tooltip title={I18n.get('Enter the Country of the School')}>
                                <Icon type="info-circle" />
                            </Tooltip>}
                    />
                    <Input placeholder={I18n.get('Enter the Starting Year')}
                        name="yearStart"
                        suffix={
                            <Tooltip title={I18n.get('Enter the Starting Year')}>
                                <Icon type="info-circle" />
                            </Tooltip>}
                    />
                    <Input placeholder={I18n.get('Enter the Ending Year')}
                        name="yearEnd"
                        suffix={
                            <Tooltip title={I18n.get('Enter the Ending Year')}>
                                <Icon type="info-circle" />
                            </Tooltip>}
                    />
                </Form.Item>
            </Form>
        </div>
    }

    render() {

    }
}