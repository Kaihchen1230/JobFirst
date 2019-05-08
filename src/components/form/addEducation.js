import React from "react";
import { Form, Icon, Input, Button, Tooltip, DatePicker, Select } from 'antd';
import { Auth, I18n } from 'aws-amplify';
import dict from "../dictionary/dictionary";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';
import { getLanguage } from "../../services/auth";

class AddEduForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lan: getLanguage(),
            type: ""
        }
        console.log("The add education form loaded");
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        let user = await Auth.currentAuthenticatedUser();
        const { attributes } = user;
        const educationForm = document.forms["educationPost"];
        const createEducationInput = {
            startYear: educationForm["yearStart"].value,
            endYear: educationForm["yearEnd"].value,
            degree: educationForm["degreeName"].value,
            schoolName: educationForm["schoolName"].value,
            city: educationForm["schoolCity"].value,
            country: educationForm["schoolCountry"].value,
            educationWhoseId: attributes.sub
        }
        console.log("the input: ", createEducationInput);
        const newEducation = await API.graphql(graphqlOperation(mutations.createEducation, { input: createEducationInput }));
        console.log("This education was added: ", newEducation);
    }

    render() {
        console.log("language", this.state.lan);
        I18n.putVocabularies(dict);
        I18n.setLanguage(this.state.lan);
        return (
            <div align="center">
                <br />
                <h1>{I18n.get('Add Education')}</h1>
                <Form onSubmit={this.handleSubmit} style={{ "width": "50%" }} name="educationPost">
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
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >{I18n.get('Submit New Education')}</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default AddEduForm;