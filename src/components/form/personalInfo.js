import React from 'react';
import { Form, Input, Button, Col, DatePicker, Select, Cascader, title, PageHeader } from 'antd';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

const FormItem = Form.Item;
const Option = Select.Option;
const states = [
    {
        value: 'New York',
        label: 'New York'
    },
    {
        value: 'California',
        label: 'California'
    },
    {
        value: 'New Jersey',
        label: 'New Jersey'
    }
]



class PersonalInfo extends React.Component{
    
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            }
          };

        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 14,
                offset: 6,
              },
            },
          };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
          })(
            <Select style={{ width: 60 }}>
              <Option value="86">+86</Option>
              <Option value="1">+1</Option>
            </Select>
          );
        return(
            <Form>
                 <h1 align="center">Job Application</h1>
                <br/>
                <h2 style={{marginLeft: "20%"}}>Base Information:</h2>
                <FormItem
                    {...formItemLayout}
                    label="First Name"
                    >
                    <Input style={{width: "50%"}} required/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Last Name"
                    >
                    <Input style={{width: "50%"}} required/>
                </FormItem>
                <h2 style={{marginLeft: "20%"}}>Address:</h2>
                <FormItem
                    {...formItemLayout}
                    label="Address Line 1"
                    >
                    <Input style={{width: "50%"}} required/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Address Line 2"
                    >
                    <Input style={{width: "50%"}}/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="City"
                    >
                    <Input style={{width: "50%"}} required/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="State"
                    >
                    {getFieldDecorator('state', {
                        
                        rules: [{ type: 'array', required: true, message: 'Please select your state!' }],
                    })(
                        <Cascader options={states} style = {{width: "50%"}}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Zip Code"
                    >
                    {getFieldDecorator('Zip Code', {
                        
                        rules: [{required: true, message: 'Please select your zip code!' }],
                    })(
                        <Input type = "number" style={{width: "50%"}} required/>
                    )}
                </FormItem>

                <h2 style={{marginLeft: "20%"}}>Contact Information:</h2>
                <FormItem
                    {...formItemLayout}
                    label="E-mail"
                    hasFeedback
                    >
                    {getFieldDecorator('email', {
                        rules: [{
                        type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                        required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input style = {{width: "50%"}}/>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Phone Number"
                    >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(
                        <Input addonBefore={prefixSelector} style={{ width: '50%' }} />
                    )}
                </FormItem>
                <div style={{marginLeft: "20%"}}>
                    <h2 >Work Experience</h2>
                    <p>Please enter the most recent job that you have held</p>
                </div>
                
                <FormItem
                    {...formItemLayout}
                    label="Job Title"
                    >
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Please enter the title' }],
                    })(
                        <Input style={{ width: '50%' }} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Company"
                    >
                    {getFieldDecorator('campany', {
                        rules: [{ required: true, message: 'Please the name of the camany' }],
                    })(
                        <Input style={{ width: '50%' }} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Location"
                    >
                    {getFieldDecorator('campany')(
                        <Input style={{ width: '50%' }} />
                    )}
                </FormItem>
                <div style = {{display: "flex", justifyContent: "center"}}>
                    <FormItem 
                        {...formItemLayout}
                        label="From"
                        >
                        {getFieldDecorator('From', {
                            rules: [{ required: true, message: 'Please enter a date' }],
                        })(
                            <DatePicker />
                        )}
                    </FormItem>
                    <FormItem 
                        {...formItemLayout}
                        label="To"
                        >
                        {getFieldDecorator('To', {
                            rules: [{ required: true, message: 'Please enter a date' }],
                        })(
                            <DatePicker />
                        )}
                    </FormItem>
                </div>

                <h2 style={{marginLeft: "20%"}}>Education</h2>
                
                <FormItem
                    {...formItemLayout}
                    label="School or University"
                    >
                    {getFieldDecorator('school', {
                        rules: [{ required: true, message: 'Please enter the name of school' }],
                    })(
                        <Input style={{ width: '50%' }} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Degree"
                    >
                    {getFieldDecorator('degree', {
                        rules: [{ required: true, message: 'Please select one of the following' }],
                    })(
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="Associate of Arts">Associate of Arts</Option>
                            <Option value="Bachelor of Science">Bachelor of Science</Option>
                            <Option value="Bachelor of Engineer">Bachelor of Engineer</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Location"
                    >
                    {getFieldDecorator('campany')(
                        <Input style={{ width: '50%' }} />
                    )}
                </FormItem>
                <div style = {{display: "flex", justifyContent: "center"}}>
                    <FormItem 
                        {...formItemLayout}
                        label="From"
                        >
                        {getFieldDecorator('From', {
                            rules: [{ required: true, message: 'Please enter a date' }],
                        })(
                            <DatePicker />
                        )}
                    </FormItem>
                    <FormItem 
                        {...formItemLayout}
                        label="To"
                        >
                        {getFieldDecorator('To', {
                            rules: [{ required: true, message: 'Please enter a date' }],
                        })(
                            <DatePicker />
                        )}
                    </FormItem>
                </div>

                <h2 style={{marginLeft: "20%"}}>Skills</h2>
                <p style={{marginLeft: "20%"}}></p>
                <FormItem
                    {...formItemLayout}
                    label="Please enter your comfort level of speaking English"
                    >
                    {getFieldDecorator('english', {
                        rules: [{ required: true, message: 'Please select one of the following' }],
                    })(
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Please select one"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="Not at all">Associate of Arts</Option>
                            <Option value="A little confortable">A little confortable</Option>
                            <Option value="Confortable">Confortable</Option>
                            <Option value="Very confortable">Very confortable</Option>
                        </Select>
                    )}
                </FormItem>
                
                <FormItem>
                    <div align="center">
                    <Button type="primary" htmlType="submit" style = {{width: "33%"}}>Submit</Button>
                    </div>
                </FormItem>
            </Form>
        );
    }
    
}

export default Form.create()(PersonalInfo);