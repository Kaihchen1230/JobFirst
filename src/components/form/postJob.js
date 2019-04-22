import React from "react";
//import { navigate } from "gatsby"
//import { handleLogin, isLoggedIn } from "../services/auth"
//import Layout from "../components/layout"
import { Form, Icon, Input, Button, Tooltip, DatePicker, Select } from 'antd';
import { I18n } from 'aws-amplify';
//import "../style/postJob.css";
import dict from "../dictionary/dictionary";
import * as mutations from "../../graphql/mutations";
import { API, graphqlOperation } from 'aws-amplify';


const Option = Select.Option;
const { TextArea } = Input;

class PostJob extends React.Component {

    state = {
        lan: window.localStorage.getItem('lan')
    } 

    async handleSubmit () {
        const postForm = document.forms["jobPost"];
        const CreateAddressInput = {
            line1: postForm["line1"].value,
            line2: postForm["line2"].value,
            postalCode: postForm["postalCode"].value,
            state: postForm["state"].value
        }
        const newAddress = await API.graphql(graphqlOperation(mutations.createAddress, {input: CreateAddressInput}))
        const CreatePostedJobInput = {
	        jobTitle: postForm["jobTitle"].value,
	        description: postForm["description"].value,
	        requirements: [postForm["requirement"].value],
	        datePosted: postForm["postDate"].value,
	        deadline: postForm["deadline"].value,
	        clickedCounts: 0,
	        postedJobCompanyId: postForm["companyID"].value,
	        postedJobLocationId: newAddress.data.createAddress.id
        }
        const newJob = await API.graphql(graphqlOperation(mutations.createPostedJob, {input: CreatePostedJobInput}))
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
                    {/* make it a entry for now, but should automatic assign when employer */}
                    <Form.Item>
                        <Input placeholder={I18n.get('Enter the name of the employer.')}
                            prefix={<Icon type="user" />}
                            suffix={
                                <Tooltip title={I18n.get('Enter the name of the employer.')}>
                                    <Icon type="info-circle" />
                                </Tooltip>}
                            name="companyID"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="Enter the job title" 
                            name="jobTitle"
                        />
                        <Input placeholder="address line1" 
                            name="line1"
                        />
                        <Input placeholder="address line2" 
                            name="line2"
                        />
                        <Input placeholder="postalCode" 
                            name="postalCode"
                        />
                        <Input placeholder="state" 
                            name="state"
                        />
                    </Form.Item>
                    <Form.Item>
                        <DatePicker placeholder={I18n.get('Date Posted On')} name="postDate" />
                        <DatePicker placeholder={I18n.get('Deadline')} name="deadline" />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder={I18n.get('Job Type')} name="jobType" >
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
                            placeholder={I18n.get('Enter Job Requirement')} 
                            autosize={{ minRows: 2, maxRows: 6 }}
                            name="requirement"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="(###) ###-####"
                            prefix={<Icon type="contacts" />}
                            suffix={
                                <Tooltip title={I18n.get('Enter the contact number of the employer.')}>
                                    <Icon type="info-circle" />
                                </Tooltip>}
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