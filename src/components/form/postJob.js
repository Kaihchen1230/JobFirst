import React from "react"
//import { navigate } from "gatsby"
//import { handleLogin, isLoggedIn } from "../services/auth"
//import Layout from "../components/layout"
import { Form, Icon, Input, Button, Tooltip, DatePicker, Select } from 'antd';
import { I18n } from 'aws-amplify';
import dict from "../dictionary/dictionary";
//import "../style/postJob.css";

const Option = Select.Option;
const { TextArea } = Input;

class PostJob extends React.Component {

    state = {
        lan: window.localStorage.getItem('lan')
    } 
    handleSubmit = () => {

    }

    render() {
        I18n.putVocabularies(dict);
        I18n.setLanguage(this.state.lan);
        return (
            <div align="center">
                <br />
                <h1>{I18n.get('Post a New Job')}</h1>
                <Form onSubmit={this.handleSubmit} className="main-form" style={{ "width": "80%" }}>
                    <Form.Item>
                        <Input placeholder={I18n.get('Enter Employer Name')}
                            prefix={<Icon type="user" />}
                            suffix={
                                <Tooltip title={I18n.get('Enter the name of the employer.')}>
                                    <Icon type="info-circle" />
                                </Tooltip>}
                        />
                    </Form.Item>
                    <Form.Item>
                        <DatePicker placeholder={I18n.get('Date Posted On')} />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder={I18n.get('Job Type')}>
                            <Option value="Full Time">{I18n.get('Full Time')}</Option>
                            <Option value="Part Time">{I18n.get('Part Time')}</Option>
                            <Option value="Internship">{I18n.get('Internship')}</Option>
                            <Option value="Temporary">{I18n.get('Temporary')}</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <TextArea
                            placeholder={I18n.get('Enter Job Description')} autosize={{ minRows: 2, maxRows: 6 }}
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
                        <Button type="primary" htmlType="submit">{I18n.get('Submit Job')}</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}


export default PostJob;