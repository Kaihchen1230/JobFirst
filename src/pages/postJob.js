import React from "react"
//import { navigate } from "gatsby"
//import { handleLogin, isLoggedIn } from "../services/auth"
//import Layout from "../components/layout"
import { Form, Icon, Input, Button, Tooltip, DatePicker, Select } from 'antd';
import "../style/postJob.css";

const Option = Select.Option;

class postJob extends React.Component {

    render() {
        return (
            <div className="form">
                <h1>Post a New Job</h1>
                <Form onSubmit="*" className="main-form">
                    <Form.Item>
                        <Input placeholder="Enter Employer Name"
                            prefix={<Icon type="user" />}
                            suffix={
                                <Tooltip title="Name of the Employer">
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
                </Form>

                <form
                    method="post"
                    onSubmit="*"
                >

                    <br />
                    <br />
                    <label>Job Type:
                    <input type="text" name="job-type" />
                    </label>
                    <br />
                    <br />
                    <label>Job Description:
                    <input type="text" name="job-description" />
                    </label>
                    <br />
                    <br />
                    <label>Contact Information:
                    <input type="text" name="job-contact" />
                    </label>
                    <br />
                    <br />
                    <input type="submit" value="Add Job" />
                    <br />
                </form>
            </div>
        )
    }
}

export default postJob;