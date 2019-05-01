import React from "react";
//import { navigate } from "gatsby"
//import { handleLogin, isLoggedIn } from "../services/auth"
//import Layout from "../components/layout"
import { Form, Icon, Input, Button, Tooltip, DatePicker, Select } from 'antd';
import { Auth, I18n } from 'aws-amplify';
//import "../style/postJob.css";
import dict from "../dictionary/dictionary";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';


const Option = Select.Option;
const { TextArea } = Input;

class PostJob extends React.Component {

    state = {
        lan: window.localStorage.getItem('lan'),
        type: ""
    } 

    typeUpdate = (value) => {
        this.setState({type: value});
    }

    async handleSubmit () {
        let user = await Auth.currentAuthenticatedUser();
        const { attributes } = user;
        const postForm = document.forms["jobPost"];
        const CreateAddressInput = {
            line1: postForm["line1"].value,
            line2: postForm["line2"].value,
            postalCode: postForm["postalCode"].value,
            state: postForm["state"].value
        }
        const newAddress = await API.graphql(graphqlOperation(mutations.createAddress, {input: CreateAddressInput}));
        const CreatePostedJobInput = {
            jobTitle: postForm["jobTitle"].value,
	        description: postForm["description"].value,
	        requirements: [postForm["requirement"].value],
	        datePosted: postForm["postDate"].value,
            deadline: postForm["deadline"].value,
	        clickedCounts: 0,
	        postedJobCompanyId: attributes.sub,
            postedJobLocationId: newAddress.data.createAddress.id,
            searchFieldName: postForm["jobTitle"].value.toLowerCase(),
            searchFieldLocation: newAddress.data.createAddress.line1.toLowerCase() + newAddress.data.createAddress.line2.toLowerCase(),
        };
        const newJob = await API.graphql(graphqlOperation(mutations.createPostedJob, {input: CreatePostedJobInput}));
    }

    render() {
        console.log("language", window.localStorage.getItem('lan'));
        I18n.putVocabularies(dict);
        I18n.setLanguage(this.state.lan);
        return (
            <div align="center">
                <br />
                <h1>{I18n.get('Post a New Job')}</h1>
                <Form onSubmit={this.handleSubmit} className="main-form" style={{ "width": "80%" }} name="jobPost">
                    <Form.Item>
                        <Input placeholder={I18n.get('Enter the Job Title')} 
                            name="jobTitle"
                            suffix={
                                <Tooltip title={I18n.get('Enter the name of the job')}>
                                    <Icon type="info-circle" />
                                </Tooltip>}
                        />
                        <Input placeholder={I18n.get('Address Line 1')} 
                            name="line1"
                            suffix={
                                <Tooltip title={I18n.get('Line 1 of job address')}>
                                    <Icon type="info-circle" />
                                </Tooltip>}
                        />
                        <Input placeholder={I18n.get('Address Line 2')} 
                            name="line2"
                            suffix={
                                <Tooltip title={I18n.get('Line 2 of job address')}>
                                    <Icon type="info-circle" />
                                </Tooltip>}
                        />
                        <Input placeholder={I18n.get('Postal Code')}
                            name="postalCode"
                            suffix={
                                <Tooltip title={I18n.get('Enter the postal code of the job location')}>
                                    <Icon type="info-circle" />
                                </Tooltip>}
                        />
                        <Input placeholder={I18n.get('State')} 
                            name="state"
                            suffix={
                                <Tooltip title={I18n.get('Enter the state of the job location')}>
                                    <Icon type="info-circle" />
                                </Tooltip>}
                        />
                    </Form.Item>
                    <Form.Item>
                        <DatePicker placeholder={I18n.get('Date Posted On')} name="postDate" />
                        <br />
                        <DatePicker placeholder={I18n.get('Deadline')} name="deadline" />
                    </Form.Item>
                    <Form.Item>
                        <Select onChange={value => this.typeUpdate(value)} placeholder={I18n.get('Job Type')} name="jobType" >
                            <Option value="Full Time">{I18n.get('Full Time')}</Option>
                            <Option value="Part Time">{I18n.get('Part Time')}</Option>
                            <Option value="Internship">{I18n.get('Internship')}</Option>
                            <Option value="Temporary">{I18n.get('Temporary')}</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <TextArea
                            placeholder={I18n.get('Enter Job Description')} 
                            autosize={{ minRows: 2, maxRows: 6 }}
                            name="description"
                        />
                        <TextArea
                            placeholder={I18n.get('Enter Job Requirements')} 
                            autosize={{ minRows: 2, maxRows: 6 }}
                            name="requirement"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >{I18n.get('Submit Job')}</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}


export default PostJob;