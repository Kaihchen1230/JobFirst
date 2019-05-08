import React from "react";
import { Form, Icon, Input, Button, Tooltip, DatePicker, Select } from 'antd';
import { Auth, I18n } from 'aws-amplify';
import dict from "../dictionary/dictionary";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';

class AddExpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //lan: window.localStorage.getItem('lan'),
            type: ""
        };
        console.log("The add experience form loaded");
        //this.typeUpdate = this.typeUpdate.bind(this);
    }

    handleSubmit = async () => {
        let user = await Auth.currentAuthenticatedUser();
        const { attributes } = user;
        const experienceForm = document.forms["experiencePost"];
        const createExperienceInput = {
            startYear: experienceForm["yearStart"].value,
            endYear: experienceForm["yearEnd"].value,
            companyName: experienceForm["companyName"].value,
            reasonToLeave: experienceForm["leaveReason"].value,
            city: experienceForm["companyCity"].value,
            country: experienceForm["companyCountry"].value,
            experienceWhoseId: attributes.sub
        }
        const newExperience = await API.graphql(graphqlOperation(mutations.createExperience, {input: createExperienceInput}));
        console.log("This experience was added: ", newExperience);
    }

    render() {
        return (
            <div align="center">
                <br />
                <h1>{I18n.get('Add an Experience')}</h1>
                <Form onSubmit={this.handleSubmit} style={{ "width": "50%" }} name="experiencePost">
                    <Form.Item>
                        <Input placeholder={I18n.get('Enter the Company Name')}
                            name="companyName"
                            suffix={
                                <Tooltip title={I18n.get('Enter the Company Name')}>
                                    <Icon type="info-circle" />
                                </Tooltip>}
                        />
                        <Input placeholder={I18n.get('Enter the City of the Company')}
                            name="companyCity"
                            suffix={
                                <Tooltip title={I18n.get('Enter the City of the Company')}>
                                    <Icon type="info-circle" />
                                </Tooltip>}
                        />
                        <Input placeholder={I18n.get('Enter the Country of the Company')}
                            name="companyCountry"
                            suffix={
                                <Tooltip title={I18n.get('Enter the Country of the Company')}>
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
                        <Input placeholder={I18n.get('Enter the Reason for Leaving')}
                            name="leaveReason"
                            suffix={
                                <Tooltip title={I18n.get('Enter the Reason for Leaving')}>
                                    <Icon type="info-circle" />
                                </Tooltip>}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >{I18n.get('Submit New Experience')}</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default AddExpForm;