import React from "react"
//import { navigate } from "gatsby"
//import { handleLogin, isLoggedIn } from "../services/auth"
//import Layout from "../components/layout"
import { Form, Icon, Input, Button, Tooltip, DatePicker, Select } from 'antd';
//import "../style/postJob.css";

const Option = Select.Option;
const { TextArea } = Input;

class PostJob extends React.Component {

    submitData = () => {

    }

    render() {
        return (
            <div align="center">
                <br />
                <h1>Post a New Job</h1>
                <Form onSubmit={this.submitData} className="main-form">
                    <Form.Item>
                        <Input placeholder="Enter Employer Name"
                            prefix={<Icon type="user" />}
                            suffix={
                                <Tooltip title="Enter the name of the employer.">
                                    <Icon type="info-circle" />
                                </Tooltip>}
                        />
                    </Form.Item>
                    <Form.Item>
                        <DatePicker placeholder="Date Posted On" />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="Job Type">
                            <Option value="Full Time">Full Time</Option>
                            <Option value="Part Time">Part Time</Option>
                            <Option value="Internship">Internship</Option>
                            <Option value="Temporary">Temporary</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <TextArea
                            placeholder="Enter Job Description" autosize={{ minRows: 2, maxRows: 6 }}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="(###) ###-####"
                            prefix={<Icon type="contacts" />}
                            suffix={
                                <Tooltip title="Enter the contact number of the employer.">
                                    <Icon type="info-circle" />
                                </Tooltip>}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit Job</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default PostJob;